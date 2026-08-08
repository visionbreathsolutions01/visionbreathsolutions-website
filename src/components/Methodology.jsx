import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Cpu, CheckCircle } from 'lucide-react';

const steps = [
  {
    phase: "Phase 01",
    title: "Discover & Align",
    desc: "Collaborative scoping and planning to define clear technical requirements, specifications, and project roadmaps.",
    icon: <Search className="text-brand-600" size={24} />
  },
  {
    phase: "Phase 02",
    title: "Architecture & Design",
    desc: "Designing scalable database schemas, high-performance API structures, cloud blueprints, and premium UX wireframes.",
    icon: <Compass className="text-teal-600" size={24} />
  },
  {
    phase: "Phase 03",
    title: "Agile Engineering",
    desc: "Sprint-based coding under test-driven development protocols, constant integration, and comprehensive quality assurance.",
    icon: <Cpu className="text-brand-600" size={24} />
  },
  {
    phase: "Phase 04",
    title: "Launch & Support",
    desc: "Seamless zero-downtime deployment, automated uptime monitoring, cloud optimization, and active SLA support.",
    icon: <CheckCircle className="text-teal-600" size={24} />
  }
];

const Methodology = memo(() => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-gradient opacity-[0.01] pointer-events-none"></div>
      <div className="container-xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="section-label justify-center">
            <span className="w-8 h-px bg-brand-600"></span>
            Branded Delivery Framework
            <span className="w-8 h-px bg-brand-600"></span>
          </div>
          <h2 className="text-h2 text-slate-900 mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-500">Velocity Delivery Framework™</span>
          </h2>
          <p className="text-body-lg text-slate-600">
            A systematic build-and-release process that guarantees precision engineering, predictable timelines, and robust security at scale.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card bg-white p-8 relative border border-slate-200 hover:border-brand-200 transition-all duration-300 group shadow-sm flex flex-col h-full"
            >
              {/* Badge for Phase */}
              <div className="text-sm font-bold text-brand-600 mb-4 tracking-wider uppercase">
                {step.phase}
              </div>
              
              {/* Icon Box */}
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-brand-50 group-hover:border-brand-100 transition-all duration-300">
                {step.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {step.desc}
              </p>

              {/* Line connector decoration */}
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-[90px] right-[-16px] w-[32px] h-px bg-slate-200 z-10 pointer-events-none"></div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
});

export default Methodology;
