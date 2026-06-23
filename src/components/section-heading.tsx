import * as React from "react";
import { cn } from "../utils/cn";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  tag?: "h1" | "h2" | "h3" | "h4";
  subtitle?: string;
}

/**
 * Editorial header component enforcing:
 * - Sentence case capitalization (Sentence case rules).
 * - Clear layout hierarchy.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  className,
  tag = "h2",
  subtitle,
  children,
  ...props
}) => {
  const Tag = tag;

  const tagStyles = {
    h1: "text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-[#111111] leading-[1.1]",
    h2: "text-3xl md:text-4xl font-heading font-semibold tracking-tight text-[#111111] leading-[1.2]",
    h3: "text-xl md:text-2xl font-heading font-medium tracking-tight text-[#111111] leading-[1.3]",
    h4: "text-lg font-heading font-medium text-[#111111] leading-[1.4]",
  };

  return (
    <div className="flex flex-col gap-2">
      {subtitle && (
        <span className="font-sans text-xs uppercase tracking-wider text-[#5F5F5F]">
          {subtitle}
        </span>
      )}
      <Tag className={cn(tagStyles[tag], className)} {...props}>
        {children}
      </Tag>
    </div>
  );
};
