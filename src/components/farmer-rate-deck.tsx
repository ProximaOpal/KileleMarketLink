"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Star } from "lucide-react";
import { cn } from "@/lib/utils";

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
    pageBg: "#e7e4de",
    aura: "#9aa186",
    ink: "#14110f",
    muted: "#6b6560",
    accent: "#c45c3e",
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
];

export function FarmerRateDeck({ embedded = false }: { embedded?: boolean }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [ratings, setRatings] = useState(() => FARMERS.map((f) => f.rating));

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.clientWidth;
      if (!card) return;
      setIndex(Math.round(el.scrollLeft / card));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  function go(i: number) {
    const el = scroller.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  }

  return (
    <div
      id={embedded ? "farmers" : undefined}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#0c0a0a] text-black"
    >
      <div
        ref={scroller}
        className="farmer-scroller flex h-full w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden"
      >
        {FARMERS.map((farmer, i) => (
          <article
            key={farmer.id}
            className="relative h-full w-full shrink-0 snap-center snap-always"
            style={{ background: farmer.pageBg, color: farmer.ink }}
          >
            {embedded ? (
              <div className="h-[4.75rem]" aria-hidden />
            ) : (
              <header className="relative z-20 flex items-center justify-between px-5 pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-7">
                <Link href="/" aria-label="Back" className="flex h-10 w-10 items-center justify-center">
                  <ChevronLeft className="h-6 w-6" strokeWidth={1.75} />
                </Link>
                <div className="flex items-center gap-5 text-[15px] font-medium">
                  <span>My profile</span>
                  <span className="opacity-40">Store</span>
                </div>
              </header>
            )}

            <div className="relative mx-auto mt-1 h-[44%] max-h-[420px] w-full max-w-[440px]">
              <div
                className="absolute left-1/2 top-[6%] h-[82%] w-[76%] -translate-x-1/2 rounded-full"
                style={{ background: farmer.aura }}
                aria-hidden
              />
              <img
                src={farmer.portrait}
                alt={farmer.name}
                draggable={false}
                className="relative z-10 mx-auto h-full w-auto max-w-[94%] object-contain object-bottom drop-shadow-[0_18px_28px_rgba(0,0,0,0.22)]"
              />
              <div className="absolute left-4 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2">
                {FARMERS.map((_, d) => (
                  <button
                    key={d}
                    type="button"
                    aria-label={`Show ${FARMERS[d].name}`}
                    onClick={() => go(d)}
                    className={cn("h-2 w-2 rounded-full", d === index ? "bg-black" : "bg-black/25")}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10 mx-auto max-w-[440px] px-7 pb-[7.5rem] pt-1">
              <p className="text-[15px] font-semibold" style={{ color: farmer.accent }}>
                Farmer details
              </p>
              <h1 className="mt-1 font-display text-[40px] font-semibold leading-[1.02] tracking-tight sm:text-5xl">
                {farmer.name}
              </h1>
              <p className="mt-1 text-[18px] font-light lowercase tracking-tight" style={{ color: farmer.muted }}>
                {farmer.crop}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
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

              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between text-[15px] font-medium">
                  <span>Update</span>
                  <span className="text-[12px]" style={{ color: farmer.muted }}>
                    {farmer.fill}% fill
                  </span>
                </div>
                <div className="h-[3px] w-full rounded-full bg-black/15">
                  <motion.div
                    className="h-full rounded-full bg-black"
                    initial={{ width: 0 }}
                    animate={{ width: `${farmer.fill}%` }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>

              <div className="mt-7">
                <div className="mb-3 flex items-end justify-between">
                  <div>
                    <div className="text-[15px] font-medium">Team</div>
                    <div className="text-[15px] font-medium">{farmer.coop}</div>
                  </div>
                  <button type="button" className="text-[14px] font-medium opacity-50" onClick={() => go(0)}>
                    All team
                  </button>
                </div>
                <div className="flex gap-2.5">
                  {FARMERS.map((mate, t) => (
                    <button key={mate.id} type="button" onClick={() => go(t)} aria-label={mate.name}>
                      <img
                        src={mate.avatar}
                        alt={mate.name}
                        draggable={false}
                        className={cn(
                          "h-12 w-12 rounded-[10px] object-cover",
                          t === i && "ring-2 ring-black/70",
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="absolute inset-x-4 z-30 flex items-center justify-between rounded-[18px] px-5 py-3"
              style={{ bottom: "max(1rem, env(safe-area-inset-bottom))", background: farmer.bar }}
            >
              <p className="max-w-[58%] text-[12px] leading-snug text-white/85">{farmer.lastHaul}</p>
              <motion.a
                href="/#terra"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex h-11 shrink-0 items-center rounded-xl bg-[#f0c01a] px-4 text-[14px] font-semibold text-black"
              >
                Team chat
              </motion.a>
            </div>
          </article>
        ))}
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
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className="p-0.5"
            aria-label={`Rate ${n} stars`}
          >
            <Star
              className="h-[18px] w-[18px]"
              strokeWidth={1.6}
              fill={filled ? "#e66d1e" : "transparent"}
              color="#e66d1e"
            />
          </button>
        );
      })}
    </div>
  );
}
