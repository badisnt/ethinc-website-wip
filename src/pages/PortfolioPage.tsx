import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Search, Lightbulb, Code2, Rocket } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

const categories = ["All", "Computer Vision", "NLP", "Machine Learning", "Data Analytics"];

const projects = [
  {
    id: 1,
    title: "Intelligent Document Processing",
    description:
      "Built an end-to-end document processing pipeline using NLP and OCR to automatically extract, classify, and validate information from complex multi-page documents for a Swiss financial institution.",
    category: "NLP",
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
    category: "Machine Learning",
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
    category: "Computer Vision",
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
    category: "Data Analytics",
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
    category: "Computer Vision",
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
    category: "Data Analytics",
    image:
      "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwYW5hbHl0aWNzJTIwcHJvamVjdHxlbnwxfHx8fDE3NzE0MjAyODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "Tableau", "SQL", "Forecasting"],
    result: "3x faster decision-making cycle",
  },
];

const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Assessment",
    description:
      "We begin by understanding your business challenges, data landscape, and objectives. Our team conducts a thorough assessment to identify the highest-impact AI opportunities.",
    color: "from-purple-500 to-violet-600",
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Strategy & Design",
    description:
      "We design a tailored AI solution architecture, selecting the right models, frameworks, and infrastructure. We create detailed technical specifications and project roadmaps.",
    color: "from-orange-500 to-amber-600",
  },
  {
    step: "03",
    icon: Code2,
    title: "Development & Training",
    description:
      "Our engineers build and train custom models using your data. We follow agile methodologies with regular demos and iterations to ensure alignment with your goals.",
    color: "from-amber-500 to-yellow-600",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Deployment & Support",
    description:
      "We deploy production-ready solutions with monitoring, automated retraining pipelines, and comprehensive documentation. Ongoing support ensures sustained performance.",
    color: "from-violet-500 to-purple-600",
  },
];

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pb-0">
      <div className="pt-28 pb-16 bg-[#14142b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1
              className="text-white mb-4"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
              }}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '16px', lineHeight: '1.7' }}>
              Explore our collection of AI projects that have delivered measurable impact across various industries.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-24 bg-[#f5f3ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2
                className="text-[#14142b] mb-4"
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
                }}
              >
                Our{" "}
                <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="text-[#5a5a72] max-w-2xl mx-auto" style={{ fontSize: "16px", lineHeight: "1.7" }}>
                A structured, transparent approach that ensures every project delivers maximum value.
              </p>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-purple-300/30 via-orange-300/25 to-purple-300/30 -translate-y-1/2" />
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    whileHover={{ y: -5 }}
                    className="relative"
                  >
                    <div className="h-full p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-lg hover:border-purple-300/50 transition-all duration-500">
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                          <step.icon className="w-5 h-5 text-white" />
                        </div>
                        <span
                          className="text-orange-300/50"
                          style={{ fontSize: "36px", fontWeight: 800, fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)' }}
                        >
                          {step.step}
                        </span>
                      </div>
                      <h3 className="text-[#14142b] mb-3" style={{ fontSize: "17px", fontWeight: 600 }}>{step.title}</h3>
                      <p className="text-[#5a5a72]" style={{ fontSize: "14px", lineHeight: "1.7" }}>{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="py-24 bg-[#14142b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-lg shadow-purple-600/20"
                    : "bg-white/[0.05] text-gray-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                }`}
                style={{ fontSize: '13px', fontWeight: 500 }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group"
                >
                  <div className="h-full rounded-2xl bg-white/[0.05] border border-white/[0.07] hover:border-orange-500/20 overflow-hidden transition-all duration-500">
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#14142b] via-transparent to-transparent opacity-60" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-purple-600/80 backdrop-blur-sm text-white" style={{ fontSize: '11px', fontWeight: 500 }}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-white mb-3" style={{ fontSize: '18px', fontWeight: 600 }}>{project.title}</h3>
                      <p className="text-gray-400 mb-4" style={{ fontSize: '14px', lineHeight: '1.7' }}>{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-0.5 rounded-full bg-white/[0.06] text-gray-400 border border-white/[0.06]" style={{ fontSize: '11px' }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                        <span className="text-green-400" style={{ fontSize: '13px', fontWeight: 500 }}>{project.result}</span>
                        <button className="text-orange-400 hover:text-orange-300 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
