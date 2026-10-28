import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import ProjectCover from "./ui/ProjectCover";
import { work } from "../lib/content";

/**
 * Real projects only. The portfolio is small, so it is presented at full width
 * with room to breathe rather than padded out into a grid of filler.
 */
export const WorkRow = ({ item, index }) => (
  <Reveal
    delay={index * 0.06}
    className="group grid gap-6 border-b border-ink-800 py-9 transition-all duration-300 hover:bg-ink-900/40 md:grid-cols-12 md:gap-10 md:py-11 md:px-4 md:-mx-4 rounded-lg"
  >
    <div className="flex items-start gap-4 md:col-span-3">
      <ProjectCover slug={item.slug} size="sm" />
      <div>
        <p className="font-display text-lg font-semibold tracking-[-0.02em] text-white">
          {item.client}
        </p>
        <p className="mt-1.5 font-mono text-label uppercase text-ink-400">{item.year}</p>
      </div>
    </div>

    <div className="md:col-span-6">
      <h3 className="text-[1.0625rem] font-medium leading-snug text-white">{item.title}</h3>
      <p className="mt-3 text-sm text-ink-400 text-pretty">{item.summary}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {item.stack.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </div>

    <div className="md:col-span-3 md:text-right">
      <p className="font-mono text-[0.6875rem] leading-relaxed text-ink-400">
        {item.scope.join(" · ")}
      </p>
    </div>
  </Reveal>
);

const Work = () => (
  <section id="work" className="section bg-ink-900/50 border-y border-ink-800">
    <div className="shell">
      <SectionHead
        eyebrow="Selected work"
        title="Shipped and running in production"
        lead="Recent deliveries across AI, operations and commerce — the full list is on the projects page."
        action={
          <Link to="/projects" className="link">
            All projects <ArrowRight size={14} />
          </Link>
        }
      />

      <div className="mt-9 border-t border-ink-800">
        {work.slice(0, 3).map((item, i) => (
          <WorkRow key={item.slug} item={item} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Work;
