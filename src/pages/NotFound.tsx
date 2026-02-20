import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a3e]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-4"
      >
        <h1
          className="mb-4 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent"
          style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 800, fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)', lineHeight: 1 }}
        >
          404
        </h1>
        <p className="text-xl text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-orange-500 text-white hover:from-purple-500 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-purple-600/20"
          style={{ fontSize: '15px', fontWeight: 500 }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
