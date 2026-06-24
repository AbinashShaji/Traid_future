import * as React from "react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { PageTransition } from "./page-transition";
import { cn } from "../utils/cn";

interface GlobalLayoutProps {
  children: React.ReactNode;
  className?: string;
  /** If true, adds padding to account for tablet left rail */
  withSideRail?: boolean;
}

/**
 * GlobalLayout
 * Wraps every public page with Navigation, content, and Footer.
 * Applies correct padding offsets for each device experience:
 * - Desktop: top padding for sticky nav bar
 * - Tablet: left padding for nav rail
 * - Mobile: bottom padding for bottom nav bar
 */
export const GlobalLayout: React.FC<GlobalLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6]">
      {/* Navigation renders the correct experience per device */}
      <Navigation />

      {/* Main content — offset per device nav */}
      <main
        className={cn(
          "flex-1 w-full flex flex-col",
          // Desktop: the fixed header now sits visually on top of the hero
          "lg:pt-0",
          // Tablet: offset left nav rail (~80px wide)
          "md:pl-20 lg:pl-0",
          // Mobile: offset bottom nav bar (~64px)
          "pb-36 md:pb-0",
          className
        )}
      >
        <PageTransition>{children}</PageTransition>
      </main>

      <Footer />
    </div>
  );
};
