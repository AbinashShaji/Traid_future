import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../utils/cn";

interface BrandMarkProps {
  className?: string;
  imageClassName?: string;
  ariaLabel?: string;
}

export const BrandMark: React.FC<BrandMarkProps> = ({
  className,
  imageClassName,
  ariaLabel = "Triads Future home",
}) => {
  return (
    <Link href="/" aria-label={ariaLabel} className={cn("inline-flex items-center", className)}>
      <Image
        src="/brand/triads-future-logo.png"
        alt="Triads Future logo"
        width={512}
        height={512}
        priority={false}
        className={cn("h-auto w-full object-contain", imageClassName)}
      />
    </Link>
  );
};
