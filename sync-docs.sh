#!/usr/bin/env bash
set -euo pipefail
cd /data0/cone/MakeAnyData/showcase-template
mkdir -p docs
cp index.html styles.css app.js docs/
rm -rf docs/assets
if [ -d assets ]; then
  cp -R assets docs/
fi
: > docs/.nojekyll
printf 'Synced GitHub Pages files into %s/docs\n' "$PWD"
