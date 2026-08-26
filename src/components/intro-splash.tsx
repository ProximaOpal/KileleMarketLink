"use client";

import { useEffect, useState } from "react";

const LETTERS = ["A", "G", "E", "N", "T", "I", "C"];

export function IntroSplash() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const hide = window.setTimeout(() => setGone(true), 1600);
    return () => window.clearTimeout(hide);
  }, []);

  if (gone) return null;

  return (
    <div className="intro-splash pointer-events-none fixed inset-0 z-[100]" aria-hidden>
      <div className="absolute inset-0 bg-[#0c0a0a]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex" style={{ gap: "0.06em" }}>
          {LETTERS.map((letter) => (
            <span
              key={letter}
              className="select-none font-sans font-bold leading-none text-white"
              style={{
                fontSize: "clamp(2.5rem, 12vw, 8rem)",
                letterSpacing: "0.05em",
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
