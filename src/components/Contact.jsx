import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-5 gap-16">

          {/* Left: Contact Info */}
          <div className="lg:col-span-2">
            <div className="section-label">
              <span className="w-8 h-px bg-brand-600"></span>
              Get In Touch
            </div>
            <h2 className="text-h2 text-slate-900 mb-6">
              Let's Build Something <br /> <span className="text-brand-600">Extraordinary</span>
            </h2>
            <p className="text-body-lg text-slate-600 mb-10">
              Ready to transform your business? Contact our team of experts to discuss your project requirements and discover how we can help you achieve your goals.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="icon-box-brand">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-1">Vision Breath Solutions Pvt. Ltd</h4>
                  <p className="text-slate-600 text-sm">Pathuru Cross Road, Kunchanapalli<br />Vijayawada, Andhra Pradesh</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="icon-box-brand">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-1">Email Us</h4>
                  <a href="mailto:visionbreathsolutions@gmail.com" className="text-slate-600 text-sm hover:text-brand-600 transition-colors">
                    visionbreathsolutions@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="icon-box-brand">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-1">Call Us</h4>
                  <a href="tel:+919963416422" className="text-slate-600 text-sm hover:text-brand-600 transition-colors">
                    +91 9963416422
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="card p-8 md:p-10 flex flex-col justify-center h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Quick Connect</h3>
              <p className="text-slate-600 text-sm mb-8">
                Reach out to us directly through any of the channels below. We are ready to assist you.
              </p>

              <div className="flex flex-col gap-4">
                {/* WhatsApp Button */}
                <a 
                  href="https://wa.me/919963416422"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-white text-base transition-all duration-300 bg-emerald-600 hover:bg-emerald-700 hover:-translate-y-0.5 shadow-md hover:shadow-lg active:translate-y-0"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946C.056 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.688 2.009 14.219.985 12.01.985c-5.437 0-9.863 4.371-9.867 9.8c-.001 1.73.457 3.418 1.328 4.903l-1.082 3.954 4.053-1.063zM17.9 14.9c-.33-.164-1.953-.964-2.253-1.074-.3-.11-.52-.164-.74.164-.22.33-.85 1.074-1.04 1.293-.19.22-.38.246-.71.082-1.745-.874-2.903-2.05-3.83-3.65-.245-.42-.04-.645.166-.85.185-.18.41-.48.615-.72.205-.24.272-.41.41-.685.136-.27.068-.51-.034-.713-.1-.205-.74-1.78-.975-2.435-.29-.7-.56-.576-.77-.587l-.56-.01c-.22 0-.58.082-.88.41-.3.33-1.14 1.12-1.14 2.73s1.17 3.17 1.33 3.39c.16.22 2.3 3.52 5.58 4.94.78.34 1.39.54 1.86.69.78.25 1.49.21 2.05.13.62-.09 1.95-.8 2.22-1.57.28-.77.28-1.42.19-1.57-.09-.15-.33-.24-.66-.4z"/>
                  </svg>
                  Chat on WhatsApp
                </a>

                {/* Email Button */}
                <a 
                  href="mailto:visionbreathsolutions@gmail.com"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-white text-base transition-all duration-300 bg-brand-600 hover:bg-brand-700 hover:-translate-y-0.5 shadow-md hover:shadow-lg active:translate-y-0"
                >
                  <Mail size={20} />
                  Send an Email
                </a>

                {/* Call Button */}
                <a 
                  href="tel:9963416422"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-slate-700 text-base transition-all duration-300 bg-slate-100 hover:bg-slate-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md active:translate-y-0 border border-slate-200"
                >
                  <Phone size={20} />
                  Call Us Directly
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
