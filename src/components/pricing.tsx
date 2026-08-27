import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/ui/button";

const PLANS = [
  {
    name: "Sandbox",
    price: "Free",
    note: "Pilot a single farm gate",
    featured: false,
    cta: "GET STARTED",
    items: ["5 harvest lots", "1,000 km telematics", "Community support", "Basic traces"],
  },
  {
    name: "Builder",
    price: "$49",
    suffix: "/mo",
    note: "For corridors shipping daily",
    featured: true,
    cta: "GET STARTED",
    items: ["50 lots", "100K km/mo", "Priority support", "Cold-chain replay", "Custom nodes", "REST API"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    note: "Factories and city grids",
    featured: false,
    cta: "CONTACT SALES",
    items: ["Unlimited lots", "Unlimited km", "Dedicated infra", "SOC 2 / food safety", "SLA windows", "Tatu + Konza nodes"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-white/[0.08] px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow="PRICING"
            title={
              <>
                Pay as your corridor
                <br />
                grows.
              </>
            }
          />
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {PLANS.map((plan) => (
            <GlassCard
              key={plan.name}
              className={`flex flex-col p-8 ${plan.featured ? "border-white/25 bg-[rgba(28,22,18,0.7)]" : ""}`}
            >
              <div className="mb-8">
                <div className="mb-4 font-pixel text-[11px] tracking-widest text-white/40">{plan.name}</div>
                <div className="mb-1 flex items-baseline gap-1">
                  <span className="text-4xl font-light">{plan.price}</span>
                  {plan.suffix ? <span className="text-sm text-white/40">{plan.suffix}</span> : null}
                </div>
                <p className="text-xs tracking-wide text-white/35">{plan.note}</p>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/55">
                    <div className="h-1 w-1 shrink-0 rounded-full bg-white/30" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant={plan.featured ? "primary" : "ghost"} className="w-full py-3 text-sm">
                {plan.cta}
              </Button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
