"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, LayoutGrid, BriefcaseBusiness, BookOpen, Calendar, Menu, X } from "lucide-react";
import { cn } from "../utils/cn";
import { Button } from "./button";
import { BrandMark } from "./brand-mark";
import { desktopNav, mobileNav, tabletNav } from "../mock/navigation";

const iconMap = {
  Home: House,
  Solutions: LayoutGrid,
  Work: BriefcaseBusiness,
  About: BookOpen,
  Insights: BookOpen,
  Book: Calendar,
};

/**
 * Desktop Navigation Component
 * - Sticky top header.
 * - Transitions from transparent to solid white background on scroll.
 */
const DesktopNavigation: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent py-3 px-6 md:px-8 hidden lg:block bg-[#FAF9F6]/70 backdrop-blur-md",
        isScrolled 
          ? "bg-[#FAF9F6]/92 border-[#E8E8E8] shadow-[0_1px_3px_rgba(0,0,0,0.01)]" 
          : "bg-[#FAF9F6]/70"
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <BrandMark className="w-[88px] xl:w-[96px]" />
        <nav className="flex items-center gap-8">
          {desktopNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-sans text-sm font-medium transition-colors duration-200",
                  isActive 
                    ? "text-[#111111] border-b border-[#111111] pb-1" 
                    : "text-[#5F5F5F] hover:text-[#111111] pb-1"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/contact">
          <Button variant="primary" size="sm">
            Book a Strategy Call
          </Button>
        </Link>
      </div>
    </header>
  );
};

/**
 * Tablet Navigation Rail Component
 * - Fixed left rail.
 * - Narrow, minimal, and touch-friendly.
 */
const TabletNavigationRail: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 bottom-0 w-20 bg-[#FAF9F6] border-r border-[#E8E8E8] py-8 flex flex-col items-center justify-between z-40 hidden md:flex lg:hidden">
      <BrandMark className="w-10 mb-8" />
      <nav className="flex flex-col gap-8 w-full px-2">
        {tabletNav.map((item) => {
          const isActive = pathname === item.href;
          const Icon = iconMap[item.label as keyof typeof iconMap];
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1.5 py-2 w-full rounded-sm transition-colors",
                isActive 
                  ? "text-[#111111] bg-[#111111]/5" 
                  : "text-[#5F5F5F] hover:text-[#111111]"
              )}
            >
              <Icon className="w-5 h-5 stroke-[1.5]" />
              <span className="text-[10px] font-medium tracking-tight">
                {item.label}
              </span>
            </Link>
          );
        })}
        {/* Book tab for Strategy Call */}
        <Link
          href="/contact"
          className={cn(
            "flex flex-col items-center gap-1.5 py-2 w-full rounded-sm transition-colors",
            pathname === "/contact"
              ? "text-[#111111] bg-[#111111]/5"
              : "text-[#5F5F5F] hover:text-[#111111]"
          )}
        >
          <Calendar className="w-5 h-5 stroke-[1.5]" />
          <span className="text-[10px] font-medium tracking-tight">Book</span>
        </Link>
      </nav>
      <div className="w-6 h-6 rounded-full bg-[#111111]/5" /> {/* Placeholder profile */}
    </aside>
  );
};

/**
 * Mobile Bottom Navigation Component
 * - Fixed to the very bottom of the screen.
 * - Designed for easy thumb reach, respects safe-area.
 */
const MobileBottomNavigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#FAF9F6]/96 backdrop-blur-md border-t border-[#E8E8E8] z-40 pb-safe-bottom md:hidden shadow-[0_-1px_10px_rgba(0,0,0,0.01)] rounded-t-sm">
      <div className="flex items-center justify-around px-4 py-2">
        {mobileNav.map((item) => {
          const isActive = pathname === item.href;
          const Icon = iconMap[item.label as keyof typeof iconMap];
          const label = item.href === "/contact" ? "Consult ." : item.label;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 py-1 px-3 transition-colors",
                isActive ? "text-[#111111]" : "text-[#5F5F5F]"
              )}
              >
                <Icon className="w-5 h-5 stroke-[1.5]" />
                <span className="text-[10px] font-medium">
                {label}
                </span>
              </Link>
          );
        })}
      </div>
    </nav>
  );
};

const MobileTopHeader: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 md:hidden bg-[#FAF9F6]/92 backdrop-blur-md border-b border-[#E8E8E8]">
      <div className="flex items-center justify-between px-6 py-4">
        <BrandMark className="w-[92px]" />
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-panel"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[#E8E8E8] text-[#111111] transition-colors hover:bg-[#111111]/5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#111111]"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-navigation-panel"
        className={cn(
          "overflow-hidden border-t border-[#E8E8E8] bg-[#FAF9F6] transition-all duration-300",
          isOpen ? "max-h-[340px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="px-4 py-4 grid grid-cols-2 gap-2">
          {mobileNav.map((item) => {
            const isActive = pathname === item.href;
            const Icon = iconMap[item.label as keyof typeof iconMap];
            return (
              <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-sm border px-4 py-3 text-sm font-medium transition-colors",
                isActive
                    ? "border-[#111111] bg-[#111111] text-[#FAF9F6]"
                    : "border-[#E8E8E8] bg-[#FAF9F6] text-[#5F5F5F] hover:border-[#111111] hover:text-[#111111]"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

/**
 * Universal navigation component that manages showing the right layout per device.
 */
export const Navigation: React.FC = () => {
  return (
    <>
      <DesktopNavigation />
      <TabletNavigationRail />
      <MobileTopHeader />
      <MobileBottomNavigation />
    </>
  );
};
