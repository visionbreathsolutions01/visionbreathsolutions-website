import React from "react";
import Reveal from "./Reveal";

/**
 * Standard section opener: eyebrow, heading, optional lead, optional aside action.
 * Every section uses this so vertical rhythm stays identical across the site.
 */
const SectionHead = ({ eyebrow, title, lead, action, align = "left", className = "" }) => {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "text-center mx-auto max-w-2xl" : ""} ${
        action ? "md:flex md:items-end md:justify-between md:gap-10" : ""
      } ${className}`}
    >
      <div className={centered ? "" : "max-w-2xl"}>
        {eyebrow && (
          <Reveal>
            <span className={`eyebrow ${centered ? "justify-center" : ""}`}>{eyebrow}</span>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h2 className="text-h2 mt-5">{title}</h2>
        </Reveal>
        {lead && (
          <Reveal delay={0.1}>
            <p className="text-lead text-ink-400 mt-5 text-pretty">{lead}</p>
          </Reveal>
        )}
      </div>

      {action && (
        <Reveal delay={0.15} className="mt-7 md:mt-0 shrink-0">
          {action}
        </Reveal>
      )}
    </div>
  );
};

export default SectionHead;
