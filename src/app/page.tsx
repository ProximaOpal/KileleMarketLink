import { Agents } from "@/components/agents";
import { CtaFooter } from "@/components/cta-footer";
import { DevEx } from "@/components/devex";
import { Discover } from "@/components/discover";
import { Hero } from "@/components/hero";
import { Integrations } from "@/components/integrations";
import { IntroSplash } from "@/components/intro-splash";
import { Live } from "@/components/live";
import { Platform } from "@/components/platform";
import { Pricing } from "@/components/pricing";
import { Security } from "@/components/security";
import { SiteNav } from "@/components/site-nav";
import { TaskMarquee } from "@/components/task-marquee";
import { TerraMapSection } from "@/components/terra-map-section";
import { Workflow } from "@/components/workflow";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden text-white">
      <div className="frosted-backdrop" aria-hidden />
      <IntroSplash />
      <SiteNav />
      <Hero />
      <Discover />
      <Platform />
      <Agents />
      <Workflow />
      <Integrations />
      <Security />
      <DevEx />
      <TaskMarquee />
      <Live />
      <TerraMapSection />
      <Pricing />
      <CtaFooter />
    </div>
  );
}
