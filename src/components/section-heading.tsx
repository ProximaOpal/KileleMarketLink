import type { ReactNode } from "react";
import { PixelMark } from "@/components/pixel-mark";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={cn(align === "center" && "text-center flex flex-col items-center")}>
      <PixelMark />
      <div className="mt-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#163a28]/8 px-3 py-1 text-[11px] tracking-widest text-[#163a28]/60">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-tight text-[#14261a] md:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}
