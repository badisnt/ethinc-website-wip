import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import EthincIcon from "@/assets/ethinc_icon2.png";

const navLinks = [
  { labelKey: "navigation.home", fallback: "Home", href: "/" },
  { labelKey: "navigation.projects", fallback: "Projects", href: "/projects" },
  { labelKey: "navigation.blog", fallback: "Blog", href: "/blog" },
  { labelKey: "navigation.aboutUs", fallback: "About Us", href: "/about" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 20);

      if (currentY < 10) {
        setIsVisible(true);
      } else if (currentY > lastScrollY && currentY > 80) {
        setIsVisible(false);
      } else if (currentY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-[#1a1a3e]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-lg shadow-purple-900/10 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-purple-500/20 after:to-transparent"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={EthincIcon} alt="Ethinc" className="w-8 h-8 object-contain" />
            <span className="text-white" style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)' }}>
              Ethinc
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === link.href
                    ? "text-white bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
                style={{ fontSize: '14px' }}
              >
                {t(link.labelKey, link.fallback)}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-orange-500 text-white hover:from-purple-500 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-purple-600/20"
              style={{ fontSize: '14px', fontWeight: 500 }}
            >
              {t('navigation.contactUs', 'Contact Us')}
            </Link>
            <LanguageSwitcher />
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1a1a3e]/95 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  style={{ fontSize: '15px' }}
                >
                  {t(link.labelKey, link.fallback)}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mt-4 text-center px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-orange-500 text-white"
                style={{ fontSize: '15px', fontWeight: 500 }}
              >
                {t('navigation.contactUs', 'Contact Us')}
              </Link>
              <div className="pt-2 px-4">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
