import * as React from "react";
import { cn } from "../utils/cn";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  vertical?: boolean;
}

/**
 * Divider component.
 * Uses a thin (#E8E8E8) border line to quietly segment content.
 * Avoids any decorative clutter.
 */
export const Divider: React.FC<DividerProps> = ({ className, vertical = false, ...props }) => {
  return (
    <hr
      className={cn(
        vertical 
          ? "h-full w-[1px] bg-[#E8E8E8] border-none" 
          : "w-full h-[1px] bg-[#E8E8E8] border-none",
        className
      )}
      {...props}
    />
  );
};
