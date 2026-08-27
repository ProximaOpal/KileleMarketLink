"use client";

import { motion } from "framer-motion";
import { PaperCutLayer } from "@/components/paper-cut-layer";

export function Hero() {
  return (
    <section id="top" className="relative isolate h-screen overflow-hidden bg-[#f4f8f1]">
      <img
        src="/images/leaves-hero.jpg"
        alt="Lush green leaves"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <img
        src="/images/paper-cut-bg.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-[12%] top-[-8%] z-[1] h-[70%] w-[62%] object-cover opacity-80"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 78%)",
        }}
      />
      <PaperCutLayer className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[58%] w-full drop-shadow-[0_-18px_40px_rgba(22,58,40,0.18)]" />
      <div className="h-20" />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 bottom-0 z-30 flex max-w-3xl flex-col px-6 pb-12 md:px-12"
      >
        <h1 className="mb-8 font-display text-6xl font-light leading-[1.0] tracking-tight text-[#14261a] sm:text-7xl md:text-8xl">
          Farm food
          <br />
          to cities &amp;
          <br />
          factories —
          <br />
          before it spoils.
        </h1>
        <a
          href="#farmers"
          className="mb-8 w-fit text-sm tracking-wide text-[#163a28]/70 underline decoration-[#163a28]/30 underline-offset-4 transition-colors hover:text-[#163a28]"
        >
          Farmer rate cards — swipe growers
        </a>
        <div className="flex gap-8 sm:gap-12">
          {[
            { value: "12h", label: "Fresh window" },
            { value: "99.4%", label: "Cold chain" },
            { value: "Tatu+", label: "City nodes" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-light tracking-tight text-[#14261a] sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 font-display text-xs uppercase tracking-widest text-[#163a28]/45">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
