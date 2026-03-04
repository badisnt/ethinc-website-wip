import { motion } from "motion/react";
import { Wrench, RefreshCcw, Compass } from "lucide-react";
import { useTranslation } from "react-i18next";

const modelKeys = [
  { key: "implementation", icon: Wrench, gradient: "from-purple-500 to-violet-600" },
  { key: "maintenance", icon: RefreshCcw, gradient: "from-orange-500 to-amber-500" },
  { key: "advisory", icon: Compass, gradient: "from-violet-500 to-purple-600" },
];

export function ServiceModelSection() {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-[#f5f3ee] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-[#1a1a3e] mb-4"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 700,
              fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
            }}
          >
            {t('serviceModel.titlePart1', 'Our Service')}{" "}
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              {t('serviceModel.titlePart2', 'Model')}
            </span>
          </h2>
          <p className="text-[#5a5a72] max-w-2xl mx-auto" style={{ fontSize: "16px", lineHeight: "1.7" }}>
            {t('serviceModel.subtitle', 'We support organizations at different stages of their AI and data initiatives, from early exploration to system development and long-term operational support.')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {modelKeys.map((model, i) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={model.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-lg hover:border-purple-300/50 transition-all duration-500">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${model.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3
                    className="text-[#1a1a3e] mb-4"
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
                    }}
                  >
                    {t(`serviceModel.items.${model.key}.title`)}
                  </h3>
                  <p className="text-[#5a5a72]" style={{ fontSize: "14px", lineHeight: "1.8" }}>
                    {t(`serviceModel.items.${model.key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
