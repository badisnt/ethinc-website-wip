import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, User, ChevronRight, X } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

const categories = ["All", "Lessons from the Field", "From the Build"];

const blogPosts = [
  {
    id: 1,
    title: "The Future of Generative AI in Enterprise Applications",
    excerpt:
      "Explore how generative AI is reshaping enterprise workflows, from automated content creation to intelligent code generation and beyond.",
    content: "Generative AI is transforming how enterprises approach content creation, code generation, and customer interactions. From automated document drafting to intelligent assistants that understand context, the possibilities are expanding rapidly.",
    author: "Nizar Ghandri",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    category: "From the Build",
    image:
      "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZnV0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzEzNDY1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
  },
  {
    id: 2,
    title: "Graph Neural Networks: A Practical Guide",
    excerpt:
      "An in-depth look at how Graph Neural Networks can be applied to real-world problems like social network analysis, recommendation systems, and fraud detection.",
    content: "Graph Neural Networks (GNNs) excel at learning from structured, relational data. This guide walks through practical applications in social networks, recommendation engines, and fraud detection.",
    author: "Selim Fekih",
    date: "Dec 28, 2025",
    readTime: "12 min read",
    category: "From the Build",
    image:
      "https://images.unsplash.com/photo-1550729154-e3abdffadd93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5ldXJhbCUyMG5ldHdvcmslMjBkYXJrJTIwcHVycGxlfGVufDF8fHx8MTc3MTQyMDI4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: 3,
    title: "Edge AI: Bringing Computer Vision to Production Lines",
    excerpt:
      "How we deployed real-time computer vision models on edge devices for manufacturing quality inspection, achieving sub-10ms inference.",
    content: "Deploying AI at the edge requires careful optimization. We share our experience bringing computer vision to production lines with sub-10ms inference latency.",
    author: "Badis Machraoui",
    date: "Dec 10, 2025",
    readTime: "6 min read",
    category: "From the Build",
    image:
      "https://images.unsplash.com/photo-1551330969-cf6e919d206f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNvbXB1dGVyJTIwdmlzaW9uJTIwcHJvamVjdCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzE0MjAyODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: 4,
    title: "Building Robust MLOps Pipelines for Startups",
    excerpt:
      "A practical guide to setting up production-grade ML infrastructure without the enterprise budget. From model versioning to automated retraining.",
    content: "Startups don't need enterprise budgets to build solid MLOps. We outline a practical approach to model versioning, monitoring, and automated retraining.",
    author: "Nizar Ghandri",
    date: "Nov 22, 2025",
    readTime: "10 min read",
    category: "Lessons from the Field",
    image:
      "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyJTIwY2xvdWQlMjBjb21wdXRpbmd8ZW58MXx8fHwxNzcxNDIwMjkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: 5,
    title: "Ethical AI: Building Responsible ML Systems",
    excerpt:
      "Why ethical considerations should be at the core of every AI project, and how to implement fairness, transparency, and accountability in your models.",
    content: "Ethics isn't an afterthought—it should be built into every AI project from the start. We discuss fairness, transparency, and accountability in ML systems.",
    author: "Selim Fekih",
    date: "Nov 5, 2025",
    readTime: "7 min read",
    category: "Lessons from the Field",
    image:
      "https://images.unsplash.com/photo-1760224254191-16a7cf659ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5JTIwZ3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MTM4NjgyMXww&ixlib=rb-4.1.0&q=80&w=1080",
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
