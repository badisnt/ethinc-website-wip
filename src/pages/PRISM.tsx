import { ArrowLeft, Shield, CheckCircle, Lock, Server, Cpu, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const PRISM = () => {
  const features = [
    {
      icon: Lock,
      title: "Privacy First",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: Server,
      title: "Local Processing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: Cpu,
      title: "Advanced RAG",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: Database,
      title: "Enterprise Scale",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  const benefits = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Sed do eiusmod tempor incididunt ut labore et dolore",
    "Ut enim ad minim veniam, quis nostrud exercitation",
    "Duis aute irure dolor in reprehenderit in voluptate",
    "Excepteur sint occaecat cupidatat non proident"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Privacy-Respecting RAG Pipeline
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              PRISM
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris.
            </p>
            
            <div className="flex gap-4">
              <ContactForm
                trigger={
                  <Button variant="glass" size="xl">
                    Get Started
                  </Button>
                }
              />
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                Technical Specs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Advanced <span className="bg-gradient-primary bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                  Why Choose PRISM?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
              
              <div className="bg-gradient-accent rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Deploy?</h3>
                <p className="text-white/90 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ContactForm
                  trigger={
                    <Button variant="glass" className="w-full">
                      Contact Sales
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PRISM;