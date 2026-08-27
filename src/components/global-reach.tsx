"use client";

import { useLocalVideo } from "@/hooks/use-local-video";

export function GlobalReach() {
  const { src } = useLocalVideo();

  return (
    <section id="global" className="relative h-[100svh] min-h-[720px] overflow-hidden bg-black">
      <video
        key={src}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/global-kenya-aerial.jpg"
        src={src}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.22) 42%, transparent 70%), linear-gradient(to top, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.28) 38%, transparent 62%)",
        }}
      />
      <div className="relative z-10 flex h-full max-w-4xl flex-col justify-end px-6 pb-16 pt-28 md:px-12 lg:px-20">
        <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-white/70">Countrywide · Global</p>
        <h2 className="font-display text-5xl font-light leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
          We are available countrywide
          <br />
          and also Going Global
        </h2>
      </div>
    </section>
  );
}
