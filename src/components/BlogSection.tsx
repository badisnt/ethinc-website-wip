import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, User, ChevronRight, X } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import kvImg from "@/assets/blog/kv.jpeg";
import constraintsImg from "@/assets/blog/constraints.jpeg";
import lastsImg from "@/assets/blog/lasts.jpeg";
import trustImg from "@/assets/blog/trust.jpeg";

const categories = ["All", "Lessons from the Field", "From the Build"];

const blogPosts = [
  {
    id: 1,
    title: "KV-Cache Optimization: Cutting LLM Inference Costs at Scale",
    excerpt:
      "A100s were running. Costs were rising. Performance wasn't improving. Here's how we optimized a production GenAI workload's inference layer for a 38% cost reduction per million tokens.",
    content: `A client was scaling a production GenAI workload. Traffic was increasing steadily, and GPU spend was growing faster than usage. During the engagement, we identified the inference layer as the primary optimization opportunity.

The system was running real-time LLM inference on A100 40GB GPUs using HF TGI. Despite strong hardware capacity, the workload showed high latency under multi-turn usage, low effective throughput per GPU, memory pressure limiting batch size, and significant cost spikes during peak traffic. The model weights were not the issue — the bottleneck was in how inference, memory, and batching were handled at the serving layer.

We focused on optimizing the inference stack rather than touching model weights. The intervention included enabling KV-cache reuse across streaming and multi-turn sessions, switching to PagedAttention to remove memory fragmentation, replacing FIFO batching with cache-aware dynamic batching, aligning context window and block size with actual prompt distribution, and adding observability around KV-cache hit rate to inform scheduling.

The improvements were immediate and quantifiable. P50 latency went from 1.9s to 1.2s (−37%), P95 from 4.8s to 2.9s (−40%), and throughput per GPU increased by 52% tokens/sec. Cost per 1M tokens dropped 38%, monthly GPU spend dropped 34%, and requests served per GPU increased by 55%.

At production scale, LLM inference efficiency is heavily influenced by memory layout, cache strategy, and batching logic. Optimizing KV-cache behavior and scheduling can unlock substantial gains without changing the underlying model.`,
    author: "Ethinc",
    date: "Feb 25, 2026",
    readTime: "5 min read",
    category: "From the Build",
    image: kvImg,
    featured: true,
  },
  {
    id: 2,
    title: "Designing AI Under Real Constraints",
    excerpt:
      "Information produced by an AI system is not \"the answer.\" It's evidence inside a decision process. Three design practices that determine whether AI systems succeed in practice.",
    content: `Information produced by an AI system is yet to be "the answer." It's evidence inside a decision process. In many real deployments, information is assembled from secondary sources — public reporting, institutional repositories, web signals, and scanned documents — often multilingual and highly context-dependent. The engineering problem is whether the output is usable under scrutiny.

Based on our experience delivering AI systems for clients, three design practices consistently determine whether those systems succeed in practice.

First, provenance by design: if a system produces an estimate, it should retain a precise trail of what contributed to it — sources, transformations, and assumptions. This is the practical purpose of data provenance: validation, auditability, and root-cause analysis when something looks off.

Second, human review as a system component: in high-stakes workflows, analysts don't take the model's output — they validate it. Human-in-the-loop is a formal pattern where humans are deliberately inserted into the workflow to ensure accuracy and safety.

Third, accountability across the lifecycle: modern AI governance frameworks increasingly treat explainability and accountability as lifecycle requirements — how systems are built, deployed, monitored, and updated.

When organizations operate under pressure and constraints, the model is rarely the bottleneck. The bottleneck is whether the system can produce outputs that are traceable back to sources, reviewable by analysts, explainable to decision-makers, and maintainable as contexts and definitions evolve.`,
    author: "Ethinc",
    date: "Feb 4, 2026",
    readTime: "4 min read",
    category: "Lessons from the Field",
    image: constraintsImg,
    featured: false,
  },
  {
    id: 3,
    title: "Building AI That Lasts",
    excerpt:
      "Nizar Ghandri reflects on his experience designing AI systems for tightly regulated environments — where trust, traceability, and operational fit are the true enablers of adoption.",
    content: `In this edition of our Lessons from the Field series, we reflect on the path and experience of Nizar Ghandri, our co-founder and CTO, whose work spans some of the most tightly regulated and technically demanding environments in the industry.

Nizar's journey into AI began with a deep fascination for the intersection of algorithms and reasoning. That early curiosity eventually led him into advanced machine learning and real-world AI engineering. But experience quickly taught him that technical performance is only half the equation. In large organizations, especially in sectors like finance and legal, the real challenge often lies in bringing AI into production under tight constraints around privacy, regulation, and risk governance.

He witnessed how the journey from a trained model to a production-ready system can be slowed significantly — not by model quality, but by everything around it: validation processes, auditability requirements, and the need for human-centric workflows. In such environments, trust, traceability, and operational fit become the true enablers of adoption.

To address this, Nizar helped design internal AI frameworks that made systems transparent and controllable. This included pilot tools for collecting iterative user feedback, step-by-step reasoning traces to make outputs explainable, decision systems with fallback logic and clear error signaling, and governance layers to align with compliance standards. Rather than build black boxes, the goal was to build systems that humans could inspect, understand, and improve.

One common pitfall he observed in organizations is the tendency to over-prioritize short-term convenience — such as relying entirely on external APIs — at the expense of long-term flexibility and sovereignty. His experience shows that hybrid architectures that combine cloud services with on-premise control often provide the best balance between speed, cost control, and regulatory alignment.`,
    author: "Nizar Ghandri",
    date: "Nov 15, 2025",
    readTime: "6 min read",
    category: "Lessons from the Field",
    image: lastsImg,
    featured: false,
  },
  {
    id: 4,
    title: "Building AI You Can Trust",
    excerpt:
      "Selim Fekih shares lessons from building NLP systems for humanitarian organizations — where wrong information doesn't just break a dashboard, it impacts people's lives.",
    content: `At Ethinc, trust is not a buzzword — it's a design principle. To explore what that really means, we sat down with our co-founder Selim Fekih, who has spent countless days building NLP systems for humanitarian and international organizations.

His journey into AI didn't begin with hype — it began with a personal thought experiment: "What if I could build a model that thinks like Nietzsche, and have a conversation with him?" That curiosity for language, philosophy, and meaning pulled him deep into Natural Language Processing, and eventually into the humanitarian sector.

One project that marked him was building an end-to-end NLP pipeline for crisis response, transforming chaotic data into real-time insights for field analysts. The feedback? "This saved us hours we didn't have." That's when it clicked: AI isn't just about performance — it's about reliability, trust, and making people's work easier.

But trust is fragile. "The hardest lesson was adoption by field analysts," Selim told us. Even a technically sound model can be dismissed if users don't trust it. Especially in sensitive environments, analysts need evidence-based outputs and systems that integrate seamlessly into their workflows, not slow them down.

That's why Selim's approach has become almost obsessively meticulous. In projects like ReporterAI.org, the margin for error is very thin. Wrong information doesn't just break a dashboard — it breaks confidence and impacts people's lives. The answer? Transparent models, careful evaluation, human validation, and humility in design.

And the idea that NGOs lag behind in AI? "Some of the most advanced, practical AI systems I've worked on were built in humanitarian orgs — with fewer resources, but far more purpose."`,
    author: "Selim Fekih",
    date: "Nov 8, 2025",
    readTime: "5 min read",
    category: "Lessons from the Field",
    image: trustImg,
    featured: false,
  },
];

const ease = [0.4, 0, 0.2, 1] as const;

export function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const isExpanded = selectedIndex !== null;
  const post = isExpanded && selectedIndex < filteredPosts.length
    ? filteredPosts[selectedIndex]
    : null;

  return (
    <div>
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease }}
          >
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-lg shadow-purple-600/20"
                      : "bg-white/[0.08] text-gray-300 hover:text-white hover:bg-white/[0.12] border border-white/[0.1]"
                  }`}
                  style={{ fontSize: '13px', fontWeight: 500 }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((p, i) => (
                <motion.button
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedIndex(i)}
                  className="group text-left"
                >
                  <div className="h-full rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] hover:border-purple-500/20 overflow-hidden transition-all duration-500">
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <ImageWithFallback
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3 inline-block" style={{ fontSize: '11px', fontWeight: 500 }}>
                        {p.category}
                      </span>
                      <h3 className="text-white mb-3 group-hover:text-orange-300 transition-colors" style={{ fontSize: '17px', fontWeight: 600, lineHeight: 1.4 }}>
                        {p.title}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-2" style={{ fontSize: '14px', lineHeight: '1.7' }}>{p.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                        <div className="flex items-center gap-3 text-gray-500" style={{ fontSize: '12px' }}>
                          <span className="flex items-center gap-1"><User className="w-3 h-3" />{p.author}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{p.readTime}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            <div className="grid lg:grid-cols-[260px_1fr] gap-6 lg:gap-10 h-[520px]">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.08, ease }}
                className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide"
              >
                {filteredPosts.map((p, i) => {
                  const isActive = selectedIndex === i;
                  return (
                    <motion.button
                      key={p.id}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + i * 0.06, duration: 0.4, ease }}
                      onClick={() => setSelectedIndex(i)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 shrink-0 lg:shrink text-left w-[220px] lg:w-full ${
                        isActive
                          ? "bg-white/[0.12] border-purple-500/30 shadow-lg"
                          : "bg-white/[0.05] border-white/[0.08] hover:border-purple-500/20 hover:bg-white/[0.08]"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="blog-active"
                          className="absolute left-0 top-[20%] bottom-[20%] w-[3px] rounded-full bg-gradient-to-b from-purple-500 to-orange-500 hidden lg:block"
                          transition={{ duration: 0.3, ease }}
                        />
                      )}
                      <div className="relative shrink-0 w-12 h-12 rounded-xl overflow-hidden bg-white/[0.1]">
                        <ImageWithFallback
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className={`truncate ${isActive ? "text-white" : "text-gray-300"}`} style={{ fontSize: "14px", fontWeight: 600 }}>
                          {p.title}
                        </p>
                        <p className={`truncate ${isActive ? "text-orange-400" : "text-gray-500"}`} style={{ fontSize: "12px" }}>
                          {p.category}
                        </p>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 hidden lg:block ${
                          isActive ? "text-orange-400 opacity-100" : "text-gray-500 opacity-0"
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </motion.div>

              <AnimatePresence mode="wait">
                {post && (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease }}
                    className="relative rounded-2xl bg-white/[0.05] border border-white/[0.08] shadow-lg overflow-hidden h-[520px]"
                  >
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ opacity: 0.7 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedIndex(null)}
                      className="absolute top-3 right-3 z-10 p-1 text-orange-500 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </motion.button>
                    <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] h-full">
                      <div className="relative h-full">
                        <div className="h-full relative overflow-hidden">
                          <ImageWithFallback
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1a1a3e]/95" />
                        </div>
                      </div>
                      <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center overflow-y-auto">
                        <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 w-fit mb-4" style={{ fontSize: '12px', fontWeight: 500 }}>
                          {post.category}
                        </span>
                        <h3 className="text-white mb-4" style={{ fontSize: "24px", fontWeight: 700, fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)' }}>
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-4 text-gray-400 mb-6" style={{ fontSize: '13px' }}>
                          <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{post.author}</span>
                          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                          <span>{post.date}</span>
                        </div>
                        <p className="text-gray-400" style={{ fontSize: '15px', lineHeight: '1.8' }}>
                          {post.content}
                        </p>
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
  );
}
