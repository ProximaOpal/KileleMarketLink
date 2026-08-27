"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PaperCutLayer } from "@/components/paper-cut-layer";

export function CtaFooter() {
  const [joined, setJoined] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setJoined(true);
  }

  return (
    <>
      <section className="relative overflow-hidden border-t border-[#163a28]/10 px-6 py-32 md:px-12 lg:px-20">
        <img
          src="/images/leaves-canopy.jpg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-40"
        />
        <PaperCutLayer className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] w-full" />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="mb-6 font-display text-4xl font-light leading-[1.05] tracking-tight text-[#14261a] md:text-5xl lg:text-6xl">
            Start moving harvests
            <br />
            while they are still alive.
          </h2>
          <p className="mb-10 text-sm leading-relaxed text-[#14261a]/55">
            Join farms, factories, and city hubs dispatching foodstuff on decay clocks — Tatu, Konza, Nairobi, and the northern corridor.
          </p>
          {joined ? (
            <p className="text-sm tracking-wide text-[#163a28]">You&apos;re on the list. We&apos;ll be in touch.</p>
          ) : (
            <form onSubmit={onSubmit} className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
              <Input type="email" required placeholder="your@email.com" />
              <Button variant="glass" type="submit">
                JOIN
              </Button>
            </form>
          )}
        </div>
      </section>
      <footer className="border-t border-[#163a28]/10 bg-white/70 px-6 py-10 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <span className="font-pixel text-xs tracking-[0.25em] text-[#163a28]/60">AGENTIC</span>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {[
              ["#platform", "Platform"],
              ["#farmers", "Farmers"],
              ["#agents", "Agents"],
              ["#workflow", "Workflow"],
              ["#terra", "Terra"],
              ["#live", "Live"],
              ["#pricing", "Pricing"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="text-xs tracking-widest text-[#163a28]/40 transition-colors hover:text-[#163a28]">
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Docs", "GitHub"].map((item) => (
              <a key={item} href="#" className="text-xs tracking-widest text-[#163a28]/30 transition-colors hover:text-[#163a28]/70">
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl border-t border-[#163a28]/10 pt-6">
          <span className="text-xs text-[#163a28]/30">© 2026 Agentic. Farm to city. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
