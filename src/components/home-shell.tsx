"use client";

import { useEffect, useState } from "react";
import { Agents } from "@/components/agents";
import { CriticalInfrastructure } from "@/components/critical-infrastructure";
import { CtaFooter } from "@/components/cta-footer";
import { FarmerRateDeck } from "@/components/farmer-rate-deck";
import { GlobalReach } from "@/components/global-reach";
import { Hero } from "@/components/hero";
import { Integrations } from "@/components/integrations";
import { KileleLanding } from "@/components/kilele-landing";
import { Live } from "@/components/live";
import { Platform } from "@/components/platform";
import { Pricing } from "@/components/pricing";
import { SiteNav } from "@/components/site-nav";
import { TaskMarquee } from "@/components/task-marquee";
import { TerraMapSection } from "@/components/terra-map-section";
import { Workflow } from "@/components/workflow";

function deepLinked() {
  const hash = window.location.hash;
  return Boolean(hash && hash !== "#" && hash !== "#top");
}

export function HomeShell() {
  const [mode, setMode] = useState<"boot" | "intro" | "app">("boot");

  useEffect(() => {
    setMode(deepLinked() ? "app" : "intro");
  }, []);

  if (mode === "boot") {
    return <div className="min-h-screen bg-[#F4F6F2]" />;
  }

  if (mode === "intro") {
    return <KileleLanding onComplete={() => setMode("app")} />;
  }

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden text-[#0a0a0a]">
      <div className="luminous-backdrop" aria-hidden />
      <SiteNav />
      <Hero />
      <FarmerRateDeck embedded />
      <Platform />
      <Agents />
      <CriticalInfrastructure />
      <Workflow />
      <Integrations />
      <TaskMarquee />
      <Live />
      <TerraMapSection />
      <GlobalReach />
      <Pricing />
      <CtaFooter />
    </div>
  );
}
