import { motion } from "motion/react";
import { Search, PenTool, Cloud, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

const stepKeys = [
  { key: "research", step: "01", icon: Search, color: "from-purple-500 to-violet-600" },
  { key: "design", step: "02", icon: PenTool, color: "from-orange-500 to-amber-600" },
  { key: "deploy", step: "03", icon: Cloud, color: "from-amber-500 to-yellow-600" },
  { key: "transfer", step: "04", icon: BookOpen, color: "from-violet-500 to-purple-600" },
];

export function ProjectDeliverySection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#1a1a3e] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2
              className="text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
                fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
              }}
            >
              {t("projectDelivery.titlePart1", "Project")}{" "}
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                {t("projectDelivery.titlePart2", "Delivery")}
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontSize: "16px", lineHeight: "1.7" }}>
              {t("projectDelivery.subtitle", "Ethinc projects follow a structured delivery process designed to move from problem framing to reliable operational systems.")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stepKeys.map((step, i) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <div className="h-full p-6 rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] hover:border-purple-500/20 shadow-sm transition-all duration-500">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <span
                      className="text-orange-400/70"
                      style={{ fontSize: "36px", fontWeight: 800, fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)' }}
                    >
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-white mb-3" style={{ fontSize: "17px", fontWeight: 600 }}>
                    {t(`projectDelivery.steps.${step.key}.title`)}
                  </h3>
                  <p className="text-gray-400" style={{ fontSize: "14px", lineHeight: "1.7" }}>
                    {t(`projectDelivery.steps.${step.key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
