"use client";

import { useEffect, useRef, useState } from "react";

export function CriticalInfrastructure() {
  const ref = useRef<HTMLElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setLive(entry.isIntersecting),
      { rootMargin: "160px 0px", threshold: 0.02 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="infra"
      ref={ref}
      className="relative h-[100svh] min-h-[720px] overflow-hidden bg-[#010509]"
    >
      {live ? (
        <iframe
          src="/critical-infrastructure.html"
          title="Critical Infrastructure — Holographic Wireframe"
          className="absolute inset-0 h-full w-full border-0 bg-[#010509]"
        />
      ) : (
        <div className="absolute inset-0 bg-[#010509]" aria-hidden />
      )}
    </section>
  );
}
