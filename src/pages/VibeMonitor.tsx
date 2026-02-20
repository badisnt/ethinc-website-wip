import { ArrowLeft, Monitor, CheckCircle, BarChart3, Users, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DemoVideo from "@/assets/demo.mp4";
import PosterImage from "@/assets/hero-bg.jpg";

const VibeMonitor = () => {
  const features = [
    {
      icon: Shield,
      title: "Real-Time Early Warning",
      description:
        "Built for critical environments—finance, humanitarian response, crisis comms—our platform detects emerging risks in near real time, identifying shifts in sentiment, virality spikes, and coordinated narratives before they escalate.",
    },
    {
      icon: Globe,
      title: "Multilingual & Multimodal Coverage",
      description:
        "Analyzes content across formats (text, memes, reels, podcasts) and languages—including mixed-language posts—at scale. Enables monitoring of global narratives without blind spots or lag.",
    },
    {
      icon: Users,
      title: "Narrative & Cluster Analysis",
      description:
        "Goes beyond keywords and sentiment. Identifies which audience segments are driving conversations, how narratives evolve, and which content types (e.g., visual memes vs. text threads) are gaining traction.",
    },
    {
      icon: BarChart3,
      title: "Forecasting & Actionable Intelligence",
      description:
        "Provides not just what’s happening, but why—and what’s next. Includes trend forecasting, scenario modeling, and prescriptive recommendations to inform operational or strategic response.",
    },
  ];

  const benefits = [
    "Real-time, event-driven detection with no batch delays",
    "Multimodal analysis: video, image, text, audio",
    "Mixed-language and cross-platform coverage",
    "Prescriptive alerts, not just summaries",
    "Deployed locally for full data sovereignty",
    "Modular architecture tailored to operational needs",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Social Media Intelligence
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              VibeMonitor
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            A real-time AI platform that extracts structured insights from social media—reels, memes, videos, and multilingual posts—while ensuring full data privacy and regulatory compliance. Designed for high-stakes sectors like finance and humanitarian response, it delivers predictive and prescriptive insights, and supports modular deployment.
            </p>
            
            <div className="flex gap-4">
              <Link to="/contact">
                <Button variant="glass" size="xl">
                  Get Started
                </Button>
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                  Online Demo Coming Soon
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0">
                  <div className="aspect-video">
                    <video 
                      controls 
                      className="w-full h-full rounded-lg"
                      poster={PosterImage}
                    >
                      <source src={DemoVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </DialogContent>
            </Dialog>
              
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              <span className="bg-gradient-accent bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              VibeMonitor offers a suite of powerful features designed to give you deep insights into social media trends and public sentiment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Why Choose VibeMonitor?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Most tools miss real-time events, ignore memes and video, and can’t handle mixed languages. VibeMonitor does all three—fast, locally, and without leaking data.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-hero rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-white/90 mb-6">
                  Contact us today to learn how VibeMonitor can transform your social media monitoring and public sentiment analysis.
                </p>
                <Link to="/contact">
                  <Button variant="glass" className="w-full">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VibeMonitor;