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
        "flex-1 rounded-full border border-black/15 bg-white/85 px-4 py-3 text-sm text-black placeholder:text-black/35 outline-none transition-colors focus:border-black",
        className,
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";
