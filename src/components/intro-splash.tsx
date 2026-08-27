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
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 92% 8%, #e8ff78 0%, transparent 52%), radial-gradient(80% 65% at 100% 100%, #2ee6c8 0%, transparent 55%), linear-gradient(152deg, #f3f3f1 0%, #f4f6e8 26%, #d4f85a 58%, #8aecc8 78%, #2ee6c8 100%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex" style={{ gap: "0.06em" }}>
          {LETTERS.map((letter) => (
            <span
              key={letter}
              className="select-none font-sans font-bold leading-none text-black"
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
