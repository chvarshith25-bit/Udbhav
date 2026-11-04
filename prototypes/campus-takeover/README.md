# Campus Takeover review entry

The concept is approved and now uses the production opening from src/intro. This entry imports src/main.jsx; there is no separate playback harness, debug UI or duplicated animation. It follows the same sessionStorage rules as production: automatic once-per-tab playback, start-time claim, no controls/replay, reduced-motion bypass and initialization failure recovery.

Review: https://udbhav-campus-takeover-review.arcaneharp16.chatgpt.site/ . Main site: https://udbhav-2k27-vjit.arcaneharp16.chatgpt.site/ . Use a fresh session to see playback; refreshing the same tab intentionally does not replay it. Each Site retains its own identity and private audience.

From the repository root after npm ci:

```sh
node node_modules/vite/bin/vite.js --config prototypes/campus-takeover/vite.config.js
node node_modules/vite/bin/vite.js build --config prototypes/campus-takeover/vite.config.js
```

The local review build writes only to this folder's ignored dist/. Production npm run build still builds the main website. The review deployment mirror uses a root dist/ override for hosting compatibility.

The original scenery and nine-second timeline were promoted unchanged to src/intro/FestivalGround.jsx and src/intro/IntroSequence.js. No actual-campus layout is claimed. No new photography, logos, audio, fonts, WebGL or dependencies. Previous interactive-prototype details remain in Git history and docs/SESSION_HISTORY.md.
