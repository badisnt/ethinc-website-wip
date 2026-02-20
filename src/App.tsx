import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import "./i18n";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { PortfolioPage } from "./pages/PortfolioPage";
import { BlogPage } from "./pages/BlogPage";
import { AboutPage } from "./pages/AboutPage";
import { TeamPage } from "./pages/TeamPage";
import { ContactPage } from "./pages/ContactPage";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const basename = import.meta.env.VITE_GITHUB_PAGES === 'true' ? '/ethinc-website-wip' : '/';

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
