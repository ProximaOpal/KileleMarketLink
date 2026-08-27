"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#farmers", label: "Farmers" },
  { href: "#discover", label: "Discover" },
  { href: "#platform", label: "Platform" },
  { href: "#agents", label: "Agents" },
  { href: "#workflow", label: "Workflow" },
  { href: "#terra", label: "Terra" },
  { href: "#pricing", label: "Pricing" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="pointer-events-auto w-full max-w-3xl">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl border border-white/[0.12] px-5 py-3",
            "bg-[rgba(16,14,14,0.42)] shadow-[0_8px_32px_rgba(0,0,0,0.28),0_2px_8px_rgba(0,0,0,0.18)]",
            scrolled && "bg-[rgba(12,10,10,0.62)]",
          )}
          style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
        >
          <a href="#top" className="font-pixel text-[10px] tracking-[0.25em] text-white/80">
            AGENTIC
          </a>
          <div className="hidden items-center gap-5 lg:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-wide text-white/60 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden md:inline-flex">
              START HAULING
            </Button>
            <button
              className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] rounded-lg transition-colors hover:bg-white/[0.06] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className="block h-px bg-white/70 transition-all duration-300 origin-center"
                style={{ width: 18, transform: open ? "translateY(6px) rotate(45deg)" : "none" }}
              />
              <span
                className="block h-px bg-white/70 transition-all duration-300"
                style={{ width: 18, opacity: open ? 0 : 1 }}
              />
              <span
                className="block h-px bg-white/70 transition-all duration-300 origin-center"
                style={{ width: 18, transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }}
              />
            </button>
          </div>
        </nav>
        <div
          className="mt-2 overflow-hidden transition-all duration-300 ease-in-out lg:hidden"
          style={{ maxHeight: open ? 380 : 0, opacity: open ? 1 : 0 }}
        >
          <div
            className="flex flex-col rounded-2xl border border-white/[0.12] bg-[rgba(16,14,14,0.55)] px-2 py-2"
            style={{ backdropFilter: "blur(16px)" }}
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm tracking-wide text-white/60 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-1 px-2 pb-1">
              <Button variant="ghost" className="w-full py-2.5">
                START HAULING
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
