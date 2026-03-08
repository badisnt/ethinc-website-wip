import { motion } from "motion/react";
import { HeroSection } from "@/components/HeroSection";
import { TeamSection } from "@/components/TeamSection";
import { ValuesContent } from "@/components/ValuesSection";
import { ServicesContent } from "@/components/ServicesSection";
import { ServiceModelContent } from "@/components/ServiceModelSection";
import { ProjectDeliveryContent } from "@/components/ProjectDeliverySection";
import { CTASection } from "@/components/CTASection";
import { useTranslation } from "react-i18next";

const scrollReveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
};

const titleStyle = {
  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
  fontWeight: 700 as const,
  fontFamily: 'var(--font-heading, "Albert Sans", system-ui, sans-serif)',
};

const Index = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection />

      <motion.section
        className="py-20 md:py-28"
        style={{ background: "#1a1a3e" }}
        {...scrollReveal}
      >
        <div className="text-center px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-white mb-4" style={titleStyle}>
            {t("aboutPage.titlePart1", "Meet")}{" "}
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              {t("aboutPage.titlePart2", "Us")}
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-center px-4" style={{ fontSize: "17px", lineHeight: "1.8" }}>
            {t("aboutPage.subtitle", "We are a team of EPFL alumni and AI specialists based in Lausanne, Switzerland. We combine deep technical expertise with a passion for solving real-world problems through cutting-edge artificial intelligence.")}
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <TeamSection />
        </div>
      </motion.section>

      <motion.section
        className="py-20 md:py-28"
        style={{ background: "#1a1a3e" }}
        {...scrollReveal}
      >
        <div className="text-center px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-white mb-4" style={titleStyle}>
            {t("values.titlePart1", "What Guides")}{" "}
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              {t("values.titlePart2", "Our Work")}
            </span>
          </h2>
          <div className="max-w-2xl mx-auto px-4">
            <p
              className="text-gray-300"
              style={{
                fontSize: "clamp(15px, 1.4vw, 17px)",
                lineHeight: 1.8,
                fontWeight: 500,
                fontFamily: 'var(--font-heading, "Albert Sans", system-ui, sans-serif)',
              }}
            >
              {t('quote.line1', 'Building meaningful AI systems requires more than technology.')}{" "}
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent font-semibold">
                {t('quote.highlight', 'It requires engineering rigor, responsible choices, and trust.')}
              </span>
            </p>
          </div>
        </div>
        <ValuesContent />
      </motion.section>

      <motion.section
        id="services"
        className="py-20 md:py-28"
        style={{ background: "#1a1a3e" }}
        {...scrollReveal}
      >
        <div className="text-center px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-white mb-4" style={titleStyle}>
            {t("expertise.titlePart1", "Areas of")}{" "}
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              {t("expertise.titlePart2", "Expertise")}
            </span>
          </h2>
        </div>
        <ServicesContent />
      </motion.section>

      <motion.section
        className="py-20 md:py-28"
        style={{ background: "#1a1a3e" }}
        {...scrollReveal}
      >
        <div className="text-center px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-white mb-4" style={titleStyle}>
            {t('serviceModel.titlePart1', 'Our Service')}{" "}
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              {t('serviceModel.titlePart2', 'Model')}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-center px-4" style={{ fontSize: "16px", lineHeight: "1.7" }}>
            {t('serviceModel.subtitle', 'We support organizations at different stages of their AI and data initiatives, from early exploration to system development and long-term operational support.')}
          </p>
        </div>
        <ServiceModelContent />
      </motion.section>

      <motion.section
        className="py-20 md:py-28"
        style={{ background: "#1a1a3e" }}
        {...scrollReveal}
      >
        <div className="text-center px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-white mb-4" style={titleStyle}>
            {t("projectDelivery.titlePart1", "Project")}{" "}
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              {t("projectDelivery.titlePart2", "Delivery")}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-center px-4" style={{ fontSize: "16px", lineHeight: "1.7" }}>
            {t("projectDelivery.subtitle", "Ethinc projects follow a structured delivery process designed to move from problem framing to reliable operational systems.")}
          </p>
        </div>
        <ProjectDeliveryContent />
      </motion.section>

      <motion.div {...scrollReveal}>
        <CTASection />
      </motion.div>
    </>
  );
};

export default Index;
