/**
 * Single source of truth for site content.
 * Every page reads from here so copy can never drift between pages.
 *
 * NOTE ON CLAIMS: this file contains no invented metrics, client logos or
 * testimonials. Anything awaiting real data is grouped under `placeholders`
 * below and is clearly marked in the UI until you supply the real thing.
 */

export const company = {
  name: "Vision Breath Solutions",
  legalName: "Vision Breath Solutions Pvt. Ltd.",
  short: "VBS",
  tagline: "Software, AI and cloud engineering.",
  email: "contact@visionbreathsolutions.com",
  phone: "+91 9963416422",
  phoneHref: "+919963416422",
  address: {
    line1: "Pathuru Cross Road, Kunchanapalli",
    line2: "Vijayawada, Andhra Pradesh, India",
  },
  socials: [
    { label: "LinkedIn",  href: "https://www.linkedin.com/company/visionbreathsolutions" },
    { label: "GitHub",    href: "https://github.com/visionbreathsolutions" },
    { label: "Instagram", href: "https://www.instagram.com/visionbreathsolutions_01/" },
    { label: "X",         href: "https://x.com/visionbreath" },
  ],
};

export const nav = [
  { label: "Home",     path: "/" },
  { label: "Work",     path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "About",    path: "/about" },
  { label: "Contact",  path: "/contact" },
];

/* ---------------------------------------------------------------- Hero */

export const hero = {
  eyebrow: "AI · Software · Cloud",
  /* The rotating word cycles through what we actually ship — latest tech, plainly named. */
  rotating: ["AI agents", "LLM copilots", "web platforms", "mobile apps", "cloud systems", "automation"],
  lead:
    "We are a senior engineering studio in Vijayawada building AI systems, web platforms and mobile apps — from the first architecture decision through to production support.",
  /* Factual positioning statements, not performance claims. */
  facts: [
    { k: "Engagements", v: "Fixed-scope projects or an embedded team" },
    { k: "Coverage",    v: "Discovery, build, launch and ongoing support" },
    { k: "Based in",    v: "Vijayawada, India — working with clients globally" },
  ],
};

/* ------------------------------------------------------------ Services */

export const services = [
  {
    slug: "ai",
    tease: "Assistants, document AI and forecasting built on your own data.",
    n: "01",
    title: "AI & Machine Learning",
    summary:
      "Practical AI that changes a number in your business — not a demo. Document understanding, assistants, forecasting and automation, built on your own data.",
    points: [
      "LLM assistants & retrieval over private data",
      "Document extraction and classification",
      "Forecasting and decision support models",
      "Evaluation harnesses so quality is measurable",
    ],
    stack: ["Python", "PyTorch", "LangChain", "Vector DBs", "Claude / OpenAI"],
  },
  {
    slug: "web",
    tease: "Portals, dashboards and sites that stay fast as they grow.",
    n: "02",
    title: "Web Platforms",
    summary:
      "Customer portals, internal tools and marketing sites engineered to stay fast as they grow — accessible, indexable and genuinely maintainable.",
    points: [
      "Customer and partner portals",
      "Admin and operations dashboards",
      "Headless commerce and content platforms",
      "Performance, SEO and accessibility work",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    slug: "mobile",
    tease: "iOS and Android apps shipped with the release pipeline included.",
    n: "03",
    title: "Mobile Applications",
    summary:
      "iOS and Android products that survive real-world networks, real devices and app store review — shipped with the release pipeline included.",
    points: [
      "Cross-platform iOS & Android builds",
      "Offline-first and sync architecture",
      "Push, payments and device integrations",
      "Store submission and release automation",
    ],
    stack: ["React Native", "Swift", "Kotlin", "Firebase"],
  },
  {
    slug: "cloud",
    tease: "Infrastructure, pipelines and monitoring that hold up in production.",
    n: "04",
    title: "Cloud & Platform Engineering",
    summary:
      "The unglamorous layer that decides whether everything above it holds up: infrastructure, pipelines, observability and cost control.",
    points: [
      "Cloud architecture and migration",
      "CI/CD pipelines and infrastructure as code",
      "Monitoring, alerting and incident response",
      "Security hardening and cost optimisation",
    ],
    stack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
  },
];

/* ------------------------------------------------------------- Process */

export const process = [
  {
    n: "01",
    title: "Discover",
    desc: "We map the problem, the constraints and the people before writing code. You leave with a scope, a plan and a fixed price — whether or not you continue with us.",
    output: "Scope, architecture brief, estimate",
  },
  {
    n: "02",
    title: "Design & architect",
    desc: "Data model, API contracts, infrastructure and interface designed together, so the thing we build in month three still fits the thing we agreed in week one.",
    output: "Schemas, API spec, UI prototype",
  },
  {
    n: "03",
    title: "Build",
    desc: "Two-week sprints against a visible backlog. You get a working environment from the first sprint, so progress is something you use rather than something you're told about.",
    output: "Staging build every sprint",
  },
  {
    n: "04",
    title: "Launch & support",
    desc: "Deployment, monitoring and handover documentation. We stay on afterwards under a support agreement, or hand the whole thing to your team cleanly.",
    output: "Production release, runbook, support",
  },
];

/* ---------------------------------------------------------------- Work */

export const work = [
  {
    slug: "support-chatbot",
    client: "Customer Service AI",
    title: "An AI chatbot that answers customer queries from company knowledge",
    summary:
      "A retrieval-based assistant trained on a company's own documents and FAQs, answering customer questions around the clock and handing off to a human agent when the conversation needs one.",
    scope: ["AI & ML", "Chat assistant", "Integrations"],
    stack: ["Python", "LangChain", "React", "Vector DB"],
    year: "2026",
  },
  {
    slug: "inventory-management",
    client: "Inventory Platform",
    title: "An inventory management system for stock, purchases and reporting",
    summary:
      "A web application that tracks stock levels across locations, manages purchase orders and suppliers, and gives the owner live reports — replacing a spreadsheet process that broke every month-end.",
    scope: ["Web platform", "Admin tooling", "Reporting"],
    stack: ["React", "Node.js", "PostgreSQL"],
    year: "2026",
  },
  {
    slug: "household-ecommerce",
    client: "Household Goods Store",
    title: "An e-commerce web application for a household products business",
    summary:
      "A full storefront for a household goods brand — product catalogue, cart and online payments on the customer side, with order management and inventory sync for the shop's staff on the admin side.",
    scope: ["E-commerce", "Payments", "Admin tooling"],
    stack: ["Next.js", "Node.js", "MongoDB"],
    year: "2026",
  },
  {
    slug: "zionic-arc",
    client: "Zionic Arc",
    title: "A project portfolio platform for an architecture practice",
    summary:
      "A content-managed website for an architectural firm, built so the studio can publish and reorder project case studies themselves without a developer in the loop.",
    scope: ["Web platform", "CMS", "Performance"],
    stack: ["React", "TypeScript", "Node.js"],
    year: "2025",
  },
  {
    slug: "newbalan-pharmacy",
    client: "Newbalan Pharmacy",
    title: "An online ordering front end for a pharmacy",
    summary:
      "A storefront that lets customers browse a medicine catalogue and place orders online, with an admin side for managing inventory and incoming orders.",
    scope: ["E-commerce", "Web platform", "Admin tooling"],
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    year: "2025",
  },
];

/* --------------------------------------------------------------- Stack */

export const stack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
  "MongoDB", "React Native", "Swift", "Kotlin", "AWS", "Google Cloud",
  "Docker", "Kubernetes", "Terraform", "PyTorch", "LangChain", "Redis",
];

/* ------------------------------------------------------------ Leadership */

export const leadership = {
  name: "Mangalapudi Joy Nicholas",
  role: "Managing Director",
  photo: "/md-joy-nicholas.jpg",
  linkedin: "https://www.linkedin.com/in/mangalapudi-joy-nicholas-020a2b224/",
  letter: [
    "Technology should do more than solve a problem. It should open something up — a market you could not serve before, an hour a week your team gets back, a decision you can finally make on evidence.",
    "That belief is why this company exists. We build software that is reliable enough to be boring, and we would rather tell a client the honest answer early than the comfortable one late.",
    "Every engagement here is judged on one question: did the client's business get measurably better? Not whether the project closed on time, not whether the stack was fashionable. Whether it was worth doing.",
    "If you are weighing up a build, talk to us. Even if we are not the right team for it, you will leave the conversation knowing more than you came in with.",
  ],
};

/* ----------------------------------------------------------- Principles */

export const principles = [
  {
    title: "The people you meet are the people who build it",
    desc: "No contracted bench appears after signature. The engineers on your first call are the ones writing the code, and they stay on the project through to handover.",
  },
  {
    title: "Estimates are written down, and so are the assumptions",
    desc: "A number without its assumptions is a guess dressed up. We show you what the price depends on, so when something changes you can see exactly why the number moved.",
  },
  {
    title: "You get a working environment from sprint one",
    desc: "Progress you can click through beats progress described in a status meeting. There is always a staging URL, and it is always current.",
  },
  {
    title: "We say no to work we would do badly",
    desc: "Turning down a project we are wrong for costs us one contract. Taking it costs you a year. We will tell you who to talk to instead.",
  },
];

/* ----------------------------------------------------- Frequent questions */

export const faqs = [
  {
    q: "How do projects usually start?",
    a: "With a paid discovery: one to two weeks mapping the problem, the constraints and the integration surface. It ends in a written scope, an architecture brief and a fixed estimate — which is yours to take elsewhere if you'd rather.",
  },
  {
    q: "How are engagements priced?",
    a: "Two ways. Fixed price against a scope we've written together, or a monthly rate for an embedded team when the roadmap is still moving. We'll tell you which one fits your situation before you ask.",
  },
  {
    q: "Who actually writes the code?",
    a: "The engineers you meet in the first call. We don't route work to a subcontracted bench after the contract is signed.",
  },
  {
    q: "What happens after launch?",
    a: "You choose. We can run the system under a support agreement with agreed response times, or hand over documentation, infrastructure and repository access so your own team takes it from there.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. We work remotely with clients across time zones and keep a fixed daily overlap window so you're never waiting a full day for an answer.",
  },
];
