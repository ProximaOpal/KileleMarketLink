import { SectionHeading } from "@/components/section-heading";

export function Integrations() {
  return (
    <section id="integrations" className="border-t border-[#0a0a0a]/10 px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="INTEGRATIONS"
            title={
              <>
                Connect any farm.
                <br />
                Reach any dock.
              </>
            }
          />
          <p className="max-w-xs text-sm leading-relaxed text-[#0a0a0a]/55">
            IoT probes, fleet GPS, dark-store APIs, and factory intake. Wire a new drop node in minutes.
          </p>
        </div>
        <div className="flex flex-col overflow-hidden rounded-2xl border border-[#0a0a0a]/12 md:relative md:block">
          <div className="relative h-[280px] w-full shrink-0 md:h-[480px]">
            <img
              src="/images/leaves-field.jpg"
              alt="Green maize and tea leaves across a Kenyan field"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0a0a0a]/25" />
          </div>
          <div className="flex flex-col gap-3 p-4 md:absolute md:bottom-4 md:right-4 md:w-72 md:p-0">
            <div
              className="rounded-xl border border-white/30 p-6 text-white"
              style={{ backdropFilter: "blur(24px)", background: "rgba(10,10,10,0.72)" }}
            >
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] tracking-widest text-white/70">
                SDK
              </span>
              <h3 className="mb-2 mt-3 text-lg font-light">Batch intake hooks</h3>
              <p className="mb-4 text-xs leading-relaxed text-white/70">
                Push harvest events from the gate: crop, kilos, and the decay clock.
              </p>
              <div className="rounded-lg border border-white/15 bg-[#0a0a0a]/50 p-3 font-mono text-[11px] leading-relaxed text-white/80">
                <span className="text-white/40">{"// farm gate"}</span>
                <br />
                <span className="text-lime-200">logBatch</span>
                {`({`}
                <br />
                {"  "}
                <span className="text-[#c8f542]">crop</span>: <span className="text-emerald-200">&apos;kale&apos;</span>,
                <br />
                {"  "}
                <span className="text-[#c8f542]">kg</span>: <span className="text-white/50">420</span>
                {`,`}
                <br />
                {"  "}
                <span className="text-[#c8f542]">gate</span>: <span className="text-emerald-200">&apos;Kiambu&apos;</span>
                <br />
                {`})`}
              </div>
            </div>
            <div
              className="rounded-xl border border-white/30 p-6 text-white"
              style={{ backdropFilter: "blur(24px)", background: "rgba(10,10,10,0.72)" }}
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-[#c8f542]" />
                <span className="text-xs tracking-widest text-white/60">LIVE FLEET</span>
              </div>
              <p className="text-sm text-white/75">
                Stream GPS and cargo temperature into Tatu, Konza, and factory intake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
