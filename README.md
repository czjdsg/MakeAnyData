# DataClaw: Make ANY Data You Want

Project site for the `Make Any Data` paper showcase.

Live site:
- https://czjdsg.github.io/MakeAnyData/

## Overview

This repository hosts a static showcase page focused on:
- project intro and positioning
- method visualization
- case-driven demonstrations
- validation summary

The page is implemented with plain HTML, CSS, and JavaScript. No framework build step is required.

## Repository Structure

- `index.html`: main page structure
- `styles.css`: visual system, layout, animation, and interaction styles
- `app.js`: case data, replay logic, spotlight switching, and method/case interactions
- `assets/`: source media used by the page
- `docs/`: GitHub Pages publish directory
- `sync-docs.sh`: sync root files into `docs/`

## Current Showcase Sections

- `Intro`
- `Method`
- `Cases`
- `Validation`

## Current Case Categories

- `Everyday Tutorials`
- `Education`
- `GUI Agents`
- `Embodied`
- `Generation`

`Generation` currently contains internal subcategory paging for multiple subtypes.

## Local Preview

Open the page directly:

```bash
cd /data0/cone/MakeAnyData/showcase-template
xdg-open index.html
```

Or run a local static server:

```bash
cd /data0/cone/MakeAnyData/showcase-template
python3 -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## Editing Workflow

1. Update page structure in `index.html` when the layout changes.
2. Update styling and animation in `styles.css`.
3. Update case data and interaction logic in `app.js`.
4. Sync the publish directory:

```bash
cd /data0/cone/MakeAnyData/showcase-template
./sync-docs.sh
```

5. Push to GitHub:

```bash
git add .
git commit -m "Update showcase"
git push
```

GitHub Pages serves the site from `docs/`.

## Notes

- Media should be kept in web-friendly formats such as `mp4` and `webp`.
- If a browser keeps showing an old version, do a hard refresh after deployment.
- This repository is optimized for fast visual iteration rather than framework-heavy development.
