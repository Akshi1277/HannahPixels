---
target: whole site (5 pages) via homepage
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-09-22T07-03-12Z
slug: src-pages-index-astro
---
# Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Nav active-state, ProcessStepper scroll-linked feedback, and ContactForm's popup-blocked fallback are good; no loading affordance for lazy images. |
| 2 | Match Between System / Real World | 4 | Real, correctly-used trade vocabulary (rigid boxes, folding cartons, embossing/debossing, foiling). |
| 3 | User Control and Freedom | 2 | No back-to-top on long pages; Contact form silently exits to WhatsApp with no warning before the click. |
| 4 | Consistency and Standards | 3 | Strong system overall, undercut by `--accent` used against the codebase's own documented safe-color rule (see Color section). |
| 5 | Error Prevention | 3 | Native validation, required fields, constrained select, smart popup-blocked fallback. |
| 6 | Recognition Rather Than Recall | 3 | Persistent nav, footer repeats sitemap + capability links, capabilities page has anchor jump-nav. |
| 7 | Flexibility and Efficiency | n/a | Persuade/marketing surface — no power-user workflow to accelerate. |
| 8 | Aesthetic and Minimalist Design | 3 | Elegant whitespace, but "What We Create" tips from minimal into flat/colorless (see Color). |
| 9 | Error Recovery | 2 | Unstyled native validation bubbles break the design language; WhatsApp fallback is the one well-designed exception. |
| 10 | Help and Documentation | n/a | Persuade surface — no task documentation needed. |
| **Total** | | **23/32** | **Good (71.9%)** |

# Design Specificity Verdict

**LLM assessment**: Mixed. Typography and motion are genuinely specific — the Cormorant Garamond/Schibsted Grotesk pairing, the `LUXURY_EASE` reveal signature, and copy voice ("Where Ideas Take Form," process stages Discover→Deliver) read as authored. But the visual system — cream background, near-black text, one bronze accent, generous whitespace — is the exact formula used by any "boutique luxury services" site (architecture studios, fragrance houses, wedding photographers). Nothing in color, buttons, or cards says *print and packaging* specifically. The one section that does — the homepage Materiality grid (copper foil, black leather, handmade paper) — is excellent, appears once, and is never echoed anywhere else. The capability photography itself works against this: alt text in `capabilities.ts` literally reads "Plain white rigid presentation box," "Plain kraft folding carton box" — generic stock-style shots that undercut the "atelier" copy.

**Deterministic scan**: CLI static scan (`detect.mjs` over `src`/`public`) came back clean — 0 findings. The live DOM-based detector (computed styles, actual rendered contrast) told a different story: 27 raw findings across the 5 pages, dominated by three recurring, site-wide patterns rather than 27 independent defects — `cream-palette` (flagged on all 5 pages), `all-caps-body` (all 5), and `hero-eyebrow-chip` (4 of 5, every interior page). These three mechanically confirm the LLM assessment's core complaint: the same generic "eyebrow label + cream background" template repeats page after page with nothing to differentiate one page — or one product category — from another.

Most notably, the detector's `low-contrast` hits **independently corroborate a specific bug the design review found by reading the code**: `global.css` contains a comment stating `#96703F` (`--accent`) fails WCAG AA below large-text size, which is exactly why `--accent-ink` (#755330) exists — but the live detector measured `text-accent` at **3.9:1** and **3.8:1** (both below the 4.5:1 requirement) on the homepage's "05 / The Process" and "06 / The Hannah Pixels Standard" eyebrow labels, the precise elements the design review flagged as still using the unsafe token. Detector and manual review independently landed on the same defect from two different methods — that's a confirmed, not speculative, issue.

One detector result is very likely a false positive: several `low-contrast` hits reported an exact "1.0:1" ratio for elements using Tailwind opacity-modifier classes (`text-background/70`, `text-background/90`) — the tool appears to be resolving the base hex for both foreground and background without applying the opacity, producing a same-color misread rather than a real same-on-same rendering bug. Treat those specific 1.0:1 entries as noise, not a real defect.

No persistent visual overlay remains in a browser tab — the live-server used for injection was started and stopped within Assessment B per protocol, so there's nothing left to view; the findings above are drawn from its console output at the time.

# Overall Impression

The bones are good — this is a well-typeset, well-motioned site with a real signature move (the headline reveal) and one genuinely excellent section (Materiality). But your boss's instinct is correct on both counts: the color system is one bronze hue asked to do the differentiation work for six visually and materially distinct product categories, and the interaction system is a flat `transition-colors` swap everywhere with zero tactile depth, on a site whose own copy keeps promising a "tactile, material" experience. The biggest opportunity is the same one in both cases: the site already has proof its best material/color moment works (Materiality), it just never lets that idea touch anything else.

# What's Working

1. **The `LUXURY_EASE` headline-reveal signature** (`cubic-bezier(0.16,1,0.3,1)`, 1.1s, staggered) is a real, repeatable house move used consistently on every page's H1 — not a generic fade-in — with a smart zero-JS fallback so the heading is never invisible pre-hydration.
2. **The design system is self-aware about accessibility** — `global.css` explicitly documents a WCAG failure and its fix, ships a two-tone focus ring tuned for both light and dark sections, a skip-to-content link, and a global `prefers-reduced-motion` override. The intent is right even where application has gaps (see Priority Issues).
3. **ProcessStepper's scroll-linked active-stage feedback** communicates "you are here" through a 6-stage sequence with no extra progress-bar chrome — restrained and appropriate for the editorial tone.

# Priority Issues

**[P1] Contact form silently reroutes off-site to WhatsApp with no disclosure**
Why it matters: `ContactForm.tsx` builds a structured 6-field enquiry, then submit opens WhatsApp in a new tab — nothing near the form says this, despite a conventional `mailto:` link sitting right next to it implying email. International/B2B visitors without WhatsApp get an unexplained surprise, or a silent failure if it isn't installed.
Fix: one line near the submit button ("We'll continue this on WhatsApp") and/or an equally prominent mailto alternative.
Suggested command: `/impeccable clarify`

**[P1] One hue is doing all the color differentiation, and it's misapplied against its own documented safe-use rule**
Why it matters: this is what your boss flagged. `--accent` (#96703F), `--accent-quiet`, `--accent-ink` are the only accent color in the entire system, reused everywhere — for a business selling six materially distinct product lines (fragrance glass, chocolate/cocoa, kraft paper, book cloth, rigid boxes in any finish). The live detector confirmed `cream-palette` recurs on every page and measured `text-accent` failing contrast at 3.9:1 / 3.8:1 on eyebrow labels — the exact token the code's own comment says not to use at that size.
Fix: give each of the six capability categories a quiet, material-sourced accent (blush/rose-gold for Fragrance & Beauty, cocoa/burgundy for Chocolate & Confectionery, sage/kraft for Paper & Carry, ink-blue for Books & Publishing), pulled from that category's own photography so it reads as material rather than decorative. Separately, fix every remaining `text-accent` → `text-accent-ink` substitution the CSS comment already calls for.
Suggested command: `/impeccable colorize`

**[P2] Zero tactile/depth feedback anywhere in the interaction system**
Why it matters: every hover state site-wide is a flat color swap — nothing lifts, presses, or casts shadow — while the brand copy repeatedly promises a physical, tactile experience. The detector's computed-style pull found three different transition durations (150ms Tailwind default, 300ms, 500ms) coexisting across interactive elements with no consistent logic, and confirmed the header logo swap on scroll is an instant `<img src>` swap with no crossfade — a visible pop on an otherwise carefully-eased page.
Fix: add subtle scale/shadow/lift to primary buttons and capability rows/cards, standardize transition durations by element role, crossfade the logo swap, and make the paper-grain texture (currently 3% opacity — functionally invisible) actually legible.
Suggested command: `/impeccable animate`

**[P2] The homepage's best interaction and richest photography don't reach mobile**
Why it matters: `CatalogueReveal`'s hover-preview image is `hidden md:block` — fully removed on mobile, not degraded — so most visitors get the flattest version of the site's best moment, paired with generic plain-background product photography.
Fix: a tap-to-reveal or always-visible small thumbnail equivalent for touch; richer, more branded capability photography.
Suggested command: `/impeccable adapt`

**[P3] Jump-nav and footer link density fail the cognitive-load checklist**
Why it matters: the Capabilities page's anchor jump-nav row is styled identically to plain non-interactive labels elsewhere, so it doesn't read as navigation until hover; the footer packs 11+ links into one loosely-grouped block, past the ≤4-per-glance guideline.
Fix: give jump-nav links a distinct rest-state treatment (underline, icon, weight); tighten footer grouping/hierarchy.
Suggested command: `/impeccable layout`

# Persona Red Flags

**Jordan (confused first-timer)**: The Capabilities quick-jump row looks identical to plain body labels — Jordan likely scrolls past without recognizing it as navigation. Later, the Contact form looks like a standard lead-gen form (Company/Phone/Quantity fields) with zero warning that submitting exits to WhatsApp instead of "sending" conventionally — a jarring mismatch with what the form visually promised.

**Riley (stress tester)**: Only Name and Email are required — Riley can submit an almost-empty enquiry (Company/Phone/Quantity/Message all blank) with no nudge toward more detail, odd for a bespoke, quote-driven business. There's also no draft persistence on the form's plain `useState` — an accidental refresh or back-navigation mid-fill silently loses everything typed.

**Casey (distracted mobile user)**: The primary "Start a Project" CTA lives only inside the hamburger drawer — no persistent/sticky bottom CTA on a pure-conversion surface. The homepage runs roughly 8 full-viewport sections deep with no progress cue if Casey is interrupted and returns.

# Minor Observations

- Header logo swap on scroll pops instantly instead of crossfading (detector-confirmed: instant `src` swap, no transition).
- Mobile menu's per-link stagger delay (`transition-delay`) likely has no visible effect — the only transitioning property on those links is hover color, not the entry animation.
- Contact sidebar's phone number renders at 50% opacity italic serif, visually reading as "disabled" directly under a crisp black email link.
- Detector flagged an oversized H1 on About (88px, 50 characters, 41vh) and inconsistent heading-rhythm spacing around the homepage's Process and Standard section headings — worth a look in a layout pass.
- The footer's giant "HANNAH" watermark sits at 3.5% opacity and the paper-grain texture at 3% — both worth confirming they're actually perceptible, or removing.

# Provocative Questions

1. If the entire product range is inherently colorful and material (foil, leather, ink, chocolate, fragrance glass), why does the digital presentation commit to exactly one hue — and what is the palette protecting the brand from that color would risk?
2. The Materiality grid is the most convincing "this is a packaging house" moment on the site, and it appears once. What would it mean to treat that material language as the primary visual system instead of a mid-scroll interlude?
3. Every interior page ends on an identical "Start a Project" dark CTA with identical copy. Does repeating the same close 4-5 times strengthen it, or dilute the actual arrival at Contact?
