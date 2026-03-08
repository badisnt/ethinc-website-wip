import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Wrench, RefreshCcw, Compass } from "lucide-react";
import { useTranslation } from "react-i18next";

const modelKeys = [
  { key: "implementation", Icon: Wrench, accent: "#a855f7" },
  { key: "maintenance", Icon: RefreshCcw, accent: "#f97316" },
  { key: "advisory", Icon: Compass, accent: "#8b5cf6" },
];

const SKEW = 8;
const ease: [number, number, number, number] = [0.4, 0, 0.2, 1];

export function ServiceModelContent() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const isExpanded = expanded !== null;

  return (
    <div className="w-full">
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "clamp(320px, 50vh, 520px)" }}
      >
        <div className="flex h-full" style={{ margin: "0 -4%" }}>
          {modelKeys.map((model, i) => {
            const { Icon, accent } = model;
            const isThis = expanded === i;
            const hidden = isExpanded && !isThis;
            const isHovered = hovered === i && !isExpanded;

            return (
              <motion.div
                key={model.key}
                className="h-full overflow-hidden cursor-pointer relative"
                animate={{
                  flex: isThis ? 10 : hidden ? 0 : 1,
                  opacity: hidden ? 0 : 1,
                  skewX: isThis ? 0 : -SKEW,
                }}
                transition={{ duration: 0.6, ease }}
                onClick={() => setExpanded(isThis ? null : i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <motion.div
                  className="absolute inset-[-20%]"
                  animate={{ skewX: isThis ? 0 : SKEW }}
                  transition={{ duration: 0.6, ease }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(ellipse at 50% 60%, ${accent}15 0%, transparent 70%), linear-gradient(180deg, #1e1755 0%, #1a1a3e 100%)`,
                    }}
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-0 z-10 pointer-events-none"
                  animate={{
                    boxShadow: isHovered
                      ? `inset 0 0 80px ${accent}30, inset 0 0 30px ${accent}18`
                      : "inset 0 0 0px rgba(168,85,247,0)",
                  }}
                  transition={{ duration: 0.3 }}
                />

                {i > 0 && !isThis && !hidden && (
                  <div
                    className="absolute left-0 top-0 bottom-0 w-px z-20"
                    style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.08), transparent)" }}
                  />
                )}

                <AnimatePresence mode="wait">
                  {!isThis ? (
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, skewX: SKEW }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="relative z-10 h-full flex flex-col items-center justify-center gap-5 px-6 text-center"
                    >
                      <motion.div
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon
                          className="drop-shadow-lg"
                          style={{ width: "clamp(40px, 5vw, 64px)", height: "clamp(40px, 5vw, 64px)", color: accent, opacity: 0.85 }}
                          strokeWidth={1.2}
                        />
                      </motion.div>
                      <h3
                        className="text-white drop-shadow-lg"
                        style={{
                          fontSize: "clamp(14px, 1.5vw, 18px)",
                          fontWeight: 600,
                          fontFamily: 'var(--font-heading, "Albert Sans", system-ui, sans-serif)',
                        }}
                      >
                        {t(`serviceModel.items.${model.key}.title`)}
                      </h3>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="relative z-10 h-full flex items-center"
                    >
                      <div className="max-w-4xl mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full">
                        <div className="shrink-0 flex flex-col items-center md:items-start gap-4">
                          <Icon
                            style={{ width: 48, height: 48, color: accent }}
                            strokeWidth={1.2}
                          />
                          <h3
                            className="text-white text-center md:text-left"
                            style={{
                              fontSize: "clamp(20px, 2.5vw, 28px)",
                              fontWeight: 700,
                              fontFamily: 'var(--font-heading, "Albert Sans", system-ui, sans-serif)',
                            }}
                          >
                            {t(`serviceModel.items.${model.key}.title`)}
                          </h3>
                        </div>
                        <p
                          className="text-gray-300 text-center md:text-left flex-1"
                          style={{ fontSize: "clamp(14px, 1.2vw, 16px)", lineHeight: "1.8" }}
                        >
                          {t(`serviceModel.items.${model.key}.description`)}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
