import { HeroSection } from "@/components/HeroSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { QuoteSection, MarqueeSection } from "@/components/MarqueeSection";
import { ValuesSection } from "@/components/ValuesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectDeliverySection } from "@/components/ProjectDeliverySection";
import { ServiceModelSection } from "@/components/ServiceModelSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <TrustedBySection />
      <ValuesSection />
      <QuoteSection />
      <ServicesSection />
      <MarqueeSection />
      <ProjectDeliverySection />
      <ServiceModelSection />
      <CTASection />
    </div>
  );
};

export default Index;
