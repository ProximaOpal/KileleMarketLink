import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/glass-card";

const STEPS = [
  {
    n: "01",
    title: "Define",
    body: "Describe your agent in plain language. Set objectives, tools, and boundaries.",
    image: "/images/define.png",
  },
  {
    n: "02",
    title: "Compose",
    body: "Chain agents together in the visual editor. Wire triggers, conditions, and outputs.",
    image: "/images/compose.png",
  },
  {
    n: "03",
    title: "Test",
    body: "Run sandboxed simulations. Inspect every decision in the execution trace.",
    image: "/images/test.png",
  },
  {
    n: "04",
    title: "Deploy",
    body: "Push globally in one click. Agents auto-scale, self-heal, and report back.",
    image: "/images/deploy.png",
  },
];

export function Workflow() {
  return (
    <section id="workflow" className="relative z-10 border-t border-white/[0.08] px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <SectionHeading
            eyebrow="WORKFLOW"
            title={
              <>
                From idea to running agent
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
                <span className="block font-pixel text-[11px] tracking-widest text-white/25">{step.n}</span>
              </div>
              <div className="relative z-10 mt-auto px-7 pb-7 pt-16">
                <h3 className="mb-3 text-2xl font-light">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/45">{step.body}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
