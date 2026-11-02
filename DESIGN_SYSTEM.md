# Design system

## Tokens and composition

Ink #171914; paper #f3f2eb; lime #d7f34d. Muted #77796f; rules #d6d7cd. Sports artwork uses sage, Cultural clay and Technical soft periwinkle. Use the system Arial/Helvetica stack and Georgia for editorial italics. No external font downloads.

Gutters: clamp(22px, 4.5vw, 88px). Standard section padding: 95px desktop / 65px mobile. Breakpoints: 760px mobile and 1100px intermediate. Fluid display type uses tight tracking; small labels use spaced uppercase. Prefer hairline dividers, straight edges and expressive whitespace over repeated cards.

The restored golden concert concept image supports the warm spark/lime identity. Its responsive WebPs and the colored logo reference are centralized in assets.js. The logo's alpha mask removes the white plate without recoloring its artwork. Do not add unrelated visual effects or imagery.

## Motion ownership

- IntroSequence: eight-second opening and initial homepage handoff only. GSAP context reverts every affected inline style.
- useFestivalMotion: normal homepage entrance on mounts not owned by the intro; scoped GSAP lifecycle and reduced-motion handling.
- PageTransitionProvider/choreography: route-shell fading, cover/reveal panels and transition labels. GSAP only.
- Motion: event dialog UI. Do not assign a second animation system to the same node.

Opening timing: spark 0–0.8s; drawn three-energy field 0.8–3.5s; wordmark/year reveal around 3.5–5s; identity hold; homepage alignment/reveal 6.3–8s. Ten-second recovery timer. No media/sound/WebGL dependency. Session key `udbhav:intro:v1`; direct category entry and reduced motion bypass it. Skip/Escape and interruption recovery remain available.

Route choreography: diagonal lime Sports cover, opposing clay Cultural curtains, staggered periwinkle Technical columns; paper panels for other destinations. Roughly one second per navigation. Keep the old route mounted until fully covered and the destination ready before revealing. Three-second recovery timer prevents stale overlays/locks. Reduced motion skips choreography immediately.

## Responsive and accessible behavior

Desktop home fits one viewport using width/height-aware typography. Mobile home uses a separate year line and stacked category entries; very short screens may scroll. Category art/descriptions stack on mobile. Category navigation uses real links and aria-current; schedule tabs support arrows and Home/End. Dialogs retain focus, close on Escape and return focus to the opener. Route headings receive focus without scroll jumps. Preserve visible focus indicators, labeled inputs and touch targets.

## Asset slots and fallbacks

The concert is disclosed AI-generated concept art; the logo is a restored display reference, not verified official provenance. Gallery/category/event artwork is original SVG/CSS. Hero fallback uses orbital tracks, a coordinate grid and flowing lines; gallery shares that language. No invented event coverage.

Use src/data/assets.js for site/category references and events.js for event photos. AssetVisual handles errors and optional responsive srcSet/sizes. The logo's whiteBackgroundMask option is specific to the current 1000×355 reference; a verified transparent logo can use the normal image path. Preserve fixed visual regions and crops to avoid layout shift when replacing media. See public/ASSET_GUIDE.md.
