# Godhuli Vyas — portfolio

Single page, no framework, no build step, no paid tools.

```
index.html          structure only
assets/data.js      ← ALL CONTENT LIVES HERE. Edit this, not the HTML.
assets/style.css    design system
assets/app.js       timeline, sheet, interactions
assets/img/         photos
```

## Editing content

`assets/data.js` holds three lists:

- **`timeline`** — the stations on the winding path, oldest first. Nine today. Add an object and it appears on the path automatically (add its `[x, y]` to `NODES` in `app.js` if you go past nine).
- **`systems`** — the shipped-work grid. `preview` picks which mini product replica renders; `links` with a label containing "live" surfaces the **Open live ↗** button on the card.
- **`ledger`** — the operating-work table, `[what, what it did, result]`.

Each entry: `thesis` is the one sentence people read; `bullets` are the three they read if curious; `metrics` are the numbers; `stack` are the chips.

## How the page works

- **The path** — an SVG serpentine that draws itself as you scroll. Each station fades in as the line reaches it, then waits to be clicked. Click → a side sheet with the full story, metrics, stack and links; arrow keys or Prev/Next walk the whole timeline without closing. Below 860px it becomes a tappable list instead.
- **Product previews** — the mini screens on each card are HTML/CSS replicas of the real products (Saarthi, ethOS, Produscope, Automon, TimesPro), built to match the live sites. No screenshots to go stale, nothing to load.
- **Portrait** — cursor-driven reveal: a desaturated copy sits on top, your pointer develops the real photo underneath.
- Everything honours `prefers-reduced-motion`; no horizontal overflow at 375px.

## Run locally

```bash
npx serve .
```

## Publish for free

**Netlify Drop** — drag this folder onto app.netlify.com/drop. Live in under a minute.
**GitHub Pages** — push, then Settings → Pages → `main` / root.
**Cloudflare Pages** — connect the repo, preset "None", output directory `/`.

Only a custom domain costs money (~₹900/year); all three hosts attach one free.
