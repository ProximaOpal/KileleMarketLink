import type { Metadata } from "next";
import { SettingsPanel } from "@/components/settings-panel";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Settings — Kilele Market Link",
  description: "Upload a local video that plays on the Global page in this browser.",
};

export default function SettingsPage() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-[#f3f3f1] text-[#0a0a0a]">
      <div className="luminous-backdrop" aria-hidden />
      <SiteNav />
      <SettingsPanel />
    </div>
  );
}
