import { useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { MeetUsSection } from "@/components/MeetUsSection";
import { ValuesSection } from "@/components/ValuesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ServiceModelSection } from "@/components/ServiceModelSection";
import { ProjectDeliverySection } from "@/components/ProjectDeliverySection";
import { CTASection } from "@/components/CTASection";

const snapClass = "h-screen min-h-0 shrink-0 snap-start snap-always";

const Index = () => {
  useEffect(() => {
    document.documentElement.classList.add("home-scroll-snap");
    return () => document.documentElement.classList.remove("home-scroll-snap");
  }, []);

  return (
    <>
      <div className={snapClass}>
        <HeroSection />
      </div>
      <div className={snapClass}>
        <MeetUsSection />
      </div>
      <div className={snapClass}>
        <ValuesSection />
      </div>
      <div className={snapClass}>
        <ServicesSection />
      </div>
      <div className={snapClass}>
        <ServiceModelSection />
      </div>
      <div className={snapClass}>
        <ProjectDeliverySection />
      </div>
      <div className={snapClass}>
        <CTASection />
      </div>
    </>
  );
};

export default Index;
