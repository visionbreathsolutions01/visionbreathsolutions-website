import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import vbsLogo from "../assests/vbs-logo.png";
import vbsLogoNav from "../assests/vbs-logo-nav.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-10 pb-6 sm:pt-20 sm:pb-10 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-600/10 rounded-full blur-[100px]"></div>
      <div className="absolute top-40 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px]"></div>

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-12 lg:gap-8 mb-8 sm:mb-16">
          {/* Brand Column — full width on mobile */}
          <div className="col-span-2 md:col-span-2 lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-6 inline-flex" style={{ textDecoration: "none" }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "160px",
                  height: "70px",
                  flexShrink: 0,
                  position: "relative",
                  backgroundColor: "#ffffff",
                  borderRadius: "6px",
                  padding: "6px",
                }}
              >
                <img
                  src={vbsLogoNav}
                  alt="Vision Breath Solutions"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-black text-white text-base tracking-tight">VISION BREATH</span>
                <span className="font-semibold text-xs text-brand-400 tracking-wider uppercase">Solutions Pvt. Ltd.</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 sm:mb-8 max-w-sm">
              Premium software studio specializing in scalable web development, high-performance mobile apps, and custom AI solutions for modern enterprises.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-400 hover:text-brand-400 text-sm transition-colors flex items-center gap-2">About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">Our Services</Link></li>
              <li><Link to="/projects" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">AI Solutions</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">Enterprise Software</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3">
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">Pathuru Cross Road, Kunchanapalli<br />Vijayawada, Andhra Pradesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-400 flex-shrink-0" />
                <a href="mailto:visionbreathsolutions@gmail.com" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">visionbreathsolutions@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-400 flex-shrink-0" />
                <a href="tel:+91 9963416422" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">+91 9963416422</a>
              </li>
<<<<<<< HEAD
              <li className="pt-2 flex flex-col gap-2.5">
                <a
                  href="https://www.linkedin.com/in/vision-breath-solutions-pvt-ltd-b74b2a421/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white text-sm font-medium transition-all duration-300 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  Connect on LinkedIn
                </a>
=======
              <li className="pt-2">
>>>>>>> c09e5f92dda60d2ba98bc07dbb35aec977247855
                <a
                  href="https://www.instagram.com/visionbreathsolutions_01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 text-slate-400 hover:text-white text-sm font-medium transition-all duration-300 group"
                >
<<<<<<< HEAD
=======
                  {/* Instagram icon SVG */}
>>>>>>> c09e5f92dda60d2ba98bc07dbb35aec977247855
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                  </svg>
                  Follow on Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 sm:pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Vision Breath Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
