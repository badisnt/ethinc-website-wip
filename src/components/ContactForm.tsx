import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";




async function sendContactForm(name: string, email: string, company: string, phone: string, subject: string, message: string) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, company, phone, subject, message }),
  });

  if (!res.ok) throw new Error('Failed to send contact form');
}

interface ContactFormProps {
  trigger: React.ReactNode;
}

const ContactForm = ({ trigger }: ContactFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Captcha state
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: "" });
  
  // Generate new captcha question
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2, answer: "" });
  };

  // Initialize captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaptcha(prev => ({
      ...prev,
      answer: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate captcha
    const correctAnswer = captcha.num1 + captcha.num2;
    if (parseInt(captcha.answer) !== correctAnswer) {
      toast({
        title: t('contact.captcha.failed'),
        description: t('contact.captcha.failedDescription'),
        variant: "destructive",
      });
      generateCaptcha(); // Generate new captcha
      return;
    }
    
    // User will handle the sending logic
    console.log("Form submitted:", formData);

    sendContactForm(formData.name, formData.email, formData.company, formData.phone, formData.subject, formData.message)
      .then(() => {
        toast({
          title: t('contact.success'),
          description: t('contact.successDescription'),
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
        });
        generateCaptcha(); // Reset captcha
        setIsOpen(false);
      })
      .catch((error) => {
        console.error("Error sending contact form:", error);
        toast({
          title: t('contact.error'),
          description: t('contact.error'),
          variant: "destructive",
        });
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{t('contact.title')}</DialogTitle>
          <DialogDescription>
            {t('contact.subtitle')}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('contact.name')} *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t('contact.placeholders.name')}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('contact.email')} *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t('contact.placeholders.email')}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">{t('contact.company')}</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder={t('contact.placeholders.company')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t('contact.phone')}</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={t('contact.placeholders.phone')}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">{t('contact.subject', 'Subject')}</Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder={t('contact.placeholders.subject', 'What is this about?')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t('contact.message')} *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={t('contact.placeholders.message')}
              rows={4}
              required
            />
          </div>

          {/* Captcha */}
          <div className="space-y-2">
            <Label htmlFor="captcha">{t('contact.captcha.label')} *</Label>
            <div className="flex items-center space-x-3">
              <div className="text-sm font-medium bg-muted px-3 py-2 rounded border">
                {captcha.num1} + {captcha.num2} = ?
              </div>
              <Input
                id="captcha"
                type="number"
                value={captcha.answer}
                onChange={handleCaptchaChange}
                placeholder={t('contact.placeholders.captcha')}
                className="w-32"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              {t('contact.buttons.cancel')}
            </Button>
            <Button type="submit">
              {t('contact.buttons.send')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;