import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, PenTool, Cloud, BookOpen, ArrowRight, ArrowLeft, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const steps = [
  {
    key: "research",
    num: "01",
    label: "Phase 1",
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
    label: "Phase 2",
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
    label: "Phase 3",
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
    label: "Phase 4",
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

export function ProjectDeliveryContent() {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const selectedStep = steps.find((s) => s.key === activeStep) || null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative w-full" style={{ minHeight: "520px" }}>
        <AnimatePresence mode="wait">
          {!activeStep && (
            <motion.div
              key="panels"
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease }}
              className="flex gap-3 md:gap-4"
              style={{ height: "520px" }}
            >
              {steps.map((step) => {
                const Icon = step.icon;
                const isHovered = hovered === step.key;
                return (
                  <div
                    key={step.key}
                    className="h-full"
                    style={{
                      flex: isHovered ? 1.8 : 1,
                      transition: "flex 0.5s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  >
                    <button
                      onMouseEnter={() => setHovered(step.key)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => setActiveStep(step.key)}
                      className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer group text-left"
                    >
                      <div
                        className="absolute inset-0 transition-opacity duration-700"
                        style={{
                          background: `radial-gradient(ellipse at 30% 80%, ${step.accent}30 0%, transparent 60%), linear-gradient(160deg, #252555 0%, #1a1a3e 100%)`,
                        }}
                      />
                      <div
                        className="absolute top-0 left-0 right-0 h-[3px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `linear-gradient(90deg, ${step.accent}, transparent)` }}
                      />
                      <div className="absolute bottom-10 right-10 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700">
                        <Icon className="w-28 h-28" />
                      </div>

                      <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
                        <div>
                          <p
                            className="uppercase tracking-[0.2em] mb-5 transition-colors duration-300"
                            style={{ fontSize: "10px", fontWeight: 600, color: step.accent }}
                          >
                            {step.label}
                          </p>
                          <h3
                            className="text-white mb-3"
                            style={{
                              fontSize: "clamp(16px, 2vw, 22px)",
                              fontWeight: 700,
                              fontFamily: 'var(--font-heading, "Albert Sans", system-ui, sans-serif)',
                              lineHeight: 1.25,
                            }}
                          >
                            {step.title}
                          </h3>
                          <p
                            className="text-gray-400 transition-all duration-500"
                            style={{
                              fontSize: "13px",
                              lineHeight: "1.65",
                              opacity: isHovered ? 1 : 0,
                              maxHeight: isHovered ? "300px" : "0px",
                              overflow: "hidden",
                            }}
                          >
                            {step.subtitle}
                          </p>
                        </div>
                        <div
                          className="flex items-center gap-2 transition-all duration-300"
                          style={{ fontSize: "12px", fontWeight: 600, color: step.accent }}
                        >
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View details
                          </span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </motion.div>
          )}

          {activeStep && selectedStep && (
            <motion.div
              key={`detail-${activeStep}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease }}
              className="grid lg:grid-cols-[280px_1fr] gap-5 rounded-2xl overflow-hidden"
              style={{ minHeight: "520px" }}
            >
              <div
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{ background: "linear-gradient(180deg, #252555 0%, #1a1a3e 100%)" }}
              >
                <div className="p-5 border-b border-white/[0.06]">
                  <button
                    onClick={() => setActiveStep(null)}
                    className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors cursor-pointer mb-4"
                    style={{ fontSize: "12px", fontWeight: 500 }}
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    All phases
                  </button>

                  <div className="flex flex-col gap-1.5">
                    {steps.map((step) => {
                      const isActive = step.key === activeStep;
                      const StepIcon = step.icon;
                      return (
                        <button
                          key={step.key}
                          onClick={() => setActiveStep(step.key)}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-300 cursor-pointer ${isActive ? "bg-white/[0.08]" : "hover:bg-white/[0.04]"}`}
                        >
                          <div
                            className="w-2 h-2 rounded-full shrink-0 transition-all duration-300"
                            style={{
                              background: isActive ? step.accent : "transparent",
                              boxShadow: isActive ? `0 0 8px ${step.accent}60` : "none",
                            }}
                          />
                          <StepIcon
                            className="w-4 h-4 shrink-0"
                            style={{ color: isActive ? step.accent : "#6b7280" }}
                          />
                          <span
                            className={`truncate transition-colors duration-300 ${isActive ? "text-white" : "text-gray-500"}`}
                            style={{ fontSize: "12px", fontWeight: isActive ? 600 : 400 }}
                          >
                            {step.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#f0ede5] overflow-hidden relative" style={{ minHeight: "520px" }}>
                <button
                  onClick={() => setActiveStep(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#1a1a3e]/[0.08] hover:bg-[#1a1a3e]/[0.15] text-[#5a5a72] hover:text-[#1a1a3e] transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
                <div
                  className="absolute top-0 left-0 w-[3px] h-full transition-colors duration-500"
                  style={{
                    background: `linear-gradient(180deg, ${selectedStep.accent}, transparent)`,
                  }}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`content-${activeStep}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease }}
                    className="p-8 md:p-10 h-full flex flex-col"
                  >
                    <div className="mb-8">
                      <p
                        className="uppercase tracking-[0.2em] mb-2"
                        style={{ fontSize: "10px", fontWeight: 600, color: selectedStep.accent }}
                      >
                        {selectedStep.label}
                      </p>
                      <h3
                        className="text-[#1a1a3e] mb-5"
                        style={{
                          fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                          fontWeight: 700,
                          fontFamily: 'var(--font-heading, "Albert Sans", system-ui, sans-serif)',
                        }}
                      >
                        {selectedStep.title}
                      </h3>
                      <p
                        className="text-[#5a5a72]"
                        style={{ fontSize: "15px", lineHeight: "1.8" }}
                      >
                        {selectedStep.subtitle}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <p
                        className="text-[#1a1a3e]/40 uppercase tracking-[0.2em] mb-4"
                        style={{ fontSize: "9px", fontWeight: 700 }}
                      >
                        Key activities
                      </p>
                      <div className="space-y-3">
                        {selectedStep.bullets.map((bullet, bi) => (
                          <motion.div
                            key={bullet}
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 + bi * 0.05, duration: 0.3, ease }}
                            className="flex items-start gap-3"
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0"
                              style={{ background: selectedStep.accent }}
                            />
                            <span
                              className="text-[#3a3a52]"
                              style={{ fontSize: "13px", lineHeight: "1.7", fontWeight: 500 }}
                            >
                              {bullet}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
