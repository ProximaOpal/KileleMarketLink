"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [iosHint, setIosHint] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const standalone = window.matchMedia("(display-mode: standalone)").matches || (navigator as Navigator & { standalone?: boolean }).standalone;
    if (standalone) return;

    const phone = /android|iphone|ipad|ipod/i.test(navigator.userAgent);
    if (!phone) return;

    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const onPrompt = (event: Event) => {
      event.preventDefault();
      setDeferred(event as BeforeInstallPromptEvent);
      window.setTimeout(() => setHidden(false), 1800);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);

    if (ios) {
      window.setTimeout(() => {
        setIosHint(true);
        setHidden(false);
      }, 2200);
    }

    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  async function install() {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
    setHidden(true);
  }

  const visible = !hidden && (deferred || iosHint);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 26 }}
          className="pointer-events-auto fixed inset-x-3 z-[80] mx-auto max-w-md sm:inset-x-auto sm:right-5 sm:left-auto"
          style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
        >
          <div
            className="flex items-start gap-3 rounded-2xl border border-[#163a28]/15 bg-white/92 px-4 py-3.5 shadow-[0_16px_40px_rgba(22,58,40,0.16)]"
            style={{ background: "rgba(244,248,241,0.94)", backdropFilter: "blur(18px)" }}
          >
            <img src="/icons/icon-192.png" alt="" className="mt-0.5 h-11 w-11 rounded-xl object-cover" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-[#14261a]">Install Agentic on this phone</p>
              <p className="mt-0.5 text-[12px] leading-snug text-[#163a28]/55">
                {iosHint && !deferred
                  ? "On iPhone: tap Share, then Add to Home Screen."
                  : "Add the farm-to-city dispatch board to your home screen. Works in Chrome."}
              </p>
              <div className="mt-3 flex gap-2">
                {deferred ? (
                  <button
                    type="button"
                    onClick={install}
                    className="rounded-full bg-[#163a28] px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-white"
                  >
                    Install
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={() => setHidden(true)}
                  className="rounded-full border border-[#163a28]/20 px-3.5 py-1.5 text-[11px] tracking-wide text-[#163a28]/60"
                >
                  Not now
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
