import { useState, useEffect } from 'react';
import FadeIn from '../components/FadeIn';

const API_KEY = import.meta.env.VITE_NEWSDATA_API_KEY;
const BASE_URL = 'https://newsdata.io/api/1/news';

export default function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Transfers', 'Match', 'Injury', 'Manager'];

  useEffect(() => {
    if (!API_KEY) {
      setError('API key is missing. Please check your .env file.');
      setLoading(false);
      return;
    }

    const fetchNews = async () => {
      try {
        const query = encodeURIComponent('real madrid');
        const url = `${BASE_URL}?apikey=${API_KEY}&q=${query}&language=en&size=10`;

        const res = await fetch(url);
        const data = await res.json();

        if (data.status === 'success' && data.results?.length > 0) {
          setArticles(data.results);
        } else {
          setError('Could not load live news. Showing sample updates.');
          // You can add fallback news here later
        }
      } catch (err) {
        setError('Failed to fetch news. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Simple keyword filter
  const filteredArticles = filter === 'All' 
    ? articles 
    : articles.filter(article => {
        const text = (article.title + article.description).toLowerCase();
        if (filter === 'Transfers') return text.includes('sign') || text.includes('transfer') || text.includes('join');
        if (filter === 'Match') return text.includes('match') || text.includes('win') || text.includes('goal');
        if (filter === 'Injury') return text.includes('injur') || text.includes('return');
        if (filter === 'Manager') return text.includes('alonso') || text.includes('coach');
        return true;
      });

  return (
    <main>
      <div className="page-hero">
        <div>
          <div className="page-hero-sub">Live Club News</div>
          <h1>REAL MADRID <span className="gold">NEWS</span></h1>
        </div>
      </div>

      <div className="section" style={{ background: 'var(--dark)' }}>
        <div className="section-header">
          <div className="section-label">Powered by NewsData.io</div>
          <h2 className="section-title">LATEST <span className="text-gold">UPDATES</span></h2>
          <div className="section-divider" />
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-oswald text-xs tracking-widest uppercase px-5 py-2 border transition-all
                ${filter === cat 
                  ? 'bg-gold text-black border-gold' 
                  : 'border-white/10 text-white/50 hover:border-gold/50 hover:text-gold'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="loading-box">
            <div className="loading-spinner" />
            <p>Loading latest news...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="error-box">
            ⚠️ {error}
          </div>
        )}

        {/* News Grid */}
        {!loading && !error && filteredArticles.length > 0 && (
          <div className="news-grid">
            {filteredArticles.map((article, index) => (
              <FadeIn key={index}>
                <a 
                  href={article.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="news-card"
                >
                  {article.image_url ? (
                    <img 
                      src={article.image_url} 
                      alt={article.title} 
                      className="news-img" 
                      onError={(e) => e.target.style.display = 'none'} 
                    />
                  ) : (
                    <div className="news-img-placeholder">RM</div>
                  )}
                  <div className="news-body">
                    <div className="news-source">
                      {article.source_id || 'Real Madrid'} · {new Date(article.pubDate).toLocaleDateString()}
                    </div>
                    <div className="news-title">{article.title}</div>
                    {article.description && (
                      <p className="news-desc">{article.description.slice(0, 130)}...</p>
                    )}
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        )}

        {!loading && filteredArticles.length === 0 && !error && (
          <div className="error-box">No articles found for this category.</div>
        )}
      </div>
    </main>
  );
}