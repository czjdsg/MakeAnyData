#!/usr/bin/env bash
set -euo pipefail
cd /data0/cone/MakeAnyData/showcase-template
exec python3 -m http.server 8080 --bind 127.0.0.1
