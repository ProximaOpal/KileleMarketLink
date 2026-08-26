import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/glass-card";

const EVENTS = [
  { time: "12:34:21", event: "agent_executed" },
  { time: "12:34:18", event: "decision_logged" },
  { time: "12:34:15", event: "tool_called" },
  { time: "12:34:12", event: "memory_updated" },
  { time: "12:34:09", event: "output_generated" },
];

export function Security() {
  return (
    <section id="security" className="border-t border-white/[0.08] px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <SectionHeading
            eyebrow="SECURITY"
            title={
              <>
                Enterprise-grade
                <br />
                from day one.
              </>
            }
          />
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-white/45">
              Every action is logged, every decision is traceable. Built for teams that need compliance without compromise.
            </p>
            <div className="space-y-4">
              {[
                ["SOC 2 Type II", "Independently audited security controls"],
                ["Full Audit Trail", "Every decision logged with full traceability"],
                ["Real-time Observability", "Monitor, debug, and replay any execution"],
              ].map(([title, body]) => (
                <div key={title} className="flex gap-4">
                  <div className="w-1 shrink-0 rounded-full bg-white/15" />
                  <div>
                    <h3 className="mb-1 text-sm font-light">{title}</h3>
                    <p className="text-xs text-white/35">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 pt-4">
              {["SOC 2", "GDPR", "HIPAA Ready", "ISO 27001"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-white/30">
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <GlassCard className="p-6">
            <div className="mb-4 text-xs uppercase tracking-widest text-white/35">Live Audit Trail</div>
            <div className="space-y-2">
              {EVENTS.map((row, i) => (
                <div
                  key={row.event}
                  className="group flex cursor-pointer items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2.5 transition-colors hover:bg-white/[0.06]"
                  style={{ animation: `fadeInUp 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms both` }}
                >
                  <span className="min-w-[60px] font-mono text-[10px] text-white/30">{row.time}</span>
                  <span className="flex-1 text-[11px] font-light text-white/55">{row.event}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70 transition-colors group-hover:bg-emerald-400" />
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
