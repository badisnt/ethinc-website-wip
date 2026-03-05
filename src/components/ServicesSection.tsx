import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  MessageSquare,
  TrendingUp,
  ScanEye,
  Network,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const expertiseKeys = [
  { key: "genai", icon: MessageSquare, gradient: "from-orange-500 to-amber-600" },
  { key: "ml", icon: TrendingUp, gradient: "from-amber-500 to-yellow-600" },
  { key: "cv", icon: ScanEye, gradient: "from-violet-500 to-purple-600" },
  { key: "graphml", icon: Network, gradient: "from-purple-500 to-orange-500" },
];

export function ServicesSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <section ref={sectionRef} id="services" className="py-24 relative bg-[#1a1a3e] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="text-center mb-16"
        >
          <h2
            className="text-white mb-4"
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 700,
              fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
            }}
          >
            {t('expertise.titlePart1', 'Areas of')}{" "}
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              {t('expertise.titlePart2', 'Expertise')}
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto" style={{ fontSize: '16px', lineHeight: '1.7' }}>
            {t('expertise.items.aiml.description', 'AI and ML form the analytical core of modern data systems. We apply engineering rigor to design models capable of interpreting complex data, identifying patterns, and supporting informed decision-making across structured and unstructured information.')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {expertiseKeys.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="relative h-full p-7 rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] hover:border-purple-500/20 transition-all duration-500">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-all duration-300`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white mb-3" style={{ fontSize: '17px', fontWeight: 600 }}>
                  {t(`expertise.items.${item.key}.title`)}
                </h3>
                <p className="text-gray-400" style={{ fontSize: '14px', lineHeight: '1.7' }}>
                  {t(`expertise.items.${item.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-orange-400 transition-colors group"
            style={{ fontSize: '15px', fontWeight: 500 }}
          >
            {t('expertise.cta', 'Discuss your project with us')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
