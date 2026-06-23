import * as React from "react";
import { cn } from "../utils/cn";
import { Button } from "./button";

export interface ErrorStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  error?: Error | string;
  reset?: () => void;
}

/**
 * ErrorState component.
 * Standard fallback screen to handle client-side rendering boundaries gracefully.
 * Hides raw stack traces from visitors to preserve the premium feel.
 */
export const ErrorState: React.FC<ErrorStateProps> = ({
  className,
  title = "Something went wrong",
  error,
  reset,
  ...props
}) => {
  const errorMessage = 
    typeof error === "string" 
      ? error 
      : error instanceof Error 
        ? error.message 
        : "An unexpected error occurred. Please try again.";

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-8 md:p-12 border border-[#E8E8E8] rounded-sm bg-transparent max-w-md mx-auto my-12",
        className
      )}
      {...props}
    >
      <h3 className="font-heading text-lg font-semibold text-[#111111] mb-2">
        {title}
      </h3>
      <p className="font-sans text-sm text-[#5F5F5F] leading-relaxed mb-6">
        {errorMessage}
      </p>
      {reset && (
        <Button variant="outline" size="sm" onClick={reset}>
          Try Again
        </Button>
      )}
    </div>
  );
};
