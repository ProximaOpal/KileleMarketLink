import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/glass-card";

const STEPS = [
  {
    n: "01",
    title: "Harvest",
    body: "Capture volume, crop, and timestamp at the farm gate before the crate leaves the soil.",
    image: "/images/leaves-kale.jpg",
  },
  {
    n: "02",
    title: "Route",
    body: "Time the northern corridor and Nairobi arterials so the batch hits its urban window.",
    image: "/images/leaves-field.jpg",
  },
  {
    n: "03",
    title: "Monitor",
    body: "Watch GPS and cargo temperature. Alert the driver before the cold chain breaks.",
    image: "/images/leaves-canopy.jpg",
  },
  {
    n: "04",
    title: "Drop",
    body: "Consolidate into Tatu, Konza, factory docks, dark stores, or high-density housing.",
    image: "/images/leaves-tall.jpg",
  },
];

export function Workflow() {
  return (
    <section id="workflow" className="relative z-10 border-t border-[#163a28]/10 px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <SectionHeading
            eyebrow="WORKFLOW"
            title={
              <>
                From gate to city dock
                <br />
                in four steps.
              </>
            }
          />
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <GlassCard key={step.n} className="relative flex min-h-[320px] flex-col overflow-hidden">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-56">
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-full w-full object-cover object-top"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 80%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 80%)",
                  }}
                />
              </div>
              <div className="relative z-10 p-7">
                <span className="block font-pixel text-[11px] tracking-widest text-[#163a28]/30">{step.n}</span>
              </div>
              <div className="relative z-10 mt-auto px-7 pb-7 pt-16">
                <h3 className="mb-3 text-2xl font-light">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[#14261a]/55">{step.body}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
