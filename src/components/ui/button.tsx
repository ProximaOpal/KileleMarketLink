"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useSuccess } from "@/components/success-overlay";

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationEnd"
> & {
  variant?: "primary" | "ghost" | "glass";
  quiet?: boolean;
  successTitle?: string;
  successBody?: string;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", quiet, successTitle, successBody, onClick, type, ...props }, ref) => {
    const success = useSuccess();
    return (
      <motion.button
        ref={ref}
        type={type}
        whileHover={{ y: -1, scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        onClick={(event) => {
          event.stopPropagation();
          onClick?.(event);
          if (event.defaultPrevented || quiet || type === "submit") return;
          success.show({
            title: successTitle ?? "You're in",
            body: successBody ?? "The corridor is booked. We'll keep the crate on its decay clock.",
          });
        }}
        className={cn(
          "inline-flex items-center justify-center rounded-full text-[11px] tracking-widest transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
          variant === "primary" &&
            "bg-[#c8f542] text-black hover:bg-[#d6ff62] border border-black px-4 py-2",
          variant === "ghost" &&
            "border border-black/20 text-black/70 hover:text-black hover:border-black/50 hover:bg-black/[0.04] px-4 py-2",
          variant === "glass" &&
            "bg-[#c8f542] text-black border border-black hover:bg-[#d6ff62] px-8 py-3 text-sm font-medium",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
