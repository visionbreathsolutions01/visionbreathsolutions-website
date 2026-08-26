import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "./ui/Magnetic";
import Reveal from "./ui/Reveal";
import { company } from "../lib/content";

/**
 * The closing ask. One dark band, one primary action, and the direct contact
 * details for people who would rather skip the form.
 */
const CtaBand = () => (
  <section className="beam-top relative overflow-hidden border-t border-ink-800 bg-gradient-to-b from-brand-900/30 to-transparent text-white">
    <div className="orb -top-32 right-[-6%] h-[420px] w-[420px] bg-brand-600/30 animate-drift" aria-hidden="true" />
    <div className="orb -bottom-40 left-[-8%] h-[380px] w-[380px] bg-violet-600/20 animate-drift-2" aria-hidden="true" />
    <div className="shell relative py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
        <Reveal className="lg:col-span-7">
          <span className="eyebrow !text-ink-400 before:!bg-ink-700">Next step</span>
          <h2 className="mt-6 text-h2 !text-white max-w-[18ch]">
            Tell us what you are trying to <span className="text-gradient">build</span>.
          </h2>
          <p className="mt-5 max-w-[52ch] text-lead text-ink-400 text-pretty">
            One call, no pitch deck. We will tell you what we would do, roughly what
            it costs, and honestly whether we are the right team for it.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5 lg:justify-self-end">
          <Magnetic className="w-full sm:w-auto">
            <Link
              to="/contact"
              className="btn btn-lg w-full bg-white text-ink-950 hover:bg-ink-150"
            >
              Start a project
              <ArrowUpRight size={16} strokeWidth={2.2} />
            </Link>
          </Magnetic>

          <dl className="mt-9 space-y-4 border-t border-ink-800 pt-7">
            <div>
              <dt className="font-mono text-label uppercase text-ink-500">Email</dt>
              <dd className="mt-1.5">
                <a href={`mailto:${company.email}`} className="text-sm text-ink-200 hover:text-white transition-colors">
                  {company.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-label uppercase text-ink-500">Phone</dt>
              <dd className="mt-1.5">
                <a href={`tel:${company.phoneHref}`} className="text-sm text-ink-200 hover:text-white transition-colors">
                  {company.phone}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </div>
  </section>
);

export default CtaBand;
