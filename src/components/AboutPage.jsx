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
    <div className="pt-[72px] min-h-screen bg-white font-sans text-slate-900">
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
              "item": "https://www.visionbreathsolutions.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About Us",
              "item": "https://www.visionbreathsolutions.com/about"
            }
          ]
        }}
      />
      
      {/* Managing Director's Message */}
      <section className="py-12 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-400/5 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="container-xl relative z-10">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            {/* Section Header */}
            <div className="text-center mb-10 sm:mb-14">
              <div className="section-label justify-center mb-3">
                <span className="w-8 h-px bg-brand-600" />
                Leadership
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                Managing Director's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-500">Message</span>
              </h2>
            </div>

            {/* Content Card */}
            <div className="card p-0 overflow-hidden border border-slate-100 shadow-xl">
              <div className="grid lg:grid-cols-5 items-stretch">
                
                {/* Left: Photo */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
                  className="lg:col-span-2 relative"
                >
                  <div className="relative h-full min-h-[360px] sm:min-h-[480px] lg:min-h-full">
                    <img
                      src="/md-joy-nicholas.jpg"
                      alt="Mangalapudi Joy Nicholas — Managing Director, Vision Breath Solutions Pvt. Ltd."
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                    {/* Gradient overlay at bottom for text readability on mobile */}
                    <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-900/60 to-transparent lg:hidden" />
                    <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                      <p className="text-white font-bold text-lg">Mangalapudi Joy Nicholas</p>
                      <p className="text-white/80 text-sm">Managing Director</p>
                    </div>
                  </div>
                </motion.div>

                {/* Right: Message */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.3 }}
                  className="lg:col-span-3 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-center"
                >
                  {/* Decorative quote mark */}
                  <svg className="w-10 h-10 text-brand-100 mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                  </svg>

                  <p className="text-slate-700 leading-relaxed mb-4">
                    Welcome to <strong className="text-slate-900">Vision Breath Solutions Pvt. Ltd.</strong>
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    At Vision Breath Solutions, we believe that technology should do more than solve problems—it should create opportunities, drive growth, and empower businesses to achieve their vision. Our mission is to deliver innovative, reliable, and scalable digital solutions that help organizations succeed in an ever-evolving world.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    As the Managing Director, I am committed to building a company founded on integrity, excellence, innovation, and long-term partnerships. Every project we undertake reflects our dedication to understanding our clients' unique challenges and delivering solutions that create measurable value.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Whether it is custom software development, web and mobile applications, AI-powered automation, cloud solutions, or digital transformation, our team strives to combine technical expertise with a customer-first approach to deliver outstanding results.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We value trust, transparency, and continuous innovation. Our goal is not simply to complete projects, but to become a dependable technology partner that contributes to our clients' sustained success.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Thank you for visiting Vision Breath Solutions Pvt. Ltd. We look forward to working with you and transforming your ideas into impactful digital solutions.
                  </p>

                  {/* Signature */}
                  <div className="border-t border-slate-100 pt-5 mt-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                      <p className="text-slate-500 text-sm italic mb-2">Warm Regards,</p>
                      <p className="text-slate-900 font-bold text-lg">Mangalapudi Joy Nicholas</p>
                      <p className="text-brand-600 font-semibold text-sm">Managing Director</p>
                      <p className="text-slate-500 text-xs mt-0.5">Vision Breath Solutions Pvt. Ltd.</p>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/mangalapudi-joy-nicholas-020a2b224/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-brand-50 text-slate-700 hover:text-brand-600 text-xs font-bold transition-all duration-300 self-start sm:self-auto border border-slate-200 hover:border-brand-200"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-brand-gradient opacity-[0.03] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-400/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="container-xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
 
            <motion.h1 
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
              className="text-h1 lg:text-hero mb-4 text-slate-900"
            >
              Architecting the <br/>
              <span className="text-gradient">Digital Future</span>
            </motion.h1>
            
            <motion.p 
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
            <Link to="/contact" className="btn-primary bg-white text-brand-900 hover:bg-slate-50">
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
