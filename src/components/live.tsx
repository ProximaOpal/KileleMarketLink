const ROWS = [
  { agent: "harvest-kiambu", color: "#c8f542", task: "Logging 420kg kale — decay clock 11h", region: "kiambu", status: "running" },
  { agent: "cold-nairobi-3", color: "#2ee6c8", task: "Reefer 3.8°C — Thika Rd window", region: "nairobi", status: "running" },
  { agent: "route-north-1", color: "#0a0a0a", task: "Bypassing Uhuru Hwy bottleneck", region: "corridor", status: "queued" },
  { agent: "node-tatu", color: "#2ee6c8", task: "Consolidated drop — Tatu City dark store", region: "tatu", status: "running" },
  { agent: "node-konza", color: "#0a0a0a", task: "Factory intake — Konza tech hub", region: "konza", status: "running" },
  { agent: "probe-eldoret", color: "#8bc34a", task: "Temp alert cleared — maize lot 19", region: "eldoret", status: "complete" },
];

export function Live() {
  return (
    <section id="live" className="border-t border-[#0a0a0a]/10 px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a]/8 px-3 py-1 text-[11px] tracking-widest text-[#0a0a0a]/60">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c8f542]" />
            LIVE RIGHT NOW
          </span>
        </div>
        <h2 className="mb-4 font-display text-4xl font-light leading-[1.05] tracking-tight text-[#0a0a0a] md:text-5xl">
          Crates moving
          <br />
          24 / 7, on the clock.
        </h2>
        <p className="mb-12 max-w-lg text-sm leading-relaxed text-[#0a0a0a]/55">
          At any moment, harvest lots are decaying, reefers are reporting, and urban nodes in Tatu and Konza are taking drops — no dispatcher guessing FIFO.
        </p>
        <div className="mb-6 font-display text-sm text-[#0a0a0a]/55">
          <span className="text-2xl font-light text-[#0a0a0a]">3,847</span> batches in transit
        </div>
        <div
          className="overflow-x-auto rounded-2xl border border-[#0a0a0a]/12 bg-white/70"
          style={{ backdropFilter: "blur(18px)" }}
        >
          <div className="grid min-w-[640px] grid-cols-[1.1fr_1.6fr_0.7fr_0.6fr] gap-4 border-b border-[#0a0a0a]/10 px-5 py-3 text-[10px] uppercase tracking-widest text-[#0a0a0a]/45">
            <div>FLEET</div>
            <div>TASK</div>
            <div>NODE</div>
            <div>STATUS</div>
          </div>
          {ROWS.map((row) => (
            <div
              key={row.agent}
              className="grid min-w-[640px] grid-cols-[1.1fr_1.6fr_0.7fr_0.6fr] items-center gap-4 border-b border-[#0a0a0a]/8 px-5 py-3.5 last:border-b-0"
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: row.color }} />
                <span className="truncate font-mono text-[12px] text-[#0a0a0a]/80">{row.agent}</span>
              </div>
              <div className="truncate text-sm text-[#0a0a0a]/55">{row.task}</div>
              <div className="text-xs tracking-wide text-[#0a0a0a]/45">{row.region}</div>
              <div className="text-xs uppercase tracking-widest text-[#0a0a0a]/55">{row.status}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
