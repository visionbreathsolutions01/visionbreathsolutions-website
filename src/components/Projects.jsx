import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Global Architecture Website",
      description: "An enterprise-grade website built for an international architectural firm, featuring 3D model viewers, real-time collaboration tools, and an advanced CMS for managing thousands of projects globally.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      technologies: ["React", "TypeScript", "Node.js", "WebGL"],
      features: ["3D Rendering", "Real-time Sync", "Global CDN", "Enterprise Security"],
      liveUrl: "https://www.zionicarc.com"
    },
    {
      id: 2,
      title: "Pharmacy Website",
      description: "A secure, high-performance website for pharmacy to order medicines online.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069&auto=format&fit=crop",
      technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
      features: ["Real-time Analytics", "ML Predictions", "Bank-grade Security", "Custom UI Kit"],
      liveUrl: "https://newbalanpharmacy.com/"
    }
  ]);

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-50 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="container-xl relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="section-label">
              <span className="w-8 h-px bg-brand-600"></span>
              Featured Work
            </div>
            <h2 className="text-h2 text-slate-900 mt-2">
              Transformative <br className="hidden md:block" /> Digital Experiences
            </h2>
          </div>
          <Link to="/projects" className="btn-secondary whitespace-nowrap self-start md:self-auto group">
            View All Case Studies
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;