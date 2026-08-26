import React from "react";
import { ArrowUpRight } from "lucide-react";
import SEO from "./SEO";
import PageHero from "./ui/PageHero";
import Reveal from "./ui/Reveal";
import CtaBand from "./CtaBand";
import { company, leadership, principles, process } from "../lib/content";

const DOMAIN = "https://www.visionbreathsolutions.com";

const AboutPage = () => (
  <>
    <SEO
      path="/about"
      title="About"
      description={`${company.legalName} is a software and AI engineering studio in Vijayawada, India, led by ${leadership.name}.`}
      schema={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${DOMAIN}/` },
              { "@type": "ListItem", position: 2, name: "About", item: `${DOMAIN}/about` },
            ],
          },
          {
            "@type": "Person",
            "@id": `${DOMAIN}/about#leadership`,
            name: leadership.name,
            jobTitle: leadership.role,
            worksFor: { "@id": `${DOMAIN}/#organization` },
            sameAs: [leadership.linkedin],
          },
        ],
      }}
    />

    <PageHero
      eyebrow="About"
      title="A small senior team, deliberately."
      lead={`${company.legalName} is an engineering studio in Vijayawada. We stay small because the quality of a software project is decided by who is actually writing it — and we would rather you knew exactly who that is.`}
    />

    {/* Principles */}
    <section className="section">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">How we operate</span>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-ink-800 bg-ink-800 md:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05} className="bg-ink-900 p-7 sm:p-9">
              <span className="font-mono text-label text-ink-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="text-h3 mt-5 max-w-[24ch]">{p.title}</h2>
              <p className="mt-3.5 text-sm text-ink-400 text-pretty">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Letter from the Managing Director */}
    <section className="section bg-ink-900/50 border-y border-ink-800">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <span className="eyebrow">Leadership</span>

          <figure className="mt-7">
            <img
              src={leadership.photo}
              alt={`${leadership.name} — ${leadership.role}, ${company.legalName}`}
              width="480"
              height="600"
              loading="lazy"
              className="w-full max-w-[300px] rounded-lg border border-ink-800 object-cover lg:max-w-none"
            />
            <figcaption className="mt-5">
              <p className="font-display text-lg font-semibold tracking-[-0.02em] text-white">
                {leadership.name}
              </p>
              <p className="mt-1 font-mono text-label uppercase text-ink-400">{leadership.role}</p>
              <a
                href={leadership.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group mt-4 inline-flex items-center gap-1.5 text-sm text-ink-300 transition-colors hover:text-white"
              >
                LinkedIn
                <ArrowUpRight
                  size={13}
                  className="text-ink-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-7 lg:col-start-6">
          <blockquote className="border-l-2 border-white pl-7">
            <p className="font-display text-[clamp(1.375rem,2.4vw,1.75rem)] leading-[1.4] tracking-[-0.028em] text-white text-pretty">
              {leadership.letter[0]}
            </p>
          </blockquote>

          <div className="prose-block mt-8">
            {leadership.letter.slice(1).map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>

          <p className="mt-9 border-t border-ink-800 pt-6 font-mono text-label uppercase text-ink-400">
            {leadership.name} · {leadership.role}
          </p>
        </Reveal>
      </div>
    </section>

    {/* Process recap */}
    <section className="section">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">The engagement</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-h2 mt-6 max-w-[20ch]">What working with us actually looks like</h2>
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

export default AboutPage;
