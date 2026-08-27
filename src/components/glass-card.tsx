"use client";

import { motion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(event) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
        el.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
      }}
      whileHover={{ y: -6, scale: 1.012 }}
      transition={{ type: "spring", stiffness: 340, damping: 26 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[rgba(18,16,16,0.48)]",
        className,
      )}
      style={{ backdropFilter: "blur(22px)", WebkitBackdropFilter: "blur(22px)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(253,187,45,0.12), transparent 60%)",
        }}
      />
      {children}
    </motion.div>
  );
}
