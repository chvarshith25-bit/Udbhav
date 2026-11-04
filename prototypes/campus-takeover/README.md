# The Campus Takeover — isolated review prototype

Status: **concept review only; not approved to replace the existing intro.**

One original illustrated festival ground, not a representation of VJIT's actual campus. No photographs, new logos, video, audio, WebGL, external fonts or dependencies. Uses the project's React, GSAP, SVG and CSS. The unchanged homepage is rendered underneath solely to demonstrate the handoff; the production `main.jsx`, intro, routes and styles are not edited. No reads or writes to the production intro session key.

## Run independently

From the repository root, after `npm ci`:

```sh
node node_modules/vite/bin/vite.js --config prototypes/campus-takeover/vite.config.js
```

Open the printed local URL, normally `http://localhost:5174/`.

```sh
node node_modules/vite/bin/vite.js build --config prototypes/campus-takeover/vite.config.js
node node_modules/vite/bin/vite.js preview --config prototypes/campus-takeover/vite.config.js --host 0.0.0.0
```

The isolated build writes only to this folder's ignored `dist/`. Normal `npm run build` continues to build the existing production website. A separate owner-private Sites review deployment uses its own identity outside the production checkout.

## Art direction

Ink `#171914`, paper `#f3f2eb` and festival lime `#d7f34d` remain the brand. Night `#080f12`, warm floodlight `#efce8d` and desaturated pavilion blue give the physical ground depth. Arial/Helvetica display type carries through to the existing homepage. A restrained elevated miniature-set composition puts the court left, stage/display center and technology pavilion right. No category text slides or separate environments.

The distinctive moment is the whole ground turning on at the countdown's conclusion: festoon lighting, a continuous perimeter, the audience and the physical display illuminate together. Foreground towers/trees, a distant skyline, atmospheric beams, stage truss, basketball markings/hoops and working pavilion terminals establish a place rather than a loader.

| Time | Direction |
| --- | --- |
| 0–1.1s | Quiet night ground; restrained camera drift. |
| 1.1–3s | Court floodlights activate, followed by stage lamps and pavilion lighting in the same composition. |
| 3–6s | Giant display counts 03, 02, 01. |
| 6–7.25s | Perimeter/festoon lights and audience illuminate; the display resolves into UDHBHAV 2K27. |
| 7.25–9s | Camera pushes into that display. A measured typography bridge matches the current homepage title while its background, logo, dates and category entries reveal. |

## Review controls and lifecycle

Replay, Pause/Play, a native keyboard-operable timeline scrubber, Skip and Escape. Reduced motion shows the illuminated ground as a still and offers Skip to the homepage; it never starts the film. Hidden tabs pause. Resize preserves the current position and recalculates the handoff. GSAP owns the prototype nodes and cleans up through a scoped context; the existing homepage entrance settles beneath the overlay. Prototype playback never replaces the installed opening or changes its session state.

UI UX Pro Max guided keyboard access, reduced motion and transform/opacity priorities; Frontend Design guided subject-specific composition, typography and a single memorable visual moment; Motion's self-contained guidance informed animation ownership and cleanup. No premium Motion services were required.

Keep this prototype isolated until the owner approves the creative direction. Approval is still needed before any production intro integration, session-controller changes or live website deployment.
