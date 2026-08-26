"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/section-heading";

const BLOB = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com";

const AGENTS = [
  {
    name: "RESEARCHER",
    image: "/images/researcher.png",
    fallback: `${BLOB}/researcher-CvhqOuV6irGwBOnJoTGFlXdbyYBRjb.png`,
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
    fallback: `${BLOB}/coder-9bItvCegU6TXUqbX3tUXGBAtvkBkXp.png`,
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
    fallback: `${BLOB}/analyst-Ysxnqg7Fpy2cfA56PiIttv1KximMhT.png`,
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
    fallback: `${BLOB}/executor-o1q6509qMLXMtpBIGo49vcgOu34sI1.png`,
    title: "Workflow automation",
    body: "Takes actions across APIs: sends messages, creates calendar events, triggers webhooks, and manages third-party apps.",
    stats: [
      { value: "5.6M", label: "executions" },
      { value: "99.9%", label: "uptime" },
    ],
  },
];

export function Agents() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scales, setScales] = useState(() => AGENTS.map(() => 1));

  useEffect(() => {
    const onScroll = () => {
      setScales(
        AGENTS.map((_, index) => {
          const next = cardRefs.current[index + 1];
          if (!next) return 1;
          const topTarget = 80 + (index + 1) * 16;
          const delta = topTarget + 120 - next.getBoundingClientRect().top;
          const t = Math.min(1, Math.max(0, delta / 280));
          return 1 - t * 0.045;
        }),
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

        <div className="flex flex-col" style={{ perspective: "1400px", perspectiveOrigin: "50% 0%" }}>
          {AGENTS.map((agent, index) => (
            <div
              key={agent.name}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className="sticky mb-4"
              style={{ top: 80 + index * 16, zIndex: 10 + index }}
            >
              <div
                style={{
                  transform: `scale(${scales[index]}) translateY(0px)`,
                  transformOrigin: "top center",
                  transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                  willChange: "transform",
                }}
              >
                <div className="group relative min-h-[280px] cursor-pointer overflow-hidden rounded-2xl border border-white/[0.12] bg-[#141110] md:min-h-[320px]">
                  <div className="relative h-52 w-full pointer-events-none md:hidden">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                      onError={(event) => {
                        event.currentTarget.src = agent.fallback;
                      }}
                      style={{
                        maskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 85%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 85%)",
                      }}
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 md:block">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="h-full w-full object-cover object-center"
                      onError={(event) => {
                        event.currentTarget.src = agent.fallback;
                      }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to right, #141110 0%, transparent 55%)" }}
                    />
                  </div>
                  <div className="relative z-10 p-8">
                    <div className="md:max-w-[60%]">
                      <div className="mb-6 flex items-start justify-between">
                        <span className="inline-flex items-center rounded-full bg-white/[0.06] px-3 py-1 text-[11px] tracking-widest text-white/45">
                          {agent.name}
                        </span>
                      </div>
                      <h3 className="mb-3 text-xl font-light">{agent.title}</h3>
                      <p className="mb-8 text-sm leading-relaxed text-white/45">{agent.body}</p>
                    </div>
                    <div className="flex gap-8 border-t border-white/[0.08] pt-6">
                      {agent.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="text-2xl font-light">{stat.value}</div>
                          <div className="mt-0.5 text-[11px] tracking-widest text-white/35">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
