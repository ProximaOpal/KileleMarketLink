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
                Connect any farm.
                <br />
                Reach any dock.
              </>
            }
          />
          <p className="max-w-xs text-sm leading-relaxed text-white/45">
            IoT probes, fleet GPS, dark-store APIs, and factory intake. Wire a new drop node in minutes.
          </p>
        </div>
        <div className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.12] md:relative md:block">
          <div className="relative h-[280px] w-full shrink-0 md:h-[480px]">
            <img
              src="/images/produce-arc.jpg"
              alt="Produce crates staged for city and factory delivery"
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
              <h3 className="mb-2 mt-3 text-lg font-light">Batch intake hooks</h3>
              <p className="mb-4 text-xs leading-relaxed text-white/45">
                Push harvest events from the gate: crop, kilos, and the decay clock.
              </p>
              <div className="rounded-lg border border-white/10 bg-black/30 p-3 font-mono text-[11px] leading-relaxed text-white/55">
                <span className="text-white/25">{"// farm gate"}</span>
                <br />
                <span className="text-orange-300/80">logBatch</span>
                {`({`}
                <br />
                {"  "}
                <span className="text-amber-200/80">crop</span>: <span className="text-emerald-300/80">&apos;kale&apos;</span>,
                <br />
                {"  "}
                <span className="text-amber-200/80">kg</span>: <span className="text-white/40">420</span>
                {`,`}
                <br />
                {"  "}
                <span className="text-amber-200/80">gate</span>: <span className="text-emerald-300/80">&apos;Kiambu&apos;</span>
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
                <span className="text-xs tracking-widest text-white/40">LIVE FLEET</span>
              </div>
              <p className="text-sm text-white/45">
                Stream GPS and cargo temperature into Tatu, Konza, and factory intake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
