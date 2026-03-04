import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Scale, Lightbulb, ShieldCheck, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const pillarKeys = [
  {
    key: "engineering",
    icon: Cpu,
    bg: "from-[#2a1f5e] to-[#1e1650]",
    accent: "purple-400",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=70",
  },
  {
    key: "ethics",
    icon: Scale,
    bg: "from-[#3d2a1a] to-[#2a1d14]",
    accent: "orange-400",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=70",
  },
  {
    key: "innovation",
    icon: Lightbulb,
    bg: "from-[#3a3010] to-[#2a2410]",
    accent: "amber-400",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=70",
  },
  {
    key: "trust",
    icon: ShieldCheck,
    bg: "from-[#1e2a5e] to-[#162050]",
    accent: "violet-400",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=70",
  },
];

const SKEW = 20;

export function ValuesSection() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<number | null>(null);
  const isExpanded = expanded !== null;

  return (
    <section className="bg-[#1a1a3e]">
      <div className="text-center pt-20 pb-10 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white"
          style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            fontWeight: 700,
            fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
          }}
        >
          {t("values.titlePart1", "What Guides")}{" "}
          <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            {t("values.titlePart2", "Our Work")}
          </span>
        </motion.h2>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{ height: "clamp(320px, 45vh, 480px)" }}
      >
        <div className="absolute inset-0 flex">
          {pillarKeys.map((pillar, i) => {
            const Icon = pillar.icon;
            const isThis = expanded === i;
            const someExpanded = isExpanded;

            return (
              <motion.div
                key={pillar.key}
                className="relative h-full cursor-pointer overflow-hidden"
                style={{ originX: 0.5 }}
                animate={{
                  flex: isThis ? 4 : someExpanded ? 0 : 1,
                  opacity: someExpanded && !isThis ? 0 : 1,
                }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                onClick={() => setExpanded(isThis ? null : i)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${pillar.img})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${pillar.bg} opacity-85`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                {i < pillarKeys.length - 1 && !isThis && (
                  <div
                    className="absolute top-0 right-0 w-[2px] h-full bg-white/[0.08] origin-top z-10"
                    style={{ transform: `skewX(-${SKEW}deg)` }}
                  />
                )}

                <AnimatePresence mode="wait">
                  {!isThis ? (
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.1] backdrop-blur-sm border border-white/[0.1] flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3
                        className="text-white"
                        style={{
                          fontSize: "clamp(14px, 1.5vw, 18px)",
                          fontWeight: 600,
                          fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
                        }}
                      >
                        {t(`values.pillars.${pillar.key}.title`)}
                      </h3>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="relative z-10 h-full flex items-center"
                    >
                      <div className="max-w-4xl mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center gap-8 md:gap-14 w-full">
                        <div className="flex flex-col items-center md:items-start shrink-0">
                          <div className="w-16 h-16 rounded-2xl bg-white/[0.1] backdrop-blur-sm border border-white/[0.1] flex items-center justify-center mb-3">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <h3
                            className="text-white text-center md:text-left"
                            style={{
                              fontSize: "clamp(20px, 2.5vw, 28px)",
                              fontWeight: 700,
                              fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
                            }}
                          >
                            {t(`values.pillars.${pillar.key}.title`)}
                          </h3>
                        </div>
                        <p
                          className="text-gray-300 text-center md:text-left flex-1"
                          style={{ fontSize: "clamp(14px, 1.2vw, 16px)", lineHeight: "1.8" }}
                        >
                          {t(`values.pillars.${pillar.key}.description`)}
                        </p>
                      </div>

                      <button
                        onClick={(e) => { e.stopPropagation(); setExpanded(null); }}
                        className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/[0.1] border border-white/[0.1] text-white/60 hover:text-white hover:bg-white/[0.15] transition-all z-20"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="h-12 bg-[#1a1a3e]" />
    </section>
  );
}
