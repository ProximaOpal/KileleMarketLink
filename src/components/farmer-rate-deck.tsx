"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { animate, motion, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSuccess } from "@/components/success-overlay";

type Farmer = {
  id: string;
  name: string;
  crop: string;
  rate: string;
  rating: number;
  reviews: number;
  fill: number;
  coop: string;
  lastHaul: string;
  portrait: string;
  avatar: string;
  pageBg: string;
  aura: string;
  ink: string;
  muted: string;
  accent: string;
  bar: string;
};

const FARMERS: Farmer[] = [
  {
    id: "wanjiku",
    name: "Wanjiku Mwangi",
    crop: "kale grower",
    rate: "KES 42 / crate",
    rating: 4.8,
    reviews: 128,
    fill: 72,
    coop: "Kiambu Gate",
    lastHaul: "Last haul · 420kg kale · Tatu",
    portrait: "/images/farmers/wanjiku.png",
    avatar: "/images/farmers/avatar-1.png",
    pageBg: "#f3f3f1",
    aura: "#c8f542",
    ink: "#14110f",
    muted: "#6b6560",
    accent: "#2f6b1a",
    bar: "#111111",
  },
  {
    id: "otieno",
    name: "Samuel Otieno",
    crop: "maize grower",
    rate: "KES 28 / kg",
    rating: 4.6,
    reviews: 94,
    fill: 58,
    coop: "Eldoret Lots",
    lastHaul: "Last haul · 1.2t maize · factory",
    portrait: "/images/farmers/otieno.png",
    avatar: "/images/farmers/avatar-2.png",
    pageBg: "#f0c01a",
    aura: "#111111",
    ink: "#14110f",
    muted: "#3d3828",
    accent: "#8b2318",
    bar: "#111111",
  },
  {
    id: "amina",
    name: "Amina Hassan",
    crop: "tomato grower",
    rate: "KES 65 / crate",
    rating: 4.9,
    reviews: 211,
    fill: 86,
    coop: "Kilifi Coast",
    lastHaul: "Last haul · 310kg tomato · Konza",
    portrait: "/images/farmers/amina.png",
    avatar: "/images/farmers/avatar-3.png",
    pageBg: "#e24b32",
    aura: "#f4efe8",
    ink: "#14110f",
    muted: "#3b201c",
    accent: "#8b2318",
    bar: "#111111",
  },
  {
    id: "njeri",
    name: "Njeri Kamau",
    crop: "avocado grower",
    rate: "KES 90 / crate",
    rating: 4.7,
    reviews: 156,
    fill: 64,
    coop: "Limuru Ridge",
    lastHaul: "Last haul · 180kg avocado · Tatu",
    portrait: "/images/farmers/njeri.png",
    avatar: "/images/farmers/njeri-avatar.png",
    pageBg: "#c8f542",
    aura: "#0a0a0a",
    ink: "#0a0a0a",
    muted: "#3d4a20",
    accent: "#0a0a0a",
    bar: "#111111",
  },
  {
    id: "peter",
    name: "Peter Kipchoge",
    crop: "bean grower",
    rate: "KES 36 / kg",
    rating: 4.5,
    reviews: 81,
    fill: 51,
    coop: "Nakuru Lots",
    lastHaul: "Last haul · 900kg beans · factory",
    portrait: "/images/farmers/peter.png",
    avatar: "/images/farmers/peter-avatar.png",
    pageBg: "#2ee6c8",
    aura: "#0a0a0a",
    ink: "#0a0a0a",
    muted: "#1b4a44",
    accent: "#0a0a0a",
    bar: "#111111",
  },
  {
    id: "fatuma",
    name: "Fatuma Ali",
    crop: "mango grower",
    rate: "KES 55 / crate",
    rating: 4.8,
    reviews: 173,
    fill: 77,
    coop: "Lamu Coast",
    lastHaul: "Last haul · 260kg mango · Konza",
    portrait: "/images/farmers/fatuma.png",
    avatar: "/images/farmers/fatuma-avatar.png",
    pageBg: "#fff6e8",
    aura: "#c8f542",
    ink: "#14110f",
    muted: "#6b5c48",
    accent: "#c45c3e",
    bar: "#111111",
  },
  {
    id: "daniel",
    name: "Daniel Mutua",
    crop: "coffee grower",
    rate: "KES 120 / kg",
    rating: 4.9,
    reviews: 204,
    fill: 69,
    coop: "Nyeri Hills",
    lastHaul: "Last haul · 140kg cherry · factory",
    portrait: "/images/farmers/daniel.png",
    avatar: "/images/farmers/daniel-avatar.png",
    pageBg: "#ece4d4",
    aura: "#6b3f2a",
    ink: "#14110f",
    muted: "#5c4a3a",
    accent: "#6b3f2a",
    bar: "#111111",
  },
  {
    id: "grace",
    name: "Grace Achieng",
    crop: "sukuma grower",
    rate: "KES 30 / crate",
    rating: 4.6,
    reviews: 119,
    fill: 83,
    coop: "Kisumu Shore",
    lastHaul: "Last haul · 500kg greens · Tatu",
    portrait: "/images/farmers/grace.png",
    avatar: "/images/farmers/grace-avatar.png",
    pageBg: "#e8fff6",
    aura: "#2ee6c8",
    ink: "#14110f",
    muted: "#3d5c52",
    accent: "#0a6b58",
    bar: "#111111",
  },
  {
    id: "joseph",
    name: "Joseph Cheruiyot",
    crop: "potato grower",
    rate: "KES 22 / kg",
    rating: 4.4,
    reviews: 67,
    fill: 47,
    coop: "Molo Fields",
    lastHaul: "Last haul · 2.1t potato · factory",
    portrait: "/images/farmers/joseph.png",
    avatar: "/images/farmers/joseph-avatar.png",
    pageBg: "#f0e6d4",
    aura: "#c8f542",
    ink: "#14110f",
    muted: "#5c5346",
    accent: "#6b4a1a",
    bar: "#111111",
  },
  {
    id: "halima",
    name: "Halima Noor",
    crop: "passion grower",
    rate: "KES 80 / crate",
    rating: 4.7,
    reviews: 142,
    fill: 91,
    coop: "Garissa Belt",
    lastHaul: "Last haul · 220kg passion · Konza",
    portrait: "/images/farmers/halima.png",
    avatar: "/images/farmers/halima-avatar.png",
    pageBg: "#fff3b0",
    aura: "#111111",
    ink: "#14110f",
    muted: "#5c4e20",
    accent: "#8b2318",
    bar: "#111111",
  },
];

const LAST = FARMERS.length - 1;
const SPRING = { type: "spring" as const, stiffness: 280, damping: 34, mass: 0.72 };

export function FarmerRateDeck({ embedded = false }: { embedded?: boolean }) {
  const viewport = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [width, setWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [ratings, setRatings] = useState(() => FARMERS.map((f) => f.rating));
  const indexRef = useRef(0);
  const success = useSuccess();
  indexRef.current = index;

  useEffect(() => {
    const el = viewport.current;
    if (!el) return;
    const apply = () => {
      const w = Math.round(el.getBoundingClientRect().width);
      setWidth(w);
      x.set(-indexRef.current * w);
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, [x]);

  const go = useCallback(
    (i: number) => {
      const next = Math.max(0, Math.min(LAST, i));
      setIndex(next);
      if (!width) return;
      animate(x, -next * width, SPRING);
    },
    [width, x],
  );

  useEffect(() => {
    const el = viewport.current;
    if (!el) return;
    let lock = 0;
    const onWheel = (event: WheelEvent) => {
      const dominant = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      if (Math.abs(dominant) < 20) return;
      const dir = dominant > 0 ? 1 : -1;
      const atEnd = dir > 0 && indexRef.current === LAST;
      const atStart = dir < 0 && indexRef.current === 0;
      if (atEnd || atStart) return;
      event.preventDefault();
      const now = Date.now();
      if (now - lock < 480) return;
      lock = now;
      go(indexRef.current + dir);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [go]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(indexRef.current + 1);
      if (event.key === "ArrowLeft") go(indexRef.current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(() => {
    const strips = viewport.current?.querySelectorAll<HTMLElement>("[data-team-strip]");
    const el = strips?.[index];
    const child = el?.children[index] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [index]);

  return (
    <div
      id={embedded ? "farmers" : undefined}
      ref={viewport}
      className="relative h-[100dvh] min-h-[640px] w-full overflow-hidden text-black"
      style={{ background: FARMERS[index]?.pageBg ?? "#c8f542" }}
    >
      <motion.div
        className="flex h-full"
        style={{ x }}
        drag={width ? "x" : false}
        dragDirectionLock
        dragElastic={0.16}
        dragConstraints={width ? { left: -width * LAST, right: 0 } : undefined}
        onDragEnd={(_, info) => {
          if (!width) return;
          const offset = info.offset.x;
          const vel = info.velocity.x;
          let next = index;
          if (offset < -width * 0.16 || vel < -650) next += 1;
          else if (offset > width * 0.16 || vel > 650) next -= 1;
          go(next);
        }}
      >
        {FARMERS.map((farmer, i) => {
          const active = i === index;
          return (
            <article
              key={farmer.id}
              className="relative flex h-full shrink-0 flex-col overflow-hidden"
              style={{
                flex: width ? `0 0 ${width}px` : "0 0 100%",
                width: width ? width : "100%",
                background: farmer.pageBg,
                color: farmer.ink,
              }}
            >
              {embedded ? (
                <div className="h-[4.75rem] shrink-0" aria-hidden />
              ) : (
                <header className="relative z-20 flex shrink-0 items-center justify-between px-5 pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-7">
                  <Link href="/" aria-label="Back" className="flex h-10 w-10 items-center justify-center">
                    <ChevronLeft className="h-6 w-6" strokeWidth={1.75} />
                  </Link>
                  <div className="flex items-center gap-5 text-[15px] font-medium">
                    <span>My profile</span>
                    <span className="opacity-40">Store</span>
                  </div>
                </header>
              )}

              <div className="relative mx-auto min-h-0 w-full max-w-[440px] flex-1">
                <motion.div
                  className="absolute left-1/2 top-[4%] h-[78%] w-[72%] -translate-x-1/2 rounded-full"
                  style={{ background: farmer.aura }}
                  animate={{ scale: active ? 1 : 0.82, opacity: active ? 1 : 0.4 }}
                  transition={SPRING}
                  aria-hidden
                />
                <motion.img
                  src={farmer.portrait}
                  alt={farmer.name}
                  draggable={false}
                  className="relative z-10 mx-auto h-full w-auto max-w-[min(92%,380px)] object-contain object-bottom drop-shadow-[0_18px_28px_rgba(0,0,0,0.22)]"
                  animate={{ scale: active ? 1 : 0.88, y: active ? 0 : 28, opacity: active ? 1 : 0.35 }}
                  transition={SPRING}
                />
              </div>

              <motion.div
                className="relative z-10 mx-auto w-full max-w-[440px] shrink-0 px-7 pb-[5.75rem] pt-1 sm:pb-[6.25rem]"
                animate={{ y: active ? 0 : 18, opacity: active ? 1 : 0.25 }}
                transition={SPRING}
              >
                <p className="text-[13px] font-semibold sm:text-[15px]" style={{ color: farmer.accent }}>
                  Farmer details
                </p>
                <h1 className="mt-0.5 font-display text-[clamp(1.7rem,4.2vw,2.75rem)] font-semibold leading-[1.05] tracking-tight">
                  {farmer.name}
                </h1>
                <p className="mt-0.5 text-[16px] font-light lowercase tracking-tight sm:text-[18px]" style={{ color: farmer.muted }}>
                  {farmer.crop}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 sm:mt-3">
                  <Stars
                    value={ratings[i]}
                    onChange={(n) =>
                      setRatings((prev) => {
                        const next = [...prev];
                        next[i] = n;
                        return next;
                      })
                    }
                  />
                  <span className="text-[13px] font-medium" style={{ color: farmer.muted }}>
                    {ratings[i].toFixed(1)} · {farmer.reviews} reviews
                  </span>
                  <span className="text-[13px] font-semibold">{farmer.rate}</span>
                </div>

                <div className="mt-4 sm:mt-5">
                  <div className="mb-2 flex items-center justify-between text-[15px] font-medium">
                    <span>Update</span>
                    <span className="text-[12px]" style={{ color: farmer.muted }}>
                      {farmer.fill}% fill
                    </span>
                  </div>
                  <div className="h-[3px] w-full rounded-full bg-black/15">
                    <motion.div
                      className="h-full rounded-full bg-black"
                      initial={false}
                      animate={{ width: active ? `${farmer.fill}%` : "0%" }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>

                <div className="mt-4 sm:mt-5">
                  <div className="mb-2 flex items-end justify-between sm:mb-3">
                    <div>
                      <div className="text-[15px] font-medium">Team</div>
                      <div className="text-[15px] font-medium">{farmer.coop}</div>
                    </div>
                    <span className="text-[14px] font-medium opacity-50">
                      {i + 1} / {FARMERS.length}
                    </span>
                  </div>
                  <div data-team-strip className="farmer-scroller flex gap-2.5 overflow-x-auto pb-1">
                    {FARMERS.map((mate, t) => (
                      <motion.button
                        key={mate.id}
                        type="button"
                        onClick={() => go(t)}
                        aria-label={mate.name}
                        whileTap={{ scale: 0.92 }}
                        className="shrink-0"
                      >
                        <img
                          src={mate.avatar}
                          alt={mate.name}
                          draggable={false}
                          className={cn(
                            "h-11 w-11 rounded-[10px] bg-white/85 object-cover object-top ring-1 ring-black/10 transition-[box-shadow] duration-300 sm:h-12 sm:w-12",
                            t === index && "ring-2 ring-black/70",
                          )}
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div
                className="absolute inset-x-4 z-30 flex items-center justify-between rounded-[18px] px-5 py-3"
                style={{ bottom: "max(1rem, env(safe-area-inset-bottom))", background: farmer.bar }}
              >
                <p className="max-w-[58%] text-[12px] leading-snug text-white/85">{farmer.lastHaul}</p>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    success.show({
                      title: "Team linked",
                      body: `${farmer.name} · ${farmer.coop} is on the haul.`,
                    })
                  }
                  className="inline-flex h-11 shrink-0 items-center rounded-xl bg-[#f0c01a] px-4 text-[14px] font-semibold text-black"
                >
                  Team chat
                </motion.button>
              </div>
            </article>
          );
        })}
      </motion.div>

      <div className="pointer-events-none absolute left-4 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-1.5">
        {FARMERS.map((farmer, d) => (
          <button
            key={farmer.id}
            type="button"
            aria-label={`Show ${farmer.name}`}
            onClick={() => go(d)}
            className="pointer-events-auto"
          >
            <motion.span
              className="block w-1.5 rounded-full bg-black"
              animate={{ height: d === index ? 18 : 6, opacity: d === index ? 1 : 0.28 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            />
          </button>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-40 hidden -translate-y-1/2 justify-between px-3 sm:flex">
        <motion.button
          type="button"
          aria-label="Previous farmer"
          onClick={() => go(index - 1)}
          disabled={index === 0}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-black/[0.08] disabled:opacity-20"
        >
          <ChevronLeft className="h-5 w-5" />
        </motion.button>
        <motion.button
          type="button"
          aria-label="Next farmer"
          onClick={() => go(index + 1)}
          disabled={index === LAST}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-black/[0.08] disabled:opacity-20"
        >
          <ChevronRight className="h-5 w-5" />
        </motion.button>
      </div>
    </div>
  );
}

function Stars({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} star rating`}>
      {[1, 2, 3, 4, 5].map((n) => {
        const filled = n <= Math.round(value);
        return (
          <button key={n} type="button" onClick={() => onChange(n)} className="p-0.5" aria-label={`Rate ${n} stars`}>
            <Star
              className="h-[18px] w-[18px] drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]"
              strokeWidth={1.6}
              fill={filled ? "#c8f542" : "transparent"}
              color="#111111"
            />
          </button>
        );
      })}
    </div>
  );
}
