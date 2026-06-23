"use client";

import * as React from "react";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";

/**
 * MotionProvider wraps the app with Framer Motion's lazy-loaded animations.
 * Respects the user's system preference for reduced motion automatically.
 */
export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LazyMotion features={domAnimation}>
      {/* MotionConfig ensures animations are disabled for users who prefer it */}
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </LazyMotion>
  );
};
