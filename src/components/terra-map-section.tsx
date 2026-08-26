"use client";

import dynamic from "next/dynamic";

const TerraMap = dynamic(() => import("@/components/terra-map").then((m) => m.TerraMap), {
  ssr: false,
  loading: () => (
    <section id="terra" className="relative flex h-screen min-h-[720px] items-center justify-center border-t border-white/[0.08]">
      <p className="text-sm tracking-widest text-white/40">Loading Terra map…</p>
    </section>
  ),
});

export function TerraMapSection() {
  return <TerraMap />;
}
