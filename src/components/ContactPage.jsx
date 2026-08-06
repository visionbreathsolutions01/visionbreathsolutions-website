import React, { memo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import SEO from './SEO';

const ContactPage = memo(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[72px] min-h-screen bg-white font-sans text-slate-900">
      <SEO
        title="Contact Us"
        description="Get in touch with Vision Breath Solutions Pvt. Ltd. Reach out via email, phone (+91 9963416422), or visit our Vijayawada office for custom software inquiries."
        keywords="contact software company, hire web developers, software engineering consultation, Vijayawada software office, Vision Breath Solutions contact"
        path="/contact"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
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
                  "name": "Contact Us",
                  "item": "https://visionbreathsolutions.com/contact"
                }
              ]
            },
            {
              "@type": "ContactPage",
              "name": "Contact Vision Breath Solutions",
              "url": "https://visionbreathsolutions.com/contact"
            }
          ]
        }}
      />
      {/* Hero Banner */}
      <section className="relative pt-[37px] sm:pt-[77px] pb-[37px] sm:pb-[61px] overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 bg-brand-gradient opacity-[0.02] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[450px] bg-brand-400/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />
        <div className="container-xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-6"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600" />
            </span>
            <span className="text-xs font-semibold text-brand-700 tracking-wide uppercase">We're Here to Help</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-4"
          >
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-500">
              Touch
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-lg max-w-xl mx-auto"
          >
            Ready to build something extraordinary? Reach out and let's make it happen.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />

        <div className="container-xl relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="section-label">
                <span className="w-8 h-px bg-brand-600" />
                Contact Info
              </div>
              <h2 className="text-h2 text-slate-900 mb-4">
                Let's Build Something <br />
                <span className="text-brand-600">Extraordinary</span>
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
                    <h4 className="text-slate-900 font-bold mb-1">Our Location</h4>
                    <p className="text-slate-600 text-sm">
                      Pathuru Cross Road, Kunchanapalli<br />
                      Vijayawada, Andhra Pradesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="icon-box-brand">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold mb-1">Email Us</h4>
                    <a
                      href="mailto:visionbreathsolutions@gmail.com"
                      className="text-slate-600 text-sm hover:text-brand-600 transition-colors break-all"
                    >
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
                    <a
                      href="tel:+919963416422"
                      className="text-slate-600 text-sm hover:text-brand-600 transition-colors"
                    >
                      +91 9963416422
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Quick Connect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                    {/* Official WhatsApp brand SVG — crisp at all sizes */}
                    <svg
                      className="w-6 h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413A11.815 11.815 0 0012.05 0zm0 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z" />
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
                    href="tel:+919963416422"
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-slate-700 text-base transition-all duration-300 bg-slate-100 hover:bg-slate-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md active:translate-y-0 border border-slate-200"
                  >
                    <Phone size={20} />
                    Call Us Directly
                  </a>
                  {/* LinkedIn Button */}
                  <a
                    href="https://www.linkedin.com/in/vision-breath-solutions-pvt-ltd-b74b2a421/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-white text-base transition-all duration-300 bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 shadow-md hover:shadow-lg active:translate-y-0"
                  >
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
});

export default ContactPage;
