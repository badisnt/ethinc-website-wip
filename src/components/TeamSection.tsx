import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, ChevronRight, X, Mail } from "lucide-react";
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
    <section className="py-12 lg:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1c1c42]/50 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div>
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto sm:h-[520px]"
            >
              {team.map((person, i) => (
                <motion.button
                  key={person.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.1, duration: 0.5, ease }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedIndex(i)}
                  className="group relative rounded-2xl bg-white/[0.04] border border-white/[0.07] overflow-hidden text-center cursor-pointer hover:border-purple-500/30 hover:bg-white/[0.06] transition-colors duration-300"
                >
                  <div className="relative h-[400px] sm:h-[520px] overflow-hidden">
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
                        fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
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
            >
              <div className="grid lg:grid-cols-[260px_1fr] gap-6 lg:gap-10 lg:h-[520px]">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.08, ease }}
                    className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide"
                  >
                    {team.map((person, i) => {
                      const isActive = selectedIndex === i;
                      return (
                        <motion.button
                          key={person.id}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.12 + i * 0.06, duration: 0.4, ease }}
                          onClick={() => setSelectedIndex(i)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 shrink-0 lg:shrink text-left w-[220px] lg:w-full ${
                            isActive
                              ? "bg-white/[0.08] border-purple-500/30 shadow-lg shadow-purple-900/10"
                              : "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.1]"
                          }`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="active-indicator"
                              className="absolute left-0 top-[20%] bottom-[20%] w-[3px] rounded-full bg-gradient-to-b from-purple-500 to-orange-500 hidden lg:block"
                              transition={{ duration: 0.3, ease }}
                            />
                          )}

                          <div className="relative shrink-0">
                            <div
                              className={`absolute -inset-[2px] rounded-full transition-opacity duration-500 ${
                                isActive
                                  ? "bg-gradient-to-br from-purple-500 to-orange-500 opacity-100"
                                  : "opacity-0"
                              }`}
                            />
                            <img
                              src={person.image}
                              alt={person.name}
                              className={`relative w-12 h-12 rounded-full object-cover transition-all duration-300 ${
                                isActive ? "" : "grayscale-[40%]"
                              }`}
                            />
                            {isActive && (
                              <motion.div
                                layoutId="avatar-pulse"
                                className="absolute -inset-1 rounded-full border border-purple-500/30 animate-ping"
                                style={{ animationDuration: "2s" }}
                                transition={{ duration: 0.3, ease }}
                              />
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <p
                              className={`truncate transition-colors ${isActive ? "text-white" : "text-gray-300"}`}
                              style={{ fontSize: "14px", fontWeight: 600 }}
                            >
                              {person.name}
                            </p>
                            <p
                              className={`truncate transition-colors ${isActive ? "text-orange-400" : "text-gray-500"}`}
                              style={{ fontSize: "12px" }}
                            >
                              {person.shortRole}
                            </p>
                          </div>

                          <ChevronRight
                            className={`w-4 h-4 shrink-0 transition-all hidden lg:block ${
                              isActive
                                ? "text-orange-400 translate-x-0 opacity-100"
                                : "text-gray-600 -translate-x-1 opacity-0"
                            }`}
                          />
                        </motion.button>
                      );
                    })}
                  </motion.div>

                  <AnimatePresence mode="wait">
                    {member && (
                      <motion.div
                        key={selectedIndex}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease }}
                        className="relative rounded-2xl bg-white/[0.04] border border-white/[0.07] overflow-hidden lg:h-[520px]"
                      >
                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.25 }}
                          whileHover={{ opacity: 0.7 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setSelectedIndex(null)}
                          className="absolute top-3 right-3 z-10 p-1 text-orange-400 cursor-pointer"
                        >
                          <X className="w-4 h-4" />
                        </motion.button>
                        <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] h-full">
                          <div className="relative h-full">
                            <div className="h-full relative overflow-hidden">
                              <motion.img
                                key={member.id}
                                initial={{ scale: 1.06 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a3e] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#1a1a3e]/80" />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a3e] via-transparent to-transparent opacity-60 md:opacity-0" />

                              <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden">
                                <h3
                                  className="text-white"
                                  style={{
                                    fontSize: "24px",
                                    fontWeight: 700,
                                    fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
                                  }}
                                >
                                  {member.name}
                                </h3>
                                <p className="text-orange-400" style={{ fontSize: "14px", fontWeight: 500 }}>
                                  {member.role}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                            <div className="hidden md:block mb-6">
                              <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.06, duration: 0.4, ease }}
                                className="text-white mb-1"
                                style={{
                                  fontSize: "26px",
                                  fontWeight: 700,
                                  fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
                                }}
                              >
                                {member.name}
                              </motion.h3>
                              <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.4, ease }}
                                className="text-orange-400"
                                style={{ fontSize: "14px", fontWeight: 500 }}
                              >
                                {member.role}
                              </motion.p>
                            </div>

                            <motion.p
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.14, duration: 0.4, ease }}
                              className="text-gray-300 mb-8"
                              style={{ fontSize: "15px", lineHeight: "1.8" }}
                            >
                              {member.bio}
                            </motion.p>

                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2, duration: 0.4, ease }}
                            >
                              <div className="flex flex-wrap gap-3">
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
                              </div>
                            </motion.div>
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
      </div>
    </section>
  );
}
