import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'

const trophies = [
  { num: 15, name: 'UEFA Champions League', latest: 'Latest: 2023–24', years: '1956 · 1957 · 1958 · 1959 · 1960 · 1966 · 1998 · 2000 · 2002 · 2014 · 2016 · 2017 · 2018 · 2022 · 2024' },
  { num: 36, name: 'La Liga', latest: 'Latest: 2023–24', years: '1932–2024 (36 titles)' },
  { num: 20, name: 'Copa del Rey', latest: 'Latest: 2022–23', years: '1905 – 2023 (20 titles)' },
  { num: 8, name: 'FIFA Club World Cup', latest: 'Latest: 2022', years: '1960 · 1998 · 2002 · 2014 · 2016 · 2017 · 2018 · 2022' },
  { num: 6, name: 'UEFA Super Cup', latest: 'Latest: 2024', years: '2002 · 2014 · 2016 · 2017 · 2022 · 2024' },
  { num: 13, name: 'Spanish Super Cup', latest: 'Latest: 2024', years: '1988–2024 (13 titles)' },
]

const featured = [
  { number: 10, name: 'Kylian Mbappé', pos: 'Forward', flag: '🇫🇷', img: '/images/players/kylianmbappe.jpg' },
  { number: 7, name: 'Vinícius Jr.', pos: 'Forward', flag: '🇧🇷', img: '/images/players/viniciusjr.jpg' },
  { number: 5, name: 'Jude Bellingham', pos: 'Midfielder', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', img: '/images/players/judebellingham.jpg' },
  { number: 8, name: 'Fede Valverde', pos: 'Midfielder', flag: '🇺🇾', img: '/images/players/fedevalverde.jpg' },
  { number: 11, name: 'Rodrygo', pos: 'Forward', flag: '🇧🇷', img: '/images/players/rodrygo.jpg' },
  { number: 12, name: 'Trent Alexander-Arnold', pos: 'Defender', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', img: '/images/players/trentalexanderarnold.jpg' },
]

export default function Home() {
  return (
    <main>
      {/* HERO */}
      {/* HERO */}
<section className="hero">
  <div className="hero-grid" />

  <div className="hero-content">
    <div className="hero-badge">Founded 1902 · Madrid, Spain</div>
    <h1>REAL<br /><span className="gold">MADRID</span></h1>
    <p className="hero-subtitle">Hala Madrid · The Most Successful Club in History</p>

    <div className="hero-stats">
      <div><div className="hero-stat-num">15</div><div className="hero-stat-label">Champions League</div></div>
      <div><div className="hero-stat-num">36</div><div className="hero-stat-label">La Liga Titles</div></div>
      <div><div className="hero-stat-num">20</div><div className="hero-stat-label">Copa del Rey</div></div>
      <div><div className="hero-stat-num">100+</div><div className="hero-stat-label">Total Trophies</div></div>
    </div>

    <div className="hero-cta">
      <Link to="/squad" className="btn-primary">View the Squad</Link>
      <Link to="/achievements" className="btn-outline">Our Achievements</Link>
    </div>
  </div>

{/* === REAL MADRID LOGO (Static - Right Side) === */}
<div className="hero-logo">
  <img 
    src="real-madrid-logo.png" 
    alt="Real Madrid Crest" 
  />
</div>
</section>

      {/* ABOUT */}
      <section className="section" style={{ background: 'var(--dark-2)', borderTop: '1px solid rgba(200,169,81,0.08)' }}>
        <FadeIn>
          <div className="section-header">
            <div className="section-label">About the Club</div>
            <h2 className="section-title">A CENTURY OF <span className="text-gold">GREATNESS</span></h2>
            <div className="section-divider" />
          </div>
          <p style={{ color: 'var(--gray-light)', fontSize: 15, lineHeight: 1.9, maxWidth: 800, marginBottom: 16 }}>
            Real Madrid Club de Fútbol — founded on March 6, 1902 — is the most decorated football club in history. Chosen by FIFA as the <strong style={{ color: 'var(--gold)' }}>Best Club of the 20th Century</strong>, Real Madrid holds the record for the most UEFA Champions League titles (15) and the most La Liga titles (36).
          </p>
          <p style={{ color: 'var(--gray-light)', fontSize: 15, lineHeight: 1.9, maxWidth: 800, marginBottom: 24 }}>
            In 2024 alone, the club lifted five trophies — matching a feat achieved only once before in their 122-year history. Under Xabi Alonso beginning 2025–26, a new era begins at the Bernabéu.
          </p>
          <Link to="/club" className="btn-outline">Read More</Link>
        </FadeIn>
      </section>

      {/* TROPHIES */}
      <section className="section" style={{ background: 'var(--dark-3)' }}>
        <FadeIn>
          <div className="section-header">
            <div className="section-label">Honours</div>
            <h2 className="section-title">TROPHY <span className="text-gold">CABINET</span></h2>
            <div className="section-divider" />
          </div>
        </FadeIn>
        <div className="trophies-grid">
          {trophies.map((t, i) => (
            <FadeIn key={i}>
              <div className="trophy-card">
                <div className="trophy-number">{t.num}</div>
                <div className="trophy-name">{t.name}</div>
                <div className="trophy-latest">{t.latest}</div>
                <div className="trophy-years">{t.years}</div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link to="/achievements" className="btn-outline">Full Trophy List</Link>
        </div>
      </section>

      {/* SQUAD TEASER */}
      <section className="section" style={{ background: 'var(--dark-2)', borderTop: '1px solid rgba(200,169,81,0.08)' }}>
        <FadeIn>
          <div className="section-header">
            <div className="section-label">2025–26 Season</div>
            <h2 className="section-title">THE <span className="text-gold">SQUAD</span></h2>
            <div className="section-divider" />
          </div>
        </FadeIn>
        <div className="players-grid">
          {featured.map((p, i) => (
            <FadeIn key={i}>
              <Link to="/squad" style={{ textDecoration: 'none' }}>
                <div className="player-card">
                  <div className="player-photo">
                    <div className="player-number-bg">{p.number}</div>
                    <img src={p.img} alt={p.name} />
                    <div className="player-flag">{p.flag}</div>
                    <div className="player-info">
                      <div className="player-jersey">#{p.number}</div>
                      <div className="player-name">{p.name}</div>
                      <div className="player-pos">{p.pos}</div>
                    </div>
                    <div className="player-overlay"><span>View Player</span></div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Link to="/squad" className="btn-primary">Full Squad</Link>
        </div>
      </section>

      {/* STADIUM */}
      <section className="section" style={{ background: 'var(--dark-3)', borderTop: '1px solid rgba(200,169,81,0.08)' }}>
        <FadeIn>
          <div className="section-header">
            <div className="section-label">Home Ground</div>
            <h2 className="section-title">SANTIAGO <span className="text-gold">BERNABÉU</span></h2>
            <div className="section-divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2, marginBottom: 40 }}>
            {[['81,044','Capacity'],['1947','Opened'],['4×','UCL Finals Hosted'],['€1B+','2023 Renovation']].map(([v,k],i) => (
              <div key={i} className="stadium-stat"><div className="stadium-stat-val">{v}</div><div className="stadium-stat-key">{k}</div></div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/stadium" className="btn-outline">Explore the Stadium</Link>
          </div>
        </FadeIn>
      </section>
    </main>
  )
}
