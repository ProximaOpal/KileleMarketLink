"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { useSuccess } from "@/components/success-overlay";

const AGENTS = [
  {
    name: "HARVEST",
    image: "/images/step-harvest.jpg",
    title: "Farm-gate inventory",
    body: "Logs harvest volume, crop category, and timestamp at the farm gate. Shelf-life decay curves prioritize perishable batches by urgency — not FIFO.",
    stats: [
      { value: "2.4M", label: "crates logged" },
      { value: "98.2%", label: "batch accuracy" },
    ],
  },
  {
    name: "COLD CHAIN",
    image: "/images/step-monitor.jpg",
    title: "GPS & telematics",
    body: "Live location of transit fleets from rural farms to urban hubs. IoT probes alert drivers before cargo temperature drops into spoilage.",
    stats: [
      { value: "1.1M", label: "km tracked" },
      { value: "3.2s", label: "sensor lag" },
    ],
  },
  {
    name: "ROUTING",
    image: "/images/step-route.jpg",
    title: "Dynamic timing",
    body: "Optimal transit windows around Nairobi arterials and the northern corridor. Factors road condition, fuel, and strict urban delivery slots.",
    stats: [
      { value: "880K", label: "routes" },
      { value: "12x", label: "fewer delays" },
    ],
  },
  {
    name: "NODES",
    image: "/images/step-drop.jpg",
    title: "City & factory drop-off",
    body: "Custom nodes for Tatu City and Konza City, plus factory floors and dark stores — consolidated drops for high-density residential nets.",
    stats: [
      { value: "5.6M", label: "drops" },
      { value: "99.9%", label: "on-window" },
    ],
  },
];

export function Agents() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scales, setScales] = useState(() => AGENTS.map(() => 1));
  const success = useSuccess();

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
    <section id="agents" className="relative z-10 border-t border-[#0a0a0a]/10 px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="DELIVERY LAYERS"
            title={
              <>
                Farm to city,
                <br />
                crate by crate.
              </>
            }
          />
          <p className="max-w-xs text-sm leading-relaxed text-[#0a0a0a]/55">
            Harvest logging, cold-chain telematics, corridor timing, and urban nodes for Tatu, Konza, factories, and dark stores.
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
                <motion.div
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.985 }}
                  onClick={() =>
                    success.show({
                      title: `${agent.name} armed`,
                      body: agent.body,
                    })
                  }
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  className="group relative min-h-[280px] cursor-pointer overflow-hidden rounded-2xl border border-[#0a0a0a]/12 bg-white md:min-h-[320px]"
                >
                  <div className="relative h-52 w-full pointer-events-none md:hidden">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="absolute inset-0 h-full w-full object-cover object-center"
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
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to right, #ffffff 0%, transparent 55%)" }}
                    />
                  </div>
                  <div className="relative z-10 p-8">
                    <div className="md:max-w-[60%]">
                      <div className="mb-6 flex items-start justify-between">
                        <span className="inline-flex items-center rounded-full bg-[#0a0a0a]/8 px-3 py-1 text-[11px] tracking-widest text-[#0a0a0a]/60">
                          {agent.name}
                        </span>
                      </div>
                      <h3 className="mb-3 text-xl font-light">{agent.title}</h3>
                      <p className="mb-8 text-sm leading-relaxed text-[#0a0a0a]/55">{agent.body}</p>
                    </div>
                    <div className="flex gap-8 border-t border-[#0a0a0a]/10 pt-6">
                      {agent.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="text-2xl font-light">{stat.value}</div>
                          <div className="mt-0.5 text-[11px] tracking-widest text-[#0a0a0a]/45">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
