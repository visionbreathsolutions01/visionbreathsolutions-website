import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Code2,
  Layers,
  Smartphone,
  Cloud,
  Database,
  Globe,
  ChevronRight,
  ExternalLink,
  Mail,
  Phone,
  Link2,
  Terminal,
  GitBranch,
  Shield,
  TrendingUp,
  Users,
  Target,
  Package,
  Server,
  LayoutDashboard,
  BrainCircuit,
} from "lucide-react";
import SEO from "./SEO";
import Reveal from "./ui/Reveal";
import { leadership, company } from "../lib/content";

const DOMAIN = "https://www.visionbreathsolutions.com";

/* ─── tilt hook ─────────────────────────────────────────────────────── */
const useTilt = (strength = 8) => {
  const ref = useRef(null);
  const still = useReducedMotion();

  const onMouseMove = useCallback(
    (e) => {
      if (still) return;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const rx = ((e.clientY - r.top) / r.height - 0.5) * -strength;
      const ry = ((e.clientX - r.left) / r.width - 0.5) * strength;
      el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(4px)`;
    },
    [still, strength]
  );

  const onMouseLeave = useCallback(() => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  }, []);

  return { ref, onMouseMove, onMouseLeave };
};

/* ─── spotlight hook ────────────────────────────────────────────────── */
const useSpotlight = () => {
  const ref = useRef(null);
  const onMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);
  return { ref, onMouseMove };
};

/* ─── SVG constellation (3D visual centerpiece) ─────────────────────── */
const Constellation = () => {
  const still = useReducedMotion();
  const nodes = [
    { cx: 50, cy: 28 },
    { cx: 20, cy: 52 },
    { cx: 80, cy: 52 },
    { cx: 35, cy: 76 },
    { cx: 65, cy: 76 },
    { cx: 50, cy: 60 },
    { cx: 10, cy: 30 },
    { cx: 90, cy: 30 },
    { cx: 50, cy: 92 },
  ];
  const edges = [
    [0, 1],[0, 2],[1, 3],[2, 4],[3, 5],[4, 5],
    [0, 5],[1, 6],[2, 7],[5, 8],[0, 6],[0, 7],
  ];
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 0 6px rgba(99,102,241,0.5))" }}
    >
      <defs>
        <radialGradient id="lp-nodeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#4F46E5" />
        </radialGradient>
        <linearGradient id="lp-edgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
          stroke="url(#lp-edgeGrad)"
          strokeWidth="0.45"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={still ? { duration: 0 } : { duration: 0.8, delay: i * 0.07 }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r={i === 0 || i === 5 ? 2.5 : 1.5}
          fill="url(#lp-nodeGrad)"
          initial={still ? false : { scale: 0, opacity: 0 }}
          animate={still ? {} : { scale: [1, 1.25, 1], opacity: 1 }}
          transition={
            still
              ? { duration: 0 }
              : {
                  scale: {
                    duration: 2.8,
                    delay: i * 0.18,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  },
                  opacity: { duration: 0.5, delay: i * 0.1 },
                }
          }
        />
      ))}
      {!still && (
        <motion.circle
          cx={nodes[0].cx}
          cy={nodes[0].cy}
          r={6}
          fill="none"
          stroke="#818CF8"
          strokeWidth="0.3"
          strokeDasharray="3 2"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{
            transformOrigin: `${nodes[0].cx}px ${nodes[0].cy}px`,
          }}
        />
      )}
    </svg>
  );
};

/* ─── ambient orb ───────────────────────────────────────────────────── */
const Orb = ({ className }) => (
  <div
    className={`pointer-events-none absolute rounded-full ${className}`}
    aria-hidden="true"
  />
);

/* ═══════════════════════════════════════════════════════════════════════
   HERO SECTION
═══════════════════════════════════════════════════════════════════════ */
const HeroSection = () => {
  const still = useReducedMotion();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  /* Mouse parallax for the photo card */
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (still) return;
    const handler = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 16,
        y: (e.clientY / window.innerHeight - 0.5) * -10,
      });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [still]);

  const springX = useSpring(mouse.x, { stiffness: 55, damping: 22 });
  const springY = useSpring(mouse.y, { stiffness: 55, damping: 22 });

  const roles = [
    "Managing Director",
    "Software Engineer",
    "Full-Stack Developer",
    "Technology Entrepreneur",
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-[68px]"
      aria-label="Introduction"
    >
      {/* Backgrounds */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-fade-b"
        aria-hidden="true"
      />
      <Orb className="top-[-100px] right-[-6%] h-[520px] w-[520px] bg-brand-600/18 blur-[110px] animate-drift" />
      <Orb className="bottom-[-80px] left-[-8%] h-[440px] w-[440px] bg-violet-600/14 blur-[95px] animate-drift-2" />
      <Orb className="top-[38%] left-[38%] h-[280px] w-[280px] bg-sky-500/9 blur-[85px]" />

      <motion.div
        style={still ? {} : { y: yParallax, opacity: opacityParallax }}
        className="shell relative z-10 w-full"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16 py-16 sm:py-20">

          {/* ── Left: text ── */}
          <div className="lg:col-span-6 xl:col-span-7">
            <Reveal>
              <span className="eyebrow">Leadership · Vision Breath Solutions</span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-7 font-display text-[clamp(2.2rem,4.8vw,4rem)] font-semibold leading-[1.03] tracking-[-0.042em] text-white text-balance">
                Engineering Digital{" "}
                <span className="text-gradient">Experiences</span>
                {". "}Building Technology That Moves Business Forward.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 max-w-[52ch] text-lead text-ink-400 text-pretty">
                I lead Vision Breath Solutions in building practical digital products — web
                platforms, mobile applications, and intelligent automation solutions that help
                businesses turn ideas into working technology.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-7 flex flex-wrap gap-2">
                {roles.map((r) => (
                  <span key={r} className="tag">
                    {r}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="btn-primary btn-lg">
                  Explore My Work
                  <ChevronRight size={16} strokeWidth={2.2} />
                </a>
                <a href="#expertise" className="btn-outline btn-lg">
                  View My Expertise
                </a>
                <Link to="/contact" className="btn-outline btn-lg">
                  Discuss a Project
                  <ArrowUpRight size={15} strokeWidth={2.2} />
                </Link>
                <a
                  href={leadership.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost btn-lg inline-flex items-center gap-2"
                  aria-label="Connect on LinkedIn"
                >
                  <Link2 size={16} />
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          {/* ── Right: photo card ── */}
          <div className="lg:col-span-6 xl:col-span-5">
            <motion.div
              style={still ? {} : { rotateX: springY, rotateY: springX }}
              initial={still ? false : { opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-sm"
            >
              <div
                className="relative rounded-2xl border border-ink-700 bg-ink-900/80 p-5 backdrop-blur-md shadow-[0_28px_64px_-16px_rgba(79,70,229,0.32)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Accent beam */}
                <div
                  className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-brand-400 to-transparent"
                  aria-hidden="true"
                />

                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-ink-800">
                  <img
                    src={leadership.photo}
                    alt={`${leadership.name} — ${leadership.role}, ${company.legalName}`}
                    width="480"
                    height="640"
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink-950/65 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  {/* Status badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-lg border border-ink-700/60 bg-ink-950/80 px-3 py-2.5 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="font-mono text-[0.68rem] text-ink-300">
                      Open to new projects
                    </span>
                  </div>
                </div>

                {/* Name plate */}
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="font-display text-[1.05rem] font-semibold tracking-[-0.02em] text-white">
                      {leadership.name}
                    </p>
                    <p className="mt-0.5 font-mono text-label uppercase text-ink-400">
                      {leadership.role} · VBS
                    </p>
                  </div>
                  <a
                    href={leadership.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 grid h-9 w-9 place-items-center rounded-md border border-ink-700 bg-ink-800 text-ink-400 transition-all hover:border-brand-400 hover:bg-brand-600/20 hover:text-white"
                    aria-label="LinkedIn profile"
                  >
                    <Link2 size={15} />
                  </a>
                </div>

                {/* Constellation */}
                <div className="mt-4 rounded-lg border border-ink-800 bg-ink-950/60 p-3">
                  <p className="mb-2 font-mono text-[0.6rem] uppercase tracking-wider text-ink-600">
                    Systems architecture
                  </p>
                  <div className="h-32">
                    <Constellation />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════════
   PROJECTS
═══════════════════════════════════════════════════════════════════════ */
const PROJECTS = [
  {
    id: "zionic-arc",
    name: "Zionic Arc",
    url: "https://zionicarc.com",
    category: "Architecture Portfolio Platform",
    role: "Lead Developer",
    description:
      "A content-managed portfolio website for an architectural practice, built so the studio can publish and reorder project case studies themselves without needing a developer.",
    contribution:
      "Full-stack development — design implementation, CMS integration, performance optimisation, and production deployment.",
    stack: ["React", "TypeScript", "Node.js", "CMS"],
    functionality: [
      "Self-managed project portfolio and case studies",
      "Responsive layout across all screen sizes",
      "Performance-optimised image delivery",
      "SEO-ready semantic page structure",
    ],
    from: "from-brand-600/40",
    to: "to-sky-500/25",
    accent: "#818CF8",
    Icon: LayoutDashboard,
  },
  {
    id: "kabod-bible-college",
    name: "Kabod Bible College",
    url: "https://kabodbiblecollege.com",
    category: "Educational Institution Website",
    role: "Full-Stack Developer",
    description:
      "A professional institutional website for Kabod Bible College, presenting courses, admissions information, faculty, and contact details in a clear and accessible format.",
    contribution:
      "End-to-end development — UI design, responsive implementation, content structure, and deployment.",
    stack: ["React", "Node.js", "Tailwind CSS"],
    functionality: [
      "Course and programme information pages",
      "Admissions and enquiry flow",
      "Mobile-responsive across all breakpoints",
      "Accessible and semantically structured HTML",
    ],
    from: "from-violet-600/45",
    to: "to-brand-600/25",
    accent: "#A78BFA",
    Icon: Globe,
  },
  {
    id: "newbalan-pharmacy",
    name: "New Balan Medicals",
    url: "https://newbalanpharmacy.com",
    category: "Pharmacy E-Commerce Platform",
    role: "Full-Stack Developer",
    description:
      "An online ordering platform for a pharmacy — customers can browse a medicine catalogue and place orders; an admin side manages inventory and processes incoming orders.",
    contribution:
      "Full-stack build covering storefront UI, product catalogue, order management, admin dashboard, and deployment infrastructure.",
    stack: ["React JS", "Flutter"],
    functionality: [
      "Medicine catalogue with search and filtering",
      "Online ordering and order tracking",
      "Admin inventory and order management",
      "Secure checkout and customer accounts",
    ],
    from: "from-emerald-500/40",
    to: "to-sky-500/25",
    accent: "#34D399",
    Icon: Package,
  },
];

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const tilt = useTilt(5);
  const spotlight = useSpotlight();

  const mergedRef = useCallback(
    (node) => {
      tilt.ref.current = node;
      spotlight.ref.current = node;
    },
    [tilt, spotlight]
  );

  return (
    <Reveal delay={index * 0.07}>
      <div
        ref={mergedRef}
        onMouseMove={(e) => {
          tilt.onMouseMove(e);
          spotlight.onMouseMove(e);
        }}
        onMouseLeave={tilt.onMouseLeave}
        className="spotlight-card group relative flex flex-col rounded-xl border border-ink-800 bg-ink-900/60 backdrop-blur-sm transition-all duration-300 ease-out will-change-transform hover:border-ink-700 hover:shadow-[0_20px_50px_-16px_rgba(79,70,229,0.28)] overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* top accent on hover */}
        <div
          className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.accent}aa, transparent)`,
          }}
          aria-hidden="true"
        />

        {/* Cover */}
        <div
          className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.from} ${project.to}`}
        >
          <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="flex flex-col items-center gap-3">
              <span className="grid h-14 w-14 place-items-center rounded-xl border border-white/15 bg-ink-950/60 backdrop-blur text-white">
                <project.Icon size={26} strokeWidth={1.6} />
              </span>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-1.5 rounded-full border border-white/20 bg-ink-950/60 px-3 py-1 font-mono text-[0.64rem] text-white/80 backdrop-blur transition-colors hover:bg-white/10 hover:text-white"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Visit ${project.name} website`}
              >
                {project.url.replace("https://", "")}
                <ExternalLink size={10} />
              </a>
            </div>
          </div>
          <div
            className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-ink-900/80 to-transparent"
            aria-hidden="true"
          />
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-label uppercase text-ink-500">{project.category}</p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.02em] text-white">
                {project.name}
              </h3>
            </div>
            <span className="shrink-0 tag mt-5">{project.role}</span>
          </div>

          <p className="mt-4 text-sm text-ink-400 leading-relaxed text-pretty">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-5 flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-wider text-ink-500 transition-colors hover:text-white"
            aria-expanded={expanded}
          >
            <ChevronRight
              size={13}
              className={`transition-transform duration-200 ${expanded ? "rotate-90" : ""}`}
            />
            {expanded ? "Less detail" : "View contribution"}
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="detail"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-4 rounded-lg border border-ink-800 bg-ink-950/60 p-4">
                  <p className="font-mono text-[0.63rem] uppercase tracking-wider text-ink-500 mb-2">
                    My contribution
                  </p>
                  <p className="text-xs text-ink-300 leading-relaxed">
                    {project.contribution}
                  </p>
                  <p className="font-mono text-[0.63rem] uppercase tracking-wider text-ink-500 mt-4 mb-2">
                    Key functionality
                  </p>
                  <ul className="space-y-1.5">
                    {project.functionality.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-ink-400">
                        <span
                          className="mt-0.5 shrink-0 h-1.5 w-1.5 rounded-full bg-brand-400"
                          aria-hidden="true"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-auto pt-5 border-t border-ink-800">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group/cta inline-flex items-center gap-1.5 text-sm font-medium text-ink-300 transition-colors hover:text-white"
            >
              View live project
              <ArrowUpRight
                size={14}
                className="text-ink-600 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const ProjectsSection = () => (
  <section
    id="projects"
    className="section border-t border-ink-800"
    aria-labelledby="projects-heading"
  >
    <div className="shell">
      <Reveal>
        <span className="eyebrow">Selected work</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 id="projects-heading" className="mt-6 text-h2 max-w-[22ch]">
          Projects I have designed, built, and shipped.
        </h2>
      </Reveal>
      <Reveal delay={0.09}>
        <p className="mt-5 max-w-[58ch] text-lead text-ink-400 text-pretty">
          A selection of live products delivered through Vision Breath Solutions. Each card
          reflects verified project work and my specific contribution — not invented metrics or
          fabricated outcomes.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      <Reveal delay={0.1} className="mt-10">
        <div className="panel border-dashed p-7 sm:p-9 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <p className="font-display text-lg font-semibold text-white">
              More work is behind an NDA or client login.
            </p>
            <p className="mt-1.5 text-sm text-ink-400">
              Describe your project and I will walk you through the most relevant experience I
              can share.
            </p>
          </div>
          <Link to="/contact" className="shrink-0 btn-primary">
            Discuss your project
            <ArrowUpRight size={15} strokeWidth={2.2} />
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════════════
   EXPERTISE
═══════════════════════════════════════════════════════════════════════ */
const EXPERTISE = [
  {
    label: "Frontend Engineering",
    Icon: Code2,
    accent: "from-brand-600/30 to-violet-600/20",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI", "Accessibility"],
  },
  {
    label: "Backend & APIs",
    Icon: Server,
    accent: "from-sky-600/30 to-brand-600/20",
    skills: ["Node.js", "REST APIs", "Authentication", "Python", "Express", "GraphQL"],
  },
  {
    label: "Database & Architecture",
    Icon: Database,
    accent: "from-violet-600/30 to-brand-600/20",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Data Modelling", "Query Optimisation"],
  },
  {
    label: "Mobile Development",
    Icon: Smartphone,
    accent: "from-emerald-500/30 to-sky-500/20",
    skills: ["React Native", "Cross-platform iOS & Android", "Push Notifications", "Offline-first"],
  },
  {
    label: "AI & Automation",
    Icon: BrainCircuit,
    accent: "from-brand-600/30 to-fuchsia-600/20",
    skills: ["LangChain", "OpenAI / Claude APIs", "Document AI", "Workflow Automation", "Vector DBs"],
  },
  {
    label: "Deployment & Integrations",
    Icon: Cloud,
    accent: "from-sky-600/30 to-emerald-500/20",
    skills: ["AWS", "Google Cloud", "Docker", "CI/CD", "Vercel", "Nginx", "Third-party APIs"],
  },
];

const ExpertiseSection = () => (
  <section
    id="expertise"
    className="section bg-ink-900/40 border-y border-ink-800"
    aria-labelledby="expertise-heading"
  >
    <div className="shell">
      <Reveal>
        <span className="eyebrow">Technical depth</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 id="expertise-heading" className="mt-6 text-h2 max-w-[24ch]">
          Capabilities across the full product stack.
        </h2>
      </Reveal>
      <Reveal delay={0.09}>
        <p className="mt-5 max-w-[56ch] text-lead text-ink-400 text-pretty">
          Built from technologies used in the projects I have shipped. No invented proficiency
          scores — these are the tools I use to build real products.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-ink-800 bg-ink-800 sm:grid-cols-2 lg:grid-cols-3">
        {EXPERTISE.map((cat, i) => (
          <Reveal key={cat.label} delay={i * 0.05}>
            <div className="spotlight-card group relative h-full bg-ink-900 p-6 transition-colors duration-300 hover:bg-ink-900/80">
              <span
                className={`inline-grid h-11 w-11 place-items-center rounded-lg border border-ink-700 bg-gradient-to-br ${cat.accent} text-white mb-5`}
                aria-hidden="true"
              >
                <cat.Icon size={20} strokeWidth={1.7} />
              </span>
              <h3 className="text-h3 text-white">{cat.label}</h3>
              <ul
                className="mt-4 flex flex-wrap gap-1.5"
                aria-label={`${cat.label} skills`}
              >
                {cat.skills.map((s) => (
                  <li key={s}>
                    <span className="tag">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════════════
   LEADERSHIP PHILOSOPHY
═══════════════════════════════════════════════════════════════════════ */
const APPROACHES = [
  {
    Icon: Target,
    title: "Problem first, technology second",
    body: "I start with the business constraint, not the framework. The right tool is the one that solves the actual problem — reliably, maintainably, and within the real constraints of the project.",
  },
  {
    Icon: Layers,
    title: "Ideas turned into usable products",
    body: "Good software is not just code that runs. It is a product people can use, that behaves predictably, and that a client's team can operate after handover.",
  },
  {
    Icon: GitBranch,
    title: "Maintainability as a design decision",
    body: "Systems that cannot be changed become a liability. I design for the second version of a product — so the thing we build today can still grow eighteen months later.",
  },
  {
    Icon: Shield,
    title: "Honest scope and honest trade-offs",
    body: "I will tell a client when something costs more than it is worth, when a technology is fashionable rather than appropriate, and when a scope needs to be smaller before it can be right.",
  },
  {
    Icon: TrendingUp,
    title: "Practical business outcomes",
    body: "Software should move a number — a cost, a conversion, an hour per week. If I cannot explain how the product I am building does that, we are building the wrong thing.",
  },
  {
    Icon: Users,
    title: "Collaborative, not transactional",
    body: "The best digital products come from a working relationship where the client understands the constraints and the engineer understands the business. I invest in that from day one.",
  },
];

const LeadershipPhilosophySection = () => (
  <section className="section" aria-labelledby="philosophy-heading">
    <div className="shell">
      <Reveal>
        <span className="eyebrow">Approach</span>
      </Reveal>
      <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal delay={0.04} className="lg:col-span-5">
          <h2 id="philosophy-heading" className="text-h2 max-w-[20ch]">
            How I approach technology and business.
          </h2>
          <p className="mt-6 text-lead text-ink-400 text-pretty max-w-[46ch]">
            These are the principles that guide every project I take on — as a developer, a
            director, and as someone responsible for a client's investment.
          </p>
        </Reveal>
        <div className="lg:col-span-7">
          <div className="grid gap-5 sm:grid-cols-2">
            {APPROACHES.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="panel-hover h-full p-6">
                  <span
                    className="inline-grid h-10 w-10 place-items-center rounded-md border border-ink-700 bg-ink-900 text-brand-400 mb-4"
                    aria-hidden="true"
                  >
                    <a.Icon size={18} strokeWidth={1.8} />
                  </span>
                  <h3 className="font-display text-[1rem] font-semibold tracking-[-0.015em] text-white leading-snug">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-400 leading-relaxed text-pretty">
                    {a.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════════════
   PROFESSIONAL JOURNEY
═══════════════════════════════════════════════════════════════════════ */
const JOURNEY = [
  {
    phase: "Software Engineering Foundation",
    detail:
      "Built a foundation in full-stack development across React, Node.js, and mobile platforms. Delivered client projects spanning web applications, e-commerce platforms, and institutional websites — gaining direct experience with the full delivery lifecycle.",
    tags: ["React", "Node.js", "React Native", "PostgreSQL"],
    Icon: Terminal,
    highlight: false,
  },
  {
    phase: "Product & Platform Delivery",
    detail:
      "Expanded into end-to-end product delivery — architecture decisions, API design, database modelling, deployment infrastructure, and client-facing project management. Started taking full ownership of production systems.",
    tags: ["Architecture", "APIs", "DevOps", "Client delivery"],
    Icon: Layers,
    highlight: false,
  },
  {
    phase: "AI & Intelligent Workflows",
    detail:
      "Integrated AI capabilities into client projects — document understanding, LLM-powered assistants, retrieval systems, and workflow automation built on production-grade pipelines.",
    tags: ["LLMs", "LangChain", "Automation", "Python"],
    Icon: BrainCircuit,
    highlight: false,
  },
  {
    phase: "Managing Director — Vision Breath Solutions Pvt. Ltd.",
    detail:
      "Founded and leads Vision Breath Solutions — a software and AI engineering studio in Vijayawada, India. Responsible for client relationships, technical direction, delivery quality, and the company's long-term strategic growth.",
    tags: ["Leadership", "Strategy", "Client relationships", "Engineering"],
    Icon: TrendingUp,
    highlight: true,
  },
];

const JourneySection = () => (
  <section
    className="section bg-ink-900/40 border-y border-ink-800"
    aria-labelledby="journey-heading"
  >
    <div className="shell">
      <Reveal>
        <span className="eyebrow">Professional journey</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 id="journey-heading" className="mt-6 text-h2 max-w-[22ch]">
          From engineer to entrepreneur.
        </h2>
      </Reveal>

      <div className="mt-14 relative">
        <div
          className="absolute left-[19px] top-3 bottom-8 w-px bg-ink-800 sm:left-[23px]"
          aria-hidden="true"
        />
        <ol className="space-y-10">
          {JOURNEY.map((step, i) => (
            <Reveal key={step.phase} as="li" delay={i * 0.08}>
              <div className="flex gap-6 sm:gap-8">
                <div className="relative shrink-0">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border ${
                      step.highlight
                        ? "border-brand-500 bg-brand-600/25 text-brand-300"
                        : "border-ink-700 bg-ink-900 text-ink-400"
                    }`}
                    aria-hidden="true"
                  >
                    <step.Icon size={16} strokeWidth={1.8} />
                  </span>
                </div>
                <div
                  className={`flex-1 rounded-xl border p-6 ${
                    step.highlight
                      ? "border-brand-600/35 bg-brand-600/8"
                      : "border-ink-800 bg-ink-900/60"
                  }`}
                >
                  <h3
                    className={`font-display text-lg font-semibold tracking-[-0.02em] ${
                      step.highlight ? "text-brand-300" : "text-white"
                    }`}
                  >
                    {step.phase}
                  </h3>
                  <p className="mt-3 text-sm text-ink-400 leading-relaxed text-pretty max-w-prose">
                    {step.detail}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {step.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════════════
   CONTACT
═══════════════════════════════════════════════════════════════════════ */
const ContactSection = () => {
  const tilt = useTilt(4);
  return (
    <section
      className="beam-top relative overflow-hidden border-t border-ink-800 bg-gradient-to-b from-brand-900/25 to-transparent"
      aria-labelledby="leadership-contact-heading"
    >
      <Orb className="-top-24 right-[-4%] h-[380px] w-[380px] bg-brand-600/22 blur-[90px] animate-drift" />
      <Orb className="-bottom-28 left-[-6%] h-[340px] w-[340px] bg-violet-600/16 blur-[80px] animate-drift-2" />

      <div className="shell relative py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow !text-ink-400 before:!bg-ink-700">Get in touch</span>
            <h2
              id="leadership-contact-heading"
              className="mt-6 text-h2 !text-white max-w-[20ch]"
            >
              Have a business problem worth{" "}
              <span className="text-gradient">solving?</span>
            </h2>
            <p className="mt-6 max-w-[52ch] text-lead text-ink-400 text-pretty">
              If you are building a web platform, mobile application, AI solution, or need to
              modernise an existing system — talk to me. Even if we are not the right fit, you
              will leave the conversation knowing more than you came in with.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary btn-lg">
                Discuss a project
                <ArrowUpRight size={16} strokeWidth={2.2} />
              </Link>
              <a
                href={leadership.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-outline btn-lg inline-flex items-center gap-2"
              >
                <Link2 size={16} />
                Connect on LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div
              ref={tilt.ref}
              onMouseMove={tilt.onMouseMove}
              onMouseLeave={tilt.onMouseLeave}
              className="relative rounded-xl border border-ink-700 bg-ink-900/80 p-7 backdrop-blur-sm will-change-transform shadow-[0_16px_40px_-12px_rgba(79,70,229,0.22)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="absolute inset-x-0 top-0 h-px rounded-t-xl bg-gradient-to-r from-transparent via-brand-400/60 to-transparent"
                aria-hidden="true"
              />
              <p className="font-mono text-[0.63rem] uppercase tracking-wider text-ink-500 mb-5">
                Contact details
              </p>
              <dl className="space-y-5">
                <div className="flex items-start gap-3">
                  <Mail
                    size={15}
                    className="mt-0.5 shrink-0 text-brand-400"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="font-mono text-label uppercase text-ink-500">Email</dt>
                    <dd className="mt-1.5">
                      <a
                        href={`mailto:${company.email}`}
                        className="text-sm text-ink-200 transition-colors hover:text-white"
                      >
                        {company.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone
                    size={15}
                    className="mt-0.5 shrink-0 text-brand-400"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="font-mono text-label uppercase text-ink-500">Phone</dt>
                    <dd className="mt-1.5">
                      <a
                        href={`tel:${company.phoneHref}`}
                        className="text-sm text-ink-200 transition-colors hover:text-white"
                      >
                        {company.phone}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Link2
                    size={15}
                    className="mt-0.5 shrink-0 text-brand-400"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="font-mono text-label uppercase text-ink-500">LinkedIn</dt>
                    <dd className="mt-1.5">
                      <a
                        href={leadership.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-1 text-sm text-ink-200 transition-colors hover:text-white"
                      >
                        {leadership.name}
                        <ArrowUpRight
                          size={12}
                          className="text-ink-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe
                    size={15}
                    className="mt-0.5 shrink-0 text-brand-400"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="font-mono text-label uppercase text-ink-500">Company</dt>
                    <dd className="mt-1.5">
                      <a
                        href="https://visionbreathsolutions.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-ink-200 transition-colors hover:text-white"
                      >
                        {company.legalName}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
              <div className="mt-6 rounded-lg border border-ink-800 bg-ink-950/60 px-4 py-3">
                <p className="font-mono text-[0.63rem] uppercase tracking-wider text-ink-500 mb-1">
                  Location
                </p>
                <p className="text-sm text-ink-300">{company.address.line1}</p>
                <p className="text-sm text-ink-400">{company.address.line2}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════════
   PAGE ROOT
═══════════════════════════════════════════════════════════════════════ */
const LeadershipPage = () => (
  <>
    <SEO
      path="/leadership"
      title={`${leadership.name} — Managing Director`}
      description={`${leadership.name} is the Managing Director of ${company.legalName}, a software engineer and full-stack developer building web platforms, mobile apps, and AI solutions in Vijayawada, India.`}
      keywords="Mangalapudi Joy Nicholas, Managing Director Vision Breath Solutions, Full-Stack Developer Vijayawada, Software Engineer India, React Developer, Node.js Developer, Technology Entrepreneur"
      schema={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${DOMAIN}/` },
              {
                "@type": "ListItem",
                position: 2,
                name: "Leadership",
                item: `${DOMAIN}/leadership`,
              },
            ],
          },
          {
            "@type": "Person",
            "@id": `${DOMAIN}/leadership#person`,
            name: leadership.name,
            jobTitle: [
              leadership.role,
              "Software Engineer",
              "Full-Stack Developer",
              "Technology Entrepreneur",
            ],
            worksFor: {
              "@type": "Organization",
              "@id": `${DOMAIN}/#organization`,
              name: company.legalName,
            },
            url: `${DOMAIN}/leadership`,
            image: `${DOMAIN}${leadership.photo}`,
            sameAs: [leadership.linkedin],
            knowsAbout: [
              "Software Engineering",
              "Full-Stack Development",
              "React",
              "Node.js",
              "Mobile Application Development",
              "AI Engineering",
              "Technology Leadership",
            ],
          },
          {
            "@type": "ProfilePage",
            "@id": `${DOMAIN}/leadership#webpage`,
            url: `${DOMAIN}/leadership`,
            name: `${leadership.name} — Managing Director | ${company.legalName}`,
            mainEntity: { "@id": `${DOMAIN}/leadership#person` },
          },
        ],
      }}
    />

    <HeroSection />
    <ProjectsSection />
    <ExpertiseSection />
    <LeadershipPhilosophySection />
    <JourneySection />
    <ContactSection />
  </>
);

export default LeadershipPage;
