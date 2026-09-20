# Design Specification: The Living Atelier — Haptic Motion & Dynamic Surface Lighting

**Date:** 2026-09-21  
**Target:** Hannah Pixels Atelier Website (`printfix`)  
**Status:** Approved by Client for Implementation  

---

## 1. Objective & Scope

Transform the Hannah Pixels website from a clean, static portfolio into an **Awwwards-tier, living luxury digital experience**. Erase all "AI template" perceptions by introducing real-world physical mass, hardware-accelerated dynamic surface lighting, 3D perspective tilt, and Apple-grade magnetic micro-interactions.

---

## 2. Architecture & Components

### 2.1 `SpotlightCard.tsx` (Dynamic Surface Lighting)
- **Location:** `src/components/ui/SpotlightCard.tsx`
- **Mechanism:** Tracks mouse coordinates (`e.clientX`, `e.clientY`) relative to the card's bounding rectangle on `onMouseMove`.
- **CSS Variables:** Updates `--mouse-x` and `--mouse-y` dynamically without triggering React re-renders.
- **Visual Layers:**
  - Ambient radial illumination (`rgba(248, 188, 35, 0.08)`) with a 380px radius over the card surface.
  - Specular hairline border reveal: an absolute overlay with a radial mask exposing an illuminated gold border (`#F8BC23`) strictly under the cursor.
- **Fallback:** On non-hover / touch devices, degrades cleanly to standard static border styling.

### 2.2 `3D Card Tilt Physics` (Integrated with Spotlight)
- **Mechanism:** Uses Framer Motion's `useMotionValue` and `useSpring` (`stiffness: 300`, `damping: 20`, `mass: 0.5`).
- **Range:** Calculates perspective tilt between `-3.5deg` and `+3.5deg` for `rotateX` and `rotateY`.
- **Inertia:** On mouse leave, smoothly interpolates back to neutral `(0, 0)` with spring dampening rather than an abrupt jump.
- **Safety:** Automatically disabled if `window.matchMedia('(prefers-reduced-motion: reduce)')` or on touch viewports (`< 768px`).

### 2.3 `MagneticButton.tsx` (Apple-Grade Haptic CTA Physics)
- **Location:** `src/components/ui/MagneticButton.tsx`
- **Mechanism:** Listens for mouse proximity within a 35px perimeter.
- **Translation:** Pulls the button body towards the cursor up to `±6px` (`x`, `y`).
- **Nested Parallax:** Shifts the nested inner icon circle with a 1.5× multiplier (`±10px`), generating internal kinetic tension.
- **Snapback:** Uses high-stiffness spring dynamics (`stiffness: 400`, `damping: 25`) to snap cleanly back to center on cursor release.

### 2.4 `AmbientDust.tsx` (Hero Atmospheric Depth)
- **Location:** `src/components/ui/AmbientDust.tsx`
- **Mechanism:** Renders 14 microscopic, floating warm gold motes (`1px` to `2.5px`) drifting gently in the dark hero void using GPU-accelerated CSS keyframe translation (`transform: translate3d(...)`).
- **Performance:** Zero layout reflows, `pointer-events-none`, pauses when out of view.

### 2.5 Metallic Foil Shimmer CSS Keyframe
- **Location:** `src/index.css`
- **Animation:** `.shimmer-gold` diagonal specular light beam sweeping across gold headings and key CTA borders periodically (every 6s).

---

## 3. Component Integrations

1. **`HeroSection.tsx`**:
   - Integrate `AmbientDust.tsx` into the background.
   - Apply `MagneticButton` to the primary *"Start a Conversation"* and *"Explore Creations"* CTAs.
   - Apply subtle gold foil specular shimmer to the brand crest and headline.

2. **`ServicesSection.tsx` (01 — What We Create)**:
   - Wrap the 6 collection cards with `SpotlightCard` and subtle 3D tilt physics.

3. **`FinishesSection.tsx` (05 — Finishes & Craft)**:
   - Apply `SpotlightCard` dynamic lighting to the active finish preview showcase and the 4 interactive finish selector cards.

4. **`IndustriesContactSection.tsx` (07 — Sectors & 08 — Configurator)**:
   - Wrap the 5 sector cards with `SpotlightCard` lighting.
   - Wrap the Double-Bezel Quote Builder console in dynamic radial surface lighting.

---

## 4. Verification Plan

1. **TypeScript Compilation:** `npx tsc --noEmit` must exit with 0.
2. **Production Bundle:** `npm run build` must complete with zero errors.
3. **Performance Check:** 60 FPS verified on mousemove and scrolling; zero GPU memory leaks; touch devices maintain 100% native smooth scroll.
