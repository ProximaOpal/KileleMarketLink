"use client";

import { useState } from "react";
import { Agents } from "@/components/agents";
import { CtaFooter } from "@/components/cta-footer";
import { DevEx } from "@/components/devex";
import { FarmerRateDeck } from "@/components/farmer-rate-deck";
import { GlobalReach } from "@/components/global-reach";
import { Hero } from "@/components/hero";
import { Integrations } from "@/components/integrations";
import { KileleLanding } from "@/components/kilele-landing";
import { Live } from "@/components/live";
import { Platform } from "@/components/platform";
import { Pricing } from "@/components/pricing";
import { Security } from "@/components/security";
import { SiteNav } from "@/components/site-nav";
import { TaskMarquee } from "@/components/task-marquee";
import { TerraMapSection } from "@/components/terra-map-section";
import { Workflow } from "@/components/workflow";

export function HomeShell() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden text-[#0a0a0a]">
      {!entered && <KileleLanding onComplete={() => setEntered(true)} />}
      <div
        aria-hidden={!entered}
        className={entered ? undefined : "pointer-events-none h-screen overflow-hidden"}
      >
        <div className="luminous-backdrop" aria-hidden />
        <SiteNav />
        <Hero />
        <FarmerRateDeck embedded />
        <Platform />
        <Agents />
        <Workflow />
        <Integrations />
        <Security />
        <DevEx />
        <TaskMarquee />
        <Live />
        <TerraMapSection />
        <GlobalReach />
        <Pricing />
        <CtaFooter />
      </div>
    </div>
  );
}
