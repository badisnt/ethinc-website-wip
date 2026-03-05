import { useTranslation } from "react-i18next";

const items = [
  "Natural Language Processing",
  "Computer Vision",
  "Graph Machine Learning",
  "Generative AI",
  "MLOps",
  "Predictive Analytics",
  "Edge AI",
  "Process Automation",
  "Data Engineering",
  "Deep Learning",
];

export function QuoteSection() {
  const { t } = useTranslation();
  return (
    <section className="py-16 px-4 bg-[#1a1a3e]">
      <div className="max-w-3xl mx-auto text-center">
        <span
          className="inline-block mb-4 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent"
          style={{ fontSize: "32px", fontFamily: "Georgia, serif", lineHeight: 1 }}
        >
          &ldquo;
        </span>
        <p
          className="text-gray-200 italic"
          style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: "1.9", fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)' }}
        >
          {t('quote.line1', '"Building meaningful AI systems requires more than technology.')}{" "}
          <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent font-semibold not-italic">
            {t('quote.highlight', 'It requires engineering rigor, responsible choices, and trust.')}
          </span>
          {t('quote.line2', '"')}
        </p>
        <span
          className="inline-block mt-4 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent"
          style={{ fontSize: "32px", fontFamily: "Georgia, serif", lineHeight: 1 }}
        >
          &rdquo;
        </span>
      </div>
    </section>
  );
}

export function MarqueeSection() {
  const doubled = [...items, ...items];

  return (
    <section className="relative overflow-hidden bg-[#f5f3ee] border-y border-gray-200/60 py-8">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f5f3ee] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f5f3ee] to-transparent z-10 pointer-events-none" />

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 25s linear infinite;
        }
      `}</style>

      <div className="marquee-track flex gap-10 whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-10 shrink-0">
            <span
              className={`uppercase tracking-[0.2em] select-none ${
                i % 2 === 0 ? 'text-[#6b6b82]' : 'text-[#9b8bb4]'
              }`}
              style={{ fontSize: '14px', fontWeight: 600 }}
            >
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 opacity-60" />
          </div>
        ))}
      </div>
    </section>
  );
}
