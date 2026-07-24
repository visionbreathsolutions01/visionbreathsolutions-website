import React, { useEffect, memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Target, Users, Shield, Zap, Globe, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const AboutPage = memo(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shouldReduceMotion = useReducedMotion();

  const values = [
    {
      icon: <Target className="text-brand-600" size={24} />,
      title: "Precision Engineering",
      desc: "We write clean, testable, and highly optimized code."
    },
    {
      icon: <Shield className="text-teal-600" size={24} />,
      title: "Uncompromising Security",
      desc: "Security isn't an afterthought; it's built into our architecture."
    },
    {
      icon: <Globe className="text-brand-600" size={24} />,
      title: "Global Standards",
      desc: "We follow industry best practices for international scalability."
    },
    {
      icon: <Zap className="text-teal-600" size={24} />,
      title: "Agile Innovation",
      desc: "We adapt rapidly to new technologies to keep you ahead."
    }
  ];

  return (
    <div className="pt-16 sm:pt-24 min-h-screen bg-slate-50 font-sans text-slate-900">
      <SEO
        title="About Us"
        description="Learn about Vision Breath Solutions Pvt. Ltd., our mission, core values, engineering principles, and team dedicated to architecting digital future."
        keywords="about vision breath solutions, software engineering team, custom web app studio, company vision, digital transformation"
        path="/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://visionbreathsolutions.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About Us",
              "item": "https://visionbreathsolutions.com/about"
            }
          ]
        }}
      />
      
      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-brand-gradient opacity-[0.03] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-400/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="container-xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
 
            <motion.h1 
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
              className="text-h1 lg:text-hero mb-4 text-slate-900"
            >
              Architecting the <br/>
              <span className="text-gradient">Digital Future</span>
            </motion.h1>
            
            <motion.p 
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
              className="text-xl text-slate-600 leading-relaxed mb-6 sm:mb-10"
            >
              Vision Breath Solutions Pvt. Ltd. is a premium software engineering studio dedicated to building high-performance, scalable, and secure digital infrastructure for modern enterprises and ambitious startups.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 sm:py-24 bg-slate-50">
        <div className="container-lg">
          <h2 className="sr-only">Our Vision and Mission</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
              className="card p-10 lg:p-12 border-t-4 border-t-brand-500"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the global benchmark in enterprise software engineering, empowering businesses to transcend their technological limitations through innovative, scalable, and intelligent solutions.
              </p>
            </motion.div>

            <motion.div 
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
              className="card p-10 lg:p-12 border-t-4 border-t-teal-500"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To deliver uncompromising engineering excellence. We partner with visionaries to design and deploy software architectures that are not just functional, but transformative and future-proof.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-24 bg-white border-y border-slate-100">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
            <h2 className="text-h2 text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 text-lg">The foundational principles that guide every line of code we write and every architecture we design.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: idx * 0.1 }}
                className="card p-8 text-center hover:border-brand-200"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mx-auto mb-6">
                  {val.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{val.title}</h4>
                <p className="text-slate-600 text-sm">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-24 bg-brand-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="container-md relative z-10 text-center">
          <h2 className="text-h2 text-white mb-6">Ready to transform your business?</h2>
          <p className="text-slate-300 text-lg mb-6 sm:mb-10 max-w-2xl mx-auto">
            Let's discuss how our engineering expertise can help you build scalable, secure, and future-proof solutions.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/#contact" className="btn-primary bg-white text-brand-900 hover:bg-slate-50">
              Contact Us Today
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
});

export default AboutPage;
