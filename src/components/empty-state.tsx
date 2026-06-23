import * as React from "react";
import { cn } from "../utils/cn";
import { Button } from "./button";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

/**
 * EmptyState component.
 * Ensures we never present a blank screen to the visitor.
 * Details why the page is empty and provides a clear next action.
 */
export const EmptyState: React.FC<EmptyStateProps> = ({
  className,
  title,
  description,
  actionLabel,
  onAction,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-8 md:p-12 border border-dashed border-[#E8E8E8] rounded-sm bg-transparent max-w-md mx-auto",
        className
      )}
      {...props}
    >
      <h3 className="font-heading text-lg font-semibold text-[#111111] mb-2">
        {title}
      </h3>
      <p className="font-sans text-sm text-[#5F5F5F] leading-relaxed mb-6">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button variant="outline" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};
