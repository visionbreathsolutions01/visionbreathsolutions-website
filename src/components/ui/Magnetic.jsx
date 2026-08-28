import React, { useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Wraps a button so it leans toward the cursor while hovered and springs
 * back on leave. Pure transform — no re-renders.
 */
const Magnetic = ({ children, strength = 0.22, className = "" }) => {
  const ref = useRef(null);
  const still = useReducedMotion();

  const onMouseMove = (e) => {
    if (still) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * strength;
    const y = (e.clientY - r.top - r.height / 2) * strength;
    el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
  };

  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`inline-block transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
};

export default Magnetic;
