import { motion } from "motion/react";
import { TeamSection } from "@/components/TeamSection";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const fontOptions = [
  {
    name: "Archivo",
    family: "'Archivo', sans-serif",
    googleParam: "Archivo:wght@400;500;600;700",
    description: "Grotesque with squared terminals. Inspired by early 20th-century Swiss type. Strongly \"carré\".",
  },
  {
    name: "IBM Plex Sans",
    family: "'IBM Plex Sans', sans-serif",
    googleParam: "IBM+Plex+Sans:wght@400;500;600;700",
    description: "Industrial heritage meets Swiss precision. Designed for IBM's global identity — solid, neutral, tech.",
  },
  {
    name: "Outfit",
    family: "'Outfit', sans-serif",
    googleParam: "Outfit:wght@400;500;600;700",
    description: "Modern geometric with square proportions. Reassuring, clean, and highly legible.",
  },
  {
    name: "Albert Sans",
    family: "'Albert Sans', sans-serif",
    googleParam: "Albert+Sans:wght@400;500;600;700",
    description: "Geometric grotesque inspired by the Swiss International style. Balanced, neutral, confident.",
  },
  {
    name: "Manrope",
    family: "'Manrope', sans-serif",
    googleParam: "Manrope:wght@400;500;600;700",
    description: "Semi-condensed geometric. Slightly squared curves give it a structured, engineering feel.",
  },
  {
    name: "Red Hat Display",
    family: "'Red Hat Display', sans-serif",
    googleParam: "Red+Hat+Display:wght@400;500;600;700",
    description: "Squared geometric with open counters. Professional, modern, designed for interfaces and branding.",
  },
];

function FontShowcase() {
  useEffect(() => {
    const families = fontOptions.map((f) => f.googleParam).join("&family=");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${families}&display=swap`;
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  const sampleHeading = "Building AI Systems That Matter";
  const sampleBody = "We design, develop, and deploy responsible AI solutions with engineering rigor, ethical grounding, and a focus on real-world impact. Every system we build is meant to earn trust.";

  return (
    <section className="py-20 bg-[#f5f3ee]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-orange-500 uppercase tracking-[0.2em] mb-3" style={{ fontSize: "12px", fontWeight: 600 }}>
            Font Selection
          </p>
          <h2
            className="text-[#1a1a3e] mb-3"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)' }}
          >
            Pick a heading font
          </h2>
          <p className="text-[#5a5a72]" style={{ fontSize: "15px" }}>
            Each option below is Swiss-inspired, squared, and built for solid tech presence.
          </p>
        </div>

        <div className="grid gap-8">
          {fontOptions.map((font) => (
            <div
              key={font.name}
              className="rounded-2xl border border-gray-200/60 bg-white/80 overflow-hidden"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/40 bg-white/50">
                <div>
                  <span className="text-[#1a1a3e]" style={{ fontSize: "18px", fontWeight: 700, fontFamily: font.family }}>{font.name}</span>
                  <span className="text-[#8a8a9e] ml-3" style={{ fontSize: "13px" }}>{font.description}</span>
                </div>
              </div>
              <div className="p-6 md:p-8 space-y-5">
                <h3 style={{ fontFamily: font.family, fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 700, lineHeight: 1.2, color: "#1a1a3e" }}>
                  {sampleHeading}
                </h3>
                <p style={{ fontFamily: font.family, fontSize: "16px", lineHeight: 1.75, color: "#4a4a62", fontWeight: 400 }}>
                  {sampleBody}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {[400, 500, 600, 700].map((w) => (
                    <span
                      key={w}
                      className="px-4 py-2 rounded-lg bg-[#f5f3ee] text-[#1a1a3e]"
                      style={{ fontFamily: font.family, fontWeight: w, fontSize: "14px" }}
                    >
                      {w === 400 ? "Regular" : w === 500 ? "Medium" : w === 600 ? "Semibold" : "Bold"} ({w})
                    </span>
                  ))}
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <p style={{ fontFamily: font.family, fontSize: "32px", fontWeight: 700, color: "#1a1a3e", letterSpacing: "-0.02em" }}>
                    Aa Bb Cc Dd Ee Ff Gg
                  </p>
                  <p className="mt-1" style={{ fontFamily: font.family, fontSize: "20px", fontWeight: 500, color: "#5a5a72" }}>
                    0123456789 — ETHINC AI
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  const { t } = useTranslation();
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
              {t('aboutPage.titlePart1', 'Meet')}{" "}
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                {t('aboutPage.titlePart2', 'Us')}
              </span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto" style={{ fontSize: '17px', lineHeight: '1.8' }}>
              {t('aboutPage.subtitle', 'We are a team of EPFL alumni and AI specialists based in Lausanne, Switzerland. We combine deep technical expertise with a passion for solving real-world problems through cutting-edge artificial intelligence.')}
            </p>
          </motion.div>
        </div>

        <TeamSection />
      </div>

      <FontShowcase />

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
              <h2
                className="text-white mb-4"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
                  lineHeight: 1.2,
                }}
              >
                {t('aboutPage.joinTitle', 'Interested in joining our team?')}
              </h2>
              <p className="text-gray-300 max-w-xl" style={{ fontSize: "17px", lineHeight: "1.8" }}>
                {t('aboutPage.joinSubtitle', "We're always looking for talented people who share our passion for AI and want to work on meaningful projects. Get in touch and tell us about yourself.")}
              </p>
            </div>

            <a
              href="https://www.linkedin.com/company/108837274/admin/posted-jobs/open/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white hover:from-purple-500 hover:to-orange-400 transition-all duration-300 shadow-xl shadow-purple-600/20 group"
              style={{ fontSize: "15px", fontWeight: 600 }}
            >
              {t('aboutPage.applyNow', 'Apply Now')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
