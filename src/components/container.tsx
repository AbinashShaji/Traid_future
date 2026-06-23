import * as React from "react";
import { cn } from "../utils/cn";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  clean?: boolean;
}

/**
 * Editorial layout Container.
 * Sets standard margins and responsive widths.
 */
export const Container: React.FC<ContainerProps> = ({
  className,
  clean = false,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        clean ? "w-full" : "max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 w-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
