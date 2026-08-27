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
    <section id="pricing" className="border-t border-[#0a0a0a]/10 px-6 py-32 md:px-12 lg:px-20">
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
              className={`flex flex-col p-8 ${plan.featured ? "border-black/20 bg-[#c8f542] text-black" : ""}`}
            >
              <div className="mb-8">
                <div className={`mb-4 font-pixel text-[11px] tracking-widest ${plan.featured ? "text-black/55" : "text-[#0a0a0a]/45"}`}>
                  {plan.name}
                </div>
                <div className="mb-1 flex items-baseline gap-1">
                  <span className="text-4xl font-light">{plan.price}</span>
                  {plan.suffix ? (
                    <span className={`text-sm ${plan.featured ? "text-black/55" : "text-[#0a0a0a]/45"}`}>{plan.suffix}</span>
                  ) : null}
                </div>
                <p className={`text-xs tracking-wide ${plan.featured ? "text-black/55" : "text-[#0a0a0a]/45"}`}>{plan.note}</p>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {plan.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-center gap-3 text-sm ${plan.featured ? "text-black/80" : "text-[#0a0a0a]/65"}`}
                  >
                    <div className={`h-1 w-1 shrink-0 rounded-full ${plan.featured ? "bg-black" : "bg-[#c8f542]"}`} />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.featured ? "ghost" : "primary"}
                className={`w-full py-3 text-sm ${plan.featured ? "border-black bg-black text-[#c8f542] hover:bg-black hover:text-[#c8f542]" : ""}`}
              >
                {plan.cta}
              </Button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
