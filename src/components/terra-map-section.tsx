export function TerraMapSection() {
  return (
    <section id="terra" className="relative h-screen min-h-[720px] overflow-hidden border-t border-[#163a28]/10">
      <iframe
        src="/terra-map.html"
        title="TERRA — Live Earth Map"
        className="absolute inset-0 h-full w-full border-0"
        allow="geolocation"
      />
    </section>
  );
}
