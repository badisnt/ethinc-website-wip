import { Link } from "react-router-dom";
import { Linkedin, Github, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import LogoExt from "@/assets/logo_ext.png";
import { PolicyDialog } from "./PolicyDialogs";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0f0f24] border-t border-white/[0.06] text-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/">
              <img
                src={LogoExt}
                alt="Ethinc Logo"
                className="h-16 md:h-20 w-auto mb-3"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              {t('footer.descriptionBrief', 'AI solutions for real-world applications.')}
            </p>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold text-white mb-4">{t('footer.contactTitle', 'Contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white mb-1">{t('footer.emailLabel', 'Email')}</p>
                  <a
                    href="mailto:contact@ethinc.ch"
                    className="hover:text-white transition-colors"
                  >
                    {t('footer.email', 'contact@ethinc.ch')}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white mb-1">{t('footer.locationLabel', 'Location')}</p>
                  <p>{t('footer.location', 'Lausanne, Vaud CH')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold text-white mb-4">{t('footer.followUs', 'Follow Us')}</h3>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/ethinc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group"
              >
                <div className="w-10 h-10 bg-white/[0.05] rounded-lg flex items-center justify-center group-hover:bg-purple-600/20 border border-white/[0.08] transition-all duration-300 hover:-translate-y-1">
                  <Linkedin className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                </div>
              </a>
              <a
                href="https://github.com/ethinc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group"
              >
                <div className="w-10 h-10 bg-white/[0.05] rounded-lg flex items-center justify-center group-hover:bg-purple-600/20 border border-white/[0.08] transition-all duration-300 hover:-translate-y-1">
                  <Github className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p className="text-center md:text-left">{t('footer.copyright', '\u00a9 2025 Ethinc. All rights reserved.')}</p>
          <div className="flex flex-wrap justify-center gap-6">
            <PolicyDialog
              type="privacy"
              trigger={
                <button className="hover:text-gray-300 transition-colors cursor-pointer">
                  {t('footer.privacy', 'Privacy Policy')}
                </button>
              }
            />
            <PolicyDialog
              type="terms"
              trigger={
                <button className="hover:text-gray-300 transition-colors cursor-pointer">
                  {t('footer.terms', 'Terms of Service')}
                </button>
              }
            />
            <PolicyDialog
              type="cookies"
              trigger={
                <button className="hover:text-gray-300 transition-colors cursor-pointer">
                  {t('footer.cookies', 'Cookie Policy')}
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
