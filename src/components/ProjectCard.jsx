import React, { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const ProjectCard = memo(({ project, index }) => {
  const isEven = index % 2 === 0;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div 
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.7 }}
      className="group relative bg-white rounded-3xl p-4 md:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
        
        {/* Project Image */}
        <div className={`relative overflow-hidden rounded-2xl aspect-[4/3] ${isEven ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
          <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
          <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"
            width="800"
            height="600"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Project Info */}
        <div className={`flex flex-col ${isEven ? 'lg:col-start-2' : 'lg:col-start-1'} py-4`}>
          <div className="flex gap-2 mb-6 flex-wrap">
            {project.technologies.map(tech => (
              <span key={tech} className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full">
                {tech}
              </span>
            ))}
          </div>
          
          <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            {project.description}
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b border-slate-100">
            {project.features.map(feature => (
              <div key={feature} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                <span className="text-sm font-medium text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-auto">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors group/link"
              >
                View Live Project
                <ExternalLink size={18} className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </a>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
});

export default ProjectCard;
