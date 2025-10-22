import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Eye, TrendingUp, Network, Cog, Code, Database, BarChart3, ShieldCheck, Zap, Server, Cloud, Lock, GitBranch, Layers, Workflow } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ServiceDialog } from "./ServiceDialog";
import { useRef, useState, useEffect } from "react";

const Services = () => {
  const { t } = useTranslation();
  const { elementRef: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { elementRef: gridRef, isIntersecting: gridVisible } = useIntersectionObserver({ rootMargin: '0px 0px -50px 0px' });
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollSpeedRef = useRef(0.5); // pixels per frame

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scroll = () => {
      if (!isPaused && !isDragging && container) {
        container.scrollLeft += scrollSpeedRef.current;
        
        // Reset scroll when we've scrolled through half (first set of duplicates)
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };
  
  const mainServices = [
    {
      key: "nlp",
      icon: Brain,
      title: t('services.main.nlp.title'),
    },
    {
      key: "computerVision",
      icon: Eye,
      title: t('services.main.computerVision.title'),
    },
    {
      key: "ml",
      icon: TrendingUp,
      title: t('services.main.ml.title'),
    },
    {
      key: "graphML",
      icon: Network,
      title: t('services.main.graphML.title'),
    },
  ];

  const otherServicesData = [
    { icon: Cog, name: t('services.other.items.mlops') },
    { icon: Code, name: t('services.other.items.softwareEngineering') },
    { icon: Database, name: t('services.other.items.dataEngineering') },
    { icon: BarChart3, name: t('services.other.items.aiStrategy') },
    { icon: Zap, name: t('services.other.items.enterpriseAI') },
    { icon: ShieldCheck, name: t('services.other.items.aiGovernance') },
    { icon: Server, name: t('services.other.items.cloudInfrastructure') },
    { icon: Cloud, name: t('services.other.items.cloudMigration') },
    { icon: Lock, name: t('services.other.items.securityAudits') },
    { icon: GitBranch, name: t('services.other.items.cicd') },
    { icon: Layers, name: t('services.other.items.apiDevelopment') },
    { icon: Workflow, name: t('services.other.items.processAutomation') },
    { icon: Brain, name: t('services.other.items.modelTraining') },
    { icon: Database, name: t('services.other.items.dataAnalytics') },
    { icon: BarChart3, name: t('services.other.items.businessIntelligence') },
  ];

  return (
    <section id="services" className="min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Main Services - 1x4 Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {mainServices.map((service, index) => (
            <ServiceDialog
              key={index}
              serviceKey={service.key}
              trigger={
                <Card 
                  className={`group cursor-pointer hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-border relative ${
                    gridVisible 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-8'
                  }`}
                  style={{
                    transitionDelay: gridVisible ? `${index * 100}ms` : '0ms'
                  }}
                >
                  {/* Learn More - Top Right */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-xs font-medium text-accent group-hover:text-accent/80 transition-colors">
                      {t('services.learnMore')} →
                    </span>
                  </div>

                  <CardHeader className="flex flex-col items-center text-center py-12">
                    <div className="w-20 h-20 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-semibold text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              }
            />
          ))}
        </div>

        {/* Other Services */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-8">
            {t('services.other.title')}
          </h3>
          
          <div className="relative">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <div 
              ref={scrollContainerRef}
              className="relative overflow-x-scroll overflow-y-hidden hide-scrollbar cursor-grab"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsPaused(true)}
              onMouseOut={() => {
                if (!isDragging) setIsPaused(false);
              }}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
            <div className="flex gap-6 w-max">
              {/* Render services twice for seamless infinite scroll */}
              {[...Array(2)].map((_, setIndex) => (
                otherServicesData.map((service, index) => (
                  <div key={`set-${setIndex}-${index}`} className="flex-shrink-0 w-[200px] h-[160px]">
                    <Card className="bg-card/30 border-border/50 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 h-full">
                      <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 flex-shrink-0">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-sm font-medium text-center line-clamp-2">{service.name}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;