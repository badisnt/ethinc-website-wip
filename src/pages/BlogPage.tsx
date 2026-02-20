import { motion } from "motion/react";
import { BlogSection } from "@/components/BlogSection";

export function BlogPage() {
  return (
    <div className="pb-0">
      <div className="pt-28 pb-24 bg-[#1a1a3e] min-h-screen">
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

          <BlogSection />
        </div>
      </div>
    </div>
  );
}
