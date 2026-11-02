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
