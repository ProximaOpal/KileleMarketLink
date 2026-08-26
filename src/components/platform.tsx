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
                to ship agents.
              </>
            }
          />
        </div>
        <div className="grid grid-cols-12 gap-3">
          <GlassCard className="relative col-span-12 flex min-h-[200px] flex-col justify-between overflow-hidden p-8">
            <img
              src="/images/arc.png"
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
                  "linear-gradient(to bottom, transparent 35%, rgba(10,8,8,0.35) 50%, rgba(10,8,8,0.72) 65%, rgba(10,8,8,0.92) 80%, rgb(10,8,8) 100%)",
              }}
            />
            <div className="relative z-10">
              <div
                className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10"
                style={{ backdropFilter: "blur(8px)" }}
              >
                <Target className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-xl font-light">Visual Agent Builder</h3>
              <p className="max-w-sm text-sm leading-relaxed text-white/45">
                Drag, connect, and configure agents through an intuitive graph editor. No boilerplate. Ship in minutes, not days.
              </p>
            </div>
          </GlassCard>
          <GlassCard className="col-span-12 min-h-[200px] p-8 md:col-span-4">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15">
              <Activity className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </div>
            <h3 className="mb-2 text-lg font-light">Real-time Monitoring</h3>
            <p className="text-sm leading-relaxed text-white/45">
              Trace every decision. Debug with full execution history and live logs.
            </p>
          </GlassCard>
          <GlassCard className="col-span-12 min-h-[200px] p-8 md:col-span-4">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15">
              <Layers className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </div>
            <h3 className="mb-2 text-lg font-light">Memory & Context</h3>
            <p className="text-sm leading-relaxed text-white/45">
              Persistent long-term memory across sessions. Agents learn from every interaction.
            </p>
          </GlassCard>
          <GlassCard className="col-span-12 min-h-[200px] p-8 md:col-span-4">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15">
              <Shield className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </div>
            <h3 className="mb-2 text-lg font-light">Guardrails & Permissions</h3>
            <p className="text-sm leading-relaxed text-white/45">
              Define what agents can and cannot do. Fine-grained access control per tool.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
