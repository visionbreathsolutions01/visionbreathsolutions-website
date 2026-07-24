import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import vbsLogo from "../assests/vbs-logo.png";
import vbsLogoNav from "../assests/vbs-logo-nav.png";

const NAV_HEIGHT = 72; // px — single source of truth

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const goContact = () => {
    navigate("/contact");
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${menuOpen
        ? "bg-white"
        : scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-nav"
          : "bg-white/80 backdrop-blur-md"
        }`}
    >
      {/* ── Main navbar row ── */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(16px, 3vw, 48px)",
          height: `${NAV_HEIGHT}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >

        {/* ── Logo + Brand Name ── */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1px",
            flexShrink: 0,
            textDecoration: "none",
          }}
        >
          <span
            className="flex items-center"
            style={{
              height: "48px",
              flexShrink: 0,
            }}
          >
            <img
              src={vbsLogoNav}
              alt="Vision Breath Solutions"
              style={{
                height: "100%",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </span>

          {/* Brand text */}
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              lineHeight: 1.25,
            }}
          >
            <span
              style={{
                fontWeight: 900,
                fontSize: "clamp(0.875rem, 1.4vw, 1.05rem)",
                letterSpacing: "-0.01em",
                color: "#0f172a",
                whiteSpace: "nowrap",
              }}
            >
              VISION BREATH
            </span>
            <span
              style={{
                fontWeight: 600,
                fontSize: "clamp(0.65rem, 0.9vw, 0.75rem)",
                letterSpacing: "0.07em",
                color: "#64748b",
                whiteSpace: "nowrap",
              }}
            >
              SOLUTIONS. PVT. LTD
            </span>
          </span>
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav
          aria-label="Main Navigation"
          style={{
            display: "none",
            alignItems: "center",
            gap: "4px",
          }}
          className="md:!flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{ textDecoration: "none" }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${location.pathname === link.path
                ? "text-brand-600 bg-brand-50"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── CTA + Mobile Hamburger ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
          <button
            onClick={goContact}
            className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5"
            aria-label="Get a custom quote"
          >
            Get a Quote
            <ChevronRight size={14} />
          </button>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        style={{ top: `${NAV_HEIGHT}px` }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-down panel */}
        <div
          className={`relative bg-white shadow-xl border-t border-slate-100 pb-6 pt-2 transition-transform duration-300 ${menuOpen ? "translate-y-0" : "-translate-y-4"
            }`}
        >
          <div
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              padding: "0 clamp(16px, 3vw, 48px)",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{ textDecoration: "none" }}
                className={`px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 ${location.pathname === link.path
                  ? "text-brand-600 bg-brand-50"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <div style={{ paddingTop: "16px", marginTop: "8px", borderTop: "1px solid #f1f5f9" }}>
              <button
                onClick={goContact}
                className="btn-primary flex items-center justify-center gap-2 w-full py-3.5 text-base"
              >
                Get a Quote <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;