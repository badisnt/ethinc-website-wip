import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, ChevronDown } from 'lucide-react';
import EthincIcon from '@/assets/ethinc_icon2.png';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [transitioning, setTransitioning] = useState(false);

  const changeLanguage = useCallback(
    (lang: string) => {
      if (lang === i18n.language || transitioning) return;

      setTransitioning(true);

      setTimeout(() => {
        i18n.changeLanguage(lang);
      }, 180);

      setTimeout(() => {
        setTransitioning(false);
      }, 450);
    },
    [i18n, transitioning]
  );

  const getCurrentLanguageLabel = () => {
    return i18n.language?.startsWith('en') ? 'EN' : 'FR';
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="text-white/90 hover:text-white transition-colors"
          >
            <Globe className="w-4 h-4 mr-2" />
            {getCurrentLanguageLabel()}
            <ChevronDown className="w-3 h-3 ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-20">
          <DropdownMenuItem
            onClick={() => changeLanguage('en')}
            className={i18n.language === 'en' ? 'bg-accent' : ''}
          >
            EN
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => changeLanguage('fr')}
            className={i18n.language === 'fr' ? 'bg-accent' : ''}
          >
            FR
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {createPortal(
        <AnimatePresence>
          {transitioning && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center"
              style={{
                background: 'radial-gradient(circle at 50% 50%, #252560, #1a1a3e)',
              }}
            >
              {/* Expanding ring */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  border: '2px solid rgba(168, 85, 247, 0.3)',
                }}
                initial={{ width: 40, height: 40, opacity: 1 }}
                animate={{ width: 200, height: 200, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />

              {/* Logo */}
              <motion.img
                src={EthincIcon}
                alt=""
                className="w-14 h-14 relative z-10"
                initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
                animate={{ scale: [0.5, 1.2, 1], opacity: 1, rotate: 0 }}
                exit={{ scale: 1.8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default LanguageSwitcher;
