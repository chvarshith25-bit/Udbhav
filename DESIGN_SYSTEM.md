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

Hero/gallery concept visual is generated and labeled; optimized WebP is 138KB desktop / 45KB mobile. Gallery and future event images lazy load. Official event images are absent, represented by deliberate category artwork. Never pass generic imagery off as past UDHBHAV photography.

The top-right institutional logo uses the original red/navy/black colors over the dark header. An SVG alpha mask remove the white plate while preserving the source artwork. It is sized responsively without stretching. Mobile hides the small festival-brand caption to preserve room for the complete institutional lockup and menu.

## Multi-page motion system

Homepage: one viewport on desktop, fluid type based on both width and height; mobile/short screens preserve accessible content through a minimum height. No long homepage, no category anchors. Supporting pages retain the established design.

Route transitions use GSAP exclusively. Sports: sharp diagonal lime cover with oversized sans typography. Cultural: opposing clay-colored curtains with editorial italic typography. Technical: four precise periwinkle columns with monospaced typography. Festival information uses neutral paper panels. Each transition lasts roughly one second. Overlay panels and route-shell fading have a single owner; hero GSAP only touches children, and Motion only handles event dialogs. Category content no longer runs a competing entrance animation.

Keep the outgoing page mounted until covered; mount the destination before uncovering it. Never lazy-load the destination without adding an explicit readiness handshake. Block duplicate clicks synchronously, preserve native modified-link clicks, and support history interruptions. A three-second recovery timer prevents stale inert/scroll-lock states. Reduced motion skips all route choreography. Route headings receive focus after navigation, and a polite live region announces progress.

## Opening: THE BIRTH OF UDHBHAV

An original 3.2-second brand ident: near-black stage and warm vertical spark (0–0.5s); three restrained lime/clay/periwinkle trajectories converge (0.5–1.3s); clipped UDHBHAV wordmark and spaced 2K27 resolve from their movement (1.3–2.2s); the wordmark moves to the measured hero position while the real image, dates, logo and category entries appear (2.2–3.2s). Existing fonts, colors and homepage composition are retained.

`IntroSequence` exclusively owns the opening overlay and initial hero handoff. The normal hero animation must stay disabled for that initial mount; category transition choreography is unchanged. GSAP context revert restores every affected inline style on completion, skip or interruption. The fixed overlay occupies no layout space and the underlying site is inert while it plays. Reduced motion bypasses immediately. No sound, heavy media or external animation dependencies.
