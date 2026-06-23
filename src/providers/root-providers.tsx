"use client";

import * as React from "react";
import { MotionProvider } from "./motion-provider";
import { DeviceExperienceManager } from "./device-experience-manager";
import { Toaster } from "sonner";

/**
 * RootProviders wraps the entire application with all necessary context providers.
 * Order matters:
 * 1. DeviceExperienceManager — must be outermost to inform all children.
 * 2. MotionProvider — wraps Framer Motion globally.
 * 3. Toaster — mounts the Sonner notification system.
 */
export const RootProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <DeviceExperienceManager>
      <MotionProvider>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#FAF9F6",
              color: "#111111",
              border: "1px solid #E8E8E8",
              borderRadius: "2px",
              fontFamily: "var(--font-inter, sans-serif)",
              fontSize: "14px",
            },
          }}
        />
      </MotionProvider>
    </DeviceExperienceManager>
  );
};
