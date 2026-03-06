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
    title: "Design & Engineering",
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
    title: "Deploy",
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
    <section className="py-24 bg-[#1a1a3e] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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

        {/* Flow diagram */}
        <div className="relative" style={{ minHeight: "440px" }}>
          {/* SVG connector paths (desktop) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="flow-grad-01" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="flow-grad-12" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#eab308" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="flow-grad-23" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#eab308" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            {/* Dashed animated flow lines */}
            <line x1="25%" y1="70" x2="50%" y2="70" stroke="url(#flow-grad-01)" strokeWidth="1.5" strokeDasharray="6 4">
              <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />
            </line>
            <line x1="50%" y1="70" x2="75%" y2="70" stroke="url(#flow-grad-12)" strokeWidth="1.5" strokeDasharray="6 4">
              <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />
            </line>
            {/* Arrow heads */}
            {[
              { x: "37.5%", grad: "flow-grad-01" },
              { x: "62.5%", grad: "flow-grad-12" },
            ].map((arrow, i) => (
              <g key={i} transform={`translate(0, 0)`}>
                <circle cx={arrow.x} cy="70" r="3" fill={`url(#${arrow.grad})`} opacity="0.7">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.5s" repeatCount="indefinite" />
                </circle>
              </g>
            ))}
          </svg>

          {/* Step nodes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = active === i;

              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5, ease }}
                  className="flex flex-col items-center"
                >
                  {/* Node */}
                  <motion.button
                    onClick={() => setActive(isActive ? null : i)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative cursor-pointer mb-4 group"
                  >
                    {/* Glow ring */}
                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.4 }}
                      className="absolute -inset-3 rounded-2xl"
                      style={{ background: `${step.accent}12`, border: `1px solid ${step.accent}25` }}
                    />

                    <div
                      className="relative w-[100px] h-[100px] rounded-2xl flex flex-col items-center justify-center gap-1 transition-all duration-500"
                      style={{
                        background: isActive
                          ? `linear-gradient(135deg, ${step.accent}30, ${step.accent}10)`
                          : "rgba(255,255,255,0.04)",
                        border: `1.5px solid ${isActive ? `${step.accent}60` : "rgba(255,255,255,0.08)"}`,
                        boxShadow: isActive ? `0 8px 32px ${step.accent}20` : "none",
                      }}
                    >
                      <Icon
                        className="w-6 h-6 transition-colors duration-300"
                        style={{ color: isActive ? step.accent : "#9ca3af" }}
                      />
                      <span
                        className="transition-colors duration-300"
                        style={{
                          fontSize: "20px",
                          fontWeight: 800,
                          color: isActive ? step.accent : "rgba(255,255,255,0.15)",
                          fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
                        }}
                      >
                        {step.num}
                      </span>
                    </div>
                  </motion.button>

                  {/* Title */}
                  <p
                    className="text-center transition-colors duration-300 px-2"
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: isActive ? "#fff" : "#6b7280",
                      fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
                    }}
                  >
                    {step.title}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="mt-8" style={{ minHeight: "220px" }}>
            <AnimatePresence mode="wait">
              {active !== null && (
                <motion.div
                  key={`detail-${active}`}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.35, ease }}
                >
                  {/* Pointer triangle */}
                  <div className="hidden md:flex justify-center relative" style={{ marginBottom: "-1px" }}>
                    <div
                      style={{
                        marginLeft: `${(active - 1.5) * 25}%`,
                        width: 0,
                        height: 0,
                        borderLeft: "12px solid transparent",
                        borderRight: "12px solid transparent",
                        borderBottom: `12px solid #f0ede5`,
                        transition: "margin-left 0.4s cubic-bezier(0.4,0,0.2,1)",
                      }}
                    />
                  </div>

                  <div className="rounded-2xl bg-[#f0ede5] p-7 md:p-9 relative overflow-hidden">
                    {/* Accent top line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(90deg, ${steps[active].accent}80, transparent 50%)` }}
                    />

                    <div className="grid md:grid-cols-[1.1fr_1fr] gap-6 md:gap-10">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            style={{
                              fontSize: "36px",
                              fontWeight: 800,
                              fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
                              color: `${steps[active].accent}25`,
                              lineHeight: 1,
                            }}
                          >
                            {steps[active].num}
                          </span>
                          <h3
                            className="text-[#1a1a3e]"
                            style={{
                              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                              fontWeight: 700,
                              fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
                            }}
                          >
                            {steps[active].title}
                          </h3>
                        </div>
                        <p className="text-[#5a5a72]" style={{ fontSize: "14px", lineHeight: "1.8" }}>
                          {steps[active].subtitle}
                        </p>
                      </div>

                      <div>
                        <ul className="space-y-3">
                          {steps[active].bullets.map((bullet, bi) => (
                            <motion.li
                              key={bullet}
                              initial={{ opacity: 0, x: 12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.08 + bi * 0.05, duration: 0.3, ease }}
                              className="flex items-start gap-3"
                            >
                              <div
                                className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0"
                                style={{ background: steps[active].accent }}
                              />
                              <span className="text-[#3a3a52]" style={{ fontSize: "13px", lineHeight: "1.7", fontWeight: 500 }}>
                                {bullet}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Step navigation */}
                    <div className="flex items-center justify-between mt-7 pt-5 border-t border-[#1a1a3e]/[0.06]">
                      <button
                        onClick={() => active > 0 && setActive(active - 1)}
                        className={`flex items-center gap-2 transition-colors cursor-pointer ${active > 0 ? "text-[#5a5a72] hover:text-[#1a1a3e]" : "opacity-0 pointer-events-none"}`}
                        style={{ fontSize: "12px", fontWeight: 500 }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                        {active > 0 && steps[active - 1].title}
                      </button>
                      <button
                        onClick={() => active < 3 && setActive(active + 1)}
                        className={`flex items-center gap-2 transition-colors cursor-pointer ${active < 3 ? "text-[#5a5a72] hover:text-[#1a1a3e]" : "opacity-0 pointer-events-none"}`}
                        style={{ fontSize: "12px", fontWeight: 500 }}
                      >
                        {active < 3 && steps[active + 1].title}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
