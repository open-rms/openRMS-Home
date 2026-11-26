# openRMS-Home

**Provides:** the openrms.dev landing page: the goal, the three-step path, every openRMS
project with its status, values, the non-binding request and funding principles. ·
**Consumes:** nothing at runtime (project list is `src/lib/projects.ts`, mirrored from
the umbrella `PROJECTS.md`). · **Status:** alpha (live at https://openrms.dev). · **License:** AGPL-3.0-or-later (code),
CC-BY-4.0 (content).

SvelteKit 3, Svelte 5, Tailwind v4 and shadcn-svelte, with the same toolchain and theme as
openRMS-Site (`#lib` imports, adapter set in `vite.config.ts`). Every page is prerendered to
plain HTML and served by Cloudflare Workers Static Assets (assets-only Worker, `wrangler.jsonc`).

```sh
pnpm install
pnpm dev        # http://localhost:5174
pnpm check      # svelte-check
pnpm build      # static files in build/ (404.html is the not-found page)
pnpm cf:dev     # build, then serve build/ through wrangler like production
pnpm cf:deploy  # build + wrangler deploy to openrms.dev (needs `wrangler login`)
```

## Updating

- Projects and statuses: edit `src/lib/projects.ts` whenever the umbrella `PROJECTS.md` changes.
- Planned hosts (`directory.`, `auth.`, `rigs.`, `watch.openrms.dev`) are shown as text, not links, until live.
- GitHub: the org is `github.com/open-rms` (`GITHUB_URL` in `src/lib/projects.ts`).
- Funding: principles only until the umbrella `FUNDING.md` is final; no percentages on the page.
