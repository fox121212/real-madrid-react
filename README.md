# Real Madrid CF — Fan Site (Phase 2)

**CSCI390: Web Programming — Project Phase 2**
**Mohammad Al Ajouz**

## About

A fully functional React web application for Real Madrid CF, converted from Phase 1 HTML/CSS into a modern React + Vite single-page application with live data integration.

## Features

- **10 Pages**: Home, Squad, Matches, News, History, Achievements, Legends, Stadium, Club, Rivalries
- **Clickable Player Cards**: Click any player to open a detailed modal with stats, trophies, bio, and metadata
- **Live Matches**: Real-time upcoming fixtures and recent results via TheSportsDB API (free, no key)
- **Live News**: Live Real Madrid news feed via Google News RSS → RSS2JSON
- **Responsive Design**: Fully responsive — works on mobile, tablet, and desktop
- **Smooth Animations**: Intersection Observer fade-in animations on scroll
- **Gold & Black Theme**: Matching the Real Madrid brand identity

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool |
| React Router v6 | Client-side routing |
| Custom CSS | Styling (no framework) |
| TheSportsDB API | Live match data (free) |
| RSS2JSON + Google News | Live news feed (free) |

## Pages

1. **Home** — Hero, trophies showcase, squad teaser, stadium stats
2. **Squad** — Full squad by position, clickable player cards with modals
3. **Matches** — Live upcoming fixtures + recent results + legendary matches
4. **News** — Live news feed with category filters (Transfers, Match, Injury, Manager)
5. **History** — Timeline of club history from 1897 to present
6. **Achievements** — Full trophy cabinet (European, World, Domestic)
7. **Legends** — All-time great players with career stats
8. **Stadium** — Santiago Bernabéu facts and history
9. **Club** — About the club, badge, kit, records
10. **Rivalries** — El Clásico and Madrid Derby

## Setup Instructions

```bash
# Clone the repository
git clone https://github.com/yourusername/real-madrid-react

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

Deployed on **Vercel**: https://real-madrid-react.vercel.app

To deploy your own:
1. Push to GitHub
2. Go to vercel.com → Import project
3. Select your repo → Deploy (zero config needed)

## APIs Used

- **TheSportsDB** (https://www.thesportsdb.com) — Free, no API key required
  - Real Madrid Team ID: 133739
- **RSS2JSON** (https://rss2json.com) — Free RSS to JSON conversion
  - Source: Google News RSS feed for Real Madrid

## Screenshots

_See /screenshots folder_
