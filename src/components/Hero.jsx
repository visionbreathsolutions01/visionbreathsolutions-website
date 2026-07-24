import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Rocket, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/contact');
  };

  const scrollToProjects = () => {
    navigate('/projects');
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-20 pb-10 sm:pt-28 sm:pb-20 overflow-hidden bg-slate-50">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-overlay"></div>
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-brand-50 to-transparent z-0"></div>
      
      {/* Decorative Blur Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-64 w-[600px] h-[600px] bg-brand-400/20 rounded-full blur-[120px] z-0"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 -left-64 w-[600px] h-[600px] bg-teal-400/20 rounded-full blur-[120px] z-0"
      />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-4 sm:mb-8"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">Innovating Enterprise Solutions</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-h1 lg:text-hero mb-3 sm:mb-6 text-slate-900"
            >
              Vision Breath Solutions <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-500">
                AI & Software Engineering
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-body-lg text-slate-600 mb-6 sm:mb-10 max-w-xl"
            >
              Vision Breath Solutions Pvt. Ltd. builds scalable, secure, and high-performance digital infrastructure for modern enterprises. From AI-driven solutions and mobile apps to custom web platforms.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-12"
            >
              <button onClick={scrollToContact} className="btn-primary py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base group">
                Start Your Project
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={scrollToProjects} className="btn-outline py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base">
                View Portfolio
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-6 sm:gap-8 border-t border-slate-200 pt-5 sm:pt-8"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-teal-600" />
                <span className="text-sm font-semibold text-slate-700">Enterprise Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={20} className="text-brand-600" />
                <span className="text-sm font-semibold text-slate-700">High Performance</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual (Code / Tech Illustration) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            {/* Main Window */}
            <div className="relative bg-slate-900 rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden z-20">
              {/* Window Header */}
              <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Code2 size={14} /> main.tsx
                </div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed text-slate-300">
                <div className="flex">
                  <span className="text-slate-600 mr-4 select-none">1</span>
                  <span><span className="text-brand-400">const</span> <span className="text-yellow-200">VISION_BREATH_SOLUTIONS_PVT_LTD</span> <span className="text-slate-400">=</span> ( ) <span className="text-brand-400">=&gt;</span> {'{'}</span>
                </div>
                <div className="flex mt-2">
                  <span className="text-slate-600 mr-4 select-none">2</span>
                  <span className="ml-4"><span className="text-brand-400">return</span> (</span>
                </div>
                <div className="flex mt-2">
                  <span className="text-slate-600 mr-4 select-none">3</span>
                  <span className="ml-8"><span className="text-slate-400">&lt;</span><span className="text-pink-400">div</span> <span className="text-teal-200">className</span><span className="text-slate-400">=</span><span className="text-teal-400">"success"</span><span className="text-slate-400">&gt;</span></span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 mr-4 select-none">4</span>
                  <span className="ml-12"><span className="text-slate-400">&lt;</span><span className="text-pink-400">h1</span><span className="text-slate-400">&gt;</span>Your Vision, Our Code<span className="text-slate-400">&lt;/</span><span className="text-pink-400">h1</span><span className="text-slate-400">&gt;</span></span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 mr-4 select-none">5</span>
                  <span className="ml-8"><span className="text-slate-400">&lt;/</span><span className="text-pink-400">div</span><span className="text-slate-400">&gt;</span></span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 mr-4 select-none">6</span>
                  <span className="ml-4">)</span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 mr-4 select-none">7</span>
                  <span>{'}'}</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-30 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center">
                <Rocket size={20} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">99.99%</div>
                <div className="text-xs text-slate-500 font-medium">Uptime SLA</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
