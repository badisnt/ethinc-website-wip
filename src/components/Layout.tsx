import { useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/sonner";
import { motion, useScroll, useSpring } from "motion/react";

export function Layout() {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [transitionKey, setTransitionKey] = useState(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTransitionKey(pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#14142b] text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-orange-400 to-purple-500 z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navigation />
      <main>
        <motion.div
          key={transitionKey}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1a1a38",
            border: "1px solid rgba(124,58,237,0.15)",
            color: "#f0f0ff",
          },
        }}
      />
    </div>
  );
}
