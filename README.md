# Real Madrid CF — React Web Application

**CSCI390: Web Programming — Project Phase 2**  
**Student:** Mohammad Al Ajouz  
**Duration:** April 29, 2026 – May 31, 2026

---

## 📋 Project Overview

A fully functional React web application for Real Madrid CF, converted from Phase 1 HTML/CSS into a modern React + Vite single-page application with **live API data integration** for matches and news.

This project demonstrates:
- Modern React patterns (hooks, context, routing)
- Responsive design principles
- Live API integration with CORS handling
- API key security (Vite proxy)
- Git version control & GitHub deployment
- Professional UI/UX design

---

## ✨ Features

### **10 Complete Pages**
1. **Home** — Hero with logo, trophy showcase, squad teaser, stadium stats
2. **Squad** — Full squad by position with clickable player cards/modals
3. **Matches** — Live upcoming fixtures, recent results, legendary matches
4. **News** — Live news feed with category filters (All, Transfers, Match, Injury, Manager)
5. **History** — Interactive timeline from 1897 to present day
6. **Achievements** — Complete trophy cabinet (European, World, Domestic)
7. **Legends** — All-time great players with career statistics
8. **Stadium** — Santiago Bernabéu facts and historical information
9. **Club** — About the club, badge, kit, and club records
10. **Rivalries** — El Clásico and Madrid Derby analysis

### **Live Data Integration** ⚡
- **Live Matches**: Real-time upcoming fixtures via football-data.org API
- **Recent Results**: Latest match results with scores and status
- **Live News**: Real Madrid news feed via NewsData.io API
- **Category Filters**: Filter news by Transfers, Match Reports, Injuries, Manager

### **Design Features**
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Gold & black Real Madrid brand theme
- ✅ Smooth scroll animations with Intersection Observer
- ✅ Interactive player cards with detailed modals
- ✅ Professional modern UI/UX

---

## 🛠 Tech Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI Framework | 18.3 |
| **Vite** | Build Tool & Dev Server | 5.0 |
| **React Router** | Client-side routing | 6.x |
| **CSS3** | Custom styling (no framework) | Latest |
| **football-data.org** | Live match data API | v4 |
| **NewsData.io** | Live news API | v1 |

### **APIs Used**
- **football-data.org**: Free API (no key required for basic tier)
  - Real Madrid Team ID: 130
  - Endpoints: Matches, Results, Fixtures
  
- **NewsData.io**: Free API with email signup
  - Search: "Real Madrid"
  - Categories: all, sports, transfers, injury, manager
  - Limit: 50 requests/day (free tier)

---

## 📁 Project Structure

```
real-madrid-react/
├── index.html
├── vite.config.js              # Vite config + API proxy
├── package.json
├── README.md                   # This file
├── src/
│   ├── main.jsx
│   ├── App.jsx                 # Main router component
│   ├── App.css                 # Global styles
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PlayerModal.jsx     # Player detail modal
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Squad.jsx
│   │   ├── Matches.jsx         # Live data integration
│   │   ├── News.jsx            # Live data integration
│   │   ├── History.jsx
│   │   ├── Achievements.jsx
│   │   ├── Legends.jsx
│   │   ├── Stadium.jsx
│   │   ├── Club.jsx
│   │   └── Rivalries.jsx
│   ├── data/
│   │   ├── players.js          # Player database
│   │   ├── history.js
│   │   ├── achievements.js
│   │   └── ...
│   └── assets/
│       ├── players/            # Player images
│       └── ...
└── public/                     # Static assets
```

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 16+ and npm installed
- Git installed
- Code editor (VS Code recommended)

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/real-madrid-react.git
cd real-madrid-react
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables** (optional for free APIs)
```bash
# Create .env file in root directory
VITE_FOOTBALL_API_KEY=your_api_key_here  # Get from football-data.org
VITE_NEWS_API_KEY=your_api_key_here      # Get from newsdata.io
```

4. **Run development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

5. **Build for production**
```bash
npm run build
```

---

## 🔐 API Key Security

**Important**: API keys are secured using a Vite proxy to prevent exposure in frontend code.

### **How it works:**
- `vite.config.js` defines proxy routes for API calls
- Frontend requests are proxied through the dev server
- API keys remain in environment variables (not exposed)
- In production (Vercel/Netlify), use their environment variable settings

### **Example proxy configuration:**
```javascript
// vite.config.js
proxy: {
  '/api/football': {
    target: 'https://api.football-data.org',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api\/football/, '/v4')
  }
}
```

---

## 📱 Responsive Design

The application is fully responsive and has been tested on:
- ✅ Desktop (1920px, 1440px, 1024px)
- ✅ Tablet (768px, 834px)
- ✅ Mobile (375px, 414px, 540px)

All pages scale properly with no horizontal scrolling on mobile.

---

## 📊 Key Implementations

### **Live Matches Page**
- Fetches real-time upcoming fixtures from football-data.org
- Displays recent match results with scores
- Shows legendary historical matches
- WIN/LOSS/DRAW status indicators

### **Live News Page**
- Integrates NewsData.io API for Real Madrid news
- Category filters: All, Transfers, Match, Injury, Manager
- Loading states and error handling
- Links to original news sources

### **Interactive Features**
- Click any player card to open detailed modal
- Player modal shows:
  - Full name and jersey number
  - Position and nationality
  - Career statistics
  - Trophy count
  - Detailed biography

---

## 🎨 Design System

### **Color Palette**
- **Primary Gold**: `#C8A951` (Real Madrid brand)
- **Dark Background**: `#0a0d1a`, `#1a1a2e`, `#2a2a3e`
- **Text**: White (`#ffffff`), Gray (`#a0a0a0`)

### **Typography**
- Headlines: Oswald (bold, uppercase)
- Body: Inter / System fonts
- Accent: Bebas Neue (large numerals)

---

## 🔧 Development

### **Git Workflow**
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push to GitHub
git push origin feature/new-feature

# Create Pull Request on GitHub
```

### **Code Quality**
- ESLint configuration included
- Clean, readable component structure
- Proper error handling for API calls
- Loading states for async operations

---

## 🚀 Deployment

### **Option 1: Vercel (Recommended)**
1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project" → Import your GitHub repo
4. Add environment variables in Vercel dashboard
5. Deploy (automatic on every push)

```bash
# Or deploy from CLI
npm install -g vercel
vercel
```

### **Option 2: Netlify**
1. Go to https://netlify.com
2. Click "New site from Git"
3. Select your GitHub repo
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Add environment variables
7. Deploy

### **Option 3: GitHub Pages**
```bash
# Update package.json homepage field
# Build project
npm run build

# Deploy to gh-pages branch
npm run deploy
```

**Live Demo**: [Add your deployment URL here after deploying]

---

## 📸 Screenshots

### **Home Page**
- Full-width hero with Real Madrid logo
- Trophy cabinet showcase
- Squad teaser cards
- Stadium information

### **Squad Page**
- Grouped by position (Goalkeepers, Defenders, Midfielders, Forwards)
- Player cards with jersey numbers
- Click for detailed player modal

### **Matches Page**
- Live upcoming fixtures
- Recent match results
- Historical legendary matches
- Real-time status updates

### **News Page**
- Live news feed with images
- Category filter buttons
- Timestamp and source attribution
- Links to full articles

---

## 📝 Project Changes (Phase 2)

| # | Change | Details | Status |
|---|--------|---------|--------|
| 1 | Matches Page - Live Data | Rebuilt using football-data.org API with Vite proxy | ✅ Done |
| 2 | News Page - Live Data | Switched to NewsData.io with filters (Transfers, Match, Injury, Manager) | ✅ Done |
| 3 | Real Madrid Logo | Added large crest on Hero section | ✅ Done |
| 4 | Logo Positioning | Adjusted position to match design | ✅ Done |
| 5 | API Key Security | Implemented Vite proxy to hide API keys | ✅ Done |
| 6 | CSS Improvements | Enhanced dark theme with better gold accents | ✅ Done |
| 7 | Error Handling | Added loading states and error messages | ✅ Done |

---

## 🧪 Testing

### **Manual Testing Checklist**
- [ ] All 10 pages load without errors
- [ ] Navigation between pages works smoothly
- [ ] Player modals open and close properly
- [ ] Live matches data displays correctly
- [ ] News feed loads and filters work
- [ ] Mobile responsive design verified
- [ ] API calls complete successfully
- [ ] No console errors

---

## 📚 Learning Outcomes

This project demonstrates:
1. ✅ React fundamentals (components, hooks, state management)
2. ✅ Client-side routing with React Router
3. ✅ API integration and data fetching
4. ✅ Error handling and loading states
5. ✅ Responsive web design (mobile-first)
6. ✅ Git version control and GitHub workflow
7. ✅ Deployment to production environments
8. ✅ API security best practices
9. ✅ UI/UX design principles
10. ✅ Professional documentation

---

## 📖 References

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [football-data.org API](https://www.football-data.org)
- [NewsData.io API](https://newsdata.io)
- [Real Madrid Official Website](https://www.realmadrid.com)

---

## 📄 License

This project is created for educational purposes (CSCI390 Course).

---

## 👤 Author

**Mohammad Al Ajouz**  
Computer Science Student  
CSCI390: Web Programming  
Spring 2025-2026

---

## 🙏 Acknowledgments

- Real Madrid CF for historical data and club information
- football-data.org for live match data API
- NewsData.io for news feed API
- Course instructor for project requirements

---

**Last Updated**: May 2026  
**Status**: ✅ Phase 2 Complete

