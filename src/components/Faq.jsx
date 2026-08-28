import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import { faqs } from "../lib/content";

/**
 * The questions buyers ask on the first call, answered before they have to.
 * Native <button> + aria-expanded so it is keyboard and screen-reader correct.
 */
const Faq = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section bg-ink-900/50 border-y border-ink-800">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHead
              eyebrow="Before you ask"
              title="The questions that come up first"
              lead="If yours isn't here, it is a short email away."
            />
          </div>

          <div className="lg:col-span-8 border-t border-ink-800">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 0.04} className="border-b border-ink-800">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-start justify-between gap-6 py-5 text-left"
                    >
                      <span className="text-[1.0625rem] font-medium leading-snug text-white">
                        {f.q}
                      </span>
                      <Plus
                        size={17}
                        className={`mt-1 shrink-0 text-ink-400 transition-transform duration-300 ease-out ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-10 text-sm text-ink-400 text-pretty">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
