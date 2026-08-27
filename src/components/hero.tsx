"use client";

import { motion } from "framer-motion";
import { PaperCutLayer } from "@/components/paper-cut-layer";

export function Hero() {
  return (
    <section id="top" className="relative isolate h-screen overflow-hidden bg-[#f3f3f1]">
      <img
        src="/images/leaves-hero.jpg"
        alt="Lush green leaves"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <img
        src="/images/luminous-splash.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-[8%] top-[-6%] z-[1] h-[72%] w-[64%] object-cover object-right"
        style={{
          maskImage: "radial-gradient(ellipse at 70% 40%, black 42%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse at 70% 40%, black 42%, transparent 78%)",
        }}
      />
      <PaperCutLayer className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[58%] w-full drop-shadow-[0_-14px_28px_rgba(10,10,10,0.12)]" />
      <div className="h-20" />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 bottom-0 z-30 flex max-w-3xl flex-col px-6 pb-12 md:px-12"
      >
        <h1 className="mb-8 font-display text-6xl font-light leading-[1.0] tracking-tight text-black sm:text-7xl md:text-8xl">
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
          className="mb-8 w-fit text-sm tracking-wide text-black/70 underline decoration-black/30 underline-offset-4 transition-colors hover:text-black"
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
              <div className="font-display text-3xl font-light tracking-tight text-black sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 font-display text-xs uppercase tracking-widest text-black/40">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
