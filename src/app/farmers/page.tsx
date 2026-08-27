import type { Metadata } from "next";
import { FarmerRateDeck } from "@/components/farmer-rate-deck";

export const metadata: Metadata = {
  title: "Farmer rate cards — Agentic",
  description: "Swipe farmer rate cards: harvest details, reviews, co-op team, and last-haul stats.",
};

export default function FarmersPage() {
  return <FarmerRateDeck />;
}
