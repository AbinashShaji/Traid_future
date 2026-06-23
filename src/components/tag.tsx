import * as React from "react";
import { cn } from "../utils/cn";

export interface TagProps extends React.HTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

/**
 * Interactive Tag component.
 * Used for filters or content categories.
 */
export const Tag = React.forwardRef<HTMLButtonElement, TagProps>(
  ({ className, active = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-sans font-medium border transition-all duration-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#111111]",
          active
            ? "border-[#111111] bg-[#111111] text-[#FAF9F6]"
            : "border-[#E8E8E8] bg-transparent text-[#5F5F5F] hover:border-[#111111] hover:text-[#111111]",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Tag.displayName = "Tag";
