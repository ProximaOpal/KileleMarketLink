export function PaperCutLayer({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 560"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        fill="#163a28"
        d="M0 210C190 90 310 260 520 150C740 30 900 230 1120 130C1280 60 1380 180 1440 120V560H0Z"
      />
      <path
        fill="#3d8c4a"
        d="M0 270C210 150 340 310 560 210C780 100 940 290 1160 200C1300 140 1388 250 1440 200V560H0Z"
      />
      <path
        fill="#c6e86a"
        d="M0 330C200 230 360 380 580 290C820 190 980 360 1200 280C1320 230 1390 320 1440 290V560H0Z"
      />
      <path
        fill="#f7fbf4"
        d="M0 390C220 300 380 450 620 360C860 270 1020 430 1240 360C1340 320 1400 400 1440 370V560H0Z"
      />
    </svg>
  );
}
