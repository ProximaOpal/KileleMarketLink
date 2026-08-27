#!/usr/bin/env bash
# Render persists $XDG_CACHE_HOME between deploys. Next.js does not persist
# .next/cache unless we copy it there. See https://render.com/docs/deploy-nextjs-app
set -euo pipefail

if [[ -z "${RENDER:-}" ]]; then
  npm run build
  exit 0
fi

cache_dir="${XDG_CACHE_HOME:-/opt/render/project/.cache}/next"

if [[ -d "$cache_dir" ]]; then
  echo "Restoring Next.js build cache"
  mkdir -p .next/cache
  cp -a "$cache_dir/." .next/cache/
else
  echo "No Next.js build cache found"
fi

echo "Building"
npm run build

echo "Saving Next.js build cache"
mkdir -p "$cache_dir"
if [[ -d .next/cache ]]; then
  cp -a .next/cache/. "$cache_dir/"
fi
