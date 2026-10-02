import React from "react";
import Reveal from "./Reveal";

/**
 * Shared masthead for every inner page — keeps the entry rhythm of About,
 * Services, Work and Contact identical.
 */
const PageHero = ({ eyebrow, title, lead, children }) => (
  <section className="relative overflow-hidden pt-[68px] border-b border-ink-800">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-grid mask-fade-b opacity-60" aria-hidden="true" />
    <div className="orb -top-20 right-[-6%] h-[340px] w-[340px] bg-brand-400/35 animate-drift" aria-hidden="true" />
    <div className="orb top-24 left-[-8%] h-[300px] w-[300px] bg-violet-400/25 animate-drift-2" aria-hidden="true" />

    <div className="shell relative pt-12 pb-12 sm:pt-20 sm:pb-16">
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="mt-6 text-h1 max-w-[18ch]">{title}</h1>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-[56ch] text-lead text-ink-400 text-pretty">{lead}</p>
        </Reveal>
      )}
      {children && <Reveal delay={0.15}>{children}</Reveal>}
    </div>
  </section>
);

export default PageHero;
