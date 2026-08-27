"use client";

import { useState } from "react";

const STEPS = [
  { n: "01", title: "Install SDK", body: "One command to get started" },
  { n: "02", title: "Define Agent", body: "TypeScript-first agent class" },
  { n: "03", title: "Add Memory", body: "Persistent conversation context" },
  { n: "04", title: "Deploy", body: "One command to production" },
];

const TERMINALS = [
  [
    { kind: "comment", text: "# Install the Agentic SDK" },
    { kind: "cmd", text: "npm install @agentic/sdk" },
    { kind: "blank" },
    { kind: "comment", text: "# Initialize your project" },
    { kind: "cmd", text: "npx agentic init" },
    { kind: "blank" },
    { kind: "ok", text: "✓ Project initialized" },
    { kind: "ok", text: "✓ Config file created" },
    { kind: "ok", text: "✓ Ready to build" },
  ],
  [
    { kind: "comment", text: "# Define an agent" },
    { kind: "cmd", text: "npx agentic create researcher" },
    { kind: "blank" },
    { kind: "ok", text: "✓ Agent class generated" },
    { kind: "ok", text: "✓ Tools wired" },
  ],
  [
    { kind: "comment", text: "# Attach persistent memory" },
    { kind: "cmd", text: "npx agentic memory enable" },
    { kind: "blank" },
    { kind: "ok", text: "✓ Vector store connected" },
    { kind: "ok", text: "✓ Session context on" },
  ],
  [
    { kind: "comment", text: "# Ship it" },
    { kind: "cmd", text: "npx agentic deploy --prod" },
    { kind: "blank" },
    { kind: "ok", text: "✓ Regions: 12" },
    { kind: "ok", text: "✓ Live at agentic.run" },
  ],
];

export function DevEx() {
  const [active, setActive] = useState(0);

  return (
    <section id="devex" className="border-t border-white/[0.08] px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-widest text-white/40">
            Developer Experience
          </div>
          <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-tight md:text-5xl">
            Built for developers.
            <br />
            Loved by teams.
          </h2>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-3 lg:grid-cols-3">
          <div className="flex flex-col gap-3">
            {STEPS.map((step, i) => (
              <button
                key={step.n}
                onClick={() => setActive(i)}
                className="group flex-1 rounded-2xl border p-6 text-left transition-all duration-200"
                style={{
                  background: i === active ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
                  borderColor: i === active ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-light"
                    style={{
                      background: i === active ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.05)",
                      color: i === active ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {step.n}
                  </div>
                  <div className="min-w-0">
                    <p className={cnLite(i === active ? "text-white/85" : "text-white/50")}>{step.title}</p>
                    <p className="mt-0.5 text-xs text-white/30">{step.body}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div
            className="flex min-h-[360px] flex-col rounded-2xl border border-white/[0.10] p-8 lg:col-span-2"
            style={{ background: "rgba(16,14,14,0.45)", backdropFilter: "blur(18px)" }}
          >
            <div className="mb-5 flex shrink-0 items-center justify-between">
              <div className="text-[10px] uppercase tracking-widest text-white/35">terminal</div>
              <div className="flex gap-1.5">
                {[0, 1, 2].map((dot) => (
                  <div
                    key={dot}
                    className="h-2 w-2 rounded-full"
                    style={{ background: dot === active % 3 ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.12)" }}
                  />
                ))}
              </div>
            </div>
            <div className="flex-1 overflow-hidden rounded-xl border border-white/10 bg-black/35 p-6">
              <div className="font-mono text-[12px] leading-6">
                {TERMINALS[active].map((line, i) => {
                  if (line.kind === "blank") return <div key={i} className="h-3" />;
                  if (line.kind === "comment")
                    return (
                      <div key={i} className="text-white/35">
                        {line.text}
                      </div>
                    );
                  if (line.kind === "cmd")
                    return (
                      <div key={i}>
                        <span className="text-emerald-400">$ </span>
                        <span className="text-white">{line.text}</span>
                      </div>
                    );
                  return (
                    <div key={i} className="text-white/50">
                      {line.text}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function cnLite(className: string) {
  return `text-sm font-light ${className}`;
}
