"use client";

import { useEffect, useState } from "react";
import {
  GLOBAL_VIDEO_KEY,
  LOCAL_VIDEO_EVENT,
  loadLocalVideo,
  type StoredVideo,
} from "@/lib/local-video";

const FALLBACK = "/videos/countrywide.mp4";

export function useLocalVideo(key = GLOBAL_VIDEO_KEY) {
  const [src, setSrc] = useState(FALLBACK);
  const [meta, setMeta] = useState<Omit<StoredVideo, "blob"> | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let url: string | null = null;
    let alive = true;

    async function refresh() {
      try {
        const record = await loadLocalVideo(key);
        if (!alive) return;
        if (url) URL.revokeObjectURL(url);
        if (record) {
          url = URL.createObjectURL(record.blob);
          setSrc(url);
          setMeta({
            key: record.key,
            name: record.name,
            type: record.type,
            size: record.size,
            updatedAt: record.updatedAt,
          });
        } else {
          url = null;
          setSrc(FALLBACK);
          setMeta(null);
        }
      } catch {
        if (!alive) return;
        setSrc(FALLBACK);
        setMeta(null);
      } finally {
        if (alive) setReady(true);
      }
    }

    void refresh();

    const onEvent = (event: Event) => {
      const detail = (event as CustomEvent<{ key?: string }>).detail;
      if (!detail?.key || detail.key === key) void refresh();
    };
    window.addEventListener(LOCAL_VIDEO_EVENT, onEvent);

    let channel: BroadcastChannel | null = null;
    try {
      channel = new BroadcastChannel(LOCAL_VIDEO_EVENT);
      channel.onmessage = (message) => {
        if (!message.data?.key || message.data.key === key) void refresh();
      };
    } catch {
      /* ignore */
    }

    return () => {
      alive = false;
      window.removeEventListener(LOCAL_VIDEO_EVENT, onEvent);
      channel?.close();
      if (url) URL.revokeObjectURL(url);
    };
  }, [key]);

  return { src, meta, ready, isCustom: Boolean(meta) };
}
