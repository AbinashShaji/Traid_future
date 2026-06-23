import * as React from "react";
import { cn } from "../utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

/**
 * Card component matching the Triads Future Design Language.
 * 
 * Design details:
 * - Subtle borders (#E8E8E8)
 * - Zero heavy shadows or floating blobs
 * - Warm background integration
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-transparent border border-[#E8E8E8] rounded-sm p-6 transition-all duration-300 ease-out",
          hoverEffect && "hover:border-[#111111] hover:bg-[#111111]/[0.01]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
