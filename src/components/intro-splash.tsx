"use client";

import { useEffect, useState } from "react";

const LETTERS = ["A", "G", "E", "N", "T", "I", "C"];

export function IntroSplash() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase("out"), 1400);
    const t2 = window.setTimeout(() => setVisible(false), 2100);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background: "#0c0a0a",
          opacity: phase === "in" ? 1 : 0,
          transition: "opacity 0.7s ease",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex" style={{ gap: "0.06em" }}>
          {LETTERS.map((letter, i) => (
            <span
              key={letter}
              className="select-none font-sans font-bold leading-none text-white"
              style={{
                fontSize: "calc((100vw - 64px) / 7)",
                letterSpacing: "0.05em",
                opacity: phase === "in" ? 1 : 0,
                filter: phase === "in" ? "blur(0px)" : "blur(36px)",
                transform: phase === "in" ? "translateY(0)" : "translateY(48px)",
                transition: `opacity 0.7s ease ${i * 40}ms, filter 0.7s ease ${i * 40}ms, transform 0.7s ease ${i * 40}ms`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
