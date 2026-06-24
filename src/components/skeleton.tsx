import * as React from "react";
import { cn } from "../utils/cn";

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Skeleton loader component conforming to the design guidelines.
 * Displays simple pulsed boxes that mimic content shapes.
 */
export const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn("animate-pulse rounded-sm bg-[#E8E8E8]/60 w-full", className)}
      {...props}
    />
  );
};
