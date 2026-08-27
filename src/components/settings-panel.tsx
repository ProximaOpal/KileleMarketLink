"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLocalVideo } from "@/hooks/use-local-video";
import { clearLocalVideo, formatBytes, GLOBAL_VIDEO_KEY, saveLocalVideo } from "@/lib/local-video";

const MAX_BYTES = 80 * 1024 * 1024;

export function SettingsPanel() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { src, meta, ready, isCustom } = useLocalVideo();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  async function onFile(file: File | undefined) {
    if (!file) return;
    setError(null);
    setSaved(false);
    if (!file.type.startsWith("video/")) {
      setError("Choose a video file (mp4, webm, or mov).");
      return;
    }
    if (file.size > MAX_BYTES) {
      setError(`That file is ${formatBytes(file.size)}. Keep it under 80 MB for this browser.`);
      return;
    }
    setBusy(true);
    try {
      await saveLocalVideo(GLOBAL_VIDEO_KEY, file);
      setSaved(true);
    } catch {
      setError("Could not save the video in this browser. Try a smaller file.");
    } finally {
      setBusy(false);
    }
  }

  async function onClear() {
    setBusy(true);
    setError(null);
    setSaved(false);
    try {
      await clearLocalVideo(GLOBAL_VIDEO_KEY);
    } catch {
      setError("Could not remove the saved video.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-20 pt-32 md:px-8">
      <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[#0a0a0a]/45">Settings</p>
      <h1 className="font-display text-4xl font-light tracking-tight text-[#0a0a0a] md:text-5xl">
        Global video
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#0a0a0a]/55">
        Upload the PixVerse clip on this device. It stays in this browser’s local storage and plays on the
        Global page. Nothing is sent to a server.
      </p>

      <div className="mt-10 overflow-hidden rounded-3xl border border-[#0a0a0a]/12 bg-white/70">
        <div className="relative aspect-video bg-black">
          {ready ? (
            <video key={src} className="h-full w-full object-cover" src={src} controls playsInline />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-white/70">Loading preview…</div>
          )}
        </div>
        <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-[#0a0a0a]">
              {isCustom ? meta?.name : "Default countrywide clip"}
            </p>
            <p className="mt-1 text-xs text-[#0a0a0a]/45">
              {isCustom && meta
                ? `${formatBytes(meta.size)} · saved in this browser`
                : "Using /videos/countrywide.mp4 until you upload one"}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <input
              ref={inputRef}
              type="file"
              accept="video/mp4,video/webm,video/quicktime,video/*"
              className="hidden"
              onChange={(event) => {
                void onFile(event.target.files?.[0]);
                event.target.value = "";
              }}
            />
            <Button
              type="button"
              quiet
              disabled={busy}
              onClick={() => inputRef.current?.click()}
            >
              {busy ? "SAVING…" : isCustom ? "REPLACE VIDEO" : "UPLOAD VIDEO"}
            </Button>
            {isCustom ? (
              <Button type="button" variant="ghost" quiet disabled={busy} onClick={() => void onClear()}>
                USE DEFAULT
              </Button>
            ) : null}
          </div>
        </div>
      </div>

      {error ? <p className="mt-4 text-sm text-[#8b2318]">{error}</p> : null}
      {saved ? (
        <p className="mt-4 text-sm text-[#0a6b58]">
          Saved. Open{" "}
          <Link className="underline underline-offset-4" href="/#global">
            Global
          </Link>{" "}
          to play it full-screen.
        </p>
      ) : null}

      <label
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
          event.preventDefault();
          void onFile(event.dataTransfer.files?.[0]);
        }}
        className="mt-8 flex cursor-pointer flex-col items-center justify-center rounded-3xl border border-dashed border-[#0a0a0a]/20 bg-white/40 px-6 py-12 text-center transition-colors hover:border-[#0a0a0a]/40 hover:bg-white/70"
      >
        <input
          type="file"
          accept="video/mp4,video/webm,video/quicktime,video/*"
          className="hidden"
          onChange={(event) => {
            void onFile(event.target.files?.[0]);
            event.target.value = "";
          }}
        />
        <span className="text-sm font-medium text-[#0a0a0a]">Drop your PixVerse mp4 here</span>
        <span className="mt-1 text-xs text-[#0a0a0a]/45">Or tap to choose a file · max 80 MB</span>
      </label>
    </div>
  );
}
