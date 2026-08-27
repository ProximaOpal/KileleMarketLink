import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/glass-card";

const EVENTS = [
  { time: "12:34:21", event: "batch_logged" },
  { time: "12:34:18", event: "temp_probe_ok" },
  { time: "12:34:15", event: "route_recomputed" },
  { time: "12:34:12", event: "decay_prioritized" },
  { time: "12:34:09", event: "node_drop_confirmed" },
];

export function Security() {
  return (
    <section id="security" className="border-t border-[#163a28]/10 px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <SectionHeading
            eyebrow="SECURITY"
            title={
              <>
                Cold-chain grade
                <br />
                from day one.
              </>
            }
          />
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-[#14261a]/55">
              Every crate is logged, every degree is traceable. Built for perishable food that cannot miss a city window.
            </p>
            <div className="space-y-4">
              {[
                ["SOC 2 Type II", "Independently audited security controls"],
                ["Full Audit Trail", "Every batch and temperature logged with full traceability"],
                ["Real-time Observability", "Replay any haul from farm gate to factory dock"],
              ].map(([title, body]) => (
                <div key={title} className="flex gap-4">
                  <div className="w-1 shrink-0 rounded-full bg-[#2f7a3e]/50" />
                  <div>
                    <h3 className="mb-1 text-sm font-light">{title}</h3>
                    <p className="text-xs text-[#14261a]/45">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 pt-4">
              {["SOC 2", "GDPR", "Food safety", "ISO 22000"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-[#163a28]/40">
                  <span className="h-1 w-1 rounded-full bg-[#2f7a3e]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <GlassCard className="p-6">
            <div className="mb-4 text-xs uppercase tracking-widest text-[#163a28]/45">Live Audit Trail</div>
            <div className="space-y-2">
              {EVENTS.map((row, i) => (
                <div
                  key={row.event}
                  className="group flex cursor-pointer items-center gap-3 rounded-lg border border-[#163a28]/10 bg-[#163a28]/[0.03] px-3 py-2.5 transition-colors hover:bg-[#163a28]/[0.06]"
                  style={{ animation: `fadeInUp 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms both` }}
                >
                  <span className="min-w-[60px] font-mono text-[10px] text-[#163a28]/40">{row.time}</span>
                  <span className="flex-1 text-[11px] font-light text-[#14261a]/70">{row.event}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2f7a3e]/70 transition-colors group-hover:bg-[#2f7a3e]" />
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
