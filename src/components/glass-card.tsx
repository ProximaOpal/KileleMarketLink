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
        "group relative overflow-hidden rounded-2xl border border-black/10 bg-white/78",
        "shadow-[0_18px_40px_rgba(10,10,10,0.06)]",
        className,
      )}
      style={{ backdropFilter: "blur(22px)", WebkitBackdropFilter: "blur(22px)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(200,245,66,0.38), transparent 60%)",
        }}
      />
      {children}
    </motion.div>
  );
}
