import { motion } from "motion/react";
import { Award, Users, GraduationCap, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { TeamSection } from "@/components/TeamSection";
import { Sparkles, ArrowRight } from "lucide-react";

const milestones = [
  { icon: Award, label: "Founded", value: "2023" },
  { icon: Users, label: "Team Members", value: "3+" },
  { icon: GraduationCap, label: "EPFL Alumni", value: "100%" },
  { icon: Globe, label: "Based in", value: "Lausanne" },
];

export function AboutPage() {
  return (
    <div className="pb-0">
      <div className="pt-28 pb-0 bg-[#1a1a3e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-4"
          >
            <h1
              className="text-white mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
              }}
            >
              The People Behind{" "}
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                Ethinc
              </span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto" style={{ fontSize: '17px', lineHeight: '1.8' }}>
              We are a team of EPFL alumni and AI specialists based in Lausanne, Switzerland. We combine deep technical
              expertise with a passion for solving real-world problems through cutting-edge artificial intelligence.
            </p>
          </motion.div>
        </div>

        <TeamSection />
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
              className="text-[#1a1a3e] mb-4"
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
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
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
                <div className="text-[#1a1a3e] mb-1" style={{ fontSize: '26px', fontWeight: 700, fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)' }}>
                  {item.value}
                </div>
                <div className="text-[#8a8a9e]" style={{ fontSize: '13px' }}>{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <section className="relative overflow-hidden bg-[#1a1a3e]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#251850] via-[#1f1a4a] to-[#211c45]" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-orange-600/[0.08]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/[0.08] rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/15 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-10"
          >
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                <Sparkles className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400" style={{ fontSize: "14px", fontWeight: 500 }}>We're growing</span>
              </div>
              <h2
                className="text-white mb-4"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
                  lineHeight: 1.2,
                }}
              >
                Interested in joining our team?
              </h2>
              <p className="text-gray-300 max-w-xl" style={{ fontSize: "17px", lineHeight: "1.8" }}>
                We're always looking for talented people who share our passion
                for AI and want to work on meaningful projects. Get in touch
                and tell us about yourself.
              </p>
            </div>

            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white hover:from-purple-500 hover:to-orange-400 transition-all duration-300 shadow-xl shadow-purple-600/20 group"
              style={{ fontSize: "15px", fontWeight: 600 }}
            >
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
