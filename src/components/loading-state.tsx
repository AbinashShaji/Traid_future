import * as React from "react";
import { Skeleton } from "./skeleton";
import { cn } from "../utils/cn";

export interface LoadingStateProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "section" | "card" | "page";
}

/**
 * LoadingState wrapper representing the first phase of:
 * Skeleton -> Rise -> Ready.
 * Shows structured skeletons instead of spinning loaders.
 */
export const LoadingState: React.FC<LoadingStateProps> = ({
  className,
  variant = "section",
  ...props
}) => {
  if (variant === "card") {
    return (
      <div className={cn("border border-[#E8E8E8] rounded-sm p-6 flex flex-col gap-4", className)} {...props}>
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-10 w-1/2 mt-2" />
      </div>
    );
  }

  if (variant === "page") {
    return (
      <div className={cn("min-h-[60vh] flex flex-col gap-12 py-12 px-6 max-w-4xl mx-auto", className)} {...props}>
        <div className="flex flex-col gap-4">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-12 w-2/3" />
          <Skeleton className="h-6 w-1/2" />
        </div>
        <div className="flex flex-col gap-6">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </div>
    );
  }

  // Default: section
  return (
    <div className={cn("flex flex-col gap-4 w-full", className)} {...props}>
      <Skeleton className="h-8 w-1/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
};
