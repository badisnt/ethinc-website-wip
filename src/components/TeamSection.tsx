import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, X, Mail } from "lucide-react";
import Selim from "@/assets/people/selim.png";
import Nizar from "@/assets/people/nizar.jpeg";
import Badis from "@/assets/people/badis.png";

const team = [
  {
    id: 1,
    name: "Nizar Ghandri",
    role: "Chief Technology Officer",
    shortRole: "CTO",
    image: Nizar,
    bio: "Nizar leads the technical vision at Ethinc. With experience designing and deploying machine learning and generative AI systems across industry environments, he focuses on building reliable AI infrastructures that integrate with real workflows. His work spans applied machine learning, graph analytics, and large-scale AI deployment.",
    focus: [
      "Technical Architecture & System Design",
      "NLP & Generative AI",
      "Graph Machine Learning",
      "MLOps & Infrastructure",
    ],
    education: "EPFL, MSc Computer Science",
    location: "Lausanne, Switzerland",
    linkedin: "https://www.linkedin.com/in/nizar-ghandri-232b71174/",
    email: "nizar.ghandri@ethinc.ch",
  },
  {
    id: 2,
    name: "Selim Fekih",
    role: "Chief Operating Officer",
    shortRole: "COO",
    image: Selim,
    bio: "Selim oversees operations and project delivery at Ethinc, ensuring that technical work translates into practical systems for real-world organizations. His background in NLP and AI for humanitarian and international contexts has shaped a strong focus on multilingual data analysis and privacy-aware system design. At Ethinc, he bridges technical rigor with thoughtful collaboration across teams and partners.",
    focus: [
      "Business Strategy & Operations",
      "AI Ethics & Governance",
      "Client Partnerships",
      "Product Management",
    ],
    education: "EPFL, MSc Data Science",
    location: "Lausanne, Switzerland",
    linkedin: "https://www.linkedin.com/in/selim-fekih-a37521181/",
    email: "selim.fekih@ethinc.ch",
  },
  {
    id: 3,
    name: "Badis Machraoui",
    role: "Founding Engineer",
    shortRole: "Engineer",
    image: Badis,
    bio: "Badis contributes to the development of Ethinc's software systems and technical infrastructure. His work spans backend development, AI integration, and cybersecurity-informed system design, allowing him to support projects across multiple layers of the technology stack. He plays a fundamental role in translating ideas into reliable and maintainable engineering solutions.",
    focus: [
      "Computer Vision & Image Processing",
      "Edge AI & Robotics",
      "Deep Learning Research",
      "Production Engineering",
    ],
    education: "EPFL, MSc Robotics",
    location: "Lausanne, Switzerland",
    linkedin: "https://www.linkedin.com/in/badis-machraoui-9a44051b7/",
    email: "badis.machraoui@ethinc.ch",
  },
];

const ease = [0.4, 0, 0.2, 1] as const;

export function TeamSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const isExpanded = selectedIndex !== null;
  const member = isExpanded ? team[selectedIndex] : null;

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.div
            key="grid"
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto sm:h-[420px]"
          >
            {team.map((person) => (
              <motion.button
                key={person.id}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedIndex(team.indexOf(person))}
                className="group relative rounded-2xl bg-white/[0.04] border border-white/[0.07] overflow-hidden text-center cursor-pointer hover:border-purple-500/30 hover:bg-white/[0.06] transition-colors duration-300 w-full"
              >
                <div className="relative h-[320px] sm:h-[420px] overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a3e] via-[#1a1a3e]/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p
                    className="text-white mb-1"
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      fontFamily: 'var(--font-heading, "Albert Sans", system-ui, sans-serif)',
                    }}
                  >
                    {person.name}
                  </p>
                  <p className="text-orange-400" style={{ fontSize: "13px", fontWeight: 500 }}>
                    {person.shortRole}
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="w-full"
          >
            {member && (
              <div className="relative rounded-2xl bg-white/[0.04] border border-white/[0.07] overflow-hidden">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.25 }}
                  whileHover={{ opacity: 0.7 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/[0.1] border border-white/[0.12] text-white/80 hover:text-white hover:bg-white/[0.2] transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </motion.button>
                <div className="grid md:grid-cols-[minmax(280px,40%)_1fr] min-h-[400px]">
                  <div className="relative min-h-[300px] md:min-h-[450px] overflow-hidden">
                    <motion.img
                      key={member.id}
                      initial={{ opacity: 0.7, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full min-h-[300px] object-cover block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a3e] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#1a1a3e]/60" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden">
                      <h3 className="text-white" style={{ fontSize: "22px", fontWeight: 700, fontFamily: 'var(--font-heading, "Albert Sans", system-ui, sans-serif)' }}>
                        {member.name}
                      </h3>
                      <p className="text-orange-400" style={{ fontSize: "14px", fontWeight: 500 }}>{member.role}</p>
                    </div>
                  </div>

                  <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.4, ease }}
                      className="text-white mb-1 hidden md:block"
                      style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, fontFamily: 'var(--font-heading, "Albert Sans", system-ui, sans-serif)' }}
                    >
                      {member.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.4, ease }}
                      className="text-orange-400 mb-6"
                      style={{ fontSize: "15px", fontWeight: 500 }}
                    >
                      {member.role}
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4, ease }}
                      className="text-gray-300 mb-8"
                      style={{ fontSize: "15px", lineHeight: "1.8" }}
                    >
                      {member.bio}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.4, ease }}
                      className="flex flex-wrap gap-3"
                    >
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 border border-blue-500/15 hover:border-blue-500/25 transition-all duration-300"
                        style={{ fontSize: "13px", fontWeight: 500 }}
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 border border-orange-500/15 hover:border-orange-500/25 transition-all duration-300"
                        style={{ fontSize: "13px", fontWeight: 500 }}
                      >
                        <Mail className="w-4 h-4" />
                        {member.email}
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
