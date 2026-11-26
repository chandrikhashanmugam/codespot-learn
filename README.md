# CodeSpot Learn

A responsive online learning platform homepage built with
Bootstrap 5, Tailwind CSS v4 and Vite.

## Features

- Responsive navigation (Bootstrap)
- Hero, course categories and featured courses (Tailwind CSS)
- Registration form with validation (front-end only)
- Tested on mobile, tablet and desktop

## Getting started

Requirements: Node.js 20.19 or newer, and npm.

```bash
git clone https://github.com/chandrikhashanmugam/codespot-learn.git
cd codespot-learn
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Production build

```bash
npm run build     # creates the dist folder
npm run preview   # serves dist at http://localhost:4173
```

## Live website

- Netlify: https://YOUR-SITE.netlify.app  <!-- replace after the first deploy -->
- Vercel: https://YOUR-PROJECT.vercel.app
- GitHub Pages: https://chandrikhashanmugam.github.io/codespot-learn/

## Deployment

- Build command: `npm run build`
- Output directory: `dist`
- Netlify settings live in `netlify.toml`.
- GitHub Pages uses `.github/workflows/deploy.yml`, which builds with
  `--base=/codespot-learn/`. If your repository has a different name,
  change that path in the workflow.
- No environment variables or secrets are needed.

## Planning documents

See the `docs` folder: requirements, sitemap, wireframe and weekly reviews.
