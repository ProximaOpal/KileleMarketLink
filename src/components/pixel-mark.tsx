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
      <rect x="4" y="16" width="8" height="8" fill="#0a0a0a" />
      <rect x="16" y="8" width="8" height="8" fill="#c8f542" />
      <rect x="16" y="24" width="8" height="8" fill="#2ee6c8" />
      <rect x="28" y="16" width="8" height="8" fill="#c8f542" />
    </svg>
  );
}
