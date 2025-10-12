import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Main Content - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left: Title */}
            <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {t('hero.title')}
              </h1>
            </div>
            
            {/* Right: Text and Button */}
            <div className="space-y-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              
              <div>
                <a href="#services">
                  <Button variant="accent" size="lg" className="group">
                    {t('hero.learnMore')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Stats - Centered Below */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 max-w-4xl mx-auto text-center opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">3+</div>
              <div className="text-white/70 text-sm md:text-base mt-2">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">10+</div>
              <div className="text-white/70 text-sm md:text-base mt-2">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">Lausanne</div>
              <div className="text-white/70 text-sm md:text-base mt-2">Based</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">EPFL</div>
              <div className="text-white/70 text-sm md:text-base mt-2">Alumni Team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;