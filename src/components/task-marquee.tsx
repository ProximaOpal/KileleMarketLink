const ROW_A = [
  "Harvest logging",
  "Decay clocks",
  "Reefer GPS",
  "Temp probes",
  "Nairobi bypass",
  "Northern corridor",
  "Tatu dark store",
  "Konza factory",
  "Matatu last mile",
  "Batch recall",
];

const ROW_B = [
  "Farm-gate timestamp",
  "Shelf-life curves",
  "Fuel windows",
  "Urban slots",
  "Kiambu kale",
  "Eldoret maize",
  "Mombasa fish",
  "Cold-chain SLA",
  "Hub consolidation",
  "Factory intake",
];

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className={`flex w-max border-b border-white/[0.08] ${reverse ? "animate-marquee-right" : "animate-marquee-left"}`}>
      {doubled.map((item, i) => (
        <div key={`${item}-${i}`} className="flex shrink-0 items-center gap-6 border-r border-white/[0.08] px-10 py-5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/25" />
          <span className="whitespace-nowrap text-sm tracking-wide text-white/45">{item}</span>
        </div>
      ))}
    </div>
  );
}

export function TaskMarquee() {
  return (
    <section className="select-none overflow-hidden border-t border-white/[0.08] py-0">
      <MarqueeRow items={ROW_A} />
      <MarqueeRow items={ROW_B} reverse />
    </section>
  );
}
