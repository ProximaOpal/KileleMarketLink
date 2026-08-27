"use client";

import { useEffect, useRef } from "react";

export function KileleLanding({ onComplete }: { onComplete: () => void }) {
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onMessage = (event: MessageEvent) => {
      if (event.data?.type === "kilele-landing-done") {
        document.body.style.overflow = "";
        onCompleteRef.current();
      }
    };
    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <iframe
      src="/kilele-landing.html"
      title="Kilele Market Link intro"
      className="fixed inset-0 z-[200] h-full min-h-[100svh] w-full border-0 bg-[#f4f6f2]"
    />
  );
}
