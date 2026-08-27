"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationEnd"
> & {
  variant?: "primary" | "ghost" | "glass";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -1, scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        className={cn(
          "inline-flex items-center justify-center rounded-xl text-[11px] tracking-widest transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
          variant === "primary" &&
            "bg-[#163a28] text-white hover:bg-[#1f4d36] border border-[#163a28] px-4 py-2",
          variant === "ghost" &&
            "border border-[#163a28]/20 text-[#163a28]/70 hover:text-[#163a28] hover:border-[#163a28]/40 hover:bg-[#163a28]/6 px-4 py-2",
          variant === "glass" &&
            "bg-[#163a28] text-white border border-[#163a28] hover:bg-[#1f4d36] px-8 py-3 text-sm font-medium",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
