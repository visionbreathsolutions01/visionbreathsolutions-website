import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "./SEO";
import PageHero from "./ui/PageHero";
import Reveal from "./ui/Reveal";
import CtaBand from "./CtaBand";
import ProjectCover from "./ui/ProjectCover";
import { company, work, services } from "../lib/content";

const DOMAIN = "https://www.visionbreathsolutions.com";

/**
 * The portfolio is short and we do not pad it. A large, honest presentation of
 * two live projects reads better than a grid of concepts and mock-ups.
 */
const ProjectsPage = () => (
  <>
    <SEO
      path="/projects"
      title="Work"
      description={`Selected projects delivered by ${company.legalName} — live web platforms and e-commerce builds.`}
      schema={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${DOMAIN}/` },
              { "@type": "ListItem", position: 2, name: "Work", item: `${DOMAIN}/projects` },
            ],
          },
          {
            "@type": "CollectionPage",
            "@id": `${DOMAIN}/projects#collection`,
            name: "Selected work",
            url: `${DOMAIN}/projects`,
            about: { "@id": `${DOMAIN}/#organization` },
          },
        ],
      }}
    />

    <PageHero
      eyebrow="Selected work"
      title="Built, shipped, in use."
      lead="A selection of what we have delivered — AI assistants, operational platforms and commerce builds. Each one is summarised the way we would explain it to you on a call: what it is, who it serves, and what it was built with."
    />

    <section className="section">
      <div className="shell space-y-16 sm:space-y-24">
        {work.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.06} className="group">
            <article className="grid gap-8 lg:grid-cols-12 lg:gap-16">

              <div className="lg:col-span-4">
                <ProjectCover slug={p.slug} className="mb-7" />
                <span className="font-mono text-label text-ink-600">
                  {String(i + 1).padStart(2, "0")} / {String(work.length).padStart(2, "0")}
                </span>
                <h2 className="mt-5 font-display text-[1.75rem] font-semibold leading-tight tracking-[-0.03em] text-white">
                  {p.client}
                </h2>
                <p className="mt-2 font-mono text-label uppercase text-ink-400">{p.year}</p>

              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <h3 className="text-h3 max-w-[26ch]">{p.title}</h3>
                <p className="mt-5 max-w-prose text-body text-ink-400 text-pretty">{p.summary}</p>

                <dl className="mt-9 grid gap-8 border-t border-ink-800 pt-7 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-label uppercase text-ink-400">Scope</dt>
                    <dd className="mt-3 flex flex-wrap gap-1.5">
                      {p.scope.map((t) => <span key={t} className="tag">{t}</span>)}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-label uppercase text-ink-400">Built with</dt>
                    <dd className="mt-3 flex flex-wrap gap-1.5">
                      {p.stack.map((t) => <span key={t} className="tag">{t}</span>)}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          </Reveal>
        ))}

        {/* Honest close rather than filler projects */}
        <Reveal className="panel border-dashed p-9 sm:p-12">
          <h2 className="text-h3 max-w-[26ch]">Looking for something closer to your own problem?</h2>
          <p className="mt-4 max-w-prose text-sm text-ink-400">
            Not everything we build is public — some of it sits behind a client's login or an NDA.
            Tell us the area you are working in and we will walk you through the most relevant
            work we can share, including the parts that did not go to plan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Ask about similar work <ArrowUpRight size={15} strokeWidth={2.2} />
            </Link>
            <Link to="/services" className="btn-outline">
              See all {services.length} services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    <CtaBand />
  </>
);

export default ProjectsPage;
