"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const PIERS: { name: string; lat: number; lng: number }[] = [
  { name: "Putney Pier", lat: 51.4666, lng: -0.213 },
  { name: "Wandsworth Riverside", lat: 51.4625, lng: -0.191 },
  { name: "Chelsea Harbour", lat: 51.475, lng: -0.181 },
  { name: "Cadogan Pier", lat: 51.482, lng: -0.162 },
  { name: "Battersea Power Station", lat: 51.4817, lng: -0.1444 },
  { name: "St George Wharf", lat: 51.485, lng: -0.126 },
  { name: "Millbank Pier", lat: 51.4916, lng: -0.1254 },
  { name: "Westminster Pier", lat: 51.5018, lng: -0.1236 },
  { name: "Festival Pier", lat: 51.5058, lng: -0.1173 },
  { name: "Embankment Pier", lat: 51.5074, lng: -0.122 },
  { name: "London Eye Pier", lat: 51.5034, lng: -0.1195 },
  { name: "Blackfriars Pier", lat: 51.5106, lng: -0.103 },
  { name: "Bankside Pier", lat: 51.508, lng: -0.096 },
  { name: "London Bridge City", lat: 51.5055, lng: -0.084 },
  { name: "Tower Pier", lat: 51.5055, lng: -0.077 },
  { name: "St Katharine Pier", lat: 51.5064, lng: -0.071 },
  { name: "Canary Wharf Pier", lat: 51.5048, lng: -0.027 },
  { name: "Greenwich Pier", lat: 51.4836, lng: -0.0096 },
  { name: "North Greenwich", lat: 51.502, lng: 0.003 },
  { name: "Thames Barrier", lat: 51.497, lng: 0.037 },
];

export function TerraMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const instance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || instance.current) return;

    const map = L.map(mapRef.current, {
      zoomControl: false,
      attributionControl: true,
      minZoom: 11,
      maxZoom: 16,
    }).setView([51.497, -0.09], 12);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: "&copy; OpenStreetMap &copy; CARTO",
      subdomains: "abcd",
    }).addTo(map);

    L.control.zoom({ position: "topright" }).addTo(map);

    const route = PIERS.map((p) => [p.lat, p.lng] as L.LatLngExpression);
    L.polyline(route, {
      color: "#E66D1E",
      weight: 4,
      opacity: 0.9,
      lineJoin: "round",
    }).addTo(map);

    const icon = L.divIcon({
      className: "terra-pier",
      html: `<span class="terra-pier-dot"></span>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });

    PIERS.forEach((pier) => {
      L.marker([pier.lat, pier.lng], { icon })
        .addTo(map)
        .bindPopup(`<strong>${pier.name}</strong>`);
    });

    instance.current = map;
    const onResize = () => map.invalidateSize();
    window.setTimeout(onResize, 200);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      map.remove();
      instance.current = null;
    };
  }, []);

  return (
    <section id="terra" className="relative h-screen min-h-[720px] overflow-hidden border-t border-white/[0.08]">
      <div ref={mapRef} className="absolute inset-0 z-0 h-full w-full" />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-black/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-black/45 to-transparent" />

      <div
        className="absolute left-4 top-24 z-20 max-w-sm rounded-2xl border border-white/15 p-5 md:left-8 md:top-28"
        style={{ backdropFilter: "blur(22px)", background: "rgba(16,14,14,0.62)" }}
      >
        <span className="inline-flex items-center rounded-full bg-white/[0.06] px-3 py-1 text-[11px] tracking-widest text-white/45">
          TERRA MAP
        </span>
        <h2 className="mt-4 font-display text-3xl font-light tracking-tight md:text-4xl">Thames piers and landmarks.</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/50">
          The original Terra map, shown as its own page in the scroll. Trace the river from Putney to the Barrier — piers, bridges, and West End on the Thames call points.
        </p>
      </div>

      <div
        className="absolute bottom-6 left-4 right-4 z-20 overflow-hidden rounded-2xl border border-white/15 md:left-8 md:right-8"
        style={{ backdropFilter: "blur(18px)", background: "rgba(16,14,14,0.55)" }}
      >
        <img
          src="/images/thames-route.jpg"
          alt="Thames piers and landmarks — West End on the Thames route map"
          className="max-h-[28vh] w-full object-contain object-center"
        />
      </div>
    </section>
  );
}
