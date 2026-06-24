/**
 * Framer Motion animation presets for Triads Future.
 *
 * This file centralizes the shared motion language so sections can use the same
 * timing, easing, and viewport behavior without duplicating inline config.
 */
import type { Variants, ViewportOptions } from "framer-motion";

export const revealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const revealViewport: ViewportOptions = {
  once: true,
  amount: 0.28,
  margin: "0px 0px -12% 0px",
};

export const riseVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: revealEase,
      delay: custom * 0.08,
    },
  }),
};

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: revealEase,
      delay: custom * 0.08,
    },
  }),
};

export const imageSettleVariants: Variants = {
  hidden: { opacity: 0, scale: 1.02 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: revealEase,
    },
  },
};

export const containerStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.02,
    },
  },
};

export const processSequenceVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.02,
    },
  },
};

export const processCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
    scale: 0.98,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: revealEase,
    },
  },
};

export const processNumberVariants: Variants = {
  hidden: {
    scale: 1,
  },
  visible: {
    scale: [1, 1.06, 1],
    transition: {
      duration: 0.6,
      ease: revealEase,
    },
  },
};
