import React, { useRef } from "react";
import { Bot, Boxes, ShoppingBag, Building2, Pill, Braces, GraduationCap } from "lucide-react";

/**
 * Abstract cover tile per project — honest visuals (no fake screenshots),
 * but the Work pages stop being walls of text. Icon + duotone gradient keyed
 * to the project slug so each cover is distinct yet clearly one family.
 */
const COVERS = {
  "bible-college":        { Icon: GraduationCap, from: "from-amber-600/45",  to: "to-red-600/25" },
  "support-chatbot":      { Icon: Bot,        from: "from-brand-600/50",  to: "to-violet-600/25" },
  "inventory-management": { Icon: Boxes,      from: "from-sky-600/40",    to: "to-brand-600/25" },
  "household-ecommerce":  { Icon: ShoppingBag,from: "from-violet-500/50", to: "to-fuchsia-500/30" },
  "zionic-arc":           { Icon: Building2,  from: "from-brand-600/40",  to: "to-sky-600/25" },
  "newbalan-pharmacy":    { Icon: Pill,       from: "from-emerald-500/45",to: "to-sky-500/30" },
};

const ProjectCover = ({ slug, size = "lg", className = "" }) => {
  const { Icon, from, to } = COVERS[slug] || { Icon: Braces, from: "from-brand-600/40", to: "to-violet-600/20" };

  if (size === "sm") {
    return (
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-md border border-ink-700
                    bg-gradient-to-br ${from} ${to} text-white ${className}`}
        aria-hidden="true"
      >
        <Icon size={20} strokeWidth={1.8} />
      </span>
    );
  }

  /* 3D tilt: rotate toward the cursor, spring flat on leave */
  const ref = useRef(null);
  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -10;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 10;
    el.style.transform = `perspective(800px) rotateX(${rx.toFixed(1)}deg) rotateY(${ry.toFixed(1)}deg)`;
  };
  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`relative aspect-[4/3] overflow-hidden rounded-lg border border-ink-800
                  bg-gradient-to-br ${from} ${to} transition-transform duration-300 ease-out
                  will-change-transform ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute inset-0 grid place-items-center">
        <span className="grid h-16 w-16 place-items-center rounded-xl border border-white/15 bg-ink-950/50 text-white backdrop-blur">
          <Icon size={30} strokeWidth={1.6} />
        </span>
      </div>
    </div>
  );
};

export default ProjectCover;
