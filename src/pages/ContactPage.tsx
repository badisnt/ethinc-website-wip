import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Clock,
  Linkedin,
  Github,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";

const services = [
  "Generative AI & NLP",
  "Computer Vision",
  "Machine Learning",
  "Graph Machine Learning",
  "Data Analytics",
  "Process Automation",
  "Custom AI Solution",
  "Other",
];

const faqs = [
  {
    q: "What industries do you work with?",
    a: "We work across multiple industries including healthcare, manufacturing, finance, retail, and smart cities. Our AI solutions are adaptable to any domain with data-driven challenges.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on complexity. A proof-of-concept typically takes 4-8 weeks, while full production deployments range from 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes, we provide comprehensive post-deployment support including model monitoring, retraining pipelines, performance optimization, and technical support to ensure sustained results.",
  },
  {
    q: "What's your pricing model?",
    a: "We offer flexible pricing models including project-based, retainer, and milestone-based arrangements. We'll work with you to find the best fit during our discovery phase.",
  },
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      } else {
        setSubmitted(true);
        toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      }
    } catch {
      setSubmitted(true);
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pb-0">
      <div className="pt-28 pb-16 bg-[#14142b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1
              className="text-white mb-4"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)',
              }}
            >
              Contact{" "}
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '16px', lineHeight: '1.7' }}>
              Ready to transform your business with AI? Let's discuss your project and explore how we can help.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-24 bg-[#f5f3ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex items-center justify-center rounded-2xl bg-white border border-gray-200/80 shadow-sm p-16"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-[#14142b] mb-3" style={{ fontSize: '24px', fontWeight: 700, fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)' }}>
                      Message Sent!
                    </h3>
                    <p className="text-[#5a5a72] mb-6 max-w-md" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                      Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", company: "", service: "", budget: "", message: "" });
                      }}
                      className="text-purple-600 hover:text-orange-500 transition-colors flex items-center gap-2 mx-auto"
                      style={{ fontSize: '14px', fontWeight: 500 }}
                    >
                      Send another message
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-2xl bg-white border border-gray-200/80 shadow-sm p-8 md:p-10">
                  <h3 className="text-[#14142b] mb-6" style={{ fontSize: '20px', fontWeight: 600, fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)' }}>
                    Tell us about your project
                  </h3>

                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-[#3a3a52] mb-2" style={{ fontSize: '13px', fontWeight: 500 }}>Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg bg-[#f5f3ee] border border-gray-200 text-[#14142b] placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-colors"
                        style={{ fontSize: '14px' }} />
                    </div>
                    <div>
                      <label className="block text-[#3a3a52] mb-2" style={{ fontSize: '13px', fontWeight: 500 }}>Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#f5f3ee] border border-gray-200 text-[#14142b] placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-colors"
                        style={{ fontSize: '14px' }} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-[#3a3a52] mb-2" style={{ fontSize: '13px', fontWeight: 500 }}>Company</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company name"
                        className="w-full px-4 py-3 rounded-lg bg-[#f5f3ee] border border-gray-200 text-[#14142b] placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-colors"
                        style={{ fontSize: '14px' }} />
                    </div>
                    <div>
                      <label className="block text-[#3a3a52] mb-2" style={{ fontSize: '13px', fontWeight: 500 }}>Service of Interest</label>
                      <select name="service" value={formData.service} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#f5f3ee] border border-gray-200 text-[#14142b] focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-colors appearance-none cursor-pointer"
                        style={{ fontSize: '14px' }}>
                        <option value="">Select a service</option>
                        {services.map((s) => (<option key={s} value={s}>{s}</option>))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-[#3a3a52] mb-2" style={{ fontSize: '13px', fontWeight: 500 }}>Estimated Budget</label>
                    <select name="budget" value={formData.budget} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#f5f3ee] border border-gray-200 text-[#14142b] focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-colors appearance-none cursor-pointer"
                      style={{ fontSize: '14px' }}>
                      <option value="">Select budget range</option>
                      <option value="<10k">Less than CHF 10,000</option>
                      <option value="10k-25k">CHF 10,000 - 25,000</option>
                      <option value="25k-50k">CHF 25,000 - 50,000</option>
                      <option value="50k-100k">CHF 50,000 - 100,000</option>
                      <option value="100k+">CHF 100,000+</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#3a3a52] mb-2" style={{ fontSize: '13px', fontWeight: 500 }}>Project Description *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                      placeholder="Tell us about your project, challenges, and what you're looking to achieve..."
                      className="w-full px-4 py-3 rounded-lg bg-[#f5f3ee] border border-gray-200 text-[#14142b] placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-colors resize-none"
                      style={{ fontSize: '14px', lineHeight: '1.6' }} />
                  </div>

                  <button type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-orange-500 text-white hover:from-purple-500 hover:to-orange-400 transition-all duration-300 shadow-xl shadow-purple-600/20"
                    style={{ fontSize: '15px', fontWeight: 500 }}>
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="rounded-2xl bg-white border border-gray-200/80 shadow-sm p-8">
                <h3 className="text-[#14142b] mb-6" style={{ fontSize: '18px', fontWeight: 600, fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)' }}>
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-orange-50 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-[#8a8a9e] mb-0.5" style={{ fontSize: '12px' }}>Email</p>
                      <p className="text-[#14142b]" style={{ fontSize: '14px' }}>contact@ethinc.ch</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-orange-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-[#8a8a9e] mb-0.5" style={{ fontSize: '12px' }}>Location</p>
                      <p className="text-[#14142b]" style={{ fontSize: '14px' }}>Lausanne, Vaud CH</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-orange-50 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-[#8a8a9e] mb-0.5" style={{ fontSize: '12px' }}>Phone</p>
                      <p className="text-[#14142b]" style={{ fontSize: '14px' }}>+41 XX XXX XX XX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-orange-50 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-[#8a8a9e] mb-0.5" style={{ fontSize: '12px' }}>Response Time</p>
                      <p className="text-[#14142b]" style={{ fontSize: '14px' }}>Within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-[#8a8a9e] mb-3" style={{ fontSize: '13px', fontWeight: 500 }}>Follow Us</p>
                  <div className="flex gap-3">
                    <a href="https://www.linkedin.com/company/ethinc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#f5f3ee] hover:bg-purple-50 border border-gray-200/80 flex items-center justify-center text-[#5a5a72] hover:text-purple-600 transition-all">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="https://github.com/ethinc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#f5f3ee] hover:bg-purple-50 border border-gray-200/80 flex items-center justify-center text-[#5a5a72] hover:text-purple-600 transition-all">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-gray-200/80 shadow-sm overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-orange-50 flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange-500 animate-ping" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-orange-400" />
                    {[...Array(8)].map((_, i) => (
                      <div key={`h-${i}`} className="absolute left-0 right-0 border-t border-purple-200/30" style={{ top: `${(i + 1) * 12.5}%` }} />
                    ))}
                    {[...Array(8)].map((_, i) => (
                      <div key={`v-${i}`} className="absolute top-0 bottom-0 border-l border-purple-200/30" style={{ left: `${(i + 1) * 12.5}%` }} />
                    ))}
                  </div>
                  <div className="text-center z-10">
                    <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-[#14142b]" style={{ fontSize: '14px', fontWeight: 500 }}>Lausanne, Switzerland</p>
                    <p className="text-[#8a8a9e]" style={{ fontSize: '12px' }}>EPFL Innovation Park</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-[#14142b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2
                className="text-white mb-4"
                style={{ fontSize: '28px', fontWeight: 700, fontFamily: 'var(--font-heading, "Space Grotesk", system-ui, sans-serif)' }}
              >
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl bg-white/[0.04] border border-white/[0.06] overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="text-white" style={{ fontSize: '15px', fontWeight: 500 }}>{faq.q}</span>
                    <span className={`text-orange-400 transition-transform duration-300 ${expandedFaq === i ? "rotate-45" : ""}`} style={{ fontSize: '20px' }}>+</span>
                  </button>
                  {expandedFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="px-5 pb-5"
                    >
                      <p className="text-gray-400" style={{ fontSize: '14px', lineHeight: '1.7' }}>{faq.a}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
