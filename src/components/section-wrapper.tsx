"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { riseVariants } from "../animations/presets";
import { cn } from "../utils/cn";

export interface SectionWrapperProps {
  /** Adds viewport-triggered entrance animation */
  animate?: boolean;
  /** Custom animation delay index for stagger effects */
  delay?: number;
  /** Inner max-width container padding */
  padded?: boolean;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

/**
 * SectionWrapper
 * Semantic <section> element with standard editorial whitespace and Rise entrance animation.
 * Every public-facing section should be wrapped by this component.
 */
export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  className,
  animate = true,
  delay = 0,
  padded = true,
  id,
  children,
}) => {
  if (!animate) {
    return (
      <section
        id={id}
        className={cn("w-full py-16 md:py-24", padded && "px-6 md:px-12 lg:px-16", className)}
      >
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={cn("w-full py-16 md:py-24", padded && "px-6 md:px-12 lg:px-16", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={riseVariants}
      custom={delay}
    >
      {children}
    </motion.section>
  );
};
