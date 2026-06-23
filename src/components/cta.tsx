import * as React from "react";
import { cn } from "../utils/cn";

export interface CTAProps extends React.HTMLAttributes<HTMLDivElement> {
  headline: string;
  description?: string;
}

/**
 * Editorial Call to Action block component.
 * Provides ample surrounding whitespace to emphasize importance.
 */
export const CTA: React.FC<CTAProps> = ({
  className,
  headline,
  description,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "py-16 md:py-24 border-t border-[#E8E8E8] flex flex-col items-center text-center max-w-3xl mx-auto px-4",
        className
      )}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-tight text-[#111111] mb-4">
        {headline}
      </h2>
      {description && (
        <p className="font-sans text-[#5F5F5F] max-w-xl text-base md:text-lg mb-8 leading-relaxed">
          {description}
        </p>
      )}
      {children && <div className="flex flex-wrap justify-center gap-4">{children}</div>}
    </div>
  );
};
