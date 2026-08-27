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
  const noiseId = useId().replace(/:/g, "");
  const [phase, setPhase] = useState("");
  const [soundOn, setSoundOn] = useState(true);
  const [entered, setEntered] = useState(false);
  const audioRef = useRef<AudioKit | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
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

  const playSoftFade = useCallback(() => {
    const kit = audioRef.current;
    if (!kit) return;
    const t = kit.ctx.currentTime;
    const o = kit.ctx.createOscillator();
    o.type = "sine";
    o.frequency.value = 1200;
    const g = kit.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.03, t + 0.3);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.3);
    o.connect(g);
    g.connect(kit.master);
    o.start(t);
    o.stop(t + 1.35);
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
    void videoRef.current?.play().catch(() => undefined);

    const reduced = reducedMotion();
    const t1 = window.setTimeout(() => setPhase("kml-wash-in"), 20);
    const t2 = window.setTimeout(() => setPhase("kml-wash-in kml-teaser-in"), reduced ? 150 : 650);
    const t3 = window.setTimeout(() => {
      setPhase("kml-wash-in kml-teaser-out");
      playSoftFade();
    }, reduced ? 600 : 2500);
    const t4 = window.setTimeout(() => {
      setPhase("kml-wash-in kml-teaser-out kml-enter-in");
    }, reduced ? 900 : 3900);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.clearTimeout(t4);
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
  }, [playSoftFade]);

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
    ensureCtx();
    playClick(700, 0.09);
    setPhase("kml-wash-in kml-teaser-out kml-enter-in kml-final-in");
    playWhoosh(0, 0.26);
    const reduced = reducedMotion();
    window.setTimeout(() => playSwell(), reduced ? 80 : 300);
    window.setTimeout(() => playChime(), reduced ? 180 : 850);
    window.setTimeout(() => {
      setPhase("kml-wash-in kml-teaser-out kml-enter-in kml-final-in kml-final-sub-in");
    }, reduced ? 220 : 1350);
    window.setTimeout(() => {
      setPhase("kml-wash-in kml-teaser-out kml-enter-in kml-final-in kml-final-sub-in kml-final-line-in");
      startAmbient();
    }, reduced ? 280 : 1750);
    window.setTimeout(finish, reduced ? 900 : 3200);
  }

  function toggleSound() {
    const next = !soundOn;
    setSoundOn(next);
    const kit = audioRef.current;
    if (kit) {
      kit.master.gain.setTargetAtTime(next ? 1 : 0, kit.ctx.currentTime, 0.05);
    }
  }

  return (
    <div
      className={`kml-stage ${spaceGrotesk.variable} ${spaceMono.variable} ${phase}`}
      role="dialog"
      aria-label="Kilele Market Link intro"
    >
      <video
        ref={videoRef}
        className="kml-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/global-kenya-aerial.jpg"
      >
        <source src="/videos/landing.mp4" type="video/mp4" />
      </video>

      <div className="kml-wash" />
      <div className="kml-wash-drift" />

      <svg className="kml-grain" width="100%" height="100%" aria-hidden>
        <filter id={noiseId}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${noiseId})`} />
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

      <div className="kml-teaser">
        <div className="kml-word">KILELE</div>
        <div className="kml-sub">Market Link</div>
      </div>

      <div className="kml-enter-wrap">
        <button type="button" className="kml-enter-btn" onClick={handleEnter}>
          Enter
        </button>
      </div>

      <div className="kml-center">
        <div className="kml-wordwrap">
          <h1 className="kml-word">KILELE</h1>
        </div>
        <div className="kml-subwrap">
          <div className="kml-sub2">Market Link</div>
        </div>
        <div className="kml-underline" />
      </div>
    </div>
  );
}
