import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LogoExt from "@/assets/logo_ext.png";
import { PolicyDialog } from "./PolicyDialogs";

const Footer = () => {
  const { t } = useTranslation();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  
  return (
    <footer className="bg-card text-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand section - Logo */}
          <div className="lg:col-span-4">
            <div>
              <img
                src={LogoExt}
                alt="Ethinc Logo"
                className="h-16 md:h-20 w-auto mb-3"
              />
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                {t('footer.descriptionBrief')}
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold text-foreground mb-4">{t('footer.contactTitle')}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">{t('footer.emailLabel')}</p>
                  <a 
                    href={`mailto:${t('footer.email')}`}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {t('footer.email')}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">{t('footer.locationLabel')}</p>
                  <p className="text-muted-foreground">{t('footer.location')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Us section */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold text-foreground mb-4">{t('footer.followUs')}</h3>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/ethinc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ethinc LinkedIn"
                className="group"
              >
                <div className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Linkedin className="w-5 h-5" />
                </div>
              </a>
              <a
                href="https://github.com/ethinc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ethinc GitHub" 
                className="group"
              >
                <div className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Github className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="text-center md:text-left">{t('footer.copyright')}</p>
          <div className="flex flex-wrap justify-center gap-6">
            <PolicyDialog 
              type="privacy" 
              trigger={
                <button className="hover:text-foreground transition-colors cursor-pointer">
                  {t('footer.privacy')}
                </button>
              }
            />
            <PolicyDialog 
              type="terms" 
              trigger={
                <button className="hover:text-foreground transition-colors cursor-pointer">
                  {t('footer.terms')}
                </button>
              }
            />
            <PolicyDialog 
              type="cookies" 
              trigger={
                <button className="hover:text-foreground transition-colors cursor-pointer">
                  {t('footer.cookies')}
                </button>
              }
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;