import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Globe, Smartphone, TrendingUp, Layers, Cloud, Bot, Headset, ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const ServicesPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "What software technologies does Vision Breath Solutions use?",
      answer: "We build scalable systems using modern stacks like React.js, Node.js, Python, Flutter, AWS, Google Cloud, Azure, and custom AI/LLM integrations."
    },
    {
      question: "How does the Velocity Delivery Framework work?",
      answer: "Our Velocity Delivery Framework has four phases: Phase 1: Discover & Align (scoping), Phase 2: Architecture & Design (blueprinting), Phase 3: Agile Engineering (sprint-based coding), and Phase 4: Launch & Support (zero-downtime release)."
    },
    {
      question: "Do you offer post-deployment maintenance and active SLAs?",
      answer: "Yes, we provide robust application support, security updates, cloud optimization, and active service level agreements (SLAs) for enterprise peace of mind."
    }
  ];

  const services = [
    {
      icon: <Monitor size={32} />,
      title: "Custom Software Development",
      desc: "We build scalable, secure, and high-performance software tailored to your business requirements, helping automate processes and accelerate growth.",
      features: ["Enterprise Software", "SaaS Applications", "CRM & ERP Systems", "API Development & Integration"]
    },
    {
      icon: <Globe size={32} />,
      title: "Website Design & Development",
      desc: "Professional, responsive, and SEO-friendly websites that deliver exceptional user experiences and strengthen your online presence.",
      features: ["Corporate Websites", "E-Commerce Platforms", "Landing Pages", "UI/UX Optimization"]
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile applications designed to provide seamless experiences across Android and iOS devices.",
      features: ["Android Apps", "iOS Apps", "Flutter Development", "React Native Apps"]
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Digital Marketing",
      desc: "Data-driven marketing strategies that increase brand visibility, generate qualified leads, and maximize your return on investment.",
      features: ["Search Engine Optimization (SEO)", "Google & Meta Ads", "Social Media Marketing", "Content Marketing"]
    },
    {
      icon: <Layers size={32} />,
      title: "Technology Consulting",
      desc: "Strategic technology consulting that helps businesses adopt the right digital solutions, improve efficiency, and achieve long-term success.",
      features: ["Digital Transformation", "Architecture Audit", "Tech Stack Selection", "Security Assessment"]
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Solutions",
      desc: "Reliable cloud infrastructure and migration services that improve scalability, performance, and business continuity.",
      features: ["Cloud Migration", "AWS & Azure Deployment", "DevOps Automation", "Infrastructure Management"]
    },
    {
      icon: <Bot size={32} />,
      title: "AI & Automation",
      desc: "Intelligent AI-powered solutions that automate workflows, improve productivity, and unlock business insights.",
      features: ["AI Chatbots", "Business Process Automation", "Predictive Analytics", "AI Integration"]
    },
    {
      icon: <Headset size={32} />,
      title: "Maintenance & Support",
      desc: "Comprehensive maintenance services that ensure your applications remain secure, updated, and optimized.",
      features: ["Application Maintenance", "Performance Optimization", "Security Updates", "Technical Support"]
    }
  ];

  const process = [
    { step: "01", title: "Discover & Align", desc: "Understanding requirements, strategy, and planning to define project roadmaps." },
    { step: "02", title: "Architecture & Design", desc: "Designing scalable database schemas, UX blueprints, and systems architecture." },
    { step: "03", title: "Agile Engineering", desc: "Sprint-based development, continuous testing, and strict quality assurance." },
    { step: "04", title: "Launch & Support", desc: "Seamless rollout, deployment, performance monitoring, and SLA support." }
  ];

  return (
    <div className="pt-[72px] min-h-screen bg-slate-900 font-sans text-slate-900">
      <SEO
        title="Our Engineering & Software Services"
        description="Comprehensive custom software development, mobile application creation, web engineering, cloud infrastructure, AI automation, and technical support services."
        keywords="custom software development, mobile apps, web engineering, cloud infrastructure, AI automation, SaaS development services, Vision Breath Solutions"
        path="/services"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.visionbreathsolutions.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://www.visionbreathsolutions.com/services"
                }
              ]
            },
            {
              "@type": "Service",
              "name": "Custom Software & AI Engineering",
              "provider": {
                "@type": "Organization",
                "name": "VISION BREATH SOLUTIONS PVT. LTD."
              },
              "serviceType": "Software Development Services",
              "areaServed": "Global",
              "description": "Custom enterprise software development, mobile apps, website engineering, cloud architecture, and AI automation solutions."
            },
            {
              "@type": "WebPage",
              "@id": "https://www.visionbreathsolutions.com/services#webpage",
              "url": "https://www.visionbreathsolutions.com/services",
              "name": "Our Engineering & Software Services | Vision Breath Solutions Pvt. Ltd.",
              "description": "Comprehensive custom software development, mobile application creation, web engineering, cloud infrastructure, AI automation, and technical support services.",
              "isPartOf": {
                "@id": "https://www.visionbreathsolutions.com/#website"
              },
              "about": {
                "@id": "https://www.visionbreathsolutions.com/#organization"
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What software technologies does Vision Breath Solutions use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We build scalable systems using modern stacks like React.js, Node.js, Python, Flutter, AWS, Google Cloud, Azure, and custom AI/LLM integrations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does the Velocity Delivery Framework work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our Velocity Delivery Framework has four phases: Phase 1: Discover & Align (scoping), Phase 2: Architecture & Design (blueprinting), Phase 3: Agile Engineering (sprint-based coding), and Phase 4: Launch & Support (zero-downtime release)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer post-deployment maintenance and active SLAs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide robust application support, security updates, cloud optimization, and active service level agreements (SLAs) for enterprise peace of mind."
                  }
                }
              ]
            }
          ]
        }}
      />
      
      {/* Hero Section */}
      <section className="pt-[37px] sm:pt-[77px] pb-[37px] sm:pb-[61px] relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-brand-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container-xl relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label justify-center text-brand-400 mb-3 sm:mb-6"
          >
            Our Expertise
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-h1 lg:text-hero mb-4 sm:mb-6 text-white"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-teal-400">Excellence</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
          >
            Comprehensive software development and technology consulting services designed to accelerate your digital transformation and drive business growth.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-24 bg-white relative">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (idx % 2) * 0.1 }}
                className="card p-8 lg:p-10 group hover:border-brand-200 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                          <Check size={16} className="text-teal-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-24 bg-slate-50 border-t border-slate-100">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
            <h2 className="text-h2 text-slate-900 mb-4">Velocity Delivery Framework™</h2>
            <p className="text-slate-600 text-lg">Our proven, branded engineering methodology designed to deliver secure, scalable, and premium software architectures.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-black text-slate-200 mb-4">{step.step}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                
                {/* Connector line */}
                {idx !== process.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-slate-200 translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-24 bg-white border-t border-slate-100">
        <div className="container-xl max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-h2 text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">Genuinely useful answers about our engineering and delivery model.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <button
                  className="w-full text-left p-6 font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 flex justify-between items-center transition-colors focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className="text-xl font-bold text-brand-600">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className="p-6 bg-white border-t border-slate-200 text-slate-600 leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-24 bg-white text-center">
        <div className="container-md">
          <h2 className="text-h2 text-slate-900 mb-6">Need a custom solution?</h2>
          <p className="text-slate-600 text-lg mb-6 sm:mb-10 max-w-2xl mx-auto">
            Contact us to discuss your specific requirements. We'll architect a solution that perfectly aligns with your business objectives.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Consultation
            <ChevronRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
