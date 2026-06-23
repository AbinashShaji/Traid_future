import * as React from "react";
import { cn } from "../utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "outline" | "filled";
}

/**
 * Monochrome badge component.
 * Used for outcome names, status variables, and small labels.
 */
export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "outline",
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-sans font-medium transition-colors",
        variant === "outline" 
          ? "border border-[#E8E8E8] text-[#5F5F5F] bg-transparent" 
          : "bg-[#111111] text-[#FAF9F6]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
