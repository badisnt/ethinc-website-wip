import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const CTA = () => {
  const { t } = useTranslation();
  const { elementRef, isIntersecting } = useIntersectionObserver({ rootMargin: '0px 0px -50px 0px' });
  
  return (
    <section 
      id="contact" 
      ref={elementRef}
      className={`relative bg-gradient-hero min-h-screen flex items-center py-12 md:py-16 overflow-hidden transition-all duration-1000 ${
        isIntersecting 
          ? 'opacity-100' 
          : 'opacity-0'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text content - Left side */}
          <div className="lg:col-span-8 text-center lg:text-left">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              {t('cta.title')}
            </h3>
            <p className="text-xl md:text-2xl mb-0 text-white/90 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              {t('cta.subtitle')}
            </p>
          </div>
          
          {/* Button - Right side */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-6">
            <ContactForm
              trigger={
                <Button 
                  variant="glass" 
                  size="xl" 
                  className="group min-w-[280px] shadow-2xl hover:shadow-3xl transition-all"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  {t('cta.button')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;