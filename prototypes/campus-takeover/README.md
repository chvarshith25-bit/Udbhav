# The Grand Unveiling review entry

The legacy directory name is retained for hosting compatibility. This entry imports `src/main.jsx` and previews the production eight-second intro. A fresh tab session plays the sequence once. Skip Intro or reduced motion restores homepage access immediately.

From the repository root after npm ci:

```sh
node node_modules/vite/bin/vite.js --config prototypes/campus-takeover/vite.config.js
node node_modules/vite/bin/vite.js build --config prototypes/campus-takeover/vite.config.js
```

The local review build writes only to this folder's ignored dist/. Production npm run build still builds the main website. The review deployment mirror uses a root dist/ override for hosting compatibility.

The prior Campus Takeover opening is available in Git history.
