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

export function MarqueeSection() {
  const doubled = [...items, ...items];

  return (
    <section
      className="py-14 relative overflow-hidden bg-[#f5f3ee] border-y border-gray-200/60"
    >
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
