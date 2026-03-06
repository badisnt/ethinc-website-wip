import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Brain,
  Code2,
  Database,
  MessageSquare,
  TrendingUp,
  ScanEye,
  Network,
  Server,
  Monitor,
  Smartphone,
  Workflow,
  HardDrive,
  Cpu,
  Container,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface SubService {
  key: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  capabilities: string[];
}

interface ExpertiseLayer {
  key: string;
  layerLabel: string;
  title: string;
  intro: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  accent: string;
  subServices: SubService[];
}

const layers: ExpertiseLayer[] = [
  {
    key: "intelligence",
    layerLabel: "Intelligence Layer",
    title: "AI & Machine Learning",
    intro: "Artificial intelligence and machine learning form the analytical core of modern data systems. At Ethinc, these technologies are applied with engineering rigor to design models capable of interpreting complex data, identifying patterns, and supporting informed decision-making. Our work spans generative AI, predictive modeling, computer vision, and graph-based learning.",
    icon: Brain,
    gradient: "from-purple-500 to-violet-600",
    accent: "#a855f7",
    subServices: [
      {
        key: "genai",
        title: "Generative AI & NLP",
        description: "Generative AI allows organizations to interact directly with their own knowledge — documents, reports, emails, and research — transforming unstructured information into usable insights. These systems are designed to structure and retrieve knowledge, automate document-heavy workflows, and support analytical work that traditionally required extensive manual review.",
        icon: MessageSquare,
        capabilities: ["LLM integration", "Retrieval-Augmented Generation (RAG)", "Model fine-tuning", "Agent systems", "Multilingual processing", "OCR", "Multimodal AI"],
      },
      {
        key: "ml",
        title: "Machine Learning",
        description: "Machine learning enables organizations to detect patterns in data that would otherwise remain invisible. These models support forecasting, anomaly detection, and process optimization across operational environments where decisions depend on complex or evolving datasets.",
        icon: TrendingUp,
        capabilities: ["Predictive modeling", "Anomaly detection", "Time-series forecasting", "Deep learning", "Explainable AI"],
      },
      {
        key: "cv",
        title: "Computer Vision",
        description: "Computer vision allows machines to interpret visual environments and transform images or video into structured information. From quality inspection to infrastructure monitoring and media analysis, these systems enable organizations to analyze visual data at scale.",
        icon: ScanEye,
        capabilities: ["Object detection", "Classification", "Segmentation", "Vision transformers", "Image & video processing"],
      },
      {
        key: "graphml",
        title: "Graph Machine Learning",
        description: "Many real-world problems are defined not only by data but by relationships between entities. Graph machine learning models these connections to reveal patterns that traditional analytics often miss.",
        icon: Network,
        capabilities: ["Knowledge graphs", "Graph embeddings", "Link prediction", "Network analytics"],
      },
    ],
  },
  {
    key: "application",
    layerLabel: "Application Layer",
    title: "Software Engineering",
    intro: "Software engineering forms the operational layer that allows intelligent systems to function reliably in real environments. We design and build robust applications and system architectures that integrate AI, data processing, and user-facing interfaces into coherent platforms — secure, maintainable, and scalable.",
    icon: Code2,
    gradient: "from-orange-500 to-amber-600",
    accent: "#f97316",
    subServices: [
      {
        key: "backend",
        title: "Backend Systems",
        description: "Robust server-side architectures designed for performance, security, and seamless integration with AI pipelines and data sources.",
        icon: Server,
        capabilities: ["API design & development", "Microservices architecture", "Secure server-side logic", "Database integration"],
      },
      {
        key: "frontend",
        title: "Frontend Applications",
        description: "User-facing interfaces that make complex data and AI outputs accessible, intuitive, and actionable for teams and stakeholders.",
        icon: Monitor,
        capabilities: ["Web application interfaces", "Data visualization interfaces", "User-centric design implementation"],
      },
      {
        key: "appdev",
        title: "Application Development",
        description: "End-to-end application development from internal tools to AI-powered SaaS prototypes, built for security and enterprise integration.",
        icon: Smartphone,
        capabilities: ["Internal tools & platforms", "Mobile applications", "AI-powered SaaS prototypes", "Secure enterprise integration"],
      },
    ],
  },
  {
    key: "infrastructure",
    layerLabel: "Infrastructure Layer",
    title: "Data Engineering & Distributed Systems",
    intro: "Reliable AI systems depend on well-structured data infrastructures capable of processing large and diverse datasets. We design and implement data pipelines and distributed architectures that enable organizations to collect, transform, and analyze data efficiently — the backbone of modern analytical platforms.",
    icon: Database,
    gradient: "from-violet-500 to-purple-600",
    accent: "#8b5cf6",
    subServices: [
      {
        key: "pipelines",
        title: "Data Pipelines & Orchestration",
        description: "Automated data workflows that ensure reliable collection, transformation, and delivery of data across the organization.",
        icon: Workflow,
        capabilities: ["ETL pipelines", "Workflow orchestration", "Automated data processing"],
      },
      {
        key: "platforms",
        title: "Data Platforms",
        description: "Scalable data storage and analytical infrastructure designed for both real-time queries and historical analysis.",
        icon: HardDrive,
        capabilities: ["Data warehousing", "OLAP systems", "SQL & NoSQL architecture"],
      },
      {
        key: "distributed",
        title: "Distributed Processing",
        description: "Large-scale data processing frameworks for organizations handling volumes that exceed single-system capacity.",
        icon: Cpu,
        capabilities: ["Apache Spark", "Large-scale data processing", "Distributed computing frameworks"],
      },
      {
        key: "devops",
        title: "Infrastructure & DevOps",
        description: "Production-grade deployment environments with automation, monitoring, and continuous delivery built in.",
        icon: Container,
        capabilities: ["Containerized services", "Workflow automation", "CI/CD pipelines", "Scalable deployment environments"],
      },
    ],
  },
];

const ease = [0.4, 0, 0.2, 1] as const;

export function ServicesSection() {
  const { t } = useTranslation();
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const selectedLayer = layers.find((l) => l.key === activeLayer) || null;
  const selectedSub = selectedLayer?.subServices.find((s) => s.key === activeSub) || null;

  return (
    <section id="services" className="py-24 relative bg-[#1a1a3e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="text-white mb-4"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 700,
              fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
            }}
          >
            {t("expertise.titlePart1", "Areas of")}{" "}
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              {t("expertise.titlePart2", "Expertise")}
            </span>
          </h2>
        </motion.div>

        {/* Fixed-height explorer container */}
        <div className="relative" style={{ minHeight: "520px" }}>
          <AnimatePresence mode="wait">
            {/* ── LEVEL 1: Three layer panels ── */}
            {!activeLayer && (
              <motion.div
                key="panels"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease }}
                className="flex gap-3 md:gap-4"
                style={{ height: "520px" }}
              >
                {layers.map((layer, i) => {
                  const Icon = layer.icon;
                  const isHovered = hovered === layer.key;
                  return (
                    <motion.button
                      key={layer.key}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5, ease }}
                      onMouseEnter={() => setHovered(layer.key)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => { setActiveLayer(layer.key); setActiveSub(null); }}
                      className="relative flex-1 rounded-2xl overflow-hidden cursor-pointer group"
                      style={{ transition: "flex 0.5s cubic-bezier(0.4,0,0.2,1)", flex: isHovered ? 1.8 : 1 }}
                    >
                      {/* Gradient background */}
                      <div
                        className="absolute inset-0 transition-opacity duration-700"
                        style={{
                          background: `radial-gradient(ellipse at 30% 80%, ${layer.accent}30 0%, transparent 60%), linear-gradient(160deg, #252555 0%, #1a1a3e 100%)`,
                        }}
                      />
                      {/* Accent line at top */}
                      <div
                        className="absolute top-0 left-0 right-0 h-[3px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `linear-gradient(90deg, ${layer.accent}, transparent)` }}
                      />
                      {/* Decorative large icon */}
                      <div className="absolute -bottom-6 -right-6 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700">
                        <Icon className="w-48 h-48" />
                      </div>

                      <div className="relative h-full flex flex-col justify-between p-6 md:p-8 text-left">
                        <div>
                          <p
                            className="uppercase tracking-[0.2em] mb-6 transition-colors duration-300"
                            style={{ fontSize: "10px", fontWeight: 600, color: layer.accent }}
                          >
                            {layer.layerLabel}
                          </p>
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${layer.gradient} flex items-center justify-center shadow-lg mb-5`}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h3
                            className="text-white mb-3"
                            style={{ fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 700, fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)', lineHeight: 1.25 }}
                          >
                            {layer.title}
                          </h3>
                          <motion.p
                            className="text-gray-400 overflow-hidden"
                            style={{ fontSize: "13px", lineHeight: "1.65" }}
                            animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
                            transition={{ duration: 0.35, ease }}
                          >
                            {layer.intro.slice(0, 180)}...
                          </motion.p>
                        </div>
                        <div
                          className="flex items-center gap-2 transition-all duration-300"
                          style={{ fontSize: "12px", fontWeight: 600, color: layer.accent }}
                        >
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </motion.div>
            )}

            {/* ── LEVEL 2 & 3: Layer detail with sidebar ── */}
            {activeLayer && selectedLayer && (
              <motion.div
                key={`detail-${activeLayer}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease }}
                className="grid lg:grid-cols-[280px_1fr] gap-5 rounded-2xl overflow-hidden"
                style={{ minHeight: "520px" }}
              >
                {/* Sidebar */}
                <div className="rounded-2xl overflow-hidden flex flex-col" style={{ background: `linear-gradient(180deg, #252555 0%, #1a1a3e 100%)` }}>
                  {/* Layer nav at top */}
                  <div className="p-5 border-b border-white/[0.06]">
                    <motion.button
                      onClick={() => { setActiveLayer(null); setActiveSub(null); }}
                      className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors cursor-pointer mb-4"
                      style={{ fontSize: "12px", fontWeight: 500 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      All areas
                    </motion.button>

                    {/* Layer selector pills */}
                    <div className="flex flex-col gap-1.5">
                      {layers.map((layer) => {
                        const isActive = layer.key === activeLayer;
                        const LayerIcon = layer.icon;
                        return (
                          <button
                            key={layer.key}
                            onClick={() => { setActiveLayer(layer.key); setActiveSub(null); }}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-300 cursor-pointer ${
                              isActive ? "bg-white/[0.08]" : "hover:bg-white/[0.04]"
                            }`}
                          >
                            <div
                              className="w-2 h-2 rounded-full shrink-0 transition-all duration-300"
                              style={{ background: isActive ? layer.accent : "transparent", boxShadow: isActive ? `0 0 8px ${layer.accent}60` : "none" }}
                            />
                            <LayerIcon className="w-4 h-4 shrink-0" style={{ color: isActive ? layer.accent : "#6b7280" }} />
                            <span
                              className={`truncate transition-colors duration-300 ${isActive ? "text-white" : "text-gray-500"}`}
                              style={{ fontSize: "12px", fontWeight: isActive ? 600 : 400 }}
                            >
                              {layer.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Subservice list */}
                  <div className="flex-1 p-5">
                    <p className="text-gray-600 uppercase tracking-[0.2em] mb-4" style={{ fontSize: "9px", fontWeight: 700 }}>
                      Services
                    </p>
                    <div className="flex flex-col gap-1">
                      {selectedLayer.subServices.map((sub, i) => {
                        const isActive = activeSub === sub.key;
                        const SubIcon = sub.icon;
                        return (
                          <motion.button
                            key={sub.key}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.05, duration: 0.3, ease }}
                            onClick={() => setActiveSub(isActive ? null : sub.key)}
                            className={`flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all duration-300 cursor-pointer ${
                              isActive ? "bg-white/[0.08]" : "hover:bg-white/[0.04]"
                            }`}
                          >
                            <SubIcon
                              className="w-4 h-4 shrink-0 transition-colors duration-300"
                              style={{ color: isActive ? selectedLayer.accent : "#6b7280" }}
                            />
                            <span
                              className={`transition-colors duration-300 ${isActive ? "text-white" : "text-gray-400"}`}
                              style={{ fontSize: "13px", fontWeight: isActive ? 600 : 400 }}
                            >
                              {sub.title}
                            </span>
                            {isActive && (
                              <motion.div
                                layoutId="sub-dot"
                                className="ml-auto w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ background: selectedLayer.accent }}
                                transition={{ duration: 0.25, ease }}
                              />
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Content panel */}
                <div className="rounded-2xl bg-[#f0ede5] overflow-hidden relative" style={{ minHeight: "520px" }}>
                  {/* Accent strip */}
                  <div
                    className="absolute top-0 left-0 w-[3px] h-full transition-colors duration-500"
                    style={{ background: `linear-gradient(180deg, ${selectedLayer.accent}, transparent)` }}
                  />

                  <AnimatePresence mode="wait">
                    {!selectedSub ? (
                      /* Layer overview */
                      <motion.div
                        key={`overview-${activeLayer}`}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease }}
                        className="p-8 md:p-10 h-full flex flex-col"
                      >
                        <div className="mb-8">
                          <p
                            className="uppercase tracking-[0.2em] mb-2"
                            style={{ fontSize: "10px", fontWeight: 600, color: selectedLayer.accent }}
                          >
                            {selectedLayer.layerLabel}
                          </p>
                          <h3
                            className="text-[#1a1a3e] mb-5"
                            style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 700, fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)' }}
                          >
                            {selectedLayer.title}
                          </h3>
                          <p className="text-[#5a5a72]" style={{ fontSize: "15px", lineHeight: "1.8" }}>
                            {selectedLayer.intro}
                          </p>
                        </div>

                        <div className="mt-auto">
                          <p className="text-[#1a1a3e]/40 uppercase tracking-[0.2em] mb-4" style={{ fontSize: "9px", fontWeight: 700 }}>
                            Select a service to learn more
                          </p>
                          <div className="grid grid-cols-2 gap-3">
                            {selectedLayer.subServices.map((sub, i) => {
                              const SubIcon = sub.icon;
                              return (
                                <motion.button
                                  key={sub.key}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 + i * 0.06, duration: 0.3, ease }}
                                  whileHover={{ y: -3 }}
                                  onClick={() => setActiveSub(sub.key)}
                                  className="group flex items-center gap-3 p-4 rounded-xl bg-[#1a1a3e]/[0.05] hover:bg-[#1a1a3e]/[0.1] border border-[#1a1a3e]/[0.06] hover:border-[#1a1a3e]/[0.12] transition-all duration-300 text-left cursor-pointer"
                                >
                                  <SubIcon className="w-5 h-5 shrink-0 transition-colors duration-300" style={{ color: selectedLayer.accent }} />
                                  <span className="text-[#3a3a52] group-hover:text-[#1a1a3e] transition-colors" style={{ fontSize: "13px", fontWeight: 600 }}>
                                    {sub.title}
                                  </span>
                                </motion.button>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      /* Subservice detail */
                      <motion.div
                        key={`sub-${activeSub}`}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease }}
                        className="p-8 md:p-10 h-full flex flex-col"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center"
                            style={{ background: `${selectedLayer.accent}18` }}
                          >
                            <selectedSub.icon className="w-5 h-5" style={{ color: selectedLayer.accent }} />
                          </div>
                          <div>
                            <p className="uppercase tracking-[0.2em]" style={{ fontSize: "9px", fontWeight: 600, color: selectedLayer.accent }}>
                              {selectedLayer.layerLabel}
                            </p>
                            <h3
                              className="text-[#1a1a3e]"
                              style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 700, fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)' }}
                            >
                              {selectedSub.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-[#5a5a72] mb-8" style={{ fontSize: "15px", lineHeight: "1.8" }}>
                          {selectedSub.description}
                        </p>

                        <div className="mt-auto">
                          <p className="text-[#1a1a3e]/40 uppercase tracking-[0.2em] mb-4" style={{ fontSize: "9px", fontWeight: 700 }}>
                            Capabilities
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {selectedSub.capabilities.map((cap, i) => (
                              <motion.span
                                key={cap}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.15 + i * 0.04, duration: 0.25, ease }}
                                className="px-3.5 py-1.5 rounded-full text-[#3a3a52]"
                                style={{
                                  fontSize: "12px",
                                  fontWeight: 500,
                                  background: `${selectedLayer.accent}10`,
                                  border: `1px solid ${selectedLayer.accent}20`,
                                }}
                              >
                                {cap}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-orange-400 transition-colors group"
            style={{ fontSize: "15px", fontWeight: 500 }}
          >
            {t("expertise.cta", "Discuss your project with us")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
