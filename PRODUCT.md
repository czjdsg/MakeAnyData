# Product

## Register

brand

## Users

**Primary — academic readers.** Researchers and reviewers arriving from arxiv, Twitter/X, Hacker News, conference programs, or paper indexes. They land with one question: *"Is this work credible enough to spend more time on?"* They scan in 30–60 seconds before deciding whether to read the paper, cite, or close the tab. They are skeptical, fluent in benchmark conventions, and allergic to overclaiming. Many are on laptops; a meaningful minority are on phones during commutes or conference breaks.

**Secondary — applied researchers and engineers.** Industry ML practitioners evaluating whether DataClaw can produce data they could actually train on. Their job-to-be-done is *"can I reproduce or use this — is the code/data released, and does the method generalize beyond the cherry-picked cases?"* They look for: case diversity, benchmark numbers, code/data availability, and method clarity.

Both cohorts share the same trip: skim hero → glance method diagram → click through cases → check validation table → decide.

## Product Purpose

The site is the public face of the **DataClaw** research project: a system that turns raw inputs (video, image, GUI traces, robot demos) into user-intent-aligned, trainable multimodal data. The page exists to convert paper-curious visitors into one of four downstream actions, in priority order:

1. **Read the paper** (or cite it).
2. **Star / clone the GitHub repo** (or pull the released data).
3. **Run the demo** (try the system themselves).
4. **Contact the authors** (collaboration, hiring, follow-up).

Success is not "long time-on-page." Success is the visitor leaving with a confident mental model of *what DataClaw is*, *why intent-driven data construction is novel*, and *which of the four actions to take next*. The case gallery and benchmark validation table are the two load-bearing trust signals — if either feels weak, the rest of the page can't recover.

## Brand Personality

**Authoritative · quiet-confident · methodical.**

Voice is the voice of a strong paper: declarative, specific, never marketing-flavored. Headlines state findings, not promises ("Raw video and user intent are merged once, then dispatched by task type" — already in the source — is the right register). Subtext explains mechanics without hedging.

Visually, the page should feel cinematic but restrained, the way DeepMind's Genie page does: dark canvas, large committed media, serif display type for gravitas, a single accent color carrying intent. The goal is "this lab knows what it is doing" — not "this is a product launch."

Emotional target: **trust.** A reader should feel they are looking at the work of a serious group, not a marketing site dressed up in research clothing.

## Anti-references

- **Plain academic / conference-style sites.** White background, Times New Roman, single-column, navy `<a>` tag links. The page must not collapse into "this looks like a NeurIPS workshop submission." Distinctiveness matters; this is brand register, not paper-PDF register.
- **Generic dark-mode SaaS landing pages.** Tailwind purple, glassmorphism cards, mouse-follow glow, animated gradient blobs, floating "AI" chips. The current page leans into some of these; they erode the academic credibility we need.
- **Over-clever motion.** Scroll-jacking, parallax case studies, autoplay video with sound, intro animations that delay first paint. Researchers bounce on these.
- **Fake numbers / placeholder benchmarks that look abandoned.** An empty results table with em-dashes everywhere reads as "this work isn't done yet." Either fill it, hide it until results land, or visually mark it as forthcoming.

## Design Principles

1. **Show, don't tell.** The case replay UI is the page's strongest asset. Cases prove the method better than any prose on the hero. Give them more visual weight; cut decoration that competes with them.
2. **Quiet authority.** When in doubt, remove. Restraint reads as confidence; ornament reads as compensation. One accent color, one display family, one strong system — not three of each.
3. **Reader-first hierarchy.** A skimmer should answer "what / why / does it work" from titles and figures alone. Body copy is for the second read. No critical information lives only in subtle hover states or animation reveals.
4. **Cinematic, not plain.** The anti-reference is "looks like a workshop site." Dark canvas + large media + assertive typography is the lane. We trade SaaS flash for editorial gravitas, not for visual emptiness.
5. **Honest about state.** Forthcoming benchmark numbers, in-progress cases, and unreleased code should be visually distinct from completed work. Never let "—" placeholders look like the final paper.

## Accessibility & Inclusion

- **Target WCAG 2.1 AA** for color contrast and keyboard navigation. Body copy must clear 4.5:1 against background; the warm cream `#f6efe3` on `#08111a` clears comfortably, but the orange `#ff8f4c` on dark and `#98dbff` muted on dark need to be re-checked when used for any text role.
- **Respect `prefers-reduced-motion`.** Disable the cursor-glow, panel-noise drift, and any reveal-on-scroll transforms when the user has reduced-motion set.
- **No autoplay.** All case-replay videos start paused with a visible play affordance. Users opt in. This is also the user's explicit ask.
- **Color is never the only channel.** Status (e.g. "primary method" vs. baselines in the eval table, active vs. inactive case-nav items) must also be communicated by weight, label, position, or shape — not by hue alone. Color-blind safe palette checks belong in the audit pass.
- **Keyboard reachable case replay.** The case-nav, subcategory paging, and "show thoughts" toggle must all be focusable, operable with Enter/Space, and have visible focus rings against the dark canvas.
