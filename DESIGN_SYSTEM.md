# Design system

## Approved opening direction

THE CAMPUS TAKEOVER is a nine-second continuous illustrated festival ground. Preserve the approved SVG composition, ink/paper/lime palette, night #080f12, warm floodlight #efce8d and desaturated pavilion blue. Court, stage, technology pavilion, countdown display, crowd/festoon/perimeter illumination and camera/title handoff share one environment. No real-campus layout claim. All playback/testing controls are removed; the scene design and animation remain unchanged.

## Tokens and composition

Ink #171914; paper #f3f2eb; lime #d7f34d. Muted #77796f; rules #d6d7cd. Sports artwork uses sage, Cultural clay and Technical soft periwinkle. Use the system Arial/Helvetica stack and Georgia for editorial italics. No external font downloads.

Gutters: clamp(22px, 4.5vw, 88px). Standard section padding: 95px desktop / 65px mobile. Breakpoints: 760px mobile and 1100px intermediate. Fluid display type uses tight tracking; small labels use spaced uppercase. Prefer hairline dividers, straight edges and expressive whitespace over repeated cards.

The homepage extends the ink/paper/lime identity into THE FESTIVAL IS YOURS: one SVG court/stage/pavilion environment with restrained sage, clay and blue light. The previous concert concept image remains available; its responsive WebPs and the unchanged colored logo reference are centralized in assets.js. The logo's alpha mask removes the white plate without recoloring its artwork. Do not add unrelated visual effects or imagery.

## Homepage arena and Sponsors

Keep UDHBHAV as the centerpiece and preserve the shared VJIT header without CSS overrides. Three non-card spatial entrance signs connect to the existing routes; desktop hit regions include their scenery. Active state is centralized, with one lighting zone and real data-derived event previews. Finite GSAP opacity/transform/detail changes react to input, not endless loops. Mobile has dedicated symbols/signs; the ambient panorama is optional at small heights. No real-campus geography or photography claims.

Sponsors & partners is a secondary venue-style entrance. Use the native dialog and centralized sponsor data; no fictitious names, logos or tiers. Preserve focus containment, Escape/backdrop/close, body-style restoration and return focus. New homepage rules are scoped through home-page.arena-home and arena-/sponsors- classes so category styles remain untouched.

## Motion ownership

- IntroSequence: nine-second Campus Takeover film and initial homepage handoff only. GSAP context reverts every affected inline style.
- useArenaMotion: homepage SVG nodes only; finite input-driven lighting/detail effects, disabled while the intro/modal/route owns access.
- SponsorsOverlay: its dialog content entrance only, with a scoped GSAP lifecycle.
- useFestivalMotion: normal homepage entrance on mounts not owned by the intro; scoped GSAP lifecycle and reduced-motion handling.
- PageTransitionProvider/choreography: route-shell fading, cover/reveal panels and transition labels. GSAP only.
- Motion: standard Technical dialog UI. Cultural owns its native dialog reveal with GSAP. Sports details disable that entrance and use their own GSAP cover. Do not assign a second animation system to the same node.

Opening timing remains identical to the approved prototype: quiet ground 0–1.1s; floodlights 1.1–3s; 03/02/01 display 3–6s; whole-ground/identity illumination 6–7.25s; camera and measured homepage handoff 7.25–9s. FestivalGround is the unchanged original SVG scenery. Intro styles live in src/intro/intro.css. No media, sound or WebGL dependency.

Session key `udbhav:intro:v1` is claimed before initialization. No playback controls, Escape skip or replay handler. Reduced motion/direct category visits bypass the film. Resize preserves the current playhead; hidden-tab events do not deliberately pause or skip. Initialization failure and stalled-animation recovery restore access. Suppress normal hero entrance for the intro-owned mount; no second animation system owns the film nodes.

Route choreography: diagonal lime Sports cover, Cultural stage-origin lighting and expressive festival-banner reveal, staggered periwinkle Technical columns; paper panels for other destinations. Cultural targets 1.2–1.8 seconds (1.49 seconds of timeline animation plus the route commit); other routes retain their existing timing. Keep the old route mounted until fully covered and the destination ready before revealing. Three-second recovery timer prevents stale overlays/locks. Reduced motion skips choreography immediately.

## Responsive and accessible behavior

Desktop home fits one viewport using width/height-aware typography. Mobile home uses a separate year line and stacked category entries; very short screens may scroll. Category art/descriptions stack on mobile. Category navigation uses real links and aria-current; schedule tabs support arrows and Home/End. Dialogs retain focus, close on Escape and return focus to the opener. Route headings receive focus without scroll jumps. Preserve visible focus indicators, labeled inputs and touch targets.

## Asset slots and fallbacks

The concert is disclosed AI-generated concept art; the logo is a restored display reference, not verified official provenance. Gallery/category/event artwork is original SVG/CSS. Hero fallback uses orbital tracks, a coordinate grid and flowing lines; gallery shares that language. No invented event coverage.

Use src/data/assets.js for site/category references and events.js for event photos. AssetVisual handles errors and optional responsive srcSet/sizes. The logo's whiteBackgroundMask option is specific to the current 1000×355 reference; a verified transparent logo can use the normal image path. Preserve fixed visual regions and crops to avoid layout shift when replacing media. See public/ASSET_GUIDE.md.

## Sports journey design

Ink/lime hero introduces THE ROAD TO GLORY. Paper chapters alternate text and unframed sport artwork with ample whitespace. The winding circuit is a muted 32px road, fine dashed center and 3px illuminated progress stroke. Markers and inter-chapter crossing positions are measured from the DOM, not hardcoded to a viewport. Rounded desktop turns stay outside the text/art regions so the road remains visibly continuous. ResizeObserver rebuilds the SVG; ScrollTrigger drives progress and subtle chapter entrances. Mobile uses a narrow gently curved left rail. A sticky progress/arena jump control avoids forcing visitors through the whole journey.

Nine vector identities share the same stroke language: Basketball court/ball, Football pitch/direction, Volleyball net, Table Tennis paddle/ball, Cricket bat/stadium arcs, Badminton shuttle, Chess board/knight, Carroms board/striker ripples and Kabaddi boundaries. Photos replace these within fixed regions through SportImage and centralized sportsAssets.

SportOpening exclusively owns the fullscreen cover inside the existing native dialog: Basketball circle/court lines; Football directional pitch wipe; Volleyball net strips; Table Tennis moving ball/split panels; Cricket sweeping ellipse; Badminton diagonal lift; Chess 16 tiles; Carroms expanding circle/ripple; Kabaddi expanding boundary. Effects last roughly 0.85–0.95s, have a 1.6s recovery timer, and bypass immediately for reduced motion. Content remains inert until covered, then reveals beneath the retracting cover. Closing restores body padding/scroll and opener focus. All listeners, observers, ScrollTriggers and GSAP contexts are cleaned up.

## Cultural — THE FESTIVAL STREET

One conceptual illustrated street, not real-campus geography. Midnight #171d36, cream #f5edda, coral #f48673, orange #edab69, lime #d7f34d and restrained lilac #b8acd2 extend the master brand. Façades, arch, perspective paving, festoon lights, banners and a continuous street create depth behind real clickable poster surfaces. System Arial/Helvetica carries expressive festival lettering; Georgia gives choreography/film/auction posters their own tone. Photography is not fabricated.

Angled wayfinding signs select Performance Boulevard, Creator’s Alley and Challenge District. Shared street geometry stays coherent while signage, architectural installations, lighting, floor graphics and poster arrangements change in a finite 0.85-second scoped GSAP sequence. The directory remains an independent, easy-to-scan discovery route, with a native quick-jump control. On mobile the same posters form a compact two-column wall within the street, with a widescreen Short Film treatment; natural scroll and native touch work without dragging or scroll hijacking.

All 13 records map exactly once. acts.js holds their original poster-art direction: rhythm circles/strings, graceful gesture, voice curves, directional dance, photographic aperture, moving frame, widescreen film, folded clue map, challenge symbols, bracket, velocity mark, versus field and auction board. Finite focus/hover motion uses the same mask/translation/scale families. CSS owns each poster’s outer tilt; GSAP owns only inner artwork. New photos populate canonical image arrays, while reused PosterSurface provides the missing/error fallback.

The native fullscreen detail preserves channel-independent event facts, both coordinator slots and registration/contact actions. Pending values stay pending. Native modal behavior plus explicit focus wrapping handles the one-control empty-contact state; Escape/Close and route changes restore source styles/focus/scroll. Reduced motion bypasses all transforms and initialization errors preserve content. No continuous decorative loops, autoplay sound, extra dependencies, WebGL or external fonts. Other routes/branding remain protected.
