import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  const { name, email, company, phone, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  // Check for required environment variables
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('Gmail credentials not configured');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  // Configure Gmail SMTP transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER, // badismach@gmail.com
      pass: process.env.SMTP_PASS, // App Password (16 characters)
    },
  });

  // Email content
  const mailOptions = {
    from: `"ETHINC Contact Form" <${process.env.SMTP_USER}>`, // badismach@gmail.com
    to: 'badis.machraoui@ethinc.ch',
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #7523BF;">New Contact Form Submission</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #333; width: 120px;">Name:</td>
              <td style="padding: 12px 0; color: #666;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #333;">Email:</td>
              <td style="padding: 12px 0;"><a href="mailto:${email}" style="color: #7523BF; text-decoration: none;">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #333;">Company:</td>
              <td style="padding: 12px 0; color: #666;">${company}</td>
            </tr>
            ` : ''}
            ${phone ? `
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #333;">Phone:</td>
              <td style="padding: 12px 0; color: #666;">${phone}</td>
            </tr>
            ` : ''}
          </table>
        </div>
        <div style="margin: 20px 0;">
          <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
          <div style="background-color: #fff; padding: 15px; border-left: 4px solid #7523BF; color: #666; line-height: 1.6;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999; text-align: center;">
          This email was sent from the ETHINC website contact form.
        </div>
      </div>
    `,
    text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}

---
This email was sent from the ETHINC website contact form.
    `.trim(),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to:', mailOptions.to);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}