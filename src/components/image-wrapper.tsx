"use client";

import * as React from "react";
import Image, { type ImageProps } from "next/image";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { imageSettleVariants } from "../animations/presets";

export interface ImageWrapperProps extends Omit<ImageProps, "ref"> {
  containerClassName?: string;
  animateSettle?: boolean;
}

/**
 * ImageWrapper component wrapping Next.js Image.
 * Enforces:
 * - Proper WebP / AVIF compression configurations (handled via loader/props).
 * - "Image Settle" animation preset: scales from 102% to 100% while fading.
 * - Responsive aspect ratios without distortion.
 */
export const ImageWrapper: React.FC<ImageWrapperProps> = ({
  className,
  containerClassName,
  animateSettle = true,
  alt,
  src,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#FAF9F6] border border-[#E8E8E8] rounded-sm",
        containerClassName
      )}
    >
      <motion.div
        className="w-full h-full"
        initial={animateSettle ? "hidden" : "visible"}
        animate={isLoaded ? "visible" : animateSettle ? "hidden" : "visible"}
        variants={imageSettleVariants}
      >
        <Image
          className={cn(
            "object-cover transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          src={src}
          alt={alt || ""}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      </motion.div>
    </div>
  );
};

ImageWrapper.displayName = "ImageWrapper";
