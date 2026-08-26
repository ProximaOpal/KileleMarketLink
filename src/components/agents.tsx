"use client";

import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/glass-card";

const AGENTS = [
  {
    name: "RESEARCHER",
    image: "/images/researcher.png",
    title: "Web & data research",
    body: "Autonomously browses the web, extracts structured data, synthesizes reports from multiple sources with citations.",
    stats: [
      { value: "2.4M", label: "tasks run" },
      { value: "98.2%", label: "accuracy" },
    ],
  },
  {
    name: "CODER",
    image: "/images/coder.png",
    title: "Code generation & review",
    body: "Writes, refactors, and reviews code across 40+ languages. Runs tests, fixes bugs, opens pull requests automatically.",
    stats: [
      { value: "1.1M", label: "PRs merged" },
      { value: "3.2s", label: "avg response" },
    ],
  },
  {
    name: "ANALYST",
    image: "/images/analyst.png",
    title: "Data analysis & insights",
    body: "Connects to your databases, runs queries, visualizes trends, and surfaces anomalies before they become problems.",
    stats: [
      { value: "880K", label: "reports" },
      { value: "12x", label: "faster" },
    ],
  },
  {
    name: "EXECUTOR",
    image: "/images/executor.png",
    title: "Workflow automation",
    body: "Takes actions across APIs: sends messages, creates calendar events, triggers webhooks, and manages third-party apps.",
    stats: [
      { value: "5.6M", label: "executions" },
      { value: "99.9%", label: "uptime" },
    ],
  },
];

export function Agents() {
  return (
    <section id="agents" className="relative z-10 border-t border-white/[0.08] px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="AGENT TYPES"
            title={
              <>
                Plug-and-play agents
                <br />
                ready to deploy.
              </>
            }
          />
          <p className="max-w-xs text-sm leading-relaxed text-white/45">
            Start with a pre-built agent or compose your own from primitives. Every agent is versioned, testable, and observable.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {AGENTS.map((agent) => (
            <GlassCard key={agent.name} className="flex flex-col">
              <div className="relative h-48 w-full overflow-hidden sm:h-56">
                <img
                  src={agent.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,10,10,0.92)] via-[rgba(12,10,10,0.25)] to-transparent" />
                <span className="absolute left-6 top-6 font-pixel text-[10px] tracking-[0.28em] text-white/80">
                  {agent.name}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-6 px-6 py-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="min-w-0">
                  <h3 className="mb-2 text-2xl font-light">{agent.title}</h3>
                  <p className="text-sm leading-relaxed text-white/45">{agent.body}</p>
                </div>
                <div className="flex shrink-0 gap-8">
                  {agent.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="font-display text-2xl font-light">{stat.value}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-widest text-white/35">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
