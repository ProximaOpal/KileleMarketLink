"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="relative isolate h-screen overflow-hidden bg-[#f3f3f1]">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(90% 70% at 92% 8%, #e8ff78 0%, transparent 52%), radial-gradient(80% 65% at 100% 100%, #2ee6c8 0%, transparent 55%), linear-gradient(152deg, #f3f3f1 0%, #f4f6e8 26%, #d4f85a 58%, #8aecc8 78%, #2ee6c8 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(243,243,241,0.94) 0%, rgba(243,243,241,0.55) 38%, rgba(243,243,241,0.08) 62%, transparent 78%)",
        }}
      />
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
