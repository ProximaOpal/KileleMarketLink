"use client";

import { Activity, Layers, Shield, Target } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/glass-card";

export function Platform() {
  return (
    <section id="platform" className="relative z-10 px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <SectionHeading
            eyebrow="PLATFORM"
            title={
              <>
                Everything you need
                <br />
                to move harvests.
              </>
            }
          />
        </div>
        <div className="grid grid-cols-12 gap-3">
          <GlassCard
            successTitle="Batch tracker live"
            successBody="Harvest volume, crop, and timestamp are logged at the gate."
            className="relative col-span-12 flex min-h-[200px] flex-col justify-between overflow-hidden p-8"
          >
            <img
              src="/images/step-harvest.jpg"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: "center 70%" }}
            />
            <div
              className="absolute inset-0"
              style={{
                maskImage: "linear-gradient(to bottom, transparent 45%, black 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 45%, black 100%)",
                backdropFilter: "blur(16px)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 35%, rgba(243,243,241,0.35) 50%, rgba(243,243,241,0.78) 65%, rgba(243,243,241,0.94) 80%, rgb(244,248,241) 100%)",
              }}
            />
            <div className="relative z-10">
              <div
                className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl border border-[#0a0a0a]/15 bg-white/70"
                style={{ backdropFilter: "blur(8px)" }}
              >
                <Target className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-xl font-light text-[#0a0a0a]">Farm-gate batch tracker</h3>
              <p className="max-w-sm text-sm leading-relaxed text-[#0a0a0a]/55">
                Log harvest volume, crop category, and timestamp at the gate. Decay curves surface the crates that must move first.
              </p>
            </div>
          </GlassCard>
          <GlassCard
            successTitle="Telematics live"
            successBody="GPS and temperature will alert before spoilage."
            className="col-span-12 min-h-[200px] p-8 md:col-span-4"
          >
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#0a0a0a]/15">
              <Activity className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </div>
            <h3 className="mb-2 text-lg font-light">GPS telematics</h3>
            <p className="text-sm leading-relaxed text-[#0a0a0a]/55">
              Live fleet maps from rural farms to urban hubs. Temperature alerts before spoilage, not after.
            </p>
          </GlassCard>
          <GlassCard
            successTitle="Decay ranked"
            successBody="Perishable batches now move by urgency, not FIFO."
            className="col-span-12 min-h-[200px] p-8 md:col-span-4"
          >
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#0a0a0a]/15">
              <Layers className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </div>
            <h3 className="mb-2 text-lg font-light">Shelf-life decay</h3>
            <p className="text-sm leading-relaxed text-[#0a0a0a]/55">
              Perishable batches ranked by actual urgency — not first-in, first-out.
            </p>
          </GlassCard>
          <GlassCard
            successTitle="Node booked"
            successBody="Tatu, Konza, factory floors, and dark stores are on the window."
            className="col-span-12 min-h-[200px] p-8 md:col-span-4"
          >
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#0a0a0a]/15">
              <Shield className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </div>
            <h3 className="mb-2 text-lg font-light">Urban & factory nodes</h3>
            <p className="text-sm leading-relaxed text-[#0a0a0a]/55">
              Tatu City, Konza City, dark stores, and factory floors — planned cities without a hinterland still get fresh food.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
