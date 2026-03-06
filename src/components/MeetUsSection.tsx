import { motion } from "motion/react";
import { TeamSection } from "@/components/TeamSection";
import { useTranslation } from "react-i18next";

export function MeetUsSection() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex flex-col justify-center py-24 bg-[#1a1a3e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-white mb-4"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 700,
              fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
            }}
          >
            {t("aboutPage.titlePart1", "Meet")}{" "}
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              {t("aboutPage.titlePart2", "Us")}
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto" style={{ fontSize: "17px", lineHeight: "1.8" }}>
            {t("aboutPage.subtitle", "We are a team of EPFL alumni and AI specialists based in Lausanne, Switzerland. We combine deep technical expertise with a passion for solving real-world problems through cutting-edge artificial intelligence.")}
          </p>
        </motion.div>

        <TeamSection />
      </div>
    </section>
  );
}
