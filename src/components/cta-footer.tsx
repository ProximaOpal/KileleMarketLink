"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CtaFooter() {
  const [joined, setJoined] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setJoined(true);
  }

  return (
    <>
      <section className="relative overflow-hidden border-t border-white/[0.08] px-6 py-32 md:px-12 lg:px-20">
        <img
          src="/images/footer.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-full select-none object-cover object-bottom opacity-70"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            maskImage: "linear-gradient(to top, transparent 0%, black 55%)",
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 55%)",
            backdropFilter: "blur(18px)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgb(8,6,6) 0%, rgba(8,6,6,0.92) 18%, rgba(8,6,6,0.55) 35%, transparent 55%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="mb-6 font-display text-4xl font-light leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Start building your
            <br />
            agent workforce.
          </h2>
          <p className="mb-10 text-sm leading-relaxed text-white/45">
            Join thousands of teams deploying AI agents that work around the clock, across every timezone.
          </p>
          {joined ? (
            <p className="text-sm tracking-wide text-white/70">You&apos;re on the list. We&apos;ll be in touch.</p>
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
      <footer className="border-t border-white/[0.08] px-6 py-10 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <span className="font-pixel text-xs tracking-[0.25em] text-white/50">AGENTIC</span>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {[
              ["#platform", "Platform"],
              ["#agents", "Agents"],
              ["#workflow", "Workflow"],
              ["#terra", "Terra"],
              ["#live", "Live"],
              ["#pricing", "Pricing"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="text-xs tracking-widest text-white/35 transition-colors hover:text-white/70">
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Docs", "GitHub"].map((item) => (
              <a key={item} href="#" className="text-xs tracking-widest text-white/25 transition-colors hover:text-white/55">
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl border-t border-white/[0.06] pt-6">
          <span className="text-xs text-white/20">© 2026 Agentic. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
