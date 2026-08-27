"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Panel = { title: string; body?: string };

type SuccessApi = {
  show: (panel: Panel) => void;
};

const SuccessContext = createContext<SuccessApi | null>(null);

export function useSuccess() {
  const ctx = useContext(SuccessContext);
  if (!ctx) {
    return {
      show: () => undefined,
    };
  }
  return ctx;
}

export function SuccessProvider({ children }: { children: ReactNode }) {
  const [panel, setPanel] = useState<Panel | null>(null);

  const show = useCallback((next: Panel) => {
    setPanel(next);
    window.setTimeout(() => setPanel(null), 2800);
  }, []);

  const api = useMemo(() => ({ show }), [show]);

  return (
    <SuccessContext.Provider value={api}>
      {children}
      <AnimatePresence>
        {panel ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center px-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPanel(null)}
          >
            <div className="absolute inset-0 bg-black/35" />
            <motion.div
              role="status"
              initial={{ scale: 0.86, y: 28, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 12, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-[0_24px_80px_rgba(10,10,10,0.22)]"
              onClick={(event) => event.stopPropagation()}
            >
              <motion.div
                className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#c8f542]"
                initial={{ scale: 0.4, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 420, damping: 16, delay: 0.05 }}
              >
                <motion.svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <motion.path
                    d="M5 12.5l4.2 4.2L19 7.5"
                    stroke="#0a0a0a"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.45, delay: 0.18, ease: "easeOut" }}
                  />
                </motion.svg>
              </motion.div>
              <h3 className="text-center font-display text-2xl font-medium tracking-tight text-black">{panel.title}</h3>
              {panel.body ? (
                <p className="mt-2 text-center text-sm leading-relaxed text-black/55">{panel.body}</p>
              ) : null}
              <motion.div
                className="mt-6 h-1 overflow-hidden rounded-full bg-black/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="h-full bg-[#c8f542]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.6, ease: "linear" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </SuccessContext.Provider>
  );
}
