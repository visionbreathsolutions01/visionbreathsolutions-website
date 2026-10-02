import React from "react";
import { Users, Layers, Rocket } from "lucide-react";
import Reveal from "./ui/Reveal";
import SpotlightCard from "./ui/SpotlightCard";

/**
 * Dark brand-statement band. This is the home page's job: say who we are in
 * one breath — the detail lives on the inner pages.
 */
const pillars = [
  { k: "Senior only", v: "No junior bench, no handoffs — the people you meet write the code.", Icon: Users },
  { k: "One roof", v: "AI, web, mobile and cloud in a single team, so nothing falls between vendors.", Icon: Layers },
  { k: "Production first", v: "We measure work by what runs live, not by what was presented.", Icon: Rocket },
];

const Statement = () => (
  <section className="beam-top relative overflow-hidden border-y border-ink-800 bg-gradient-to-b from-ink-900/80 to-transparent text-white">
    <div className="orb -top-40 left-[10%] h-[460px] w-[460px] bg-brand-600/30 animate-drift" aria-hidden="true" />
    <div className="orb -bottom-48 right-[-4%] h-[420px] w-[420px] bg-violet-600/25 animate-drift-2" aria-hidden="true" />
    <div className="orb top-20 right-[30%] h-[300px] w-[300px] bg-sky-500/15 animate-drift" aria-hidden="true" />

    <div className="shell relative py-16 sm:py-24">
      <Reveal>
        <span className="eyebrow !text-ink-400 before:!bg-ink-700">Why Vision Breath</span>
      </Reveal>

      <Reveal delay={0.06}>
        <p className="mt-7 max-w-[24ch] font-display text-[clamp(1.875rem,4.2vw,3.25rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-white">
          Technology should do more than solve a problem — it should{" "}
          <span className="text-gradient">open something up</span> for your business.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-ink-800 bg-ink-800 sm:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.k} delay={0.1 + i * 0.06} className="h-full">
            <SpotlightCard className="group h-full bg-ink-900/80 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="icon-pop grid h-9 w-9 place-items-center rounded-md border border-ink-700 bg-ink-800/80 text-brand-300">
                  <p.Icon size={17} strokeWidth={1.8} />
                </span>
                <p className="font-mono text-label uppercase text-brand-400">{p.k}</p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-300">{p.v}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Statement;
