import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CalendarDays, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function CTASection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#1a1a3e] min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-[#251850] via-[#1f1a4a] to-[#211c45]" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-orange-600/[0.08]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/[0.08] rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="flex-1 text-center md:text-left">
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
                lineHeight: 1.2,
              }}
            >
              {(() => {
                const title = t('cta.title', 'Interested in working with us?');
                const words = title.split(' ');
                const splitAt = Math.ceil(words.length * 0.4);
                return (
                  <>
                    <span className="text-gray-400">{words.slice(0, splitAt).join(' ')}</span>{" "}
                    <span className="text-white">{words.slice(splitAt).join(' ')}</span>
                  </>
                );
              })()}
            </h2>
            <p className="text-gray-300 max-w-xl" style={{ fontSize: '17px', lineHeight: '1.8' }}>
              {t('cta.subtitle', "Schedule a call and see how Ethinc's AI solutions can help your operations. We'd love to discuss your next project.")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white hover:from-purple-500 hover:to-orange-400 transition-all duration-300 shadow-xl shadow-purple-600/20 group"
              style={{ fontSize: '15px', fontWeight: 600 }}
            >
              <CalendarDays className="w-5 h-5" />
              {t('cta.button', 'Schedule a Call')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/projects"
              className="dashed-cta shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-xl text-white transition-all duration-300 group cursor-pointer relative"
              style={{ fontSize: '15px', fontWeight: 500 }}
            >
              <style>{`
                .dashed-cta {
                  background: transparent;
                  border: none;
                }
                .dashed-cta::before {
                  content: '';
                  position: absolute;
                  inset: 0;
                  border-radius: 0.75rem;
                  padding: 1.5px;
                  background: conic-gradient(
                    from var(--dash-angle, 0deg),
                    rgba(139,92,246,0.6) 0%,
                    transparent 15%,
                    transparent 35%,
                    rgba(249,115,22,0.5) 50%,
                    transparent 65%,
                    transparent 85%,
                    rgba(139,92,246,0.6) 100%
                  );
                  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                  mask-composite: exclude;
                  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                  -webkit-mask-composite: xor;
                  animation: dash-rotate 4s linear infinite;
                }
                .dashed-cta:hover::before {
                  animation-duration: 2s;
                  background: conic-gradient(
                    from var(--dash-angle, 0deg),
                    rgba(139,92,246,0.9) 0%,
                    transparent 15%,
                    transparent 35%,
                    rgba(249,115,22,0.8) 50%,
                    transparent 65%,
                    transparent 85%,
                    rgba(139,92,246,0.9) 100%
                  );
                  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                  mask-composite: exclude;
                  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                  -webkit-mask-composite: xor;
                }
                @keyframes dash-rotate {
                  to { --dash-angle: 360deg; }
                }
                @property --dash-angle {
                  syntax: '<angle>';
                  initial-value: 0deg;
                  inherits: false;
                }
              `}</style>
              {t('cta.viewWork', 'View Our Work')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
