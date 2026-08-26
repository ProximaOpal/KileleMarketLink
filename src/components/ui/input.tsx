import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex-1 rounded-xl border border-white/12 bg-black/35 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/28",
        className,
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";
