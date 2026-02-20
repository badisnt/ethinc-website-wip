import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, MapPin, GraduationCap, ChevronRight } from "lucide-react";
import Selim from "@/assets/people/selim.png";
import Nizar from "@/assets/people/nizar.jpeg";
import Badis from "@/assets/people/badis.png";

const team = [
  {
    id: 1,
    name: "Nizar Ghandri",
    role: "Co-Founder & Chief Technology Officer",
    shortRole: "CTO",
    image: Nizar,
    bio: "Nizar leads Ethinc's technical vision and architecture. With a background in machine learning and software engineering from EPFL, he specializes in building scalable AI systems that bridge the gap between cutting-edge research and production-ready applications. His work spans natural language processing, generative AI, and graph-based machine learning.",
    focus: [
      "Technical Architecture & System Design",
      "NLP & Generative AI",
      "Graph Machine Learning",
      "MLOps & Infrastructure",
    ],
    education: "EPFL, MSc Computer Science",
    location: "Lausanne, Switzerland",
    linkedin: "https://www.linkedin.com/in/nizar-ghandri-232b71174/",
  },
  {
    id: 2,
    name: "Selim Fekih",
    role: "Co-Founder & Chief Operating Officer",
    shortRole: "COO",
    image: Selim,
    bio: "Selim drives Ethinc's business strategy and client relationships. An EPFL graduate with deep expertise in AI ethics and natural language processing, he ensures every project delivers measurable impact while adhering to responsible AI principles. He bridges the gap between technical capabilities and real business needs.",
    focus: [
      "Business Strategy & Operations",
      "AI Ethics & Governance",
      "Client Partnerships",
      "Product Management",
    ],
    education: "EPFL, MSc Data Science",
    location: "Lausanne, Switzerland",
    linkedin: "https://www.linkedin.com/in/selim-fekih-a37521181/",
  },
  {
    id: 3,
    name: "Badis Machraoui",
    role: "Co-Founder & Principal AI Engineer",
    shortRole: "Principal Engineer",
    image: Badis,
    bio: "Badis is the engineering force behind Ethinc's computer vision and edge AI solutions. With expertise in robotics and deep learning from EPFL, he designs and deploys high-performance models that operate in real-time production environments. His focus on efficiency and reliability ensures solutions that work at scale.",
    focus: [
      "Computer Vision & Image Processing",
      "Edge AI & Robotics",
      "Deep Learning Research",
      "Production Engineering",
    ],
    education: "EPFL, MSc Robotics",
    location: "Lausanne, Switzerland",
    linkedin: "https://www.linkedin.com/in/badis-machraoui-9a44051b7/",
  },
];

export function TeamSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const member = team[selectedIndex];

  return (
    <section className="py-12 lg:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1c1c42]/50 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-[260px_1fr] gap-6 lg:gap-10">
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
            {team.map((person, i) => {
              const isActive = selectedIndex === i;
              return (
                <motion.button
                  key={person.id}
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
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
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
                        isActive ? "ring-0" : "grayscale-[40%]"
                      }`}
                    />
                    {isActive && (
                      <motion.div
                        layoutId="avatar-pulse"
                        className="absolute -inset-1 rounded-full border border-purple-500/30 animate-ping"
                        style={{ animationDuration: "2s" }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className={`truncate transition-colors ${
                        isActive ? "text-white" : "text-gray-300"
                      }`}
                      style={{ fontSize: "14px", fontWeight: 600 }}
                    >
                      {person.name}
                    </p>
                    <p
                      className={`truncate transition-colors ${
                        isActive ? "text-orange-400" : "text-gray-500"
                      }`}
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
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-2xl bg-white/[0.04] border border-white/[0.07] overflow-hidden"
            >
              <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
                <div className="relative">
                  <div className="aspect-[3/4] md:aspect-auto md:h-full relative overflow-hidden">
                    <img
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
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
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
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                      className="text-orange-400"
                      style={{ fontSize: "14px", fontWeight: 500 }}
                    >
                      {member.role}
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-3 mb-6"
                  >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.06] text-gray-300" style={{ fontSize: "12px" }}>
                      <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                      {member.education}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.06] text-gray-300" style={{ fontSize: "12px" }}>
                      <MapPin className="w-3.5 h-3.5 text-orange-400" />
                      {member.location}
                    </span>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    className="text-gray-300 mb-8"
                    style={{ fontSize: "15px", lineHeight: "1.8" }}
                  >
                    {member.bio}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                  >
                    <p
                      className="text-gray-500 uppercase tracking-wider mb-3"
                      style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em" }}
                    >
                      Areas of Focus
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {member.focus.map((area, i) => (
                        <motion.div
                          key={area}
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.35 + i * 0.05 }}
                          className="flex items-center gap-2.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 shrink-0" />
                          <span className="text-gray-400" style={{ fontSize: "13px" }}>
                            {area}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 border border-blue-500/15 hover:border-blue-500/25 transition-all duration-300"
                      style={{ fontSize: "13px", fontWeight: 500 }}
                    >
                      <Linkedin className="w-4 h-4" />
                      Connect on LinkedIn
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
