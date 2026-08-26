export function PixelMark() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className="block shrink-0"
      aria-hidden
      style={{ imageRendering: "pixelated" }}
    >
      <rect width="40" height="40" fill="none" />
      <rect x="4" y="16" width="8" height="8" fill="rgba(255,255,255,0.85)" />
      <rect x="16" y="8" width="8" height="8" fill="rgba(230,109,30,0.95)" />
      <rect x="16" y="24" width="8" height="8" fill="rgba(253,187,45,0.9)" />
      <rect x="28" y="16" width="8" height="8" fill="rgba(26,92,85,0.95)" />
    </svg>
  );
}
