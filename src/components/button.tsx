import * as React from "react";
import { cn } from "../utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
}

/**
 * Reusable Button component matching Triads Future Brand System.
 * 
 * Variants:
 * - primary: Solid dark ink background with warm off-white text.
 * - outline: Border outline with dark ink text.
 * - text: Link button with an animated underline from left to right on hover.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-medium rounded-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111111] disabled:pointer-events-none disabled:opacity-50";

    const variantStyles = {
      primary: "bg-[#111111] text-[#FAF9F6] hover:bg-[#222222]",
      outline: "border border-[#111111] text-[#111111] bg-transparent hover:bg-[#111111]/5",
      text: "relative bg-transparent text-[#111111] p-0 rounded-none after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-[#111111] after:transition-transform after:duration-300 hover:after:scale-x-100",
    };

    const sizeStyles = {
      sm: variant === "text" ? "text-sm py-0.5" : "text-sm px-4 py-2",
      md: variant === "text" ? "text-base py-1" : "text-base px-6 py-3",
      lg: variant === "text" ? "text-lg py-1" : "text-lg px-8 py-4",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
