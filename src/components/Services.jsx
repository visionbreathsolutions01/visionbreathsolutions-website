import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Monitor, Smartphone, Cloud } from "lucide-react";
import Reveal from "./ui/Reveal";
import SpotlightCard from "./ui/SpotlightCard";
import SectionHead from "./ui/SectionHead";
import { services } from "../lib/content";

const ICONS = { ai: Cpu, web: Monitor, mobile: Smartphone, cloud: Cloud };

/**
 * Home teaser only — number, name, one line, link. The bullet lists, stacks
 * and process detail live on /services; the home page just points there.
 */
const Services = () => (
  <section id="services" className="section bg-gradient-to-b from-brand-900/25 via-transparent to-transparent">
    <div className="shell">
      <SectionHead
        eyebrow="What we do"
        title="Four disciplines, one team"
        action={
          <Link to="/services" className="btn-primary">
            Explore all services <ArrowRight size={15} />
          </Link>
        }
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.06} className="h-full">
            <SpotlightCard className="group glow-hover panel relative flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500">
            <div className="flex items-center justify-between">
              {(() => { const Icon = ICONS[s.slug]; return (
                <span className="icon-pop grid h-10 w-10 place-items-center rounded-md border border-ink-700 bg-ink-800/70 text-brand-300 transition-colors duration-300 group-hover:border-brand-500 group-hover:text-brand-200">
                  <Icon size={19} strokeWidth={1.8} />
                </span>
              ); })()}
              <span className="font-mono text-label text-ink-600 transition-colors duration-300 group-hover:text-brand-400">
                {s.n}
              </span>
            </div>
            <h3 className="mt-4 text-[1.125rem] font-semibold tracking-[-0.02em] text-white">
              {s.title}
            </h3>
            <p className="mt-2.5 flex-1 text-sm text-ink-400">{s.tease}</p>
            <Link
              to={`/services#${s.slug}`}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-400"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              Learn more
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
