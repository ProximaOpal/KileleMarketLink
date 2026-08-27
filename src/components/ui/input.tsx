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
        "flex-1 rounded-xl border border-[#163a28]/15 bg-white/80 px-4 py-3 text-sm text-[#14261a] placeholder:text-[#163a28]/35 outline-none transition-colors focus:border-[#2f7a3e]",
        className,
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";
