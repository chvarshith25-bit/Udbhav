# UI/UX tooling setup

Installed November 4, 2026 in this cloud checkout. Website source, assets, runtime dependencies and functionality are unchanged. Pull this commit into your Windows `Udbhav` folder to obtain the setup there. Restart your agent after pulling; approve project trust through its normal UI if required.

## Installed skills

All skills are ordinary project files under `.agents/skills/`, the shared project location used by the current Codex and Antigravity installers. No symlinks or global installs are required. Codex discovery was checked; Antigravity is not installed in this environment, so its actual loading must be checked on your machine.

| Tool | Installation and scope |
| --- | --- |
| [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | Official `ui-ux-pro-max-cli@2.15.0`, binary `uipro`; initialized for Codex and Antigravity. Includes `ui-ux-pro-max` and seven bundled companion skills. Python 3 search smoke test passed. Some optional companion workflows reference other tools; those were not installed. |
| [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) | `vercel-react-best-practices`, `vercel-composition-patterns`, `web-design-guidelines`, `vercel-react-view-transitions`. Omitted React Native, deployment, credentials and account-cost tooling. |
| [Anthropic Frontend Design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) | Only `frontend-design` selected from the Anthropic collection. |
| [21st.dev](https://github.com/21st-dev/skill) | All seven official skills: `21st-cli-use`, `21st-ai`, `21st-registry`, `21st-design-sync`, `21st-ui-build`, `21st-ui-explore`, `21st-ui-review`. CLI `1.18.0` verified. Login pending. |
| [Motion AI Kit](https://motion.dev/docs/ai-kit-install) | Official interactive `motion-ai@14.2.0`, Project → Codex. Installed `motion` into the same shared skill directory. Free Motion MCP configured. No Motion+ subscription or login enabled. |

There are 20 installed `SKILL.md` files. `skills-lock.json` records the Vercel, Anthropic and 21st GitHub sources. UI UX Pro Max and Motion use their own installers. Upstream references/licenses are in `.agents/upstream-sources.json` and `.agents/upstream-licenses/`; skill-specific licenses remain with the skills. Skills were installed only, not applied to the website.

## Reproduce or update

These are the verified official commands with explicit scope/selection. Run from the project root:

```bash
npx --yes --package=ui-ux-pro-max-cli@2.15.0 uipro init --ai codex
npx --yes --package=ui-ux-pro-max-cli@2.15.0 uipro init --ai antigravity
npx skills@1.7.6 add vercel-labs/agent-skills --skill vercel-react-best-practices vercel-composition-patterns web-design-guidelines vercel-react-view-transitions -a codex antigravity --copy -y
npx skills@1.7.6 add anthropics/skills --skill frontend-design -a codex antigravity --copy -y
npx skills@1.7.6 add 21st-dev/skill --skill '*' -a codex antigravity --copy -y
npx motion-ai@14.2.0
npx skills@1.7.6 list -a codex --json
```

The published Motion 14.2.0 installer adds both free and Motion+ MCP entries, whereas the current repository/docs separate the premium option. This setup retains only the free `motion` entry. Recheck `.codex/config.toml` after rerunning that installer.

## MCP connections and remaining authorization

[Figma official setup](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/) documents `codex mcp add figma --url https://mcp.figma.com/mcp`. That command failed here because the user-level Codex config is read-only. The supported project configuration is saved instead:

```toml
[mcp_servers.motion]
url = "https://mcp.motion.dev"

[mcp_servers.figma]
url = "https://mcp.figma.com/mcp"
```

Both entries validate with Codex configuration overrides. This managed session does not currently activate project MCP settings (`codex mcp list` returned no servers). On your machine, trust/open the project and restart Codex, then check `codex mcp list`. If project settings are unavailable, run the official Figma add command locally and add Motion with `codex mcp add motion --url https://mcp.motion.dev`.

Complete these steps on your own machine:

1. Run `npx @21st-dev/cli@1.18.0 login`, approve the browser sign-in, then run `npx @21st-dev/cli@1.18.0 whoami`. The cloud login reached the browser URL but its localhost callback cannot authenticate your local machine; it was cancelled. Status remains **not logged in**.
2. **Figma plugin connected and authenticated in this session:** the official `figma_whoami` check passed after authorization. No design files were created or modified. The separate local Codex CLI connection is optional; if using it, confirm Figma appears in `codex mcp list`, then run `codex mcp login figma` if it needs authorization. Plugin authorization does not prove that a separate local CLI is signed in.
3. Check Motion's MCP tools in your agent. The free server requires no account. Motion+ is optional and not configured.

The executor network allowlist excludes these hosted MCP/application domains, so direct shell connectivity remains unverified. The connected Figma plugin uses its own integration and its authenticated account check succeeded. Motion live connectivity and 21st.dev login remain pending. No tokens or credentials are included. Antigravity skills are available in the shared folder; its MCP connections must be added in Antigravity's own settings if wanted. No unsupported global Antigravity configuration was written.

## Verification and references

Verified: 20 skill files, portable GitHub lock sources, no symlinks, valid MCP TOML, Codex parsing of both endpoints, local UI UX search, CLI help/auth status, `npm run check`, and `npm run build`. SHA-256 comparison confirmed all pre-existing tracked files unchanged before the handoff-document updates; application code, package manifests, lockfile and assets remain unchanged.

Reference-only resources (no component libraries installed): [Motion Primitives](https://motion-primitives.com), [React Bits](https://reactbits.dev), [Magic UI](https://magicui.design), [Aceternity](https://ui.aceternity.com), [shadcn/ui](https://ui.shadcn.com), [GSAP](https://gsap.com), [Coolors](https://coolors.co), [Color Hunt](https://colorhunt.co), [Awwwards](https://www.awwwards.com).
