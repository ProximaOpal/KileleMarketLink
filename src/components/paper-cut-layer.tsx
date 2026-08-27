import { useId } from "react";

export function PaperCutLayer({ className = "" }: { className?: string }) {
  const raw = useId().replace(/:/g, "");
  const grad = `lume-${raw}`;
  return (
    <svg className={className} viewBox="0 0 1440 560" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8ff6a" />
          <stop offset="42%" stopColor="#c8f542" />
          <stop offset="100%" stopColor="#2ee6c8" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${grad})`}
        d="M0 248L38 232L76 268L118 214L164 274L214 198L268 286L328 176L392 292L458 164L528 304L602 154L678 288L754 148L832 296L910 168L988 310L1066 160L1144 284L1224 172L1304 268L1372 196L1440 240V560H0Z"
      />
      <path
        fill="#f3f3f1"
        d="M0 392L48 368L96 412L152 352L214 424L278 338L348 430L422 330L498 438L576 324L656 428L736 318L818 436L900 328L982 442L1064 334L1146 430L1228 340L1310 418L1378 352L1440 388V560H0Z"
      />
    </svg>
  );
}
