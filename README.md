# Snowy portfolio

A single-page developer portfolio built with React, TypeScript, and Vite.
No UI libraries: the snow is a canvas, the trees are generated SVG, and the
theme is plain CSS variables.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Make it yours

- **Content:** edit `src/data.ts` (name, tagline, projects, skills, links).
- **Colors:** edit the variables at the top of `src/index.css`.
  Syntax colors are `--tok-*`, the sky and trees are `--sky-*`, `--tree-*`, `--snow-*`.
- **Forest:** `src/components/Forest.tsx`. Change `LAYERS` to add or remove trees,
  or change the `seed` to get a different arrangement.
- **Page title and description:** `index.html`.

## Deploy

`npm run build`, then upload the `dist/` folder to Netlify, Vercel, Cloudflare Pages,
or GitHub Pages.
