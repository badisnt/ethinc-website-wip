import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import EthincIcon from "@/assets/ethinc_icon2.png";

const stats = [
  { value: 3, suffix: "+", labelKey: "hero.stats.industries" },
  { value: 10, suffix: "+", labelKey: "hero.stats.projects" },
  { value: 100, suffix: "%", labelKey: "hero.stats.epfl" },
  { value: 2025, suffix: "", labelKey: "hero.stats.founded" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setShowGlow(true);
              setTimeout(() => setShowGlow(false), 800);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="relative">
      {showGlow && (
        <motion.div
          className="absolute inset-0 rounded-lg"
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(249,115,22,0.15) 50%, transparent 70%)",
          }}
        />
      )}
      {count}{suffix}
    </div>
  );
}

function StaggeredHeading({ children }: { children: string }) {
  const words = children.split(" ");

  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: 0.3 + i * 0.07,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

function GenerativeVisual({ mouseXNorm, mouseYNorm }: { mouseXNorm: ReturnType<typeof useSpring>; mouseYNorm: ReturnType<typeof useSpring> }) {
  const offsetX = useTransform(mouseXNorm, [0, 1], [-12, 12]);
  const offsetY = useTransform(mouseYNorm, [0, 1], [-12, 12]);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const cols = 14;
  const rows = 14;
  const dots = useMemo(() => {
    const arr: { x: number; y: number; delay: number; size: number }[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        arr.push({
          x: (c / (cols - 1)) * 100,
          y: (r / (rows - 1)) * 100,
          delay: (c + r) * 0.06,
          size: (c + r) % 5 === 0 ? 3.5 : 2,
        });
      }
    }
    return arr;
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <AnimatePresence>
        {showLogo && (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center"
            exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div className="relative">
              <motion.img
                src={EthincIcon}
                alt="Ethinc"
                className="w-28 h-28 md:w-36 md:h-36 object-contain relative z-10"
                animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full blur-2xl -m-6"
                style={{
                  background: "radial-gradient(circle, rgba(124,58,237,0.35) 0%, rgba(249,115,22,0.15) 50%, transparent 70%)",
                }}
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: showLogo ? 0 : 1 }}
        transition={{ duration: 1, delay: showLogo ? 0 : 0.2 }}
      >
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{
            width: "70%", height: "70%", top: "5%", left: "10%",
            background: "radial-gradient(circle, rgba(124,58,237,0.28) 0%, rgba(139,92,246,0.10) 60%, transparent 80%)",
            x: offsetX,
            y: offsetY,
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{
            width: "55%", height: "55%", bottom: "0%", right: "5%",
            background: "radial-gradient(circle, rgba(249,115,22,0.22) 0%, rgba(251,191,36,0.08) 60%, transparent 80%)",
          }}
          animate={{ scale: [1, 1.2, 1], x: [0, -12, 0], y: [0, 12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute rounded-full blur-2xl"
          style={{
            width: "35%", height: "35%", top: "35%", left: "35%",
            background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)",
          }}
          animate={{ scale: [0.9, 1.3, 0.9], borderRadius: ["50%", "40% 60%", "50%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <radialGradient id="dotFade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="70%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="fadeMask">
              <rect x="0" y="0" width="100" height="100" fill="url(#dotFade)" />
            </mask>
          </defs>
          <g mask="url(#fadeMask)">
            {dots.map((dot, i) => (
              <motion.circle
                key={i}
                cx={dot.x}
                cy={dot.y}
                r={dot.size * 0.35}
                fill={
                  (Math.floor(i / cols) + (i % cols)) % 7 === 0
                    ? "rgba(249,115,22,0.55)"
                    : (Math.floor(i / cols) + (i % cols)) % 5 === 0
                    ? "rgba(167,139,250,0.6)"
                    : "rgba(200,200,230,0.2)"
                }
                animate={{
                  cy: [dot.y, dot.y - 2.5, dot.y],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: dot.delay,
                }}
              />
            ))}
          </g>
        </svg>

        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0" />
              <stop offset="30%" stopColor="#a78bfa" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#f97316" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0" />
              <stop offset="40%" stopColor="#818cf8" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#fbbf24" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 10 55 C 25 30, 40 70, 55 45 S 80 60, 95 35"
            stroke="url(#lineGrad1)"
            strokeWidth="0.4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M 5 35 C 20 60, 45 20, 60 55 S 85 30, 100 50"
            stroke="url(#lineGrad2)"
            strokeWidth="0.35"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          <motion.path
            d="M 15 75 C 30 50, 50 80, 70 40 S 90 65, 100 45"
            stroke="url(#lineGrad1)"
            strokeWidth="0.3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
        </svg>

        {[
          { x: 18, y: 22, size: 6, rot: 45, dur: 14, color: "rgba(139,92,246,0.12)" },
          { x: 75, y: 18, size: 8, rot: 20, dur: 18, color: "rgba(249,115,22,0.10)" },
          { x: 82, y: 72, size: 5, rot: 60, dur: 16, color: "rgba(167,139,250,0.14)" },
          { x: 25, y: 78, size: 7, rot: 15, dur: 20, color: "rgba(251,191,36,0.10)" },
          { x: 50, y: 15, size: 4, rot: 30, dur: 12, color: "rgba(124,58,237,0.15)" },
        ].map((shape, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute border"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: `${shape.size}%`,
              height: `${shape.size}%`,
              borderColor: shape.color,
              borderRadius: i % 2 === 0 ? "2px" : "50%",
              background: shape.color.replace(/[\d.]+\)$/, (m) => `${parseFloat(m) * 0.3})`),
            }}
            animate={{
              rotate: [shape.rot, shape.rot + 180, shape.rot + 360],
              y: [-4, 4, -4],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: shape.dur,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="relative"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-20 h-20 rounded-full border border-purple-500/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-orange-400/70" />
            </motion.div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-500/20 to-orange-500/15 backdrop-blur-sm" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-400/10 to-orange-400/10" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 });
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowSpringX = useSpring(glowX, { stiffness: 50, damping: 20 });
  const glowSpringY = useSpring(glowY, { stiffness: 50, damping: 20 });

  const { scrollYProgress: statsScrollProgress } = useScroll({
    target: statsRef,
    offset: ["start end", "end start"],
  });
  const statsY = useTransform(statsScrollProgress, [0, 0.3, 0.5], [40, 10, 0]);
  const statsOpacity = useTransform(statsScrollProgress, [0, 0.3, 0.5], [0, 0.5, 1]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
      glowX.set(e.clientX - rect.left);
      glowY.set(e.clientY - rect.top);
    }
  }, [mouseX, mouseY, glowX, glowY]);

  const fullTitle = t('hero.title', 'Making Intelligence Work for Organizations');
  const highlightWord = 'Organizations';
  const allWords = fullTitle.split(/\s+/).filter(Boolean);

  const fallbackLabels = ["Industries Served", "Projects Delivered", "EPFL Alumni", "Founded"];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e1e45] via-[#1a1a3e] to-[#1c1c42]" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/[0.08] via-transparent to-orange-900/[0.06]" />
      </div>

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          x: glowSpringX,
          y: glowSpringY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, rgba(249,115,22,0.03) 40%, transparent 70%)",
        }}
      />

      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              className="text-white mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
              }}
            >
              {allWords.map((word, i) => {
                const isHighlight = word.toLowerCase() === highlightWord.toLowerCase();
                return (
                  <motion.span
                    key={i}
                    className={`inline-block mr-[0.3em] ${
                      isHighlight
                        ? "bg-gradient-to-r from-purple-400 via-orange-300 to-orange-400 bg-clip-text text-transparent"
                        : ""
                    }`}
                    initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + i * 0.08,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h1>

            <motion.p
              className="text-gray-300 mb-8 max-w-xl"
              style={{ fontSize: '17px', lineHeight: '1.8' }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t('hero.subtitle', 'We design and implement AI and data solutions that improve workflows, support decision-making, and unlock value from organizational data.')}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-orange-500 text-white hover:from-purple-500 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-purple-600/20"
                style={{ fontSize: '15px', fontWeight: 500 }}
              >
                {t('hero.viewWork', 'View Our Work')}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/[0.1] text-white hover:bg-white/[0.05] transition-all duration-300"
                style={{ fontSize: '15px', fontWeight: 500 }}
              >
                {t('hero.getInTouch', 'Get in Touch')}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <GenerativeVisual mouseXNorm={springX} mouseYNorm={springY} />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
