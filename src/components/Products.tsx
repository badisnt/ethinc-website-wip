/* products component temporarily removed
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Shield, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PrismImage from "@/assets/prism.png";

const Products = () => {
  const { t } = useTranslation();
  
  const products = [
    {
      icon: Monitor,
      title: t('products.vibeMonitor.title'),
      subtitle: t('products.vibeMonitor.subtitle'),
      description: t('products.vibeMonitor.description'),
      features: t('products.vibeMonitor.features', { returnObjects: true }),
      gradient: "bg-gradient-primary",
      link: "/vibemonitor"
    },
    // {
    //   icon: () => (
    //     <img
    //       src={PrismImage}
    //       alt="PRISM"
    //       className="w-17 h-17 object-contain"
    //     />
    //   ),
    //   title: t('products.prism.title'),
    //   subtitle: t('products.prism.subtitle'),
    //   description: t('products.prism.description'),
    //   features: t('products.prism.features', { returnObjects: true }),
    //   gradient: "bg-gradient-accent",
    //   link: "/prism"
    // }
  ];

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('products.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardHeader className="relative">
                <div className={`w-16 h-16 ${product.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-lg font-medium text-primary">
                  {product.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground mb-3">{t('products.keyFeatures')}</h4>
                  <ul className="space-y-2">
                    {(product.features as string[]).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-muted-foreground">
                        <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4">
                  <Link to="/contact" className="flex-1">
                    <Button variant="hero" className="w-full">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('products.requestDemo')}
                    </Button>
                  </Link>
                  <Link to={product.link} className="flex-1">
                    <Button variant="outline" className="w-full">
                      {t('products.learnMore')}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
*/

// placeholder
const Products = () => null;
export default Products;