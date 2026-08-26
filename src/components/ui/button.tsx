import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "glass";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl text-[11px] tracking-widest transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
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
