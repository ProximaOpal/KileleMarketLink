import { SectionHeading } from "@/components/section-heading";

export function Integrations() {
  return (
    <section id="integrations" className="border-t border-white/[0.08] px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="INTEGRATIONS"
            title={
              <>
                Connect any tool.
                <br />
                Control any system.
              </>
            }
          />
          <p className="max-w-xs text-sm leading-relaxed text-white/45">
            200+ native connectors. Everything from Slack to your internal database. Build custom tools with our SDK in minutes.
          </p>
        </div>
        <div className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.12] md:relative md:block">
          <div className="relative h-[280px] w-full shrink-0 md:h-[480px]">
            <img
              src="/images/org-arc.png"
              alt="Agent orchestration architecture"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/25" />
          </div>
          <div className="flex flex-col gap-3 p-4 md:absolute md:bottom-4 md:right-4 md:w-72 md:p-0">
            <div
              className="rounded-xl border border-white/20 p-6"
              style={{ backdropFilter: "blur(24px)", background: "rgba(16,14,14,0.62)" }}
            >
              <span className="inline-flex items-center rounded-full bg-white/[0.06] px-3 py-1 text-[11px] tracking-widest text-white/45">
                SDK
              </span>
              <h3 className="mb-2 mt-3 text-lg font-light">Build custom tools</h3>
              <p className="mb-4 text-xs leading-relaxed text-white/45">
                Define any function as a tool your agents can call. TypeScript and Python.
              </p>
              <div className="rounded-lg border border-white/10 bg-black/30 p-3 font-mono text-[11px] leading-relaxed text-white/55">
                <span className="text-white/25">{"// tool definition"}</span>
                <br />
                <span className="text-orange-300/80">defineTool</span>
                {`({`}
                <br />
                {"  "}
                <span className="text-amber-200/80">name</span>: <span className="text-emerald-300/80">&apos;fetchPrice&apos;</span>,
                <br />
                {"  "}
                <span className="text-amber-200/80">run</span>: <span className="text-white/40">async (q) </span>
                {`=>`}
                <br />
                {"    "}
                <span className="text-orange-300/80">api</span>.get(q)
                <br />
                {`})`}
              </div>
            </div>
            <div
              className="rounded-xl border border-white/20 p-6"
              style={{ backdropFilter: "blur(24px)", background: "rgba(16,14,14,0.62)" }}
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400/80" />
                <span className="text-xs tracking-widest text-white/40">LIVE API</span>
              </div>
              <p className="text-sm text-white/45">
                Full REST + WebSocket API. Stream agent outputs directly into your product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
