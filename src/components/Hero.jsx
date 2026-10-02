import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "./ui/Magnetic";
import SpotlightCard from "./ui/SpotlightCard";
import { hero, stack } from "../lib/content";

/** Cycles through the latest-tech words with a vertical roll. */
const RotatingWord = () => {
  const still = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (still) return;
    const t = setInterval(() => setI((v) => (v + 1) % hero.rotating.length), 2400);
    return () => clearInterval(t);
  }, [still]);

  return (
    <span className="relative inline-grid overflow-hidden align-bottom" aria-live="off">
      {/* Widest word reserves the space so the layout never jumps */}
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap">
        {[...hero.rotating].sort((a, b) => b.length - a.length)[0]}
      </span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={hero.rotating[i]}
          initial={still ? false : { y: "105%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={still ? undefined : { y: "-105%", opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient col-start-1 row-start-1 whitespace-nowrap"
        >
          {hero.rotating[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

/* Fixed positions so server/client render identically (no Math.random) */
const PARTICLES = [
  [8, 22], [16, 64], [24, 34], [31, 78], [38, 18], [47, 55],
  [55, 30], [63, 72], [70, 24], [78, 60], [86, 38], [93, 70],
];

/* One word that rises into place with its own delay */
const Word = ({ children, delay, still }) => (
  <span className="inline-block overflow-hidden align-bottom">
    <motion.span
      className="inline-block"
      initial={still ? false : { y: "110%" }}
      animate={{ y: 0 }}
      transition={still ? { duration: 0 } : { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

/* Splits a line into staggered words */
const StaggerLine = ({ text, base, still }) =>
  text.split(" ").map((w, i) => (
    <React.Fragment key={w + i}>
      <Word delay={base + i * 0.05} still={still}>{w}</Word>{" "}
    </React.Fragment>
  ));

const Hero = () => {
  const still = useReducedMotion();
  const glowRef = useRef(null);

  /* Parallax: each orb layer scrolls away at its own rate */
  const { scrollY } = useScroll();
  const orbA = useTransform(scrollY, [0, 700], [0, 130]);
  const orbB = useTransform(scrollY, [0, 700], [0, -90]);
  const orbC = useTransform(scrollY, [0, 700], [0, 60]);

  /* A large soft glow that follows the cursor across the hero */
  const onMouseMove = (e) => {
    const el = glowRef.current;
    if (!el || still) return;
    const r = el.parentElement.getBoundingClientRect();
    el.style.transform = `translate(${e.clientX - r.left - 260}px, ${e.clientY - r.top - 260}px)`;
  };

  const line = (i) => ({
    initial: still ? false : { opacity: 0, y: "0.35em" },
    animate: { opacity: 1, y: 0 },
    transition: still ? { duration: 0 } : { duration: 0.75, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section onMouseMove={onMouseMove} className="relative overflow-hidden pt-[68px]">
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute z-0 h-[520px] w-[520px] rounded-full bg-brand-500/10 blur-[100px] transition-transform duration-300 ease-out"
      />
      {/* Structure + colour: faint grid over slowly drifting aurora orbs */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-grid mask-fade-b opacity-70" aria-hidden="true" />
      <motion.div style={{ y: orbA }} className="orb -top-24 right-[-8%] h-[420px] w-[420px] bg-brand-400/40 animate-drift" aria-hidden="true" />
      <motion.div style={{ y: orbB }} className="orb top-56 left-[-10%] h-[380px] w-[380px] bg-violet-400/35 animate-drift-2" aria-hidden="true" />
      <motion.div style={{ y: orbC }} className="orb top-10 left-1/3 h-[300px] w-[300px] bg-sky-300/30 animate-drift" aria-hidden="true" />

      {/* Floating particles */}
      {!still && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px]" aria-hidden="true">
          {PARTICLES.map(([x, y], i) => (
            <span
              key={i}
              className="particle absolute h-1 w-1 rounded-full bg-brand-300/60"
              style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.7}s`, animationDuration: `${6 + (i % 5)}s` }}
            />
          ))}
        </div>
      )}

      <div className="shell relative">
        <div className="pt-14 pb-12 sm:pt-20 sm:pb-16 lg:pt-24">

          <motion.span {...line(0)} className="eyebrow">
            {hero.eyebrow}
          </motion.span>

          <h1 className="mt-6 text-display max-w-[18ch]">
            <span className="block">
              <StaggerLine text="We design & ship" base={0.05} still={still} />
            </span>
            <span className="block">
              <Word delay={0.28} still={still}>the</Word> <RotatingWord />
            </span>
            <span className="block">
              <StaggerLine text="your business is waiting on." base={0.36} still={still} />
            </span>
          </h1>

          <motion.p {...line(4)} className="mt-7 max-w-[54ch] text-lead text-ink-400 text-pretty">
            {hero.lead}
          </motion.p>

          <motion.div {...line(5)} className="mt-9 flex flex-col sm:flex-row gap-3">
            <Magnetic>
              <Link to="/contact" className="btn-primary btn-lg w-full sm:w-auto">
                Start a project
                <ArrowUpRight size={16} strokeWidth={2.2} />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link to="/projects" className="btn-outline btn-lg w-full sm:w-auto">
                See our work
              </Link>
            </Magnetic>
          </motion.div>

          {/* Positioning facts — deliberately not numbers we cannot back up */}
          <motion.dl
            {...line(6)}
            className="mt-12 grid gap-px overflow-hidden rounded-lg border border-ink-800 bg-ink-800 sm:grid-cols-3"
          >
            {hero.facts.map((f) => (
              <SpotlightCard key={f.k} className="glow-hover bg-ink-900 p-5">
                <dt className="font-mono text-label uppercase text-ink-400">{f.k}</dt>
                <dd className="mt-2.5 text-sm text-ink-200">{f.v}</dd>
              </SpotlightCard>
            ))}
          </motion.dl>
        </div>
      </div>

      {/* Capability rail — two counter-scrolling rows of the working stack */}
      <div className="rule relative py-5 overflow-hidden">
        <div className="marquee-pause mask-fade-x space-y-3">
          {[
            { anim: "animate-marquee", items: stack },
            { anim: "animate-marquee-rev", items: [...stack].reverse() },
          ].map((row, r) => (
            <div key={r} className={`flex w-max gap-10 ${still ? "" : row.anim}`}>
              {[0, 1].map((dup) => (
                <div key={dup} className="flex shrink-0 gap-10" aria-hidden={dup === 1 || r === 1}>
                  {row.items.map((t) => (
                    <span
                      key={t}
                      className={`whitespace-nowrap font-mono text-xs uppercase tracking-[0.1em] ${
                        r === 0 ? "text-ink-400" : "text-brand-400/80"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
