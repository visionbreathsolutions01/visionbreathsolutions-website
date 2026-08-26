import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Cpu, Monitor, Smartphone, Cloud } from "lucide-react";
import SEO from "./SEO";
import PageHero from "./ui/PageHero";
import Reveal from "./ui/Reveal";
import CtaBand from "./CtaBand";
import { company, services, process } from "../lib/content";

const DOMAIN = "https://www.visionbreathsolutions.com";
const ICONS = { ai: Cpu, web: Monitor, mobile: Smartphone, cloud: Cloud };

const ServicesPage = () => (
  <>
    <SEO
      path="/services"
      title="Services"
      description={`AI and machine learning, web platforms, mobile applications and cloud engineering from ${company.legalName}.`}
      schema={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${DOMAIN}/` },
              { "@type": "ListItem", position: 2, name: "Services", item: `${DOMAIN}/services` },
            ],
          },
          {
            "@type": "ItemList",
            "@id": `${DOMAIN}/services#list`,
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Service",
                name: s.title,
                description: s.summary,
                provider: { "@id": `${DOMAIN}/#organization` },
                areaServed: "Worldwide",
              },
            })),
          },
        ],
      }}
    />

    <PageHero
      eyebrow="Services"
      title="What we build, and what it is for."
      lead="Four disciplines under one roof. Most projects use more than one — which is the point, because the expensive failures happen in the gaps between vendors."
    >
      <nav aria-label="Jump to service" className="mt-10 flex flex-wrap gap-2">
        {services.map((s) => (
          <a key={s.slug} href={`#${s.slug}`} className="btn-outline text-xs">
            {s.title}
          </a>
        ))}
      </nav>
    </PageHero>

    {services.map((s, i) => (
      <section
        key={s.slug}
        id={s.slug}
        className={`section scroll-mt-24 ${i % 2 ? "bg-ink-900/50 border-y border-ink-800" : ""}`}
      >
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="flex items-center gap-4">
              {(() => { const Icon = ICONS[s.slug]; return (
                <span className="grid h-12 w-12 place-items-center rounded-lg border border-ink-700 bg-ink-800/70 text-brand-300">
                  <Icon size={22} strokeWidth={1.7} />
                </span>
              ); })()}
              <span className="font-mono text-label text-ink-600">{s.n}</span>
            </div>
            <h2 className="text-h2 mt-5">{s.title}</h2>
            <p className="mt-6 text-lead text-ink-400 text-pretty">{s.summary}</p>

            <div className="mt-8">
              <span className="font-mono text-label uppercase text-ink-400">Typical stack</span>
              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {s.stack.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>

            <Link to="/contact" className="btn-primary mt-9">
              Discuss a {s.title.toLowerCase()} project
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </Link>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7">
            <span className="font-mono text-label uppercase text-ink-400">What that covers</span>
            <ul className="mt-5 border-t border-ink-800">
              {s.points.map((p) => (
                <li key={p} className="flex items-baseline gap-5 border-b border-ink-800 py-5">
                  <span className="h-px w-5 shrink-0 translate-y-[-0.35em] bg-ink-600" aria-hidden="true" />
                  <span className="text-[1.0625rem] leading-snug text-ink-100">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    ))}

    {/* Engagement model */}
    <section className={`section ${services.length % 2 ? "bg-ink-900/50 border-y border-ink-800" : ""}`}>
      <div className="shell">
        <Reveal><span className="eyebrow">Engagement</span></Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-h2 mt-6 max-w-[20ch]">Every project runs the same four steps</h2>
        </Reveal>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-ink-800 bg-ink-800 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.05} className="bg-ink-900 p-7">
              <span className="font-mono text-label text-ink-600">{s.n}</span>
              <h3 className="text-h3 mt-4">{s.title}</h3>
              <p className="mt-3 text-sm text-ink-400 text-pretty">{s.desc}</p>
              <p className="mt-5 border-t border-ink-800 pt-4 font-mono text-[0.6875rem] text-ink-400">
                {s.output}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>

    <CtaBand />
  </>
);

export default ServicesPage;
