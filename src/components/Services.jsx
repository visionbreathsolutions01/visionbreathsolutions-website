import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Cpu, Cloud, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "Custom Web Development",
    desc: "Scalable, secure, and performant web applications built with React, Next.js, and Node.js.",
    icon: <Monitor size={28} />,
    color: "brand"
  },
  {
    id: 2,
    title: "Mobile App Engineering",
    desc: "Native and cross-platform mobile experiences that engage users and drive growth.",
    icon: <Smartphone size={28} />,
    color: "teal"
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    desc: "Custom AI solutions, NLP, and predictive models to automate your business processes.",
    icon: <Cpu size={28} />,
    color: "brand"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services = () => {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container-xl relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center">
            <span className="w-8 h-px bg-brand-600"></span>
            Enterprise Solutions
            <span className="w-8 h-px bg-brand-600"></span>
          </div>
          <h2 className="text-h2 text-slate-900 mb-6">
            Engineering Services <br className="hidden sm:block" /> for the Modern Web
          </h2>
          <p className="text-body-lg text-slate-600">
            We provide end-to-end software development services. From conceptualization and architecture to deployment and scaling.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={item}>
              <div className="card h-full p-8 group cursor-pointer border border-slate-200 hover:border-brand-200">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${service.color === 'brand'
                    ? 'bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white'
                    : 'bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white'
                  }`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-brand-600 group-hover:text-brand-700">
                  Explore Service
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link to="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;