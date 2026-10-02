import React, { useRef } from "react";

/**
 * Wraps any card so a soft violet glow follows the cursor across it.
 * Pure CSS-variable trick — no re-renders, no animation loop.
 */
const SpotlightCard = ({ as: Tag = "div", className = "", children, ...rest }) => {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Tag ref={ref} onMouseMove={onMouseMove} className={`spotlight-card ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default SpotlightCard;
