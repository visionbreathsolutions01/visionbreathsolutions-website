import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../assests/vbs-logo-nav.png";
import { nav, company } from "../lib/content";

/**
 * Transparent over the hero, hairline + blur once scrolled.
 * Mobile menu is a full-height sheet rather than a dropdown so long nav
 * lists never collide with page content behind them.
 */
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-ink-950/85 backdrop-blur-xl border-b border-ink-800 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]"
          : "bg-ink-950/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      {/* Reading-progress beam along the header's bottom edge */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-brand-500 via-violet-500 to-sky-400"
        aria-hidden="true"
      />

      <div className="shell flex h-[68px] items-center justify-between gap-6">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label={`${company.legalName} — home`}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white p-1"><img src={logo} alt="" className="h-full w-auto object-contain" width="36" height="36" /></span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-[0.9375rem] font-bold tracking-[-0.02em] text-white">
              Vision Breath
            </span>
            <span className="mt-1 font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-400">
              Solutions Pvt. Ltd.
            </span>
          </span>
        </Link>

        {/* Nav + CTA grouped on the right */}
        <div className="flex items-center gap-4 shrink-0">
          <nav aria-label="Main" className="hidden md:flex items-center gap-1">
            {nav.map((item, i) => (
              <motion.span
                key={item.path}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `nav-link rounded px-3 py-2 text-sm transition-colors duration-200 ${
                    isActive ? "nav-active text-white font-medium" : "text-ink-400 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
              </motion.span>
            ))}
          </nav>

          <span className="hidden md:block h-5 w-px bg-ink-700" aria-hidden="true" />

          <Link to="/contact" className="hidden md:inline-flex btn-primary">
            Start a project
            <ArrowUpRight size={15} strokeWidth={2.2} />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden -mr-1.5 grid h-10 w-10 place-items-center rounded-md text-ink-200 hover:bg-ink-800 transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="md:hidden fixed inset-x-0 bottom-0 top-[68px] bg-ink-950 overflow-y-auto"
      >
        <div className="shell flex min-h-full flex-col py-8">
          <nav aria-label="Mobile" className="flex flex-col">
            {nav.map((item, i) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-ink-800 py-5 font-display text-2xl tracking-[-0.03em] transition-colors ${
                    isActive ? "text-white" : "text-ink-500"
                  }`
                }
              >
                {item.label}
                <span className="font-mono text-[0.625rem] text-ink-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </NavLink>
            ))}
          </nav>

          <Link to="/contact" className="btn-primary btn-lg mt-8 w-full">
            Start a project
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </Link>

          <div className="mt-auto pt-10 font-mono text-xs text-ink-500">
            <a href={`mailto:${company.email}`} className="block hover:text-white transition-colors">
              {company.email}
            </a>
            <a href={`tel:${company.phoneHref}`} className="mt-2 block hover:text-white transition-colors">
              {company.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
