---
name: DataClaw
description: Dark, editorial-cinematic project page for a research system that turns raw inputs into intent-aligned multimodal training data.
colors:
  bg: "#08111a"
  bg-deep: "#040b12"
  surface: "#ffffff0f"
  surface-strong: "#ffffff14"
  line: "#ffffff1f"
  text: "#f6efe3"
  text-muted: "#f6efe3b8"
  accent: "#ff8f4c"
  accent-soft: "#ffd3a8"
  support-cool: "#98dbff"
  support-lime: "#d7ef75"
typography:
  display:
    fontFamily: "Spectral, Iowan Old Style, Palatino Linotype, Book Antiqua, Georgia, serif"
    fontSize: "clamp(3.3rem, 9vw, 7rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.06em"
  heading:
    fontFamily: "Spectral, Iowan Old Style, Palatino Linotype, Book Antiqua, Georgia, serif"
    fontSize: "clamp(2.1rem, 4vw, 3.8rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  subtitle:
    fontFamily: "Avenir Next, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif"
    fontSize: "1.24rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Avenir Next, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.86
    letterSpacing: "normal"
  eyebrow:
    fontFamily: "Avenir Next, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.18em"
  kicker:
    fontFamily: "Avenir Next, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif"
    fontSize: "0.62rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.12em"
rounded:
  md: "18px"
  lg: "24px"
  xl: "34px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "18px"
  lg: "32px"
  xl: "52px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg-deep}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  nav-bar:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "14px 18px"
  surface-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "28px"
  hero-panel:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.text}"
    rounded: "{rounded.xl}"
    padding: "24px"
  case-nav-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.md}"
    padding: "16px 20px"
  case-nav-item-active:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg-deep}"
    rounded: "{rounded.md}"
    padding: "16px 20px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  eval-table-cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
---

## Overview

DataClaw's site occupies the **dark editorial-cinematic** lane. It is closer in feel to a high-craft research microsite (DeepMind Genie, OpenAI Sora) than to a SaaS landing page or a plain academic submission. The system rests on three commitments:

1. **A deep navy canvas** that lets large media (case replay videos, method diagrams) carry the story.
2. **A serif display family paired with a clean sans body** — an editorial pairing chosen so headlines feel like research findings, not product slogans.
3. **One primary accent (warm orange)** that signals intent, action, and the DataClaw brand. Two support hues (cool blue, lime) exist in the system but are tactical, not foundational; whenever an accent is required and the role is brand-level, default to orange.

The system is implemented as plain CSS custom properties on `:root` (no Tailwind, no build step) and uses `clamp()` extensively for fluid typography. New sections should add tokens to `:root` rather than introducing one-off literal values.

## Colors

The palette is split into **canvas**, **surface**, **text**, **accent**, and **support** roles. Most of the page lives on canvas + surface + text. Accent appears sparingly on the things readers should act on. Support hues should not be reached for casually — they were originally introduced to differentiate flow-diagram groups, and they earn their place only inside the method diagram and the case category indicators.

| Role | Token | Value | Where it shows up |
| --- | --- | --- | --- |
| Canvas | `--bg` | `#08111a` | Body background, between-section fill |
| Canvas (deeper) | `--bg-deep` | `#040b12` | Headlines on accent buttons, vignette base |
| Surface | `--panel` | `rgba(255,255,255,0.06)` | Glass cards, nav, chips |
| Surface (raised) | `--panel-strong` | `rgba(255,255,255,0.08)` | Hero panels, hovered cards |
| Hairline | `--line` | `rgba(255,255,255,0.12)` | Borders on every elevated surface |
| Text | `--text` | `#f6efe3` | Body and headings; warm cream, not pure white |
| Text (muted) | `--muted` | `rgba(246,239,227,0.72)` | Secondary copy, captions |
| **Accent** | `--accent` | `#ff8f4c` | Primary CTA, active case-nav, brand mark, "DataClaw" emphasis |
| Accent (soft) | `--accent-soft` | `#ffd3a8` | Hero subtitle highlight, accent-on-accent contrast |
| Support (cool) | `--cool` | `#98dbff` | Method "intent-agent" group, hero subtitle |
| Support (lime) | `--lime` | `#d7ef75` | Method tertiary group |

Contrast: cream-on-navy clears WCAG AA at body sizes. **Orange `#ff8f4c` on the dark canvas does not pass AA for body text** — keep orange for large display use, button fills, and non-text decoration. Cool `#98dbff` on `#08111a` is borderline; treat it as decorative unless the size is ≥ 24 px.

Pure black and pure white are not part of the system. Every "near-black" reaches for `--bg-deep`; every "near-white" reaches for `--text`.

## Typography

The page uses a deliberate **editorial pairing**: a transitional serif for display and a humanist sans for body. The serif gives headlines academic gravitas; the sans keeps long-form copy readable on small viewports. Avoid mixing in a third family.

- **Display / headings** — `Spectral → Iowan Old Style → Palatino Linotype → Book Antiqua → Georgia`. Spectral (Production Type, Google Fonts) is the canonical display face; the system fallback chain keeps the look intact during font load and on networks where Google Fonts is unreachable. Used for the hero title, every `<h2>` section head, every `<h3>` card title, and the hero-flow titles. Tightened tracking (`-0.06em` for hero, `-0.03em` for sections) is part of the look — don't reset it. Loaded weights: 500 (heading), 600 (hero / display), plus 400 italic for any emphasis.
- **Body / UI** — `Avenir Next → Segoe UI → PingFang SC → Hiragino Sans GB → Microsoft YaHei`. The PingFang / YaHei tail is intentional: the audience includes Chinese readers and the page must render cleanly without Latin-only fallbacks substituting in.
- **Eyebrow / kicker** — small uppercase tracked sans labels (`letter-spacing: 0.18em` for section eyebrows, `0.12em` for in-card kickers). They are the system's "label" voice; never style a heading with an eyebrow's letter-spacing.

Type scale uses fluid `clamp()`. Do not pin display sizes to fixed pixel values. The hero title compresses gracefully from 7rem on wide viewports to 3.3rem on small ones; preserve that behavior in any new headline.

Line-heights are intentionally generous on body copy (`1.86`) — this trades vertical density for academic readability. Don't tighten it to "look modern."

## Elevation

Elevation is achieved through **surface tinting and hairline borders**, not heavy drop shadows. The page has only one shared shadow token (`--shadow: 0 30px 90px rgba(0,0,0,0.28)`) and it is reserved for the largest hero / spotlight surfaces.

- **Layer 0 — canvas.** The body, with subtle radial gradients in `--accent`, `--cool`, `--lime` at low opacity. No shadow.
- **Layer 1 — surface.** `--panel` background + `--line` border. No shadow. Used for chips, eyebrow pills, eval-table cells, case-nav items.
- **Layer 2 — raised surface.** `--panel-strong` background + `--line` border + `backdrop-filter: blur(18–24px)`. Used for the sticky nav, hero panels, and the case spotlight.
- **Layer 3 — hero / spotlight.** Layer-2 + `--shadow`. Reserved for the two or three largest containers per page.

Decorative atmospherics — cursor glow, page noise grid, hero orbits — sit at `z-index: 0` behind everything else and are **not** part of the elevation system. They are atmosphere, not hierarchy. Treat them as candidates for removal in any restraint-driven pass; they should never carry information.

## Components

**Sticky pill nav.** Layer-2 surface, `border-radius: 999px`, `width: min(1240px, calc(100% - 32px))`, sits 18 px below the viewport top. Brand mark (orange dot) on the left, anchor links on the right. Don't replace the pill with a flush bar — the pill is a brand signature.

**Buttons.** Pill radius (`999px`), `padding: 14px 28px`. Two variants only: `button-primary` (accent fill, deep-navy text) and `button-ghost` (surface fill, cream text, hairline border). Don't introduce a third variant; if a tertiary action is needed, downgrade it to a text link.

**Eyebrow.** Uppercase sans, `letter-spacing: 0.18em`, accent or muted color depending on context. Always paired with — and never replaces — a serif heading. Don't use the eyebrow alone as a section label.

**Glass cards.** Layer-1 or Layer-2 surface, hairline border, radius `lg` (24 px) for content cards or `xl` (34 px) for hero-stage panels. Padding scales with content; default to 28 px. Cards do not get drop shadows except at hero scale.

**Case-nav item.** Pill on Layer-1 by default, fills with accent + deep-navy text when active. Active state must be recognizable from active background **and** active text weight; never rely on color alone (a colorblind reader needs a second signal — currently provided by the chevron + position highlight; keep both).

**Chat replay (case spotlight).** Two-column layout: left rail = case-nav, right pane = mock chat. The chat thread carries a `topbar` with three dots (window-chrome metaphor), then user / assistant / output bubbles. Do not collapse this into a tabbed gallery; the chat metaphor is part of the brand argument that DataClaw is intent-driven.

**Method flow diagram.** Absolute-positioned cards over an SVG arrow layer, scoped via `data-flow-group` attributes for hover focus. Do not add new card types without first checking that the SVG `viewBox` and arrow paths still align — the arrows are hard-coded coordinates, not procedural.

**Eval table.** Sticky-row header, two header rows (setting × benchmark), one row per method. The DataClaw row is highlighted via `tr.is-primary`. Empty cells (`—`) currently mean "not yet measured" — until results land, this state must be visually distinct from a final number (different color, italic, or a "tbd" badge), or the table must be hidden.

## Do's and Don'ts

**Do** lean on the dark canvas. The depth of `#08111a` plus warm cream text is the page's strongest single asset. New sections should sit on this canvas, not introduce alternate backgrounds.

**Do** keep the serif display + sans body pairing. It is what separates the page from generic "Tailwind dark mode" pages and from plain academic sites simultaneously. Replacing the serif with a geometric sans will collapse the page into one of the anti-references.

**Do** treat orange as the only foundational accent. Use cool and lime only inside the method diagram (where they encode group identity) and the case category indicators. Anywhere else, orange.

**Do** measure case media at full bleed. Cases are the strongest evidence of the work; let them breathe at large sizes. The chat-bubble metaphor frames them; the page's other surfaces should not compete.

**Do** start every video paused. No autoplay, ever. Provide a visible play affordance and respect `prefers-reduced-motion` for any incidental motion (cursor glow, panel drift, reveal-on-scroll).

**Don't** add cursor-following glows, mouse-trail effects, animated gradient blobs, or floating "AI" chips. These pull the page toward the SaaS-landing anti-reference.

**Don't** rely on color alone for state. Active vs. inactive case-nav, primary vs. baseline rows in the eval table, and "thoughts" toggle states must each carry a second signal (weight, position, label, or shape).

**Don't** introduce a third type family or a fifth color. The system is intentionally narrow. Variation comes from scale, weight, and surface elevation — not from new tokens.

**Don't** let placeholder "—" cells in the eval table look like final numbers. Either fill them, hide the table, or visually mark them as forthcoming. An empty table is worse than no table.

**Don't** use pure white or pure black. Every "near-white" is `--text`; every "near-black" is `--bg-deep`. Pure values clash with the warm-cream + cool-navy temperature contrast that defines the page.
