import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ExternalLink, Filter, Code2, Monitor, Smartphone, Cloud } from 'lucide-react';
import SEO from './SEO';

/**
 * Hook that checks an ordered list of URLs and returns the first one that responds.
 * Falls back to the first URL in the list while checking / if all fail.
 */
const useActiveLiveUrl = (urls) => {
  const [activeUrl, setActiveUrl] = useState(urls[0]);

  useEffect(() => {
    let cancelled = false;

    const check = async () => {
      for (const url of urls) {
        try {
          // Use no-cors mode — an opaque response still means the server is reachable
          await fetch(url, { method: 'HEAD', mode: 'no-cors', cache: 'no-store' });
          if (!cancelled) setActiveUrl(url);
          return; // first working URL wins
        } catch {
          // URL unreachable, try next
        }
      }
      // If none worked, keep the default (first URL)
    };

    check();
    return () => { cancelled = true; };
  }, [urls]);

  return activeUrl;
};

/** Renders a live project link, auto-selecting the first reachable URL for multi-URL projects. */
const ProjectLink = ({ project }) => {
  const urls = project.liveUrls || [project.liveUrl];
  const activeUrl = useActiveLiveUrl(urls);

  return (
    <a
      href={activeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-brand-600 font-bold hover:text-brand-700 transition-colors mt-auto group/link"
      aria-label={`Visit live website of ${project.title}`}
    >
      Visit Live Project
      <ExternalLink size={16} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
    </a>
  );
};
const ProjectsPage = memo(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shouldReduceMotion = useReducedMotion();

  const projects = [
    {
      id: 1,
      title: "Zionic Architecture",
      category: "Website",
      description: "An enterprise-grade platform built for an international architectural firm, featuring 3D model viewers, real-time collaboration tools, and an advanced CMS for managing thousands of projects globally.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      technologies: ["React JS", "Firebase"],
      liveUrl: "https://www.zionicarc.com/"
    },
    {
      id: 2,
      title: "Pharmacy Website",
      category: "Website",
      description: "A secure, high-performance website for pharmacy to order medicines online.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069&auto=format&fit=crop",
      technologies: ["React JS", "Python"],
      liveUrls: ["https://dev.newbalanpharmacy.com/", "https://newbalanpharmacy.com/"]
    }
  ];

  return (
    <div className="pt-[72px] min-h-screen bg-white font-sans text-slate-900">
      <SEO
        title="Our Portfolio & Projects"
        description="Explore enterprise software projects, custom web platforms, pharmacy management systems, and client success stories built by Vision Breath Solutions."
        keywords="software portfolio, custom web applications, Zionic Architecture, pharmacy software, React web applications, Vision Breath Solutions portfolio"
        path="/projects"
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
              "name": "Portfolio",
              "item": "https://visionbreathsolutions.com/projects"
            }
          ]
        }}
      />

      {/* Header Section */}
      <section className="pt-[37px] sm:pt-[77px] pb-[37px] sm:pb-[61px] bg-white border-b border-slate-100">
        <div className="container-xl text-center">
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
            className="text-h1 lg:text-hero mb-6 text-slate-900"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-500">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto mb-6 sm:mb-12"
          >
            A curated selection of enterprise software, mobile applications, and AI solutions we've engineered for clients worldwide.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-24">
        <div className="container-xl">
          <motion.div layout className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatePresence>
              {projects.map((project) => (
                <motion.div
                  layout={!shouldReduceMotion}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.99 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4 }}
                  key={project.id}
                  className="group card overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width="600"
                      height="375"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold rounded-full shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map(tech => (
                        <span key={tech} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ProjectLink project={project} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {projects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-xl text-slate-600">No projects found.</h3>
            </div>
          )}

        </div>
      </section>

    </div>
  );
});

export default ProjectsPage;
