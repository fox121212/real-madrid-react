# Real Madrid CF Fan Site — Phase 2

**CSCI390: Web Programming | Spring 2025-2026**
**Student:** Mohammad Al Ajouz

## Project Description
Full-featured Real Madrid fan website built with ReactJS — upgraded from Phase 1 HTML/CSS.

### Key Features
- Clickable Player Cards with stats, bio & trophy cabinet (modal popup)
- Live Match Centre — real-time fixtures & scores via football-data.org API
- Live News Feed — Real Madrid news via Google News RSS
- 10 pages: Home, Squad, Matches, News, Achievements, Legends, History, Stadium, Club, Rivalries
- Fully responsive (mobile + desktop) with Framer Motion animations

## Tech Stack
- React 18 + Vite | React Router v6 | Tailwind CSS v3 | Framer Motion | Axios

## Setup
1. `npm install`
2. Get free API key at football-data.org, paste in src/pages/Matches.jsx
3. `npm run dev` — runs at localhost:5173
4. `npm run build` — production build

## Deployment
Push to GitHub, import at vercel.com — one click deploy.

## APIs Used
- football-data.org (free tier, 10 req/min) — live match data
- Google News RSS via rss2json (free, no key) — live club news
