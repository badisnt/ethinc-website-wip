import { motion } from "motion/react";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";
import { ProjectsSection } from "@/components/ProjectsSection";

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
  return (
    <div className="pb-0">
      <div className="pt-28 pb-24 bg-[#1a1a3e] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2
                className="text-white mb-4"
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
              <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontSize: "16px", lineHeight: "1.7" }}>
                A structured, transparent approach that ensures every project delivers maximum value.
              </p>
            </div>

            <div className="relative">
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
                    <div className="h-full p-6 rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] hover:border-purple-500/20 shadow-sm transition-all duration-500">
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                          <step.icon className="w-5 h-5 text-white" />
                        </div>
                        <span
                          className="text-orange-400/70"
                          style={{ fontSize: "36px", fontWeight: 800, fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)' }}
                        >
                          {step.step}
                        </span>
                      </div>
                      <h3 className="text-white mb-3" style={{ fontSize: "17px", fontWeight: 600 }}>{step.title}</h3>
                      <p className="text-gray-400" style={{ fontSize: "14px", lineHeight: "1.7" }}>{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="py-24 bg-[#f5f3ee] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h1
              className="text-[#1a1a3e] mb-4"
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
            <p className="text-[#5a5a72] max-w-2xl mx-auto" style={{ fontSize: '16px', lineHeight: '1.7' }}>
              Explore our collection of AI projects that have delivered measurable impact across various industries.
            </p>
          </motion.div>

          <ProjectsSection />
        </div>
      </div>
    </div>
  );
}
