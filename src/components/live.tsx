const ROWS = [
  { agent: "analyst-7f2a", color: "#E66D1E", task: "Generating Q2 financial report", region: "us-east", status: "running" },
  { agent: "executor-3b1c", color: "#FDBB2D", task: "Running integration test suite", region: "eu-west", status: "running" },
  { agent: "researcher-2c8f", color: "#1a5c55", task: "Scraping competitor pricing data", region: "us-west", status: "queued" },
  { agent: "planner-5a3d", color: "#c45c3e", task: "Syncing Notion docs with Linear", region: "eu-central", status: "running" },
  { agent: "coder-8d1a", color: "#8B2318", task: "Refactoring auth module — 3 files", region: "ap-south", status: "running" },
  { agent: "monitor-9d4e", color: "#4ade80", task: "Monitoring uptime across 8 regions", region: "us-east", status: "complete" },
];

export function Live() {
  return (
    <section id="live" className="border-t border-white/[0.08] px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 text-[11px] tracking-widest text-white/45">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            LIVE RIGHT NOW
          </span>
        </div>
        <h2 className="mb-4 font-display text-4xl font-light leading-[1.05] tracking-tight md:text-5xl">
          Agents working
          <br />
          24 / 7, autonomously.
        </h2>
        <p className="mb-12 max-w-lg text-sm leading-relaxed text-white/45">
          At any moment, thousands of agents are running tasks on behalf of teams around the world — no human in the loop.
        </p>
        <div className="mb-6 font-display text-sm text-white/50">
          <span className="text-2xl font-light text-white">3,847</span> agents active globally
        </div>
        <div
          className="overflow-x-auto rounded-2xl border border-white/[0.12]"
          style={{ backdropFilter: "blur(18px)", background: "rgba(16,14,14,0.45)" }}
        >
            <div className="grid min-w-[640px] grid-cols-[1.1fr_1.6fr_0.7fr_0.6fr] gap-4 border-b border-white/[0.08] px-5 py-3 text-[10px] uppercase tracking-widest text-white/35">
            <div>AGENT</div>
            <div>TASK</div>
            <div>REGION</div>
            <div>STATUS</div>
          </div>
          {ROWS.map((row) => (
            <div
              key={row.agent}
              className="grid min-w-[640px] grid-cols-[1.1fr_1.6fr_0.7fr_0.6fr] items-center gap-4 border-b border-white/[0.06] px-5 py-3.5 last:border-b-0"
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: row.color }} />
                <span className="truncate font-mono text-[12px] text-white/75">{row.agent}</span>
              </div>
              <div className="truncate text-sm text-white/50">{row.task}</div>
              <div className="text-xs tracking-wide text-white/35">{row.region}</div>
              <div className="text-xs uppercase tracking-widest text-white/45">{row.status}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
