# KileleMarketLink

GitHub: [ProximaOpal/KileleMarketLink](https://github.com/ProximaOpal/KileleMarketLink)

Landing page that keeps the **AGENTIC** layout — hero, sticky photo cards, buttons, type, and icons — and paints it with the **Frosted Authentication** color system: mesh gradient background, dark glass surfaces, white type, and orange/gold accents.

As you scroll, **Terra** is its own full-viewport page: the original `terra-map.html` Live Earth Map (search, satellite/street/climate layers, amenities, locate).

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43173](http://127.0.0.1:43173).

The Terra map also lives at `/terra-map.html`.

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
| Frosted Authentication Page | Mesh gradient, dark frosted glass, white/gray type, orange accent |
| AGENTIC landing | Geometry, nav, hero, sticky agent cards, photo stacks, workflow, pricing, icons |
| Terra map HTML | Full-viewport Live Earth Map as you scroll |
