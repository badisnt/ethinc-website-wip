import { motion } from "motion/react";
import { ProjectsSection } from "@/components/ProjectsSection";
import { useTranslation } from "react-i18next";

export function PortfolioPage() {
  const { t } = useTranslation();

  const header = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <h1
        className="text-white mb-4"
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
        }}
      >
        {t('projectsPage.titlePart1', 'Our')}{" "}
        <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
          {t('projectsPage.titlePart2', 'Projects')}
        </span>
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '16px', lineHeight: '1.7' }}>
        {t('projectsPage.subtitle', 'Explore our collection of AI projects that have delivered measurable impact across various industries.')}
      </p>
    </motion.div>
  );

  return (
    <div className="pb-0">
      <div className="py-24 pt-28 bg-[#1a1a3e] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsSection header={header} />
        </div>
      </div>
    </div>
  );
}
