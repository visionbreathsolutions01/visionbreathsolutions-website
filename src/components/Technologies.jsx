import React, { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const techCategories = [
  {
    name: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    name: "Backend",
    techs: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB"]
  },
  {
    name: "Cloud & DevOps",
    techs: ["AWS", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions"]
  },
  {
    name: "AI & ML",
    techs: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "HuggingFace"]
  }
];

const Technologies = memo(() => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="container-xl">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center">
            <span className="w-8 h-px bg-brand-600"></span>
            Tech Stack
            <span className="w-8 h-px bg-brand-600"></span>
          </div>
          <h2 className="text-h2 text-slate-900 mb-6">
            Powered by Modern <br/> Technology
          </h2>
          <p className="text-body-lg text-slate-600">
            We leverage the latest enterprise-grade technologies to build secure, scalable, and high-performance solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, idx) => (
            <motion.div 
              key={category.name}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-brand-200 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-6">{category.name}</h3>
              <ul className="space-y-4">
                {category.techs.map(tech => (
                  <li key={tech} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                    <span className="text-slate-700 font-medium">{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
});

export default Technologies;
