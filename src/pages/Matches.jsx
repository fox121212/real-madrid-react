import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

// Free API key from football-data.org — get yours at https://www.football-data.org/client/register
// This is a public demo key with 10 req/min limit
const API_KEY = 'b8ccb3fa47a84b5592c3d5e0dd93bd6e';
const REAL_MADRID_ID = 86;

const STATUS_COLORS = {
  FINISHED: 'text-rmgray border-rmgray',
  SCHEDULED: 'text-gold border-gold',
  IN_PLAY: 'text-green-400 border-green-400',
  PAUSED: 'text-yellow-400 border-yellow-400',
  POSTPONED: 'text-red-400 border-red-400',
};
const STATUS_LABELS = {
  FINISHED: 'FT', SCHEDULED: 'Upcoming', IN_PLAY: '● LIVE', PAUSED: 'HT', POSTPONED: 'PPD'
};

const COMP_ICONS = {
  'Primera Division': '🇪🇸',
  'UEFA Champions League': '🏆',
  'Copa del Rey': '🥇',
  'Supercopa de España': '⭐',
};

function MatchCard({ match }) {
  const home = match.homeTeam.name;
  const away = match.awayTeam.name;
  const isRM_home = match.homeTeam.id === REAL_MADRID_ID;
  const score = match.score?.fullTime;
  const hasScore = score?.home !== null && score?.away !== null;
  const statusKey = match.status;
  const compIcon = COMP_ICONS[match.competition?.name] || '⚽';

  const date = new Date(match.utcDate);
  const dateStr = date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
  const timeStr = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

  // Determine result for finished games
  let resultClass = '';
  if (statusKey === 'FINISHED' && hasScore) {
    const rmScore = isRM_home ? score.home : score.away;
    const oppScore = isRM_home ? score.away : score.home;
    if (rmScore > oppScore) resultClass = 'border-l-green-500';
    else if (rmScore === oppScore) resultClass = 'border-l-yellow-500';
    else resultClass = 'border-l-red-500';
  } else if (statusKey === 'SCHEDULED') {
    resultClass = 'border-l-gold';
  } else if (statusKey === 'IN_PLAY') {
    resultClass = 'border-l-green-400';
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
      className={`bg-[#111] border border-white/5 border-l-2 ${resultClass} p-5 hover:bg-[#161616] transition-colors`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-base">{compIcon}</span>
          <span className="font-oswald text-xs tracking-widest uppercase text-rmgray">{match.competition?.name}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-oswald text-xs text-rmgray">{dateStr} · {timeStr}</span>
          <span className={`font-oswald text-xs tracking-widest uppercase border px-2 py-0.5 ${STATUS_COLORS[statusKey] || 'text-rmgray border-rmgray'}`}>
            {STATUS_LABELS[statusKey] || statusKey}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className={`font-bebas text-2xl flex-1 text-left ${isRM_home ? 'text-white' : 'text-white/60'}`}>{home}</div>
        <div className="px-6 text-center min-w-[100px]">
          {hasScore
            ? <span className="font-bebas text-4xl text-gold">{score.home} – {score.away}</span>
            : <span className="font-oswald text-sm text-rmgray tracking-widest">vs</span>
          }
        </div>
        <div className={`font-bebas text-2xl flex-1 text-right ${!isRM_home ? 'text-white' : 'text-white/60'}`}>{away}</div>
      </div>

      {match.venue && (
        <div className="mt-3 text-right">
          <span className="font-oswald text-xs text-rmgray/60 tracking-wide">📍 {match.venue}</span>
        </div>
      )}
    </motion.div>
  );
}

const allTimeMatches = [
  { teams: 'Real Madrid 7–3 Eintracht Frankfurt', comp: 'European Cup Final', date: '18 May 1960', venue: 'Hampden Park', note: 'Greatest Match Ever Played' },
  { teams: 'Real Madrid 2–1 Bayer Leverkusen', comp: 'UCL Final', date: '15 May 2002', venue: 'Glasgow', note: 'Zidane Volley — Greatest UCL Goal' },
  { teams: 'Real Madrid 4–1 Atlético Madrid', comp: 'UCL Final AET', date: '24 May 2014', venue: 'Lisbon', note: 'La Décima' },
  { teams: 'Real Madrid 2–0 Borussia Dortmund', comp: 'UCL Final', date: '1 June 2024', venue: 'Wembley', note: 'La Decimoquinta' },
];

export default function Matches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tab, setTab] = useState('upcoming');

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await axios.get(
          `https://api.football-data.org/v4/teams/${REAL_MADRID_ID}/matches?limit=20`,
          { headers: { 'X-Auth-Token': API_KEY } }
        );
        setMatches(res.data.matches || []);
      } catch (err) {
        setError('Could not load live data. Please check back later or get a free API key at football-data.org');
      } finally {
        setLoading(false);
      }
    };
    fetchMatches();
  }, []);

  const upcoming = matches.filter(m => m.status === 'SCHEDULED').slice(0, 8);
  const live = matches.filter(m => ['IN_PLAY','PAUSED'].includes(m.status));
  const results = matches.filter(m => m.status === 'FINISHED').slice(0, 10);

  const displayedMatches = tab === 'upcoming' ? upcoming : tab === 'live' ? live : results;

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <div className="page-hero">
        <div className="max-w-screen-xl mx-auto">
          <div className="font-oswald text-xs tracking-[4px] uppercase text-gold/70 mb-2">2025–26 Season</div>
          <h1 className="font-bebas text-7xl md:text-9xl text-white leading-none">
            MATCH <span className="text-gold">CENTRE</span>
          </h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-16">
        {/* LIVE BANNER */}
        {live.length > 0 && (
          <motion.div animate={{ opacity: [1, 0.7, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}
            className="bg-green-500/10 border border-green-500/30 text-green-400 font-oswald text-sm tracking-widest uppercase px-6 py-3 mb-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {live.length} Match{live.length > 1 ? 'es' : ''} Live Now
          </motion.div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-white/10 pb-px">
          {[
            { key: 'live', label: `● Live (${live.length})` },
            { key: 'upcoming', label: `Upcoming (${upcoming.length})` },
            { key: 'results', label: `Results (${results.length})` },
          ].map(t => (
            <button key={t.key} onClick={() => setTab(t.key)}
              className={`font-oswald text-sm tracking-widest uppercase px-5 py-2 transition-all border-b-2 -mb-px
                ${tab === t.key ? 'border-gold text-gold' : 'border-transparent text-white/40 hover:text-white/70'}`}>
              {t.label}
            </button>
          ))}
        </div>

        {loading && (
          <div className="space-y-2">
            {[1,2,3].map(i => (
              <div key={i} className="bg-[#111] h-24 animate-pulse border border-white/5" />
            ))}
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-6 font-oswald text-sm tracking-wide mb-6">
            ⚠️ {error}
            <div className="mt-2 text-xs text-rmgray">
              To enable live data: get a free key at <a href="https://www.football-data.org" target="_blank" rel="noreferrer" className="text-gold underline">football-data.org</a> and replace API_KEY in src/pages/Matches.jsx
            </div>
          </div>
        )}

        {!loading && !error && displayedMatches.length === 0 && (
          <div className="text-center py-20">
            <div className="font-bebas text-5xl text-gold/20 mb-4">NO MATCHES</div>
            <div className="font-oswald text-sm text-rmgray uppercase tracking-widest">
              {tab === 'live' ? 'No live matches right now' : 'No matches to display'}
            </div>
          </div>
        )}

        {!loading && !error && (
          <div className="space-y-2">
            {displayedMatches.map(m => <MatchCard key={m.id} match={m} />)}
          </div>
        )}

        {/* All-Time Greatest */}
        <div className="mt-20">
          <SectionHeader label="All Time" title="LEGENDARY" goldPart="MATCHES" />
          <div className="space-y-2">
            {allTimeMatches.map((m, i) => (
              <div key={i} className="bg-[#111] border border-gold/10 border-l-2 border-l-gold p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <div className="font-bebas text-2xl text-white">{m.teams}</div>
                  <div className="font-oswald text-xs tracking-widest uppercase text-gold/70 mt-1">{m.comp} · {m.venue}</div>
                </div>
                <div className="text-right">
                  <div className="font-oswald text-xs text-rmgray">{m.date}</div>
                  <div className="font-oswald text-xs tracking-widest uppercase text-green-400 mt-1">✓ {m.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
