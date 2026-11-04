# Design system

## Tokens and composition

Ink #171914; paper #f3f2eb; lime #d7f34d. Muted #77796f; rules #d6d7cd. Sports artwork uses sage, Cultural clay and Technical soft periwinkle. Use the system Arial/Helvetica stack and Georgia for editorial italics. No external font downloads.

Gutters: clamp(22px, 4.5vw, 88px). Standard section padding: 95px desktop / 65px mobile. Breakpoints: 760px mobile and 1100px intermediate. Fluid display type uses tight tracking; small labels use spaced uppercase. Prefer hairline dividers, straight edges and expressive whitespace over repeated cards.

The restored golden concert concept image supports the warm light/lime identity. Its responsive WebPs and the colored logo reference are centralized in assets.js. The logo's alpha mask removes the white plate without recoloring its artwork. Do not add unrelated visual effects or imagery.

## Motion ownership

- IntroSequence: 9.8-second festival film and initial/replay homepage handoff only. GSAP context reverts every affected inline style.
- useFestivalMotion: normal homepage entrance on mounts not owned by the intro; scoped GSAP lifecycle and reduced-motion handling.
- PageTransitionProvider/choreography: route-shell fading, cover/reveal panels and transition labels. GSAP only.
- Motion: standard Cultural/Technical dialog UI. Sports details disable that entrance and use their own GSAP cover. Do not assign a second animation system to the same node.

Opening timing: Sports court and controlled basketball drop/rebound 0–2.2s; Cultural stage-light/microphone scene 2.2–4.4s; Technical coding interface 4.4–6.5s; full UDHBHAV / 2K27 identity, institution and dates 6.5–8.5s; measured homepage handoff 8.5–9.8s. The impact pool is reused as stage lighting, beams converge into the editor frame, and category emblems travel toward the homepage entry points. Palette stays ink, paper, lime, warm copper/light and restrained periwinkle.

FestivalScenes contains recognizable original SVG/HTML graphics, not stock media or random code. Intro styles live in src/intro/intro.css. Twelve-second fail-open timer. No media, sound or WebGL dependency. Session key `udbhav:intro:v1` remains unchanged. Reduced motion and direct category entries bypass the film. Skip/Escape and interruption recovery remain; explicit Replay on the homepage resets only active playback, not normal session rules. Suppress normal hero motion while a replay owns its targets, and retain that suppression until the current homepage mount ends.

Route choreography: diagonal lime Sports cover, opposing clay Cultural curtains, staggered periwinkle Technical columns; paper panels for other destinations. Roughly one second per navigation. Keep the old route mounted until fully covered and the destination ready before revealing. Three-second recovery timer prevents stale overlays/locks. Reduced motion skips choreography immediately.

## Responsive and accessible behavior

Desktop home fits one viewport using width/height-aware typography. Mobile home uses a separate year line and stacked category entries; very short screens may scroll. Category art/descriptions stack on mobile. Category navigation uses real links and aria-current; schedule tabs support arrows and Home/End. Dialogs retain focus, close on Escape and return focus to the opener. Route headings receive focus without scroll jumps. Preserve visible focus indicators, labeled inputs and touch targets.

## Asset slots and fallbacks

The concert is disclosed AI-generated concept art; the logo is a restored display reference, not verified official provenance. Gallery/category/event artwork is original SVG/CSS. Hero fallback uses orbital tracks, a coordinate grid and flowing lines; gallery shares that language. No invented event coverage.

Use src/data/assets.js for site/category references and events.js for event photos. AssetVisual handles errors and optional responsive srcSet/sizes. The logo's whiteBackgroundMask option is specific to the current 1000×355 reference; a verified transparent logo can use the normal image path. Preserve fixed visual regions and crops to avoid layout shift when replacing media. See public/ASSET_GUIDE.md.

## Sports journey design

Ink/lime hero introduces THE ROAD TO GLORY. Paper chapters alternate text and unframed sport artwork with ample whitespace. The winding circuit is a muted 32px road, fine dashed center and 3px illuminated progress stroke. Markers and inter-chapter crossing positions are measured from the DOM, not hardcoded to a viewport. Rounded desktop turns stay outside the text/art regions so the road remains visibly continuous. ResizeObserver rebuilds the SVG; ScrollTrigger drives progress and subtle chapter entrances. Mobile uses a narrow gently curved left rail. A sticky progress/arena jump control avoids forcing visitors through the whole journey.

Nine vector identities share the same stroke language: Basketball court/ball, Football pitch/direction, Volleyball net, Table Tennis paddle/ball, Cricket bat/stadium arcs, Badminton shuttle, Chess board/knight, Carroms board/striker ripples and Kabaddi boundaries. Photos replace these within fixed regions through SportImage and centralized sportsAssets.

SportOpening exclusively owns the fullscreen cover inside the existing native dialog: Basketball circle/court lines; Football directional pitch wipe; Volleyball net strips; Table Tennis moving ball/split panels; Cricket sweeping ellipse; Badminton diagonal lift; Chess 16 tiles; Carroms expanding circle/ripple; Kabaddi expanding boundary. Effects last roughly 0.85–0.95s, have a 1.6s recovery timer, and bypass immediately for reduced motion. Content remains inert until covered, then reveals beneath the retracting cover. Closing restores body padding/scroll and opener focus. All listeners, observers, ScrollTriggers and GSAP contexts are cleaned up.
