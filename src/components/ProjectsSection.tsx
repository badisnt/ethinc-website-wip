import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, ChevronRight, X, ArrowRight } from "lucide-react";
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

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const isExpanded = selectedIndex !== null;
  const project = isExpanded && selectedIndex < filteredProjects.length
    ? filteredProjects[selectedIndex]
    : null;
  const absoluteIndex = project ? projects.findIndex((p) => p.id === project.id) : -1;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease }}
          >
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-lg shadow-purple-600/20"
                      : "bg-white text-[#5a5a72] hover:text-[#1a1a3e] hover:bg-gray-50 border border-gray-200/80"
                  }`}
                  style={{ fontSize: '13px', fontWeight: 500 }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((proj, i) => (
                <motion.button
                  key={proj.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedIndex(filteredProjects.indexOf(proj))}
                  className="group text-left"
                >
                  <div className="h-full rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-lg hover:border-purple-300/50 overflow-hidden transition-all duration-500">
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <ImageWithFallback
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-purple-600/90 backdrop-blur-sm text-white" style={{ fontSize: '11px', fontWeight: 500 }}>
                          {proj.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-[#1a1a3e] mb-3" style={{ fontSize: '18px', fontWeight: 600 }}>{proj.title}</h3>
                      <p className="text-[#5a5a72] mb-4 line-clamp-2" style={{ fontSize: '14px', lineHeight: '1.7' }}>{proj.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-green-600" style={{ fontSize: '13px', fontWeight: 500 }}>{proj.result}</span>
                        <ArrowRight className="w-4 h-4 text-purple-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            <div className="grid lg:grid-cols-[260px_1fr] gap-6 lg:gap-10 h-[520px]">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.08, ease }}
                className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide"
              >
                {filteredProjects.map((proj, i) => {
                  const isActive = selectedIndex === i;
                  return (
                    <motion.button
                      key={proj.id}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + i * 0.06, duration: 0.4, ease }}
                      onClick={() => setSelectedIndex(i)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 shrink-0 lg:shrink text-left w-[220px] lg:w-full ${
                        isActive
                          ? "bg-purple-50 border-purple-300/50 shadow-lg"
                          : "bg-white border-gray-200/80 hover:border-purple-200 hover:bg-gray-50"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="project-active"
                          className="absolute left-0 top-[20%] bottom-[20%] w-[3px] rounded-full bg-gradient-to-b from-purple-500 to-orange-500 hidden lg:block"
                          transition={{ duration: 0.3, ease }}
                        />
                      )}
                      <div className="relative shrink-0 w-12 h-12 rounded-xl overflow-hidden bg-gray-100">
                        <ImageWithFallback
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className={`truncate ${isActive ? "text-[#1a1a3e]" : "text-[#5a5a72]"}`} style={{ fontSize: "14px", fontWeight: 600 }}>
                          {proj.title}
                        </p>
                        <p className={`truncate ${isActive ? "text-orange-500" : "text-[#8a8a9e]"}`} style={{ fontSize: "12px" }}>
                          {proj.category}
                        </p>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 hidden lg:block ${
                          isActive ? "text-orange-500 opacity-100" : "text-gray-400 opacity-0"
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </motion.div>

              <AnimatePresence mode="wait">
                {project && (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease }}
                    className="relative rounded-2xl bg-white border border-gray-200/80 shadow-lg overflow-hidden h-[520px]"
                  >
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ opacity: 0.7 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedIndex(null)}
                      className="absolute top-3 right-3 z-10 p-1 text-orange-500 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </motion.button>
                    <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] h-full">
                      <div className="relative h-full">
                        <div className="h-full relative overflow-hidden">
                          <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/90" />
                        </div>
                      </div>
                      <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                        <h3 className="text-[#1a1a3e] mb-1" style={{ fontSize: "26px", fontWeight: 700, fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)' }}>
                          {project.title}
                        </h3>
                        <p className="text-orange-500 mb-4" style={{ fontSize: "14px", fontWeight: 500 }}>
                          {project.category}
                        </p>
                        <p className="text-[#5a5a72] mb-6" style={{ fontSize: "15px", lineHeight: "1.8" }}>
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-0.5 rounded-full bg-gray-100 text-[#5a5a72] border border-gray-200/80" style={{ fontSize: '11px' }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="text-green-600" style={{ fontSize: '13px', fontWeight: 500 }}>{project.result}</span>
                          <button className="text-orange-500 hover:text-orange-600 transition-colors">
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
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
  );
}
