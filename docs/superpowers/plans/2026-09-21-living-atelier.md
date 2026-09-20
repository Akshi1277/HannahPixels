# The Living Atelier Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the Hannah Pixels packaging website from a static portfolio into an Awwwards-tier, living luxury experience with dynamic surface lighting, 3D card tilt physics, ambient caustics, and magnetic CTA micro-interactions.

**Architecture:** Build lightweight, hardware-accelerated interaction components (`SpotlightCard`, `MagneticButton`, `AmbientDust`) using CSS variables and Framer Motion spring physics. Integrate them into existing section components (`HeroSection`, `ServicesSection`, `FinishesSection`, `IndustriesContactSection`) without touching their responsive layout or business logic.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React.

**Spec:** `docs/superpowers/specs/2026-09-21-living-atelier-design.md`

## Global Constraints
- Palette strictly locked to warm ivory (`#FBF9F4` / `#F3EEE3`), obsidian charcoal (`#181A16` / `#0E1311`), and warm gold (`#93660C` / `#F8BC23`). Zero olive green borders.
- Animations exclusively use GPU-accelerated properties (`transform`, `opacity`, CSS variables). Never animate layout (`width`, `height`, `top`, `left`).
- Graceful degradation: disable 3D tilt and mousemove listeners on touch devices and for `prefers-reduced-motion`.
- TypeScript strictness: zero `any` types; all props properly typed.

---

### Task 1: Create Reusable `SpotlightCard` Component with 3D Tilt

**Files:**
- Create: `src/components/ui/SpotlightCard.tsx`
- Modify: `src/index.css` (add `.shimmer-gold` utility)

**Interfaces:**
- Produces: `SpotlightCard({ children, className, tilt, spotlightColor, borderColor }: SpotlightCardProps)`

- [ ] **Step 1: Write `SpotlightCard.tsx`** with mouse position tracking using CSS variables (`--mouse-x`, `--mouse-y`) and Framer Motion spring physics for 3D tilt (`rotateX`, `rotateY` max ±3.5deg).
- [ ] **Step 2: Add CSS shimmer keyframes in `src/index.css`** for gold foil specular reflection.
- [ ] **Step 3: Run `npx tsc --noEmit`** to verify clean TypeScript compilation.
- [ ] **Step 4: Commit changes** (`feat: add SpotlightCard with dynamic lighting and 3D tilt`).

---

### Task 2: Create `MagneticButton` and `AmbientDust` Components

**Files:**
- Create: `src/components/ui/MagneticButton.tsx`
- Create: `src/components/ui/AmbientDust.tsx`

**Interfaces:**
- Produces: `MagneticButton({ children, className, onClick, href, strength }: MagneticButtonProps)`
- Produces: `AmbientDust({ count, color }: AmbientDustProps)`

- [ ] **Step 1: Write `MagneticButton.tsx`** using Framer Motion `useSpring` (`stiffness: 400, damping: 25`) with nested icon parallax.
- [ ] **Step 2: Write `AmbientDust.tsx`** rendering floating gold particles using GPU-accelerated CSS keyframe translation.
- [ ] **Step 3: Run `npx tsc --noEmit`** to verify clean compilation.
- [ ] **Step 4: Commit changes** (`feat: add MagneticButton and AmbientDust components`).

---

### Task 3: Integrate Ambient Depth & Magnetic CTA in `HeroSection.tsx`

**Files:**
- Modify: `src/components/HeroSection.tsx`

- [ ] **Step 1: Add `AmbientDust`** behind the hero content in the dark void.
- [ ] **Step 2: Wrap primary CTA button** (*Start a Conversation*) in `MagneticButton` and apply the gold foil shimmer class.
- [ ] **Step 3: Run `npx tsc --noEmit`** and test visually on local dev server.
- [ ] **Step 4: Commit changes** (`feat: integrate ambient dust and magnetic CTA in HeroSection`).

---

### Task 4: Integrate `SpotlightCard` in `ServicesSection.tsx` & `FinishesSection.tsx`

**Files:**
- Modify: `src/components/ServicesSection.tsx`
- Modify: `src/components/FinishesSection.tsx`

- [ ] **Step 1: Wrap the 6 collection cards in `ServicesSection.tsx`** with `SpotlightCard` (dynamic gold light + 3D tilt).
- [ ] **Step 2: Wrap the active finish showcase and selector tabs in `FinishesSection.tsx`** with `SpotlightCard`.
- [ ] **Step 3: Run `npx tsc --noEmit`** and verify 60fps interaction on desktop and clean fallback on mobile.
- [ ] **Step 4: Commit changes** (`feat: add spotlight lighting to Services and Finishes sections`).

---

### Task 5: Integrate `SpotlightCard` in `IndustriesContactSection.tsx` & Full Validation

**Files:**
- Modify: `src/components/IndustriesContactSection.tsx`

- [ ] **Step 1: Wrap the 5 sector cards and the Double-Bezel quote builder** in `SpotlightCard`.
- [ ] **Step 2: Run `npx tsc --noEmit`** to ensure 100% type safety.
- [ ] **Step 3: Run `npm run build`** to confirm production bundle builds cleanly.
- [ ] **Step 4: Commit changes** (`feat: integrate spotlight lighting in IndustriesContactSection`).
