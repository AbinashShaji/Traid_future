/**
 * Framer Motion Animation Presets for Triads Future
 *
 * Enforces the brand-approved movements:
 * 1. Rise: Elements start 8px below and slide up while fading in.
 * 2. Fade: Simple opacity transition.
 * 3. Image Settle: Scaled at 102% settling to 100% over 500ms while fading.
 */
import type { Variants } from "framer-motion";

// Cubic-bezier typed as a const tuple for Framer Motion v12 strict ease typing
const calmEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const riseVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: calmEase,
      delay: custom * 0.1,
    },
  }),
};

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
      delay: custom * 0.1,
    },
  }),
};

export const imageSettleVariants: Variants = {
  hidden: { opacity: 0, scale: 1.02 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: calmEase,
    },
  },
};

export const containerStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
