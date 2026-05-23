import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

// Using rss2json API to fetch Real Madrid news from multiple sources (free, no key needed)
const RSS_FEEDS = [
  {
    label: 'ESPN RM',
    url: 'https://api.rss2json.com/v1/api.json?rss_url=https://www.espn.com/espn/rss/soccer/news',
    color: '#e53e3e'
  },
  {
    label: 'BBC Sport',
    url: 'https://api.rss2json.com/v1/api.json?rss_url=https://feeds.bbci.co.uk/sport/football/rss.xml',
    color: '#e53e3e'
  },
  {
    label: 'Sky Sports',
    url: 'https://api.rss2json.com/v1/api.json?rss_url=https://www.skysports.com/rss/12040',
    color: '#0099ff'
  },
];

// Google News filtered for Real Madrid
const GOOGLE_NEWS_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent('https://news.google.com/rss/search?q=Real+Madrid+football&hl=en-US&gl=US&ceid=US:en')}&api_key=free&count=30`;

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

function NewsCard({ item, index }) {
  const cleanDesc = item.description
    ? item.description.replace(/<[^>]*>/g, '').substring(0, 180) + '...'
    : 'Click to read the full story.';

  return (
    <motion.a
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="group block bg-[#111] border border-white/5 hover:border-gold/30 transition-all duration-300 overflow-hidden">

      <div className="flex flex-col md:flex-row">
        {/* Thumbnail */}
        {item.thumbnail && item.thumbnail !== 'false' && (
          <div className="md:w-52 h-40 md:h-auto overflow-hidden flex-shrink-0 bg-[#1a1a1a]">
            <img src={item.thumbnail} alt="" onError={e => { e.target.style.display='none'; }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        )}
        <div className="p-5 flex flex-col justify-between flex-1">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-oswald text-[10px] tracking-widest uppercase text-gold border border-gold/30 px-2 py-0.5">
                {item.author || item.source || 'Real Madrid News'}
              </span>
              <span className="font-oswald text-xs text-rmgray">{timeAgo(item.pubDate)}</span>
            </div>
            <h3 className="font-oswald text-lg font-semibold text-white group-hover:text-gold transition-colors duration-200 leading-snug mb-2">
              {item.title}
            </h3>
            <p className="text-rmgray text-sm leading-relaxed line-clamp-3">{cleanDesc}</p>
          </div>
          <div className="mt-3 font-oswald text-xs tracking-widest uppercase text-gold/60 group-hover:text-gold transition-colors">
            Read Full Story →
          </div>
        </div>
      </div>
      <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-gold to-transparent transition-all duration-500" />
    </motion.a>
  );
}

function NewsCardSkeleton() {
  return (
    <div className="bg-[#111] border border-white/5 p-5 animate-pulse">
      <div className="h-3 bg-white/10 w-1/4 mb-4 rounded" />
      <div className="h-5 bg-white/10 w-3/4 mb-2 rounded" />
      <div className="h-3 bg-white/5 w-full mb-1 rounded" />
      <div className="h-3 bg-white/5 w-5/6 rounded" />
    </div>
  );
}

export default function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(GOOGLE_NEWS_URL, { timeout: 8000 });
        const items = res.data?.items || [];
        // Filter for Real Madrid relevant news
        const filtered = items.filter(a =>
          a.title?.toLowerCase().includes('real madrid') ||
          a.title?.toLowerCase().includes('madrid') ||
          a.title?.toLowerCase().includes('mbappe') ||
          a.title?.toLowerCase().includes('vinicius') ||
          a.title?.toLowerCase().includes('bellingham') ||
          a.title?.toLowerCase().includes('alonso')
        );
        setArticles(filtered.length > 0 ? filtered : items);
      } catch (err) {
        setError('Live news feed unavailable. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const displayed = articles.filter(a =>
    search === '' || a.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-2 h-2 rounded-full bg-gold" />
            <span className="font-oswald text-xs tracking-[4px] uppercase text-gold/70">Live Feed</span>
          </div>
          <h1 className="font-bebas text-7xl md:text-9xl text-white leading-none">
            CLUB <span className="text-gold">NEWS</span>
          </h1>
          <p className="font-oswald text-sm text-white/40 tracking-widest mt-2 uppercase">
            Transfers · Injuries · Press Conferences · Match Reports
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-16">
        {/* Search */}
        <div className="relative mb-10 max-w-md">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search news..."
            className="w-full bg-[#111] border border-white/10 focus:border-gold/50 text-white font-oswald text-sm tracking-wide px-5 py-3 outline-none transition-colors placeholder-rmgray"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-rmgray">🔍</span>
        </div>

        {/* Live indicator */}
        <div className="flex items-center gap-3 mb-6">
          <SectionHeader label="Latest Stories" title="BREAKING" goldPart="NEWS" />
        </div>

        {loading && (
          <div className="space-y-2">
            {[1,2,3,4,5].map(i => <NewsCardSkeleton key={i} />)}
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-6 font-oswald text-sm tracking-wide">
            ⚠️ {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="flex items-center justify-between mb-4">
              <div className="font-oswald text-xs text-rmgray tracking-widest uppercase">
                {displayed.length} stories found
              </div>
              <div className="flex items-center gap-2 font-oswald text-xs tracking-widest uppercase text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Live · Updated just now
              </div>
            </div>
            <div className="space-y-2">
              {displayed.map((a, i) => <NewsCard key={i} item={a} index={i} />)}
            </div>
            {displayed.length === 0 && (
              <div className="text-center py-20">
                <div className="font-bebas text-5xl text-gold/20 mb-3">NO RESULTS</div>
                <div className="font-oswald text-sm text-rmgray uppercase tracking-widest">Try a different search term</div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
