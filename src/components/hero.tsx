"use client";

const HERO_VIDEO =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agentic-hero-9yW3wnTNMfn2U6lsVhTTZSJFEvAoSj.mp4";

export function Hero() {
  return (
    <section id="top" className="relative isolate h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={HERO_VIDEO}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(16,64,59,0.38) 0%, rgba(139,35,24,0.22) 42%, rgba(230,109,30,0.18) 70%, rgba(253,187,45,0.16) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
        style={{
          height: "65%",
          background:
            "linear-gradient(to top, rgba(8,6,6,0.96) 0%, rgba(8,6,6,0.92) 18%, rgba(8,6,6,0.72) 35%, rgba(8,6,6,0.4) 55%, rgba(8,6,6,0.12) 75%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
        style={{
          height: "20%",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
        style={{
          height: "38%",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
        }}
      />
      <div className="h-20" />
      <div className="absolute inset-x-0 bottom-0 z-30 flex max-w-3xl flex-col px-6 pb-12 md:px-12">
        <h1 className="mb-10 font-display text-6xl font-light leading-[1.0] tracking-tight text-white sm:text-7xl md:text-8xl">
          Build &
          <br />
          orchestrate AI
          <br />
          agents while
          <br />
          you sleep.
        </h1>
        <div className="flex gap-8 sm:gap-12">
          {[
            { value: "50M+", label: "Tasks" },
            { value: "99.9%", label: "Uptime" },
            { value: "180+", label: "Countries" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-light tracking-tight text-white sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 font-display text-xs uppercase tracking-widest text-white/40">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
