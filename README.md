# Malar Blooms — Flower Shop Website

A 3-page React website for a flower shop in Coimbatore, styled with Bootstrap
plus a hand-built "Aurora" animated gradient background (react-bits style —
pure CSS/keyframes, no extra runtime dependency needed).

## Pages
- **Home** (`/`) — Aurora hero, featured flowers, story section, testimonials, CTA
- **Shop** (`/shop`) — filterable flower/bouquet catalog with images and prices
- **Contact** (`/contact`) — Coimbatore studio address, embedded map, contact form

## Run it locally

```bash
npm install
npm start
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
```

The optimized site will be in the `build/` folder — upload that to any static
host (Netlify, Vercel, GitHub Pages, etc).

## Project structure

```
src/
  components/
    NavBar.jsx      -> top navigation, active-link highlighting
    Footer.jsx       -> address, hours, quick links
    Aurora.jsx        -> the animated gradient background component
  pages/
    Home.jsx
    Shop.jsx
    Contact.jsx
  style.css          -> all design tokens + styles (single stylesheet)
  App.js             -> routes
  index.js           -> entry point, imports Bootstrap + style.css
```

## Customizing

- **Colors / fonts**: edit the `:root` variables at the top of `src/style.css`.
- **Products**: edit the `CATALOG` array in `src/pages/Shop.jsx`.
- **Address / phone / hours**: edit `src/pages/Contact.jsx` and `src/components/Footer.jsx`.
- **Images**: all images currently load from Unsplash by URL — swap the `img`
  fields for your own photos (drop files into `public/images/` and reference
  them as `/images/yourfile.jpg`).
- **Aurora intensity**: tweak blur, opacity and animation durations in the
  `.aurora__layer` rules in `style.css`.
