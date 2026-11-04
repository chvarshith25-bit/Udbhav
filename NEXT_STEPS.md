# Next steps

UI/UX tooling: pull the setup and restart the local agent; complete 21st.dev login on your own machine, enable trusted project MCP configuration and verify Motion connectivity. Figma plugin authentication is verified in this session; authorize the separate local Codex CLI only if using it. Verify skill discovery in Antigravity. See UI_UX_SKILLS.md. No website redesign is part of this tooling installation.

1. Obtain verified official logo files, real festival/event photography and approved posters. Replace the current concert concept art and logo display reference through src/data/assets.js; retain correct disclosure/provenance until approved replacements exist. Follow public/ASSET_GUIDE.md.
2. Confirm event descriptions/rules, date assignments, times, venues, both student coordinators and registration/contact details. Populate events.js; keep unknown values null. Verify destinations before enabling actions.
3. Add confirmed schedule entries and the Annual Day programme. Never infer dates/times from category order. Add only approved sponsors/partners.
4. Review Safari/Firefox, screen readers and physical iOS/Android devices, including mid-range motion performance. Current browser verification used Chromium on Linux.
5. Preserve the single-screen homepage and dedicated category routes. Test direct reloads, Back/Forward, rapid clicks, keyboard focus and interrupted transitions when changing navigation.
6. Keep THE FESTIVAL COMES ALIVE opening within 9–10 seconds and independent of images/video/audio. Test new-session playback, refresh suppression, Skip/Replay, reduced motion, interruption recovery and category-return behavior after intro changes.
7. Codex and Antigravity should fetch the same GitHub repository before work and update the current handoff documents afterward. Preserve Sites identity and its separate deployment mirror.
8. Vercel deployment is ready if requested: Vite build to dist with committed SPA rewrites. Preserve owner-private access on Sites until the owner requests otherwise.

Optional sound is not implemented. Add it only if requested, with an explicit user-activated control.

9. Add approved Sports photographs in public/images/events/<sport-id>/ and populate src/data/sportsAssets.js. Verify main/additional images, crop, alt text and broken-image fallback before replacing the vector studies.
10. Review the Sports winding path and nine opening effects on physical devices and Safari/Firefox. Recheck marker alignment after layout changes, native detail scrolling, source-position restoration, keyboard jump controls and reduced motion.

- Cricket now has four supplied photos. Review those crops and provide approved images for the other eight arenas when available; no need to change the gallery component or page structure.

- Review all five connected intro scenes on physical iOS/Android and Safari/Firefox, including basketball impact → stage pool → coding canvas → identity → homepage alignment. Keep institution/date captions legible on short screens.
