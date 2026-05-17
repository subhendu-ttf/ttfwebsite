# The Tenth Floor — Website

Static site, vanilla HTML/CSS/JS. No build step required.

## How to view locally
1. Unzip into a folder (e.g. `Website_new/site/`).
2. Open `site/index.html` by double-click — works straight from disk. All paths are relative.
3. Sub-pages: open `site/work/index.html`, `site/method/index.html`, etc.

## Stack
- HTML5 + custom-property CSS (no preprocessor)
- Vanilla JS, no dependencies (~95 lines)
- Google Fonts: Barlow Condensed, Inter, Source Serif Pro
- All imagery served from ImageKit CDN: https://ik.imagekit.io/ztdjsu12hs/

## Files
- `index.html` — home (long-form essay)
- `work/index.html` — 12 case studies, filterable by industry & region
- `method/index.html` — Data Detective method, 5 principles
- `team/index.html` — Subhendu & Hasnah leader cards
- `who-we-work-with/index.html` — 5 archetypes
- `contact/index.html` — 3 entry options + direct contact
- `assets/css/style.css` — full token system, all components
- `assets/js/site.js` — nav, filters, scroll-reveal, smooth anchors

## Brand system (locked from TTF_Design_Reference.html)
- Colours: TTF Purple #6D28B1, Deep Purple #3E116B, Lavender #E7DDF0, Soft Panel #F4EFF8, Ink #1D1724
- Display: Barlow Condensed 500 uppercase, tight letter-spacing
- UI: Inter 400-800
- Editorial paragraphs: Source Serif Pro 400/600 + italic

## Deploy
Upload the entire `site/` folder to any static host (Netlify, Vercel, S3+CloudFront, GitHub Pages). Relative paths work from both root domain and subpaths.
