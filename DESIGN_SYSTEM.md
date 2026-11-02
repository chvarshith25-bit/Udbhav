# Design system

## Tokens

- Ink #171914; paper #f3f2eb; lime #d7f34d.
- Muted #77796f; rules #d6d7cd. Category art: sage, warm clay and soft periwinkle.
- Sans: Arial/Helvetica system stack, no external font requests. Editorial italic: Georgia.
- Gutters: clamp(22px, 4.5vw, 88px). Section padding: 95px desktop / 65px mobile.
- Display type: fluid clamp scale, tight tracking, limited line length. Small uppercase labels use spaced tracking.
- Main easing: cubic-bezier(.22,1,.36,1). Motion durations 220–1150ms, transform/opacity only.

## Visual grammar

Large type, hairline dividers, flat color, straight edges and asymmetrical proportions. Asterisk and diagonal arrow express motion. No custom cursor, decorative glass, WebGL or scroll hijacking. Avoid identical event cards.

## Motion ownership

GSAP controls hero entrance, static section reveals and hero image parallax. Motion controls category transitions and dialog content. Never have both control the same node. GSAP matchMedia/context revert on unmount; reduced-motion skips its choreography. MotionConfig respects the OS setting; CSS disables smooth scrolling and transitions when reduced motion is requested.

## Responsive and accessible

760px mobile breakpoint and 1100px intermediate adaptation. Mobile hero uses a separate year line and stacked category entry points. Event art and descriptions stack; schedule day controls become horizontal. Native dialog provides focus containment and Escape behavior; focus restores to its opener and body scroll locks. Tabs support arrows and Home/End; search has an accessible label; focus indicators are always visible. Dates are interpreted in Asia/Kolkata. Use semantic headings, real buttons/links and helpful alt text.

## Assets

No verified official photos, posters, video or logos are assumed. The hero and logo currently use the restored display references documented below. Original SVG/CSS motion studies use the same lime, clay and periwinkle palette and line-based geometry as the route transitions. The procedural hero fallback uses orbital tracks, a fine coordinate grid and two flowing lines; gallery uses the same visual language. Category and event placeholders are deliberate original typographic artwork. None represents event coverage.

The top-right VJIT area displays the restored colored logo reference; its fallback is an explicit text placeholder with “OFFICIAL LOGO PENDING”. Approved media is configured in src/data/assets.js and events.js. AssetVisual handles missing/failed assets. Keep fixed art dimensions/crops so replacing assets does not move the layout. Read public/ASSET_GUIDE.md.

## Multi-page motion system

Homepage: one viewport on desktop, fluid type based on both width and height; mobile/short screens preserve accessible content through a minimum height. No long homepage, no category anchors. Supporting pages retain the established design.

Route transitions use GSAP exclusively. Sports: sharp diagonal lime cover with oversized sans typography. Cultural: opposing clay-colored curtains with editorial italic typography. Technical: four precise periwinkle columns with monospaced typography. Festival information uses neutral paper panels. Each transition lasts roughly one second. Overlay panels and route-shell fading have a single owner; hero GSAP only touches children, and Motion only handles event dialogs. Category content no longer runs a competing entrance animation.

Keep the outgoing page mounted until covered; mount the destination before uncovering it. Never lazy-load the destination without adding an explicit readiness handshake. Block duplicate clicks synchronously, preserve native modified-link clicks, and support history interruptions. A three-second recovery timer prevents stale inert/scroll-lock states. Reduced motion skips all route choreography. Route headings receive focus after navigation, and a polite live region announces progress.

## Opening: THE BIRTH OF UDHBHAV

An original eight-second brand ident: near-black stage and warm spark (0–0.8s); three trajectories and SVG ellipses/diamond paths draw a shared energy field (0.8–3.5s); clipped UDHBHAV wordmark and spaced 2K27 resolve from that geometry (3.5–5s); a brief identity hold leads into the measured homepage handoff (6.3–8s). It uses only GSAP, SVG, CSS and typography, with no image, logo or media dependencies. Existing typography and colors are retained.

`IntroSequence` exclusively owns the opening overlay and initial hero handoff. The normal hero animation must stay disabled for that initial mount; category transition choreography is unchanged. GSAP context revert restores every affected inline style on completion, skip or interruption. The fixed overlay occupies no layout space and the underlying site is inert while it plays. Reduced motion bypasses immediately. No sound, heavy media or external animation dependencies.

## Restored display references

At the user's request, the homepage again uses the previous golden concert concept image, and the header uses the previous colored logo reference with its white background masked away. The concert artwork is AI-generated, not real UDHBHAV photography; official asset approval is not assumed. The gallery/category/event placeholders and eight-second image-independent opening remain unchanged. All references remain centralized in src/data/assets.js with procedural fallbacks.
