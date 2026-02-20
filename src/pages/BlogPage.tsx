import { useState } from "react";
import { motion } from "motion/react";
import { Clock, User, ArrowRight, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Generative AI in Enterprise Applications",
    excerpt:
      "Explore how generative AI is reshaping enterprise workflows, from automated content creation to intelligent code generation and beyond.",
    author: "Nizar Ghandri",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    category: "Generative AI",
    image:
      "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZnV0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzEzNDY1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
  },
  {
    id: 2,
    title: "Graph Neural Networks: A Practical Guide",
    excerpt:
      "An in-depth look at how Graph Neural Networks can be applied to real-world problems like social network analysis, recommendation systems, and fraud detection.",
    author: "Selim Fekih",
    date: "Dec 28, 2025",
    readTime: "12 min read",
    category: "Machine Learning",
    image:
      "https://images.unsplash.com/photo-1550729154-e3abdffadd93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5ldXJhbCUyMG5ldHdvcmslMjBkYXJrJTIwcHVycGxlfGVufDF8fHx8MTc3MTQyMDI4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: 3,
    title: "Edge AI: Bringing Computer Vision to Production Lines",
    excerpt:
      "How we deployed real-time computer vision models on edge devices for manufacturing quality inspection, achieving sub-10ms inference.",
    author: "Badis Machraoui",
    date: "Dec 10, 2025",
    readTime: "6 min read",
    category: "Computer Vision",
    image:
      "https://images.unsplash.com/photo-1551330969-cf6e919d206f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNvbXB1dGVyJTIwdmlzaW9uJTIwcHJvamVjdCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzE0MjAyODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: 4,
    title: "Building Robust MLOps Pipelines for Startups",
    excerpt:
      "A practical guide to setting up production-grade ML infrastructure without the enterprise budget. From model versioning to automated retraining.",
    author: "Nizar Ghandri",
    date: "Nov 22, 2025",
    readTime: "10 min read",
    category: "MLOps",
    image:
      "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyJTIwY2xvdWQlMjBjb21wdXRpbmd8ZW58MXx8fHwxNzcxNDIwMjkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
  {
    id: 5,
    title: "Ethical AI: Building Responsible ML Systems",
    excerpt:
      "Why ethical considerations should be at the core of every AI project, and how to implement fairness, transparency, and accountability in your models.",
    author: "Selim Fekih",
    date: "Nov 5, 2025",
    readTime: "7 min read",
    category: "AI Ethics",
    image:
      "https://images.unsplash.com/photo-1760224254191-16a7cf659ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5JTIwZ3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MTM4NjgyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
];

const categories = ["All", "Generative AI", "Machine Learning", "Computer Vision", "MLOps", "AI Ethics"];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = blogPosts.find((p) => p.featured);
  const filtered =
    activeCategory === "All"
      ? blogPosts.filter((p) => !p.featured)
      : blogPosts.filter((p) => p.category === activeCategory && !p.featured);

  return (
    <div className="pb-0">
      <div className="pt-28 pb-20 bg-[#14142b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1
              className="text-white mb-4"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
              }}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '16px', lineHeight: '1.7' }}>
              Stay up to date with the latest in AI research, industry insights, and technical deep-dives from our team.
            </p>
          </motion.div>

          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group cursor-pointer"
            >
              <div className="grid md:grid-cols-2 gap-0 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:border-orange-500/20 overflow-hidden transition-all duration-500">
                <div className="relative overflow-hidden aspect-[16/10] md:aspect-auto">
                  <ImageWithFallback
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-orange-500/80 backdrop-blur-sm text-white flex items-center gap-1" style={{ fontSize: '11px', fontWeight: 500 }}>
                      <TrendingUp className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 w-fit mb-4" style={{ fontSize: '12px', fontWeight: 500 }}>
                    {featured.category}
                  </span>
                  <h2
                    className="text-white mb-4 group-hover:text-orange-300 transition-colors"
                    style={{ fontSize: '24px', fontWeight: 700, fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)', lineHeight: 1.3 }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-gray-400 mb-6" style={{ fontSize: '15px', lineHeight: '1.7' }}>{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-gray-500" style={{ fontSize: '13px' }}>
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{featured.author}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                    <span>{featured.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <div className="py-24 bg-[#f5f3ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-lg shadow-purple-600/20"
                    : "bg-white text-[#5a5a72] hover:text-[#14142b] hover:shadow-md border border-gray-200/80"
                }`}
                style={{ fontSize: '13px', fontWeight: 500 }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group cursor-pointer"
              >
                <div className="h-full rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-lg hover:border-purple-300/50 overflow-hidden transition-all duration-500">
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-600 border border-purple-200/60" style={{ fontSize: '11px', fontWeight: 500 }}>
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-[#14142b] mb-3 group-hover:text-purple-600 transition-colors" style={{ fontSize: '17px', fontWeight: 600, lineHeight: 1.4 }}>
                      {post.title}
                    </h3>
                    <p className="text-[#5a5a72] mb-4" style={{ fontSize: '14px', lineHeight: '1.7' }}>{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3 text-[#8a8a9e]" style={{ fontSize: '12px' }}>
                        <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-purple-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
