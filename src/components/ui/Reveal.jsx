import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-triggered reveal. Deliberately understated: a short rise and fade,
 * once, never replayed. Collapses to a no-op when the OS asks for less motion.
 */
const Reveal = ({ children, delay = 0, y = 12, as = "div", className = "", ...rest }) => {
  const still = useReducedMotion();
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      className={className}
      initial={still ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={still ? { duration: 0 } : { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
