import { motion } from "motion/react";
import { Award, Users, GraduationCap, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CTASection } from "@/components/CTASection";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

const milestones = [
  { icon: Award, label: "Founded", value: "2023" },
  { icon: Users, label: "Team Members", value: "3+" },
  { icon: GraduationCap, label: "EPFL Alumni", value: "100%" },
  { icon: Globe, label: "Based in", value: "Lausanne" },
];

export function AboutPage() {
  return (
    <div className="pb-0">
      <div className="pt-28 pb-20 bg-[#14142b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1
              className="text-white mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
              }}
            >
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                Ethinc
              </span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto" style={{ fontSize: '17px', lineHeight: '1.8' }}>
              We are a team of EPFL alumni and AI specialists based in Lausanne, Switzerland. We combine deep technical
              expertise with a passion for solving real-world problems through cutting-edge artificial intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-white mb-6" style={{ fontSize: '28px', fontWeight: 700, fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)' }}>
                Our Story
              </h2>
              <div className="space-y-4 text-gray-300" style={{ fontSize: '15px', lineHeight: '1.8' }}>
                <p>
                  Ethinc was born from a shared vision at EPFL: to bridge the gap between cutting-edge AI research and
                  practical business applications. Our founders saw firsthand how powerful AI models remained locked in
                  research labs while businesses struggled with manual processes.
                </p>
                <p>
                  We set out to change that. Today, we help organizations across industries leverage AI to transform
                  their operations, from natural language processing and computer vision to graph machine learning and
                  predictive analytics.
                </p>
                <p>
                  Based in the heart of Switzerland's innovation ecosystem in Lausanne, we combine Swiss precision with
                  cutting-edge technology to deliver solutions that matter.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 to-orange-600/[0.08] rounded-2xl blur-2xl" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1582005450386-52b25f82d9bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG9mZmljZSUyMHRlY2hub2xvZ3klMjBzdGFydHVwfGVufDF8fHx8MTc3MTQyMDI4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team at work"
                className="relative rounded-2xl border border-white/[0.08] w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="py-24 bg-[#f5f3ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-[#14142b] mb-4"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 700,
                fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
              }}
            >
              At a{" "}
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                Glance
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {milestones.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="text-center p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-orange-50 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-[#14142b] mb-1" style={{ fontSize: '26px', fontWeight: 700, fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)' }}>
                  {item.value}
                </div>
                <div className="text-[#8a8a9e]" style={{ fontSize: '13px' }}>{item.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/team"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-orange-500 transition-colors group"
              style={{ fontSize: '15px', fontWeight: 500 }}
            >
              Meet our team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
