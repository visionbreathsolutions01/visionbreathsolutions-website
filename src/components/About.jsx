import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <Target className="text-brand-600" size={24} />,
    title: "Strategic Architecture",
    desc: "We don't just write code; we design scalable architectures that support your long-term business goals."
  },
  {
    icon: <Users className="text-teal-600" size={24} />,
    title: "Expert Engineering Team",
    desc: "Our senior developers bring decades of combined experience from top-tier tech companies."
  },
  {
    icon: <TrendingUp className="text-brand-600" size={24} />,
    title: "Performance Optimized",
    desc: "Every line of code is optimized for speed, ensuring sub-second load times and high conversion rates."
  }
];

const About = memo(() => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image/Graphic */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-square lg:aspect-[4/5] bg-slate-100 shadow-xl border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Vision Breath Solutions Engineering Team collaborating on software architecture" 
                loading="lazy"
                width="600"
                height="750"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              

            </div>
            
            {/* Decorative background shape */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-brand-50 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label">
              <span className="w-8 h-px bg-brand-600"></span>
              About Vision Breath
            </div>
            
            <h2 className="text-h2 text-slate-900 mb-6">
              Transforming Ideas into <br className="hidden md:block" />
              <span className="text-brand-600">Enterprise Reality</span>
            </h2>
            
            <p className="text-body-lg text-slate-600 mb-8">
              We are a premier software development studio dedicated to helping enterprises and ambitious startups scale. Our approach combines engineering excellence with deep business acumen.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>


          </motion.div>

        </div>
      </div>
    </section>
  );
});

export default About;
