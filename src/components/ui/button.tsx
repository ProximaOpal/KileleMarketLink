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
            "bg-white/16 text-white hover:bg-white/24 border border-white/10 px-4 py-2",
          variant === "ghost" &&
            "border border-white/10 text-white/60 hover:text-white hover:border-white/25 hover:bg-white/[0.06] px-4 py-2",
          variant === "glass" &&
            "bg-white/10 text-white border border-white/15 hover:bg-white/18 px-8 py-3 text-sm font-medium",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
