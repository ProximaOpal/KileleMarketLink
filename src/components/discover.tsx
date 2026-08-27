"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  BedDouble,
  Building2,
  ChevronDown,
  Home,
  MapPin,
  Megaphone,
  Ruler,
} from "lucide-react";
import { cn } from "@/lib/utils";

const PAGE_LINKS = [
  { href: "#discover", label: "Home" },
  { href: "#agents", label: "Properties" },
  { href: "#platform", label: "Members" },
  { href: "#workflow", label: "Pages" },
  { href: "#live", label: "Blogs" },
];

const AGENT_TYPES = ["Show all", "Researcher", "Coder", "Analyst", "Executor"];
const TASK_RANGES = ["Any scale", "Sandbox", "Production", "Enterprise"];

const SERVICES = [
  {
    title: "Comfortable",
    body: "Facebook Ads, Google Ads, LinkedIn Ads,",
    mapped: "Tracing, live logs, evals, and replay.",
    icon: "megaphone" as const,
  },
  {
    title: "Luxury",
    body: "Instagram Ads, TikTok Ads, YouTube Ads,",
    mapped: "Queues, retries, webhooks, and SLAs.",
    icon: "grid" as const,
  },
];

export function Discover() {
  const [agentType, setAgentType] = useState(AGENT_TYPES[0]);
  const [taskRange, setTaskRange] = useState(TASK_RANGES[0]);
  const [openField, setOpenField] = useState<"type" | "range" | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointer = (event: PointerEvent) => {
      if (!formRef.current?.contains(event.target as Node)) setOpenField(null);
    };
    window.addEventListener("pointerdown", onPointer);
    return () => window.removeEventListener("pointerdown", onPointer);
  }, []);

  return (
    <section id="discover" className="relative z-10 px-3 pb-4 pt-24 md:px-5 md:pb-5">
      <div className="discover-shell relative mx-auto min-h-[calc(100svh-6.5rem)] overflow-hidden rounded-[28px] bg-[#12100f] md:rounded-[40px] lg:rounded-[44px]">
        <img
          src="/images/org-arc.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[58%] object-cover object-[center_42%] lg:block"
        />
        <img
          src="/images/org-arc.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-[46%] w-full object-cover object-center opacity-70 lg:hidden"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #0c0a0a 0%, #0c0a0a 36%, rgba(12,10,10,0.78) 52%, rgba(12,10,10,0.28) 68%, rgba(26,92,85,0.22) 84%, rgba(230,109,30,0.16) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 lg:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(12,10,10,0.35) 0%, rgba(12,10,10,0.82) 42%, #0c0a0a 62%)",
          }}
        />

        <div className="discover-floor hidden lg:block" />
        <div className="discover-floor-rise hidden lg:block" />
        <div className="discover-floor-fillet hidden lg:block" />

        <InnerNav />

        <div className="relative z-20 flex flex-col px-5 pb-8 pt-6 sm:px-8 md:px-10 lg:px-12 lg:pb-[168px] lg:pt-8">
          <div className="max-w-[540px]">
            <WidgetMark />
            <h2 className="mt-6 font-display text-[40px] font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              Choose Your Best
              <br />
              Agent Fleet.
            </h2>
            <p className="mt-4 max-w-[340px] text-[15px] font-medium leading-relaxed text-white/55">
              Agents &amp; workflows to deploy or compose — live in 180+ countries.
            </p>

            <div ref={formRef} className="relative mt-7 max-w-[540px]">
              <div className="flex flex-col overflow-hidden rounded-[28px] bg-[#f4efe8] shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:flex-row sm:items-stretch sm:rounded-full">
                <Field
                  icon={<Home className="h-[18px] w-[18px]" strokeWidth={1.75} />}
                  label="Property type"
                  value={agentType}
                  open={openField === "type"}
                  onToggle={() => setOpenField((v) => (v === "type" ? null : "type"))}
                />
                <div className="hidden w-px bg-[#d9d0c6] sm:block" />
                <div className="h-px bg-[#d9d0c6] sm:hidden" />
                <Field
                  icon={<MapPin className="h-[18px] w-[18px]" strokeWidth={1.75} />}
                  label="Price range"
                  value={taskRange}
                  open={openField === "range"}
                  onToggle={() => setOpenField((v) => (v === "range" ? null : "range"))}
                />
                <div className="p-2 sm:p-1.5 sm:pr-1.5">
                  <a
                    href="#agents"
                    className="flex h-12 w-full items-center justify-center rounded-full bg-[#e66d1e] px-8 text-[13px] font-semibold tracking-wide text-white transition-colors hover:bg-[#f07a2c] sm:h-[52px] sm:w-[118px]"
                  >
                    Search
                  </a>
                </div>
              </div>
              {openField === "type" && (
                <Menu
                  options={AGENT_TYPES}
                  value={agentType}
                  onPick={(v) => {
                    setAgentType(v);
                    setOpenField(null);
                  }}
                />
              )}
              {openField === "range" && (
                <Menu
                  options={TASK_RANGES}
                  value={taskRange}
                  align="right"
                  onPick={(v) => {
                    setTaskRange(v);
                    setOpenField(null);
                  }}
                />
              )}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
              <a href="#pricing" className="group inline-flex items-center gap-2 text-[14px] font-medium text-white/85">
                Buy a home
                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" strokeWidth={1.75} />
              </a>
              <a href="#workflow" className="group inline-flex items-center gap-2 text-[14px] font-medium text-white/85">
                Rent a home
                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-20 px-5 pb-8 lg:absolute lg:-right-6 lg:top-[22%] lg:w-[460px] lg:px-0 lg:pb-0">
          <div className="relative">
            <div className="absolute -top-4 left-6 z-30 hidden lg:block">
              <span className="inline-flex rounded-[10px] border border-white/70 bg-[#8b2318] px-3 py-1.5 text-[11px] font-medium tracking-wide text-white shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
                Our Special Service
              </span>
            </div>
            <div className="flex flex-col gap-3 lg:block">
              <span className="inline-flex w-fit rounded-[10px] border border-white/70 bg-[#8b2318] px-3 py-1.5 text-[11px] font-medium tracking-wide text-white lg:hidden">
                Our Special Service
              </span>
              <ServiceCard
                className="lg:relative lg:z-20 lg:w-[268px]"
                title={SERVICES[0].title}
                body={SERVICES[0].mapped}
                icon="megaphone"
              />
              <ServiceCard
                className="lg:absolute lg:left-[210px] lg:top-[54px] lg:z-10 lg:w-[268px]"
                title={SERVICES[1].title}
                body={SERVICES[1].mapped}
                icon="grid"
              />
            </div>
          </div>
        </div>

        <p className="pointer-events-none absolute bottom-[38%] right-6 z-20 hidden max-w-[148px] text-right text-[11px] font-medium leading-snug text-white/80 lg:block">
          Give us a call 1-888-498-9240 and that can set you up, or check our calling plan
        </p>

        <div className="relative z-30 bg-[#f4efe8] px-4 pb-5 pt-4 lg:bg-transparent lg:px-0 lg:pb-0 lg:pt-0">
          <article className="flex items-center gap-3 rounded-[22px] bg-[#ece7e0] p-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.12)] lg:absolute lg:bottom-7 lg:left-7 lg:w-[min(42%-2rem,488px)]">
            <img
              src="/images/researcher.png"
              alt=""
              className="h-[78px] w-[86px] shrink-0 rounded-[16px] object-cover"
            />
            <div className="min-w-0 flex-1 py-1 pr-1">
              <div className="flex items-center gap-1.5 text-[12px] font-medium text-[#2a2624]">
                <MapPin className="h-3.5 w-3.5 text-[#e66d1e]" strokeWidth={2} />
                Jakarta Barat, Indonesia
              </div>
              <div className="mt-1.5 flex items-center gap-3 text-[11px] text-[#6b6560]">
                <span className="inline-flex items-center gap-1">
                  <BedDouble className="h-3.5 w-3.5" strokeWidth={1.75} />
                  4 bed
                </span>
                <span className="inline-flex items-center gap-1">
                  <Ruler className="h-3.5 w-3.5" strokeWidth={1.75} />
                  10x20 m
                </span>
              </div>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-2 pr-1">
              <div className="text-[15px] font-semibold tracking-tight text-[#161210]">$5,200,000</div>
              <a
                href="#pricing"
                className="inline-flex h-8 items-center rounded-full bg-[#e66d1e] px-3.5 text-[11px] font-semibold text-white transition-colors hover:bg-[#f07a2c]"
              >
                Book Now
              </a>
            </div>
          </article>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 lg:absolute lg:bottom-[38px] lg:right-8 lg:mt-0 lg:justify-end">
            <LogoPill>
              <AirbnbMark />
            </LogoPill>
            <LogoPill>
              <CiscoMark />
            </LogoPill>
            <LogoPill>
              <EbayMark />
            </LogoPill>
            <LogoPill>
              <MicrosoftMark />
            </LogoPill>
          </div>
        </div>
      </div>
    </section>
  );
}

function InnerNav() {
  return (
    <header className="relative z-30 flex items-center justify-between px-5 pt-5 sm:px-8 md:px-10 lg:px-12 lg:pt-7">
      <a href="#discover" className="flex items-center gap-2.5 text-white">
        <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/75">
          <Home className="h-4 w-4" strokeWidth={1.6} />
        </span>
        <span className="text-[15px] font-medium tracking-tight">My Home</span>
      </a>
      <nav className="hidden items-center gap-8 lg:flex">
        {PAGE_LINKS.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className={cn(
              "relative text-[14px] font-medium text-white/70 transition-colors hover:text-white",
              index === 0 && "text-white",
            )}
          >
            {link.label}
            {index === 0 && (
              <span className="absolute -bottom-2 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-[#e66d1e]" />
            )}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <a href="#devex" className="hidden text-[14px] font-medium text-white/80 sm:inline">
          Log In
        </a>
        <a
          href="#pricing"
          className="inline-flex h-10 items-center rounded-full border border-white/80 px-5 text-[13px] font-medium text-white transition-colors hover:bg-white/10"
        >
          Sign Up
        </a>
      </div>
    </header>
  );
}

function WidgetMark() {
  return (
    <div
      className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-[16px] shadow-[0_10px_24px_rgba(0,0,0,0.28)]"
      style={{ background: "linear-gradient(160deg, #2a7a70 0%, #1a5c55 48%, #123f3b 100%)" }}
      aria-hidden
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M8 28 L20 8 L32 28 Z" fill="white" opacity="0.94" />
        <circle cx="20" cy="11" r="6.2" fill="url(#orb)" />
        <defs>
          <radialGradient id="orb" cx="0.32" cy="0.28" r="0.8">
            <stop offset="0%" stopColor="#ffe08a" />
            <stop offset="45%" stopColor="#fdbb2d" />
            <stop offset="100%" stopColor="#e66d1e" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Field({
  icon,
  label,
  value,
  open,
  onToggle,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex min-w-0 flex-1 items-center gap-3 px-5 py-3.5 text-left"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center text-[#e66d1e]">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-[11px] font-medium text-[#8a8178]">{label}</span>
        <span className="mt-0.5 flex items-center gap-1.5 text-[14px] font-semibold text-[#1c1917]">
          <span className="truncate">{value}</span>
          <ChevronDown
            className={cn("h-3.5 w-3.5 text-[#8a8178] transition-transform", open && "rotate-180")}
            strokeWidth={2}
          />
        </span>
      </span>
    </button>
  );
}

function Menu({
  options,
  value,
  onPick,
  align,
}: {
  options: string[];
  value: string;
  onPick: (value: string) => void;
  align?: "right";
}) {
  return (
    <ul
      className={cn(
        "absolute top-[calc(100%+10px)] z-40 w-[min(100%,240px)] overflow-hidden rounded-2xl border border-black/5 bg-[#f4efe8] py-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.18)]",
        align === "right" ? "right-0 sm:right-[132px]" : "left-0",
      )}
    >
      {options.map((option) => (
        <li key={option}>
          <button
            type="button"
            onClick={() => onPick(option)}
            className={cn(
              "flex w-full px-4 py-2.5 text-left text-[13px] font-medium text-[#3a3532] hover:bg-black/[0.04]",
              option === value && "text-[#e66d1e]",
            )}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

function ServiceCard({
  title,
  body,
  icon,
  className,
}: {
  title: string;
  body: string;
  icon: "megaphone" | "grid";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[22px] border border-white/15 px-5 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.28)]",
        className,
      )}
      style={{
        background: "rgba(22, 18, 16, 0.62)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
      }}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#1a5c55] text-white">
        {icon === "megaphone" ? (
          <Megaphone className="h-[18px] w-[18px]" strokeWidth={1.7} />
        ) : (
          <Building2 className="h-[18px] w-[18px]" strokeWidth={1.7} />
        )}
      </div>
      <h3 className="text-[18px] font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-1.5 text-[12px] leading-relaxed text-white/50">{body}</p>
    </div>
  );
}

function LogoPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[52px] min-w-[104px] items-center justify-center rounded-[14px] bg-[#e7e0d6] px-4 text-[#3f3a36]">
      {children}
    </div>
  );
}

function AirbnbMark() {
  return (
    <svg width="64" height="18" viewBox="0 0 64 18" aria-label="airbnb">
      <text
        x="32"
        y="13.5"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: "var(--font-display), sans-serif", fontSize: "13px", fontWeight: 500 }}
      >
        airbnb
      </text>
    </svg>
  );
}

function CiscoMark() {
  return (
    <svg width="72" height="18" viewBox="0 0 72 18" aria-label="CISCO">
      <g fill="currentColor">
        <rect x="0" y="10" width="2.2" height="4" rx="0.4" />
        <rect x="4" y="7" width="2.2" height="7" rx="0.4" />
        <rect x="8" y="4" width="2.2" height="10" rx="0.4" />
        <rect x="12" y="7" width="2.2" height="7" rx="0.4" />
        <rect x="16" y="10" width="2.2" height="4" rx="0.4" />
      </g>
      <text
        x="46"
        y="13.5"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: "var(--font-display), sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em" }}
      >
        CISCO
      </text>
    </svg>
  );
}

function EbayMark() {
  return (
    <svg width="52" height="18" viewBox="0 0 52 18" aria-label="ebay">
      <text
        x="26"
        y="13.5"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: "var(--font-display), sans-serif", fontSize: "15px", fontWeight: 600, fontStyle: "italic" }}
      >
        ebay
      </text>
    </svg>
  );
}

function MicrosoftMark() {
  return (
    <svg width="92" height="18" viewBox="0 0 92 18" aria-label="Microsoft">
      <g transform="translate(0,3)">
        <rect x="0" y="0" width="5.2" height="5.2" fill="currentColor" />
        <rect x="6.2" y="0" width="5.2" height="5.2" fill="currentColor" />
        <rect x="0" y="6.2" width="5.2" height="5.2" fill="currentColor" />
        <rect x="6.2" y="6.2" width="5.2" height="5.2" fill="currentColor" />
      </g>
      <text
        x="54"
        y="13.2"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: "var(--font-display), sans-serif", fontSize: "11px", fontWeight: 500 }}
      >
        Microsoft
      </text>
    </svg>
  );
}
