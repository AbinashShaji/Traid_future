"use client";

import * as React from "react";
import { useReducedMotion, type Variants, type ViewportOptions } from "framer-motion";
import { revealEase } from "./presets";

export type RevealBreakpoint = "mobile" | "tablet" | "desktop";

export interface RevealMotionProps {
  initial: "hidden" | false;
  whileInView?: "visible";
  viewport?: ViewportOptions;
  variants?: Variants;
}

export interface ResponsiveRevealMotion {
  breakpoint: RevealBreakpoint;
  reducedMotion: boolean;
  motionEnabled: boolean;
  sectionMotion: RevealMotionProps;
  containerMotion: RevealMotionProps;
  itemMotion: RevealMotionProps;
}

const revealViewport: ViewportOptions = {
  once: true,
  amount: 0.28,
  margin: "0px 0px -12% 0px",
};

function getBreakpoint(width: number): RevealBreakpoint {
  if (width < 768) {
    return "mobile";
  }

  if (width < 1024) {
    return "tablet";
  }

  return "desktop";
}

function getMotionScale(breakpoint: RevealBreakpoint) {
  if (breakpoint === "tablet") {
    return {
      distance: 14,
      duration: 0.5,
      stagger: 0.08,
      itemDuration: 0.42,
      delayChildren: 0.01,
    };
  }

  return {
    distance: 20,
    duration: 0.6,
    stagger: 0.1,
    itemDuration: 0.5,
    delayChildren: 0.02,
  };
}

function createFadeUpVariants(distance: number, duration: number, delayStep = 0): Variants {
  return {
    hidden: {
      opacity: 0,
      y: distance,
    },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: revealEase,
        delay: custom * delayStep,
      },
    }),
  };
}

function createStaggerVariants(stagger: number, delayChildren: number): Variants {
  return {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
}

/**
 * Shared viewport-triggered reveal configuration.
 * Desktop gets the full motion, tablet keeps the same pattern with shorter
 * travel and timing, and mobile falls back to static rendering.
 */
export function useViewportReveal(): ResponsiveRevealMotion {
  const reducedMotion = useReducedMotion() === true;
  const [breakpoint, setBreakpoint] = React.useState<RevealBreakpoint>("desktop");

  React.useEffect(() => {
    const updateBreakpoint = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint, { passive: true });

    return () => {
      window.removeEventListener("resize", updateBreakpoint);
    };
  }, []);

  const motionEnabled = !reducedMotion && breakpoint !== "mobile";

  // TEMP DEBUG — remove after diagnosis
  console.log('REVEAL CHECK:', { reducedMotion, breakpoint, motionEnabled });

  const scale = getMotionScale(breakpoint);

  return React.useMemo(() => {
    if (!motionEnabled) {
      return {
        breakpoint,
        reducedMotion,
        motionEnabled: false,
        sectionMotion: { initial: false },
        containerMotion: { initial: false },
        itemMotion: { initial: false },
      };
    }

    const sectionVariants = createFadeUpVariants(scale.distance, scale.duration, 0.08);
    const containerVariants = createStaggerVariants(scale.stagger, scale.delayChildren);
    const itemVariants = createFadeUpVariants(scale.distance, scale.itemDuration);

    return {
      breakpoint,
      reducedMotion,
      motionEnabled: true,
      sectionMotion: {
        initial: "hidden",
        whileInView: "visible",
        viewport: revealViewport,
        variants: sectionVariants,
      },
      containerMotion: {
        initial: "hidden",
        whileInView: "visible",
        viewport: revealViewport,
        variants: containerVariants,
      },
      itemMotion: {
        initial: "hidden",
        whileInView: "visible",
        viewport: revealViewport,
        variants: itemVariants,
      },
    };
  }, [breakpoint, motionEnabled, reducedMotion, scale.delayChildren, scale.distance, scale.duration, scale.itemDuration, scale.stagger]);
}