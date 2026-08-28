import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import logo from "../assests/vbs-logo-nav.png";
import { company, nav, services } from "../lib/content";

const Footer = () => (
  <footer className="border-t border-ink-800">
    <div className="shell py-16 sm:py-20">
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">

        {/* Brand + address */}
        <div className="md:col-span-5 lg:col-span-4">
          <Link to="/" className="flex items-center gap-2.5" aria-label={`${company.legalName} — home`}>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-white p-1"><img src={logo} alt="" className="h-full w-auto object-contain" width="36" height="36" /></span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[0.9375rem] font-bold tracking-[-0.02em] text-white">
                Vision Breath
              </span>
              <span className="mt-1 font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-400">
                Solutions Pvt. Ltd.
              </span>
            </span>
          </Link>

          <address className="mt-7 not-italic text-sm leading-relaxed text-ink-400">
            {company.address.line1}<br />
            {company.address.line2}
          </address>

          <div className="mt-6 space-y-1.5 text-sm">
            <a href={`mailto:${company.email}`} className="block text-ink-300 hover:text-white transition-colors">
              {company.email}
            </a>
            <a href={`tel:${company.phoneHref}`} className="block text-ink-300 hover:text-white transition-colors">
              {company.phone}
            </a>
          </div>
        </div>

        {/* Sitemap */}
        <nav className="md:col-span-3 lg:col-span-2 lg:col-start-7" aria-label="Footer — company">
          <h2 className="font-mono text-label uppercase text-ink-400">Company</h2>
          <ul className="mt-5 space-y-3">
            {nav.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-sm text-ink-400 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="md:col-span-4 lg:col-span-3" aria-label="Footer — services">
          <h2 className="font-mono text-label uppercase text-ink-400">Services</h2>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="text-sm text-ink-400 hover:text-white transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="md:col-span-3 lg:col-span-2" aria-label="Footer — elsewhere">
          <h2 className="font-mono text-label uppercase text-ink-400">Elsewhere</h2>
          <ul className="mt-5 space-y-3">
            {company.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 text-sm text-ink-400 hover:text-white transition-colors"
                >
                  {s.label}
                  <ArrowUpRight
                    size={13}
                    className="text-ink-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-16 flex flex-col gap-4 border-t border-ink-800 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[0.6875rem] text-ink-400">
          © {new Date().getFullYear()} {company.legalName} All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link to="/privacy" className="font-mono text-[0.6875rem] text-ink-500 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="font-mono text-[0.6875rem] text-ink-500 hover:text-white transition-colors">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
