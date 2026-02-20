import { motion } from "motion/react";
import { Target, Shield, Zap, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Impact-Driven",
    description: "Every solution we build is measured by the tangible business impact it delivers.",
  },
  {
    icon: Shield,
    title: "Ethical AI",
    description: "We prioritize fairness, transparency, and responsible AI practices in everything we do.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We stay at the cutting edge, constantly exploring and adopting the latest AI breakthroughs.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership",
    description: "We work as an extension of your team, building long-term relationships based on trust and results.",
  },
];

export function ValuesSection() {
  return (
    <section className="py-20 bg-[#1a1a3e] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
                Values
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="text-center p-6 rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] hover:border-purple-500/20 shadow-sm transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-orange-500/20 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white mb-3" style={{ fontSize: "17px", fontWeight: 600 }}>
                  {value.title}
                </h3>
                <p className="text-gray-400" style={{ fontSize: "14px", lineHeight: "1.7" }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
