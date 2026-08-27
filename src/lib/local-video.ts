const DB_NAME = "kilele-media";
const STORE = "videos";
export const GLOBAL_VIDEO_KEY = "global";
export const LOCAL_VIDEO_EVENT = "kilele-local-video";

export type StoredVideo = {
  key: string;
  blob: Blob;
  name: string;
  type: string;
  size: number;
  updatedAt: number;
};

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: "key" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("IndexedDB open failed"));
  });
}

export async function saveLocalVideo(key: string, file: File): Promise<StoredVideo> {
  const record: StoredVideo = {
    key,
    blob: file,
    name: file.name,
    type: file.type || "video/mp4",
    size: file.size,
    updatedAt: Date.now(),
  };
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(record);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error("Save failed"));
  });
  db.close();
  notifyLocalVideo(key);
  return record;
}

export async function loadLocalVideo(key: string): Promise<StoredVideo | null> {
  const db = await openDb();
  const record = await new Promise<StoredVideo | null>((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const request = tx.objectStore(STORE).get(key);
    request.onsuccess = () => resolve((request.result as StoredVideo | undefined) ?? null);
    request.onerror = () => reject(request.error ?? new Error("Load failed"));
  });
  db.close();
  return record;
}

export async function clearLocalVideo(key: string): Promise<void> {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error("Delete failed"));
  });
  db.close();
  notifyLocalVideo(key);
}

function notifyLocalVideo(key: string) {
  window.dispatchEvent(new CustomEvent(LOCAL_VIDEO_EVENT, { detail: { key } }));
  try {
    const channel = new BroadcastChannel(LOCAL_VIDEO_EVENT);
    channel.postMessage({ key });
    channel.close();
  } catch {
    /* BroadcastChannel not required */
  }
}

export function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
