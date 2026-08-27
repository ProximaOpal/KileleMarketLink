"use client";

import { Space_Grotesk, Space_Mono } from "next/font/google";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import "./kilele-landing.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-kilele-display",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kilele-mono",
});

type AmbientNodes = {
  o1: OscillatorNode;
  o2: OscillatorNode;
  lfo: OscillatorNode;
  g: GainNode;
};

type AudioKit = {
  ctx: AudioContext;
  master: GainNode;
  ambient: AmbientNodes | null;
};

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function KileleLanding({ onComplete }: { onComplete: () => void }) {
  const uid = useId().replace(/:/g, "");
  const [phase, setPhase] = useState("");
  const [gateHidden, setGateHidden] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [entered, setEntered] = useState(false);
  const audioRef = useRef<AudioKit | null>(null);
  const doneRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const ensureCtx = useCallback(() => {
    const AudioCtx =
      window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return null;
    if (!audioRef.current) {
      const ctx = new AudioCtx();
      const master = ctx.createGain();
      master.gain.value = soundOn ? 1 : 0;
      master.connect(ctx.destination);
      audioRef.current = { ctx, master, ambient: null };
    }
    const kit = audioRef.current;
    if (kit.ctx.state === "suspended") void kit.ctx.resume();
    return kit;
  }, [soundOn]);

  const noiseBuffer = useCallback((kit: AudioKit, duration: number) => {
    const sr = kit.ctx.sampleRate;
    const len = Math.max(1, Math.floor(sr * duration));
    const buf = kit.ctx.createBuffer(1, len, sr);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 1.3);
    }
    return buf;
  }, []);

  const playWhoosh = useCallback(
    (delay = 0, vol = 0.28) => {
      const kit = audioRef.current;
      if (!kit) return;
      const t = kit.ctx.currentTime + delay;
      const src = kit.ctx.createBufferSource();
      src.buffer = noiseBuffer(kit, 1.2);
      const bp = kit.ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.Q.value = 0.9;
      bp.frequency.setValueAtTime(260, t);
      bp.frequency.exponentialRampToValueAtTime(2200, t + 0.85);
      bp.frequency.exponentialRampToValueAtTime(500, t + 1.2);
      const g = kit.ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol, t + 0.4);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);
      src.connect(bp);
      bp.connect(g);
      g.connect(kit.master);
      src.start(t);
      src.stop(t + 1.25);
    },
    [noiseBuffer],
  );

  const playSwell = useCallback(() => {
    const kit = audioRef.current;
    if (!kit) return;
    const t = kit.ctx.currentTime;
    [0, -1200].forEach((detune, i) => {
      const o = kit.ctx.createOscillator();
      o.type = i === 0 ? "sine" : "triangle";
      o.detune.value = detune;
      o.frequency.setValueAtTime(80, t);
      o.frequency.exponentialRampToValueAtTime(150, t + 1.3);
      const lp = kit.ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.setValueAtTime(300, t);
      lp.frequency.exponentialRampToValueAtTime(1600, t + 1.1);
      const g = kit.ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(i === 0 ? 0.13 : 0.06, t + 0.7);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 1.9);
      o.connect(lp);
      lp.connect(g);
      g.connect(kit.master);
      o.start(t);
      o.stop(t + 2.0);
    });
  }, []);

  const playChime = useCallback(() => {
    const kit = audioRef.current;
    if (!kit) return;
    const t = kit.ctx.currentTime;
    [523.25, 659.25, 783.99].forEach((f, i) => {
      const o = kit.ctx.createOscillator();
      o.type = "sine";
      o.frequency.value = f;
      const g = kit.ctx.createGain();
      const start = t + i * 0.05;
      g.gain.setValueAtTime(0.0001, start);
      g.gain.exponentialRampToValueAtTime(0.11, start + 0.04);
      g.gain.exponentialRampToValueAtTime(0.0001, start + 1.4);
      o.connect(g);
      g.connect(kit.master);
      o.start(start);
      o.stop(start + 1.5);
    });
  }, []);

  const playClick = useCallback((freq = 880, dur = 0.12) => {
    const kit = audioRef.current;
    if (!kit) return;
    const t = kit.ctx.currentTime;
    const o = kit.ctx.createOscillator();
    o.type = "sine";
    o.frequency.value = freq;
    const g = kit.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.18, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(kit.master);
    o.start(t);
    o.stop(t + dur + 0.02);
  }, []);

  const startAmbient = useCallback(() => {
    const kit = audioRef.current;
    if (!kit || kit.ambient) return;
    const o1 = kit.ctx.createOscillator();
    o1.type = "sine";
    o1.frequency.value = 60;
    const o2 = kit.ctx.createOscillator();
    o2.type = "sine";
    o2.frequency.value = 60 * 1.5;
    const lfo = kit.ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 0.09;
    const lfoGain = kit.ctx.createGain();
    lfoGain.gain.value = 0.015;
    const g = kit.ctx.createGain();
    g.gain.value = 0.0001;
    lfo.connect(lfoGain);
    lfoGain.connect(g.gain);
    o1.connect(g);
    o2.connect(g);
    g.connect(kit.master);
    const t = kit.ctx.currentTime;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.025, t + 2.5);
    o1.start();
    o2.start();
    lfo.start();
    kit.ambient = { o1, o2, lfo, g };
  }, []);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
      const kit = audioRef.current;
      if (kit) {
        try {
          kit.ambient?.o1.stop();
          kit.ambient?.o2.stop();
          kit.ambient?.lfo.stop();
        } catch {
          /* already stopped */
        }
        void kit.ctx.close();
        audioRef.current = null;
      }
    };
  }, []);

  function finish() {
    if (doneRef.current) return;
    doneRef.current = true;
    setPhase((p) => `${p} kml-landing-out`);
    window.setTimeout(() => {
      document.body.style.overflow = "";
      onCompleteRef.current();
    }, 800);
  }

  function handleEnter() {
    if (entered) return;
    setEntered(true);
    setGateHidden(true);

    try {
      ensureCtx();
      playClick(700, 0.09);
    } catch {
      /* visuals still run if audio is blocked */
    }

    const reduced = reducedMotion();
    setPhase("kml-shapes-in");
    try {
      playWhoosh(0, 0.3);
      playWhoosh(0.15, 0.2);
      playWhoosh(0.3, 0.16);
    } catch {
      /* ignore */
    }

    window.setTimeout(() => {
      try {
        playSwell();
      } catch {
        /* ignore */
      }
    }, reduced ? 100 : 600);
    window.setTimeout(() => {
      setPhase("kml-shapes-in kml-word-in");
      try {
        playChime();
      } catch {
        /* ignore */
      }
    }, reduced ? 200 : 1250);
    window.setTimeout(() => setPhase("kml-shapes-in kml-word-in kml-sub-in"), reduced ? 300 : 1750);
    window.setTimeout(() => {
      setPhase("kml-shapes-in kml-word-in kml-sub-in kml-line-in kml-text-in");
      try {
        startAmbient();
      } catch {
        /* ignore */
      }
    }, reduced ? 400 : 2100);
    window.setTimeout(finish, reduced ? 1100 : 3800);
  }

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const tag = (event.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      event.preventDefault();
      handleEnter();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [entered]);

  function toggleSound() {
    const next = !soundOn;
    setSoundOn(next);
    const kit = audioRef.current;
    if (kit) {
      kit.master.gain.setTargetAtTime(next ? 1 : 0, kit.ctx.currentTime, 0.05);
    }
  }

  const gGreen = `${uid}-green`;
  const gTeal = `${uid}-teal`;
  const gGreen2 = `${uid}-green2`;
  const noise = `${uid}-noise`;

  return (
    <div
      className={`kml-stage ${spaceGrotesk.variable} ${spaceMono.variable} ${phase}`}
      role="dialog"
      aria-label="Kilele Market Link intro"
    >
      <svg className="kml-splashes" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <linearGradient id={gGreen} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3CFF6E" />
            <stop offset="100%" stopColor="#0FA24E" />
          </linearGradient>
          <linearGradient id={gTeal} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3CFF6E" />
            <stop offset="100%" stopColor="#0FE0C4" />
          </linearGradient>
          <linearGradient id={gGreen2} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5CFF8F" />
            <stop offset="100%" stopColor="#14C77A" />
          </linearGradient>
        </defs>
        <path
          className="kml-shape-a"
          fill={`url(#${gGreen})`}
          d="M1000,0 L1000,720 L860,790 L760,700 L640,760 L560,640 L430,690 L470,540 L360,470 L510,350 L420,220 L560,150 L520,40 L640,0 Z"
        />
        <path
          className="kml-shape-b"
          fill={`url(#${gTeal})`}
          d="M1000,560 L1000,1000 L260,1000 L340,880 L460,910 L520,800 L650,830 L700,700 L820,730 L860,610 Z"
        />
        <path className="kml-shape-c" fill={`url(#${gGreen2})`} d="M0,0 L230,0 L200,90 L260,150 L150,230 L120,140 L0,150 Z" />
        <path className="kml-shape-d" fill={`url(#${gGreen2})`} d="M0,760 L110,700 L160,800 L250,830 L200,940 L260,1000 L0,1000 Z" />
      </svg>

      <svg className="kml-grain" width="100%" height="100%" aria-hidden>
        <filter id={noise}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${noise})`} />
      </svg>

      <button
        type="button"
        className="kml-sound-toggle"
        title="Toggle sound"
        aria-pressed={soundOn}
        onClick={toggleSound}
        style={{
          borderColor: soundOn ? "rgba(11,15,12,0.18)" : "rgba(34,194,94,0.7)",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: soundOn ? 1 : 0.35 }}
        >
          <path d="M11 5 6 9H3v6h3l5 4V5z" />
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18 6a9 9 0 0 1 0 12" />
        </svg>
      </button>

      <div className="kml-center">
        <div className="kml-wordwrap">
          <h1 className="kml-word">KILELE</h1>
        </div>
        <div className="kml-subwrap">
          <div className="kml-sub">Market Link</div>
        </div>
        <div className="kml-underline" />
      </div>

      <div className={`kml-gate${gateHidden ? " kml-gate-hide" : ""}`}>
        <h2 className="kml-gate-title">Kilele Market Link</h2>
        <button type="button" className="kml-enter-btn" autoFocus onClick={handleEnter}>
          Enter
        </button>
      </div>
    </div>
  );
}
