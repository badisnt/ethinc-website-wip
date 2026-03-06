import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, PenTool, Cloud, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

const steps = [
  {
    key: "research",
    num: "01",
    icon: Search,
    accent: "#a855f7",
    title: "Research & Framing",
    subtitle: "Understanding the problem space and defining a viable technical approach.",
    bullets: [
      "Use-case definition & feasibility assessment",
      "Technical evaluation (GenAI, ML, Computer Vision, Graph ML)",
      "Risk, governance & compliance considerations",
      "Prototype validation",
    ],
  },
  {
    key: "design",
    num: "02",
    icon: PenTool,
    accent: "#f97316",
    title: "System Design & Engineering",
    subtitle: "Designing the architecture and building the core intelligence systems.",
    bullets: [
      "AI architecture & data modeling",
      "LLM integration (cloud or on-premise)",
      "Custom machine learning pipelines",
      "API-ready modular systems",
    ],
  },
  {
    key: "deploy",
    num: "03",
    icon: Cloud,
    accent: "#eab308",
    title: "Infrastructure & Deployment",
    subtitle: "Deploying systems within secure and scalable operational environments.",
    bullets: [
      "Cloud or on-premise infrastructure (AWS, GCP, Azure)",
      "Secure containerized environments",
      "CI/CD and MLOps integration",
      "Monitoring, versioning & system reliability",
    ],
  },
  {
    key: "transfer",
    num: "04",
    icon: BookOpen,
    accent: "#8b5cf6",
    title: "Knowledge Transfer",
    subtitle: "Ensuring teams understand, operate, and evolve the deployed systems.",
    bullets: [
      "Documentation and system handover",
      "Internal team enablement",
      "Training workshops",
    ],
  },
];

const ease = [0.4, 0, 0.2, 1] as const;

export function ProjectDeliverySection() {
  const { t } = useTranslation();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#1a1a3e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
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
        </motion.div>

        {/* Vertical step list */}
        <div className="relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = active === i;
            const isLast = i === steps.length - 1;

            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4, ease }}
                className="relative"
              >
                {/* Connector line to next step */}
                {!isLast && (
                  <div
                    className="absolute left-[27px] top-[56px] bottom-0 w-px hidden md:block"
                    style={{ background: `linear-gradient(180deg, ${step.accent}40, ${steps[i + 1].accent}40)` }}
                  />
                )}

                <button
                  onClick={() => setActive(isActive ? null : i)}
                  className="w-full text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-5 md:gap-6 py-4">
                    {/* Number circle */}
                    <motion.div
                      animate={{
                        boxShadow: isActive ? `0 0 20px ${step.accent}35` : "0 0 0px transparent",
                      }}
                      transition={{ duration: 0.35 }}
                      className="relative w-[54px] h-[54px] rounded-full shrink-0 flex items-center justify-center transition-colors duration-300"
                      style={{
                        background: isActive ? `${step.accent}20` : "rgba(255,255,255,0.04)",
                        border: `1.5px solid ${isActive ? step.accent : "rgba(255,255,255,0.08)"}`,
                      }}
                    >
                      <span
                        className="transition-colors duration-300"
                        style={{ fontSize: "16px", fontWeight: 700, color: isActive ? step.accent : "#6b7280", fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)' }}
                      >
                        {step.num}
                      </span>
                    </motion.div>

                    {/* Title row */}
                    <div className="flex-1 flex items-center justify-between min-w-0">
                      <h3
                        className="transition-colors duration-300"
                        style={{
                          fontSize: "clamp(15px, 2vw, 19px)",
                          fontWeight: 600,
                          color: isActive ? "#fff" : "#9ca3af",
                          fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
                        }}
                      >
                        {step.title}
                      </h3>

                      <motion.div
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                        style={{
                          background: isActive ? `${step.accent}15` : "transparent",
                          border: `1px solid ${isActive ? `${step.accent}30` : "rgba(255,255,255,0.06)"}`,
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 3v8M3 7h8" stroke={isActive ? step.accent : "#4b5563"} strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden"
                    >
                      <div className="ml-[27px] pl-[calc(27px+24px)] md:pl-[calc(27px+24px)] border-l border-transparent pb-6">
                        <div className="rounded-xl bg-[#f0ede5] p-6 md:p-8">
                          <p className="text-[#5a5a72] mb-6" style={{ fontSize: "14px", lineHeight: "1.8" }}>
                            {step.subtitle}
                          </p>
                          <ul className="space-y-3">
                            {step.bullets.map((bullet, bi) => (
                              <motion.li
                                key={bullet}
                                initial={{ opacity: 0, x: 12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.08 + bi * 0.05, duration: 0.3, ease }}
                                className="flex items-start gap-3"
                              >
                                <div
                                  className="w-1.5 h-1.5 rounded-full mt-[8px] shrink-0"
                                  style={{ background: step.accent }}
                                />
                                <span className="text-[#3a3a52]" style={{ fontSize: "13px", lineHeight: "1.7", fontWeight: 500 }}>
                                  {bullet}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Divider between steps (when collapsed) */}
                {!isLast && !isActive && active !== i + 1 && (
                  <div className="ml-[54px] md:ml-[78px] h-px bg-white/[0.04]" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
