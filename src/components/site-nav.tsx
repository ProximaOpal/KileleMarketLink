"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#farmers", label: "Farmers" },
  { href: "#platform", label: "Platform" },
  { href: "#agents", label: "Agents" },
  { href: "#workflow", label: "Workflow" },
  { href: "#terra", label: "Terra" },
  { href: "#global", label: "Global" },
  { href: "#pricing", label: "Pricing" },
];

export function SiteNav() {
  const pathname = usePathname();
  const home = pathname === "/" ? "" : "/";
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
      <div className="pointer-events-auto w-full max-w-4xl">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl border border-[#0a0a0a]/12 px-5 py-3",
            "bg-white/70 shadow-[0_12px_32px_rgba(10,10,10,0.12),0_2px_8px_rgba(10,10,10,0.06)]",
            scrolled && "bg-white/88",
          )}
          style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
        >
          <Link href={pathname === "/" ? "#top" : "/"} className="font-pixel text-[10px] tracking-[0.25em] text-[#0a0a0a]">
            AGENTIC
          </Link>
          <div className="hidden items-center gap-4 lg:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={`${home}${link.href}`}
                className="text-[11px] tracking-wide text-[#0a0a0a]/55 transition-colors duration-200 hover:text-[#0a0a0a]"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/settings"
              className={cn(
                "text-[11px] tracking-wide transition-colors duration-200",
                pathname === "/settings" ? "text-[#0a0a0a]" : "text-[#0a0a0a]/55 hover:text-[#0a0a0a]",
              )}
            >
              Settings
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden md:inline-flex">
              START HAULING
            </Button>
            <button
              className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] rounded-lg transition-colors hover:bg-[#0a0a0a]/[0.06] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className="block h-px bg-[#0a0a0a]/70 transition-all duration-300 origin-center"
                style={{ width: 18, transform: open ? "translateY(6px) rotate(45deg)" : "none" }}
              />
              <span
                className="block h-px bg-[#0a0a0a]/70 transition-all duration-300"
                style={{ width: 18, opacity: open ? 0 : 1 }}
              />
              <span
                className="block h-px bg-[#0a0a0a]/70 transition-all duration-300 origin-center"
                style={{ width: 18, transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }}
              />
            </button>
          </div>
        </nav>
        <div
          className="mt-2 overflow-hidden transition-all duration-300 ease-in-out lg:hidden"
          style={{ maxHeight: open ? 440 : 0, opacity: open ? 1 : 0 }}
        >
          <div
            className="flex flex-col rounded-2xl border border-[#0a0a0a]/12 bg-white/90 px-2 py-2"
            style={{ backdropFilter: "blur(16px)" }}
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={`${home}${link.href}`}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm tracking-wide text-[#0a0a0a]/60 transition-colors hover:bg-[#0a0a0a]/5 hover:text-[#0a0a0a]"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/settings"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm tracking-wide text-[#0a0a0a]/60 transition-colors hover:bg-[#0a0a0a]/5 hover:text-[#0a0a0a]"
            >
              Settings
            </Link>
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
