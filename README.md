# Fluxly Landing Page

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
[![Live Demo](https://img.shields.io/badge/Live_Demo-fluxly.awadbakr1984.workers.dev-6366F1?style=flat-square&logo=cloudflare&logoColor=white)](https://fluxly.awadbakr1984.workers.dev)

A premium, world-class SaaS landing page built as a portfolio project — inspired by the design language of Stripe, Linear, and Vercel. Features deep glassmorphism, animated UI, a realistic dashboard mockup, and a fully responsive layout.

> **Portfolio project by [AwadBakr.dev](https://awadbakr.dev)**

---

## Features

- **Deep dark theme** — true `#080810` background with a global dot-grid texture and hero radial glow
- **Glassmorphism cards** — `backdrop-blur`, semi-transparent fills, and subtle white borders throughout
- **Animated hero** — floating dashboard mockup with a 5s bob loop, gradient border, macOS-style window chrome, and two floating stat badges
- **Real-looking dashboard** — gradient bar chart, live indicator, stat cards with icons, and activity feed
- **Animated badge** — pulsing blue-to-purple `box-shadow` glow on the "Fluxly 2.0" pill
- **Frosted glass navbar** — always-on blur with a deepening effect on scroll, glowing CTA button
- **Features section** — per-card color-matched icon glow + `whileHover` border-shadow reveal
- **Pricing section** — gradient border on the Pro card, animated "Most Popular" badge, styled checkmarks
- **Scroll-triggered animations** — every section fades and slides in via Framer Motion `whileInView`
- **Fully responsive** — mobile-first layout, collapsible nav, stacked grids on small screens

---

## Tech Stack

| Tool | Version | Role |
|---|---|---|
| [React](https://react.dev) | 19 | UI library |
| [Vite](https://vitejs.dev) | 8 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion) | 12 | Animations |
| [Lucide React](https://lucide.dev) | latest | Icon set |

---

## Getting Started

### Prerequisites

- Node.js `>=18`
- npm `>=9`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/fluxly-landing.git
cd fluxly-landing

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```
fluxly-landing/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and SVGs
│   ├── components/
│   │   ├── Navbar.jsx      # Frosted glass sticky nav
│   │   ├── Hero.jsx        # Hero + animated dashboard mockup
│   │   ├── Features.jsx    # 6-card feature grid with hover glows
│   │   ├── HowItWorks.jsx  # 3-step process section
│   │   ├── Pricing.jsx     # 3-tier pricing with gradient Pro card
│   │   ├── Testimonials.jsx# Customer quotes + trust bar
│   │   └── Footer.jsx      # Links, socials, CTA banner
│   ├── App.jsx             # Root layout, dot-grid overlay
│   ├── index.css           # Global styles, CSS keyframes
│   └── main.jsx            # React entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## Screenshots

> _Add screenshots or a screen recording here to show the finished design._

---

## Customisation

| What to change | Where |
|---|---|
| Brand name, nav links | `Navbar.jsx` |
| Headline, subtext, CTAs | `Hero.jsx` |
| Feature cards | `features` array in `Features.jsx` |
| Pricing tiers and prices | `plans` array in `Pricing.jsx` |
| Testimonials | `testimonials` array in `Testimonials.jsx` |
| Global background colour | `index.css` → `body` + `App.jsx` |
| Dot-grid density | `App.jsx` → `backgroundSize` |

---

## Author

**Awad Bakr** — Frontend Developer

- Portfolio: [awadbakr.dev](https://awadbakr.dev)
- Fiverr: [fiverr.com/your-username](https://fiverr.com/your-username) <!-- replace with your Fiverr link -->
- GitHub: [@awadbakr](https://github.com/awadbakr)

---

## License

[MIT](LICENSE) — free to use as a portfolio reference or starting template.
