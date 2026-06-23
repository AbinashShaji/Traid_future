"use client";

import * as React from "react";

type DeviceType = "desktop" | "tablet" | "mobile";

interface DeviceContextValue {
  device: DeviceType;
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}

const DeviceContext = React.createContext<DeviceContextValue>({
  device: "desktop",
  isDesktop: true,
  isTablet: false,
  isMobile: false,
});

/**
 * Hook to consume device experience context.
 */
export const useDevice = () => React.useContext(DeviceContext);

/**
 * DeviceExperienceManager
 * Detects the active viewport and provides the correct device experience mode.
 * 
 * - Desktop: >= 1024px
 * - Tablet: 768px – 1023px
 * - Mobile: < 768px
 * 
 * Shares the same backend but serves three independent UI experiences.
 */
export const DeviceExperienceManager: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [device, setDevice] = React.useState<DeviceType>("desktop");

  React.useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setDevice("desktop");
      else if (w >= 768) setDevice("tablet");
      else setDevice("mobile");
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const value: DeviceContextValue = {
    device,
    isDesktop: device === "desktop",
    isTablet: device === "tablet",
    isMobile: device === "mobile",
  };

  return (
    <DeviceContext.Provider value={value}>
      {children}
    </DeviceContext.Provider>
  );
};
