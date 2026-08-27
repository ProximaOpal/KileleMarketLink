# KileleMarketLink

GitHub: [ProximaOpal/KileleMarketLink](https://github.com/ProximaOpal/KileleMarketLink)

The site opens on a **KILELE Market Link** gate. Press **Enter** for torn-paper green splashes and the wordmark, then the main app.

Install as a **PWA** from Chrome (Install prompt) for a home-screen dispatch board.

As you scroll, **Terra** is its own full-viewport page, then **Global** (`#global`) plays a full-screen video. Upload your PixVerse clip on **Settings** (`/settings`); it is stored in this browser and plays on Global.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43173](http://127.0.0.1:43173).

The Terra map also lives at `/terra-map.html`.

Farmer rate cards are a full-viewport section on the landing (`#farmers`), right after the hero. Swipe, drag, or scroll horizontally across **10 growers**. The same deck also lives at `/farmers`.

## Deploy on Render

This repo is set up as a **Render Web Service** (Node, `next start`). Blueprint file: `render.yaml`.

1. Push this repo to GitHub.
2. In the [Render Dashboard](https://dashboard.render.com), create a **Blueprint** from the repo, **or** a **Web Service** with:

   | Setting | Value |
   | --- | --- |
   | Runtime | Node |
   | Branch | `main` |
   | Build command | `npm ci && ./scripts/render-build.sh` |
   | Start command | `npm start` |
   | Node version | `20.18.1` (`NODE_VERSION` env, or `.nvmrc`) |

3. Render sets `PORT` and `RENDER`. `npm start` binds `0.0.0.0` so health checks succeed.

No env secrets are required. After the first deploy, commits to `main` auto-deploy.

## What is mapped from where

| From | Used for |
| --- | --- |
| White + luminous green editorial | Soft lime-to-cyan gradients, off-white canvas, black type, pill CTAs |
| AGENTIC landing | Geometry, nav, hero, sticky agent cards, photo stacks, workflow, pricing, icons |
| Terra map HTML | Full-viewport Live Earth Map as you scroll |
