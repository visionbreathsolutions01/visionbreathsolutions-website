import React from "react";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import { process } from "../lib/content";

/**
 * The delivery process as an editorial numbered list. Each step states what you
 * actually receive at the end of it — a promise you can hold us to, rather than
 * four adjectives in four boxes.
 */
const Process = () => (
  <section id="process" className="section">
    <div className="shell">
      <SectionHead
        eyebrow="How we work"
        title="Four steps, and what you get from each"
        lead="No stage is a black box. Every one ends in something concrete that is yours to keep."
      />

      <ol className="mt-10 border-t border-ink-800">
        {process.map((step, i) => (
          <Reveal
            as="li"
            key={step.n}
            delay={i * 0.05}
            className="group grid gap-4 border-b border-ink-800 py-8 md:grid-cols-12 md:gap-10 md:py-10"
          >
            <div className="md:col-span-3 flex items-baseline gap-4">
              <span className="font-mono text-label text-ink-600 transition-colors group-hover:text-brand-500">
                {step.n}
              </span>
              <h3 className="text-h3">{step.title}</h3>
            </div>

            <p className="md:col-span-6 text-sm text-ink-400 text-pretty">{step.desc}</p>

            <div className="md:col-span-3">
              <span className="font-mono text-label uppercase text-ink-400">You receive</span>
              <p className="mt-2 text-sm text-ink-200">{step.output}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
