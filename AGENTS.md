# Instructions for Codex and Antigravity

Read README.md, PROJECT_BRIEF.md, DESIGN_SYSTEM.md, PROGRESS.md and NEXT_STEPS.md before changing this project. Preserve working components and the canonical GitHub origin. Both agents work in https://github.com/chvarshith25-bit/Udbhav.git; fetch and inspect collaborator changes before editing. Avoid force pushes.

## Architecture and conventions

- React + Vite + Tailwind v4. Plain JavaScript ESM, JSX components, named supporting sections.
- All event and schedule content belongs in src/data/events.js. Never embed new contact or programme facts in UI code.
- Keep exactly the three primary categories. Gaming and strategy are Cultural subgroups. Do not invent official events.
- Unknown venue, dates, timings, contacts, names and URLs stay null. Render a clearly marked coming-soon state. No dummy contact destinations.
- Photography entries use `{ src, alt }`. Store real assets predictably beneath public/images/events/<id>. Official logo beneath public/logos. Preserve concept-image disclosure until real assets replace it.
- GSAP owns the opening ident, hero and route-transition motion; Motion owns dialog UI transitions. No overlapping control. Always clean up effects and support reduced motion.
- Preserve semantic controls, keyboard tab behavior, native dialog focus management, touch targets and deliberate mobile layouts.
- React Router is required for the multi-page structure. Use TransitionLink for internal navigation; never turn category navigation back into section scrolling. Do not add a backend or new dependency without a real requirement.
- Preserve .openai/hosting.json identity. Never write tokens, passwords or deployment archives into Git.

## Required end-of-session steps

Run npm run check and npm run build; run meaningful browser checks when the environment supports them. Report verification limits honestly. Update PROGRESS.md and NEXT_STEPS.md with completed work, failures, pending assets/content and actionable next tasks. Update the brief/design documentation if decisions changed. Commit meaningful source changes and synchronize with the shared repository without overwriting collaborators.

## Opening ownership

Keep IntroController mounted above the route transition provider, never inside a route. Preserve session key `udbhav:intro:v1`, fail-open behavior, reduced-motion bypass and accessible skip. The opening owns the initial homepage handoff; do not run the usual hero entrance concurrently on that mount. Direct category visits must bypass the ident and category navigation must never replay it.
