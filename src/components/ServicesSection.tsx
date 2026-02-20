import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  MessageSquare,
  ScanEye,
  TrendingUp,
  Network,
  Workflow,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const services = [
  {
    icon: MessageSquare,
    titleKey: "services.cards.chatbots.title",
    titleFallback: "Smart Assistants & Chatbots",
    descKey: "services.cards.chatbots.desc",
    descFallback: "Give your team and customers instant answers. We build intelligent assistants that understand context, handle complex questions, and integrate seamlessly into your existing tools.",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: ScanEye,
    titleKey: "services.cards.vision.title",
    titleFallback: "Visual Inspection & Recognition",
    descKey: "services.cards.vision.desc",
    descFallback: "Automate quality checks and visual analysis. Our systems can spot defects, classify images, and extract information from documents — faster and more consistently than manual review.",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    icon: TrendingUp,
    titleKey: "services.cards.predictions.title",
    titleFallback: "Predictions & Forecasting",
    descKey: "services.cards.predictions.desc",
    descFallback: "Make confident decisions backed by data. We create models that forecast demand, anticipate equipment failures, and identify trends before they become obvious.",
    gradient: "from-amber-500 to-yellow-600",
  },
  {
    icon: Network,
    titleKey: "services.cards.network.title",
    titleFallback: "Relationship & Network Analysis",
    descKey: "services.cards.network.desc",
    descFallback: "Uncover hidden patterns in connected data. From fraud detection to recommendation engines, we help you understand the relationships that drive your business.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Workflow,
    titleKey: "services.cards.automation.title",
    titleFallback: "Process Automation",
    descKey: "services.cards.automation.desc",
    descFallback: "Free your team from repetitive work. We design AI-powered workflows that handle document processing, data entry, and routine decisions — so your people can focus on what matters.",
    gradient: "from-purple-500 to-orange-500",
  },
  {
    icon: BarChart3,
    titleKey: "services.cards.insights.title",
    titleFallback: "Data Insights & Dashboards",
    descKey: "services.cards.insights.desc",
    descFallback: "Turn raw data into clear, actionable insights. We build custom analytics solutions and dashboards that help you monitor performance and spot opportunities at a glance.",
    gradient: "from-orange-500 to-rose-500",
  },
];

function ServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.3, 0.5], [60, 10, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.4], [0, 0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-500/0 via-orange-500/0 to-purple-500/0 group-hover:from-purple-500/40 group-hover:via-orange-500/30 group-hover:to-purple-500/40 transition-all duration-700 blur-[1px] opacity-0 group-hover:opacity-100" />

      <div className="relative h-full p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm group-hover:shadow-xl group-hover:border-transparent transition-all duration-500">
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
        >
          <service.icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-[#1a1a3e] mb-3" style={{ fontSize: '17px', fontWeight: 600 }}>
          {t(service.titleKey, service.titleFallback)}
        </h3>
        <p className="text-[#5a5a72]" style={{ fontSize: '14px', lineHeight: '1.7' }}>
          {t(service.descKey, service.descFallback)}
        </p>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <section ref={sectionRef} id="services" className="py-24 relative bg-[#f5f3ee] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="text-center mb-16"
        >
          <h2
            className="text-[#1a1a3e] mb-4"
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 700,
              fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
            }}
          >
            <span className="text-[#8a8a9e]">{t('services.sectionTitle', 'How we can')}</span>{" "}
            <span className="text-[#1a1a3e]">
              {t('services.sectionHighlight', 'help you')}
            </span>
          </h2>
          <p className="text-[#5a5a72] max-w-2xl mx-auto" style={{ fontSize: '16px', lineHeight: '1.7' }}>
            {t('services.sectionSubtitle', 'We work with companies of all sizes to bring AI into their day-to-day — solving real problems, saving time, and unlocking new opportunities.')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <ServiceCard key={service.titleFallback} service={service} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-orange-500 transition-colors group"
            style={{ fontSize: '15px', fontWeight: 500 }}
          >
            {t('services.discuss', 'Discuss your project with us')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
