import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import LanguageSwitcher from "./LanguageSwitcher";
import EthincIcon from "@/assets/ethinc_icon.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at the top
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 w-full transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4 max-w-full">
        <div className="flex items-center justify-between h-16 w-full relative">
          {/* Logo - Left */}
          <Link to="/" className="flex items-center space-x-2 text-xl sm:text-2xl font-bold text-white hover:text-white/80 transition-colors flex-shrink-0 font-system">
            <img src={EthincIcon} alt="Ethinc" className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
            <span className="whitespace-nowrap">Ethinc</span>
          </Link>

          {/* Desktop Menu - Center */}
          <div className="hidden md:flex items-center justify-center space-x-12 lg:space-x-16 absolute left-1/2 transform -translate-x-1/2 font-heading">
            <a 
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-white/90 hover:text-white transition-colors"
            >
              {t('navigation.home')}
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleSmoothScroll(e, 'services')}
              className="text-white/90 hover:text-white transition-colors"
            >
              {t('navigation.services')}
            </a>
            {/* <a href="#products" className="text-white/90 hover:text-white transition-colors">
              {t('navigation.products')}
            </a> */}
            <a 
              href="#about" 
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="text-white/90 hover:text-white transition-colors"
            >
              {t('navigation.about')}
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="text-white/90 hover:text-white transition-colors"
            >
              {t('navigation.contact')}
            </a>
          </div>

          {/* Language & Contact - Right */}
          <div className="hidden md:flex items-center space-x-4 font-heading">
            <LanguageSwitcher />
            <ContactForm
              trigger={
                <Button variant="hero" size="sm">
                  {t('navigation.contactUs')}
                </Button>
              }
            />
          </div>

          {/* Mobile Menu Button - Right */}
          <button
            className="md:hidden text-white p-2 flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/20 w-full">
            <div className="flex flex-col space-y-4 w-full font-heading">
              <a 
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsOpen(false);
                }}
                className="text-white/90 hover:text-white transition-colors py-2"
              >
                {t('navigation.home')}
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleSmoothScroll(e, 'services')}
                className="text-white/90 hover:text-white transition-colors py-2"
              >
                {t('navigation.services')}
              </a>
              {/* <a href="#products" className="text-white/90 hover:text-white transition-colors py-2">
                {t('navigation.products')}
              </a> */}
              <a 
                href="#about" 
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className="text-white/90 hover:text-white transition-colors py-2"
              >
                {t('navigation.about')}
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="text-white/90 hover:text-white transition-colors py-2"
              >
                {t('navigation.contact')}
              </a>
              <LanguageSwitcher />
              <ContactForm
                trigger={
                  <Button variant="hero" size="sm" className="w-fit">
                    {t('navigation.contactUs')}
                  </Button>
                }
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;