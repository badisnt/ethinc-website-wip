import { HeroSection } from "@/components/HeroSection";
import { QuoteSection, MarqueeSection } from "@/components/MarqueeSection";
import { ValuesSection } from "@/components/ValuesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ServiceModelSection } from "@/components/ServiceModelSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <QuoteSection />
      <ValuesSection />
      <MarqueeSection />
      <ServicesSection />
      <ServiceModelSection />
      <CTASection />
    </div>
  );
};

export default Index;
