import React, { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import "./i18n";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// import VibeMonitor from "./pages/VibeMonitor";
// import PRISM from "./pages/PRISM";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Set basename for GitHub Pages deployment only (not for Vercel)
  const basename = import.meta.env.VITE_GITHUB_PAGES === 'true' ? '/ethinc-website-wip' : '/';
  
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  
  return (
    <QueryClientProvider client={queryClient}>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/vibemonitor" element={<VibeMonitor />} />
          <Route path="/prism" element={<PRISM />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;