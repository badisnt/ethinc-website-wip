import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, User, ArrowLeft, Calendar } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import kvImg from "@/assets/blog/kv.jpeg";
import constraintsImg from "@/assets/blog/constraints.jpeg";
import lastsImg from "@/assets/blog/lasts.jpeg";
import trustImg from "@/assets/blog/trust.jpeg";

const categories = ["All", "Lessons from the Field", "From the Build"];

const blogPosts = [
  {
    id: 1,
    title: "KV-Cache Optimization",
    excerpt:
      "A100s were running. Costs were rising. Performance wasn't improving. Here's how we optimized a production GenAI workload's inference layer.",
    content: `**A100s were running.**
**Costs were rising.**
**Performance wasn't improving.**

A client was scaling a production GenAI workload. Traffic was increasing steadily, and GPU spend was growing faster than usage. During the engagement, we identified the inference layer as the primary optimization opportunity.

## Context

The system was running real-time LLM inference on A100 40GB GPUs using HF TGI. Despite strong hardware capacity, the workload showed:

- High latency under multi-turn usage
- Low effective throughput per GPU
- Memory pressure limiting batch size
- Significant cost spikes during peak traffic

The model weights were not the issue. The bottleneck was in how inference, memory, and batching were handled at the serving layer.

## Our Method

We focused on optimizing the inference stack rather than touching model weights. The intervention included:

- Enabling KV-cache reuse across streaming and multi-turn sessions
- Switching to PagedAttention to remove memory fragmentation
- Replacing FIFO batching with cache-aware dynamic batching
- Aligning context window and block size with actual prompt distribution
- Adding observability around KV-cache hit rate to inform scheduling

These changes targeted GPU utilization efficiency and memory behavior under real load.

## Measured Impact

The improvements were immediate and quantifiable.

**Latency**
- P50: 1.9s → 1.2s (−37%)
- P95: 4.8s → 2.9s (−40%)
- Throughput per GPU: +52% tokens/sec

**Cost & Utilization**
- Cost per 1M tokens: −38%
- Monthly GPU spend: −34%
- Requests served per GPU: +55%

## What This Means

At production scale, LLM inference efficiency is heavily influenced by memory layout, cache strategy, and batching logic.

Serving stack decisions directly influence financial performance.

Optimizing KV-cache behavior and scheduling can unlock substantial gains without changing the underlying model.

If you're operating GenAI workloads at scale, inference architecture deserves the same attention as model performance.`,
    author: "Ethinc",
    date: "Feb 25, 2026",
    readTime: "5 min read",
    category: "From the Build",
    image: kvImg,
  },
  {
    id: 2,
    title: "Designing AI Under Real Constraints",
    excerpt:
      'Information produced by an AI system is not "the answer." It\'s evidence inside a decision process.',
    content: `Information produced by an AI system is yet to be "the answer." It's evidence inside a decision process.

In many real deployments, information is assembled from secondary sources; public reporting, institutional repositories, web signals, and scanned documents, often multilingual and highly context-dependent. The engineering problem is whether the output is usable under scrutiny.

**Based on our experience delivering AI systems for clients**, three design practices consistently determine whether those systems succeed in practice:

## Provenance by design

If a system produces an estimate, it should retain a precise trail of what contributed to it; sources, transformations, and assumptions. This is the practical purpose of data provenance: validation, auditability, and root-cause analysis when something looks off.

## Human review as a system component

In high-stakes workflows, analysts don't take the model's output — they validate it. Human-in-the-loop is a formal pattern where humans are deliberately inserted into the workflow to ensure accuracy and safety.

## Accountability across the lifecycle

Modern AI governance frameworks increasingly treat explainability and accountability as lifecycle requirements — how systems are built, deployed, monitored, and updated.

---

When organizations operate under pressure and constraints, the model is rarely the bottleneck. The bottleneck is whether the system can produce outputs that are:

- **Traceable** back to sources
- **Reviewable** by analysts
- **Explainable** to decision-makers
- **Maintainable** as contexts and definitions evolve

This is what "AI that helps decision-making" looks like in practice: not automation that replaces judgment, but systems that make reasoning legible and defensible, even when inputs are messy and the stakes are real.`,
    author: "Ethinc",
    date: "Feb 4, 2026",
    readTime: "4 min read",
    category: "Lessons from the Field",
    image: constraintsImg,
  },
  {
    id: 3,
    title: "Building AI That Lasts",
    excerpt:
      "With Nizar Ghandri, Co-Founder & CTO at Ethinc — on designing AI systems for tightly regulated environments.",
    content: `*In this edition of our Lessons from the Field series, we reflect on the path and experience of **Nizar Ghandri**, our co-founder and CTO, whose work spans some of the most tightly regulated and technically demanding environments in the industry.*

---

Nizar's journey into AI began with a deep fascination for the intersection of algorithms and reasoning. From early experiments in numerical analysis, systems design, and even video game development, he became captivated by the idea that intelligence could be simulated, structured and pushed beyond conventional boundaries. That early curiosity eventually led him into advanced machine learning and real-world AI engineering.

But experience quickly taught him that **technical performance is only half the equation**. In large organizations, especially in sectors like finance and legal, the real challenge often lies in bringing AI into production under tight constraints around privacy, regulation, and risk governance. He witnessed how the journey from a trained model to a production-ready system can be slowed significantly, not by model quality, but by everything around it: validation processes, auditability requirements, and the need for human-centric workflows. In such environments, trust, traceability, and operational fit become the true enablers of adoption.

## Building Transparent Systems

To address this, Nizar helped design internal AI frameworks that made systems transparent and controllable. This included:

- Pilot tools for collecting iterative user feedback
- Step-by-step reasoning traces to make outputs explainable
- Decision systems with fallback logic and clear error signaling
- Governance layers to align with compliance standards

Rather than build black boxes, the goal was to build systems that humans could inspect, understand, and improve.

## On Sovereignty

One common pitfall he observed in organizations is the tendency to over-prioritize short-term convenience — such as relying entirely on external APIs — at the expense of long-term flexibility and sovereignty. His experience shows that hybrid architectures that combine cloud services with on-premise control often provide the best balance between speed, cost control, and regulatory alignment. Especially in AI systems that evolve quickly, maintaining ownership of key infrastructure and models ensures resilience and freedom from vendor lock-in.

---

These field-tested lessons now shape our work at Ethinc:

- **Build with deployment realities in mind**
- **Treat explainability as part of the core product**
- **Give users visibility and control**
- **Prioritize modular, self-owned systems that scale with your needs**`,
    author: "Nizar Ghandri",
    date: "Nov 15, 2025",
    readTime: "6 min read",
    category: "Lessons from the Field",
    image: lastsImg,
  },
  {
    id: 4,
    title: "Building AI You Can Trust",
    excerpt:
      "With Selim Fekih — on building NLP systems for humanitarian organizations, where wrong information impacts people's lives.",
    content: `*At Ethinc, trust is not a buzzword — it's a design principle. To explore what that really means, we sat down with our co-founder **Selim Fekih**, who has spent countless days building NLP systems for humanitarian and international organizations.*

---

His journey into AI didn't begin with hype — it began with a personal thought experiment: "What if I could build a model that thinks like Nietzsche, and have a conversation with him?" That curiosity for language, philosophy, and meaning pulled him deep into Natural Language Processing, and eventually into the humanitarian sector.

One project that marked him was building an **end-to-end NLP pipeline for crisis response**, transforming chaotic data into real-time insights for field analysts. The feedback? "This saved us hours we didn't have." That's when it clicked: AI isn't just about performance, it's about reliability, trust, and making people's work easier.

## Trust is fragile

"The hardest lesson was adoption by field analysts," Selim told us. Even a technically sound model can be dismissed if users don't trust it. Especially in sensitive environments, analysts need evidence-based outputs and systems that integrate seamlessly into their workflows, not slow them down.

## Meticulous by necessity

That's why Selim's approach has become almost obsessively meticulous. In projects like *ReporterAI.org*, the margin for error is very thin. Wrong information doesn't just break a dashboard — it breaks confidence and impacts people's lives. The answer? Transparent models, careful evaluation, human validation, and humility in design.

Working across time zones and cultural contexts also taught him how to collaborate respectfully and pragmatically, balancing precision with adaptability.

And the idea that NGOs lag behind in AI?

> "Some of the most advanced, practical AI systems I've worked on were built in humanitarian orgs — with fewer resources, but far more purpose."

---

At Ethinc, we carry these lessons forward:

- **Design for trust**
- **Build for the real world**
- **Never forget the human in the loop**`,
    author: "Selim Fekih",
    date: "Nov 8, 2025",
    readTime: "5 min read",
    category: "Lessons from the Field",
    image: trustImg,
  },
];

const ease = [0.4, 0, 0.2, 1] as const;

export function BlogSection({ header }: { header?: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const selectedPost = selectedId !== null ? blogPosts.find((p) => p.id === selectedId) : null;

  const openArticle = (id: number) => {
    setSelectedId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeArticle = () => {
    setSelectedId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        {!selectedPost ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            {header}
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
                  style={{ fontSize: "13px", fontWeight: 500 }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
              {filteredPosts.map((p, i) => (
                <motion.button
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  onClick={() => openArticle(p.id)}
                  className="group text-left flex flex-col h-full"
                >
                  <div className="relative overflow-hidden rounded-lg aspect-[2/1] mb-5">
                    <ImageWithFallback
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="uppercase tracking-[0.15em] text-purple-400"
                      style={{ fontSize: "11px", fontWeight: 600 }}
                    >
                      {p.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <span className="text-gray-500" style={{ fontSize: "12px" }}>
                      {p.date}
                    </span>
                  </div>
                  <h3
                    className="text-white mb-2 group-hover:text-orange-300 transition-colors"
                    style={{
                      fontSize: "clamp(18px, 2vw, 22px)",
                      fontWeight: 700,
                      lineHeight: 1.3,
                      fontFamily: 'Georgia, "Times New Roman", serif',
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-gray-400 line-clamp-2 mb-3 flex-1"
                    style={{ fontSize: "14px", lineHeight: "1.7" }}
                  >
                    {p.excerpt}
                  </p>
                  <div
                    className="flex items-center gap-3 text-gray-500 pt-3 border-t border-white/[0.06] mt-auto"
                    style={{ fontSize: "12px" }}
                  >
                    <span className="flex items-center gap-1.5">
                      <User className="w-3 h-3" />
                      {p.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {p.readTime}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="article"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            {/* Back button */}
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              onClick={() => closeArticle()}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 group"
              style={{ fontSize: "14px", fontWeight: 500 }}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to articles
            </motion.button>

            {/* Article */}
            <article className="max-w-3xl mx-auto">
              {/* Category & date */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="uppercase tracking-[0.15em] text-purple-400"
                  style={{ fontSize: "12px", fontWeight: 600 }}
                >
                  {selectedPost.category}
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-white mb-6"
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  letterSpacing: "-0.02em",
                }}
              >
                {selectedPost.title}
              </h1>

              {/* Decorative rule */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-purple-500/40 via-orange-500/30 to-transparent" />
                <span className="text-orange-400/60 text-lg">&#9830;</span>
                <div className="h-px flex-1 bg-gradient-to-l from-purple-500/40 via-orange-500/30 to-transparent" />
              </div>

              {/* Author / meta */}
              <div
                className="flex flex-wrap items-center gap-5 text-gray-400 mb-10"
                style={{ fontSize: "13px" }}
              >
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300 font-medium">{selectedPost.author}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-purple-400" />
                  {selectedPost.readTime}
                </span>
              </div>

              {/* Hero image */}
              <div className="relative rounded-t-lg overflow-hidden aspect-[2/1]">
                <ImageWithFallback
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Light reading area */}
              <div className="bg-[#f5f3ee] rounded-b-lg px-6 sm:px-10 md:px-14 py-10 md:py-14">
                <div className="blog-prose blog-prose--light">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{selectedPost.content}</ReactMarkdown>
                </div>

                {/* End mark */}
                <div className="flex items-center gap-4 mt-12 mb-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                  <span className="text-purple-400/50 text-sm">&#9632; &#9632; &#9632;</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                </div>
              </div>
            </article>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scoped prose styles for markdown */}
      <style>{`
        .blog-prose {
          color: #c4c4d4;
          font-size: 16px;
          line-height: 1.9;
        }
        .blog-prose h2 {
          color: #fff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 700;
          margin-top: 2.5em;
          margin-bottom: 0.8em;
          letter-spacing: -0.01em;
        }
        .blog-prose h3 {
          color: #e2e2f0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(17px, 2vw, 20px);
          font-weight: 600;
          margin-top: 2em;
          margin-bottom: 0.6em;
        }
        .blog-prose p {
          margin-bottom: 1.4em;
        }
        .blog-prose strong {
          color: #fff;
          font-weight: 600;
        }
        .blog-prose em {
          color: #b8b8d0;
          font-style: italic;
        }
        .blog-prose ul, .blog-prose ol {
          margin-bottom: 1.4em;
          padding-left: 1.5em;
        }
        .blog-prose li {
          margin-bottom: 0.5em;
        }
        .blog-prose ul li {
          list-style-type: disc;
        }
        .blog-prose ol li {
          list-style-type: decimal;
        }
        .blog-prose li::marker {
          color: #a855f7;
        }
        .blog-prose blockquote {
          border-left: 3px solid #a855f7;
          padding: 0.8em 1.2em;
          margin: 1.6em 0;
          background: rgba(168, 85, 247, 0.06);
          border-radius: 0 8px 8px 0;
          color: #d4d4e8;
          font-style: italic;
        }
        .blog-prose blockquote p {
          margin-bottom: 0;
        }
        .blog-prose hr {
          border: none;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent);
          margin: 2em 0;
        }
        .blog-prose table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.6em 0;
          font-size: 14px;
        }
        .blog-prose thead th {
          text-align: left;
          padding: 0.75em 1em;
          border-bottom: 2px solid rgba(168, 85, 247, 0.3);
          color: #fff;
          font-weight: 600;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .blog-prose tbody td {
          padding: 0.65em 1em;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .blog-prose tbody tr:hover {
          background: rgba(255,255,255,0.03);
        }
        .blog-prose code {
          background: rgba(168, 85, 247, 0.1);
          padding: 0.15em 0.4em;
          border-radius: 4px;
          font-size: 0.9em;
          color: #d4b8f0;
        }
        .blog-prose a {
          color: #c084fc;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .blog-prose a:hover {
          color: #f97316;
        }

        /* Light mode overrides */
        .blog-prose--light {
          color: #3a3a52;
        }
        .blog-prose--light h2 {
          color: #1a1a3e;
        }
        .blog-prose--light h3 {
          color: #2a2a45;
        }
        .blog-prose--light strong {
          color: #1a1a3e;
        }
        .blog-prose--light em {
          color: #5a5a72;
        }
        .blog-prose--light blockquote {
          background: rgba(168, 85, 247, 0.05);
          color: #4a4a65;
        }
        .blog-prose--light thead th {
          color: #1a1a3e;
          border-bottom-color: rgba(168, 85, 247, 0.2);
        }
        .blog-prose--light tbody td {
          border-bottom-color: rgba(0, 0, 0, 0.06);
        }
        .blog-prose--light tbody tr:hover {
          background: rgba(0, 0, 0, 0.03);
        }
        .blog-prose--light code {
          background: rgba(168, 85, 247, 0.08);
          color: #7c3aed;
        }
        .blog-prose--light a {
          color: #7c3aed;
        }
        .blog-prose--light li::marker {
          color: #a855f7;
        }
        .blog-prose--light hr {
          background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1), transparent);
        }
      `}</style>
    </div>
  );
}
