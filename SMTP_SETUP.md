# SMTP Email Setup Guide

The contact form uses **SMTP with Microsoft 365** to send emails from the shared mailbox `contact@ethinc.ch`.

## Current Configuration

- **Login with:** Your personal ethinc.ch email (from env variable)
- **Sends FROM:** `contact@ethinc.ch` (shared mailbox)
- **Sends TO:** `contact@ethinc.ch` (shared mailbox)
- **Reply-to:** Form submitter's email
- **SMTP Server:** smtp.office365.com
- **Port:** 587 (TLS/STARTTLS)

## Environment Variables

### Required Variables

```bash
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_EMAIL=badis.machraoui@ethinc.ch
SMTP_PASSWORD=your_password_here
```

## Local Development

### 1. Update `.env.local`

Create or update `.env.local` in the project root:

```bash
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_EMAIL=badis.machraoui@ethinc.ch
SMTP_PASSWORD=your_actual_password
```

### 2. Test Locally

```bash
npx vercel dev
```

Visit `http://localhost:3000` and test the contact form.

### 3. Check Email

Check `contact@ethinc.ch` for the test email. The form submitter's email will be in the Reply-To field.

## Vercel Deployment

### Add Environment Variables

1. Go to Vercel dashboard: https://vercel.com/badisnts-projects/ethinc-wip
2. Settings → Environment Variables
3. Add each variable:
   - `SMTP_HOST` = `smtp.office365.com`
   - `SMTP_PORT` = `587`
   - `SMTP_EMAIL` = `badis.machraoui@ethinc.ch`
   - `SMTP_PASSWORD` = `your_password`
4. Select: Production, Preview, Development
5. Save

### Deploy

```bash
git add .
git commit -m "Configure SMTP to send from contact@ethinc.ch"
git push
```

Vercel will automatically redeploy!

## How It Works

### Shared Mailbox Access

Microsoft 365 allows you to:
1. **Authenticate** with your personal email (`badis.machraoui@ethinc.ch`)
2. **Send FROM** a shared mailbox (`contact@ethinc.ch`) you have access to

This is called "Send As" or "Send on Behalf" permission in Microsoft 365.

### Email Flow

1. User fills out contact form on website
2. Form submits to `/api/contact`
3. API authenticates with your personal email
4. API sends email FROM `contact@ethinc.ch` TO `contact@ethinc.ch`
5. Reply-To is set to the form submitter's email
6. When you reply, it goes directly to the person who submitted the form

## Email Features

✅ Sends from professional `contact@ethinc.ch` address  
✅ All emails arrive in shared `contact@ethinc.ch` inbox  
✅ Reply-to automatically set to sender for easy replies  
✅ Beautiful HTML template with ETHINC branding  
✅ All form data included (name, email, company, phone, message)  
✅ Works with Microsoft 365 shared mailboxes  

## Troubleshooting

### "Email service not configured"
- Environment variables not set in `.env.local` or Vercel
- Restart dev server after updating `.env.local`

### "Authentication failed"
- Wrong email or password
- Check that SMTP_EMAIL matches your login email

### "Failed to send message"
- Check you have "Send As" permission for contact@ethinc.ch
- Verify SMTP settings are correct
- Check server logs for detailed error

### Test SMTP Connection

Use the included test script:

```bash
python3 test_smtp.py
```

This will test your SMTP configuration and send a test email.

## Security Notes

⚠️ **Never commit `.env.local` to git!**

The `.env.local` file is in `.gitignore` and should stay there.

For production:
- Use environment variables in Vercel
- Store password in Vercel securely
- Regularly rotate passwords
- Use strong passwords

## Microsoft 365 Shared Mailbox Setup

If you need to add "Send As" permission:

1. Go to Microsoft 365 Admin Center
2. Teams & groups → Shared mailboxes
3. Select `contact@ethinc.ch`
4. Members → Add members
5. Add your email with "Send as" permission

This allows you to authenticate with your account and send from the shared mailbox.

