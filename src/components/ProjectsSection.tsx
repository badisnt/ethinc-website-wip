import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Tag } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

const categories = [
  "All",
  "Smart Assistants & Chatbots",
  "Visual Inspection & Recognition",
  "Predictions & Forecasting",
  "Relationship & Network Analysis",
  "Process Automation",
  "Data Insights & Dashboards",
];

const projects = [
  {
    id: 1,
    title: "Intelligent Document Processing",
    description:
      "Built an end-to-end document processing pipeline using NLP and OCR to automatically extract, classify, and validate information from complex multi-page documents for a Swiss financial institution.",
    category: "Process Automation",
    image:
      "https://images.unsplash.com/photo-1762328862557-e0a36587cd3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbGFuZ3VhZ2UlMjBwcm9jZXNzaW5nJTIwY2hhdGJvdHxlbnwxfHx8fDE3NzE0MjAyODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["NLP", "OCR", "Transformers", "Python"],
    result: "85% reduction in manual processing time",
  },
  {
    id: 2,
    title: "Predictive Maintenance System",
    description:
      "Developed a machine learning system that predicts equipment failures 48 hours in advance using sensor data and time-series analysis for a manufacturing plant.",
    category: "Predictions & Forecasting",
    image:
      "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGF1dG9tYXRpb24lMjBmYWN0b3J5fGVufDF8fHx8MTc3MTMyMTk2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["LSTM", "Time Series", "IoT", "TensorFlow"],
    result: "40% decrease in unplanned downtime",
  },
  {
    id: 3,
    title: "Real-time Quality Inspection",
    description:
      "Implemented a computer vision system for real-time defect detection on a high-speed production line, achieving sub-millisecond inference with custom-trained object detection models.",
    category: "Visual Inspection & Recognition",
    image:
      "https://images.unsplash.com/photo-1551330969-cf6e919d206f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNvbXB1dGVyJTIwdmlzaW9uJTIwcHJvamVjdCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzE0MjAyODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["YOLO", "OpenCV", "Edge AI", "PyTorch"],
    result: "99.2% detection accuracy",
  },
  {
    id: 4,
    title: "Smart City Traffic Analytics",
    description:
      "Designed and deployed a city-wide traffic analysis platform using computer vision and graph neural networks to optimize traffic flow and reduce congestion.",
    category: "Relationship & Network Analysis",
    image:
      "https://images.unsplash.com/photo-1699602050604-698045645108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjB0ZWNobm9sb2d5JTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcxNDIwMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["GNN", "Computer Vision", "Real-time", "Dashboard"],
    result: "25% reduction in avg commute time",
  },
  {
    id: 5,
    title: "Medical Imaging Diagnosis",
    description:
      "Created a deep learning solution for automated medical image analysis, assisting radiologists in detecting anomalies in X-ray and CT scans with high sensitivity.",
    category: "Visual Inspection & Recognition",
    image:
      "https://images.unsplash.com/photo-1659353887907-000c9a92377d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwQUklMjBtZWRpY2FsJTIwaW1hZ2luZ3xlbnwxfHx8fDE3NzE0MjAyOTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["CNN", "Medical AI", "DICOM", "PyTorch"],
    result: "97% sensitivity in anomaly detection",
  },
  {
    id: 6,
    title: "Enterprise Data Analytics Platform",
    description:
      "Built a comprehensive data analytics platform with automated reporting, anomaly detection, and predictive analytics for a retail chain across 50+ locations.",
    category: "Data Insights & Dashboards",
    image:
      "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwYW5hbHl0aWNzJTIwcHJvamVjdHxlbnwxfHx8fDE3NzE0MjAyODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "Tableau", "SQL", "Forecasting"],
    result: "3x faster decision-making cycle",
  },
];

const ease = [0.4, 0, 0.2, 1] as const;

export function ProjectsSection({ header }: { header?: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const selectedProject = selectedId !== null ? projects.find((p) => p.id === selectedId) : null;

  const openProject = (id: number) => {
    setSelectedId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeProject = () => {
    setSelectedId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        {!selectedProject ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            {header}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-lg shadow-purple-600/20"
                      : "bg-white/[0.07] text-gray-400 hover:text-white hover:bg-white/[0.12] border border-white/[0.08]"
                  }`}
                  style={{ fontSize: "13px", fontWeight: 500 }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
              {filteredProjects.map((proj, i) => (
                <motion.button
                  key={proj.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  onClick={() => openProject(proj.id)}
                  className="group text-left flex flex-col h-full"
                >
                  <div className="relative overflow-hidden rounded-lg aspect-[2/1] mb-5">
                    <ImageWithFallback
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="uppercase tracking-[0.15em] text-purple-400"
                      style={{ fontSize: "11px", fontWeight: 600 }}
                    >
                      {proj.category}
                    </span>
                  </div>
                  <h3
                    className="text-white mb-2 group-hover:text-orange-300 transition-colors"
                    style={{
                      fontSize: "clamp(18px, 2vw, 22px)",
                      fontWeight: 700,
                      lineHeight: 1.3,
                      fontFamily: 'Georgia, "Times New Roman", serif',
                    }}
                  >
                    {proj.title}
                  </h3>
                  <p
                    className="text-gray-400 line-clamp-2 mb-3 flex-1"
                    style={{ fontSize: "14px", lineHeight: "1.7" }}
                  >
                    {proj.description}
                  </p>
                  <div
                    className="flex items-center justify-between pt-3 border-t border-white/[0.06] mt-auto"
                    style={{ fontSize: "12px" }}
                  >
                    <span className="text-green-500 font-medium">{proj.result}</span>
                    <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            {/* Back button */}
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              onClick={() => closeProject()}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 group"
              style={{ fontSize: "14px", fontWeight: 500 }}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to projects
            </motion.button>

            {/* Project detail */}
            <article className="max-w-3xl mx-auto">
              {/* Category */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="uppercase tracking-[0.15em] text-purple-400"
                  style={{ fontSize: "12px", fontWeight: 600 }}
                >
                  {selectedProject.category}
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-white mb-6"
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  letterSpacing: "-0.02em",
                }}
              >
                {selectedProject.title}
              </h1>

              {/* Decorative rule */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-purple-500/40 via-orange-500/30 to-transparent" />
                <span className="text-orange-400/60 text-lg">&#9830;</span>
                <div className="h-px flex-1 bg-gradient-to-l from-purple-500/40 via-orange-500/30 to-transparent" />
              </div>

              {/* Tags & result */}
              <div className="flex flex-wrap items-center gap-3 mb-10">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.07] text-gray-300 border border-white/[0.08]"
                    style={{ fontSize: "12px" }}
                  >
                    <Tag className="w-3 h-3 text-purple-400" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hero image */}
              <div className="relative rounded-t-lg overflow-hidden aspect-[2/1]">
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Light reading area */}
              <div className="bg-[#f5f3ee] rounded-b-lg px-6 sm:px-10 md:px-14 py-10 md:py-14">
                <p
                  className="text-[#3a3a52] mb-8"
                  style={{ fontSize: "16px", lineHeight: "1.9" }}
                >
                  {selectedProject.description}
                </p>

                <div className="flex items-center gap-3 pt-6 border-t border-gray-200/80">
                  <span className="text-[#5a5a72]" style={{ fontSize: "13px", fontWeight: 500 }}>Result:</span>
                  <span className="text-green-600 font-semibold" style={{ fontSize: "15px" }}>
                    {selectedProject.result}
                  </span>
                </div>
              </div>

              {/* End mark */}
              <div className="flex items-center gap-4 mt-12 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span className="text-purple-400/50 text-sm">&#9632; &#9632; &#9632;</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
            </article>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
