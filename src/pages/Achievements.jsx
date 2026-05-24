import FadeIn from '../components/FadeIn'

const european = [
  { count:15, title:'UEFA Champions League', latest:'Latest: 2023–24 · Wembley', years:'1956 · 1957 · 1958 · 1959 · 1960 · 1966 · 1998 · 2000 · 2002 · 2014 · 2016 · 2017 · 2018 · 2022 · 2024' },
  { count:6, title:'UEFA Super Cup', latest:'Latest: Aug 2024 vs Atalanta 2–0', years:'2002 · 2014 · 2016 · 2017 · 2022 · 2024' },
  { count:2, title:'UEFA Cup (Europa League)', latest:'Latest: 1985–86', years:'1984–85 · 1985–86' },
]
const world = [
  { count:8, title:'FIFA Club World Cup', latest:'Latest: 2022 — beat Al Hilal 5–3', years:'1960 · 1998 · 2002 · 2014 · 2016 · 2017 · 2018 · 2022' },
  { count:1, title:'FIFA Intercontinental Cup (New)', latest:'2024 — beat Pachuca 3–0', years:'Won the inaugural edition of the revamped FIFA Intercontinental Cup in December 2024.' },
  { count:1, title:'FIFA Best Club of the 20th Century', latest:'Year 2000 — FIFA Vote', years:'Voted by FIFA as the greatest football club of the twentieth century.' },
]
const domestic = [
  { count:36, title:'La Liga', latest:'Latest: 2023–24', years:'1932 · 1933 · 1954 · 1955 · 1957 · 1958 · 1961 · 1962 · 1963 · 1964 · 1965 · 1967 · 1968 · 1969 · 1972 · 1975 · 1976 · 1978 · 1979 · 1980 · 1986 · 1987 · 1988 · 1989 · 1990 · 1995 · 1997 · 2001 · 2003 · 2007 · 2008 · 2012 · 2017 · 2020 · 2022 · 2024' },
  { count:20, title:'Copa del Rey', latest:'Latest: 2022–23', years:'1905 · 1906 · 1907 · 1908 · 1917 · 1934 · 1936 · 1946 · 1947 · 1962 · 1970 · 1974 · 1975 · 1980 · 1982 · 1989 · 1993 · 2011 · 2014 · 2023' },
  { count:13, title:'Supercopa de España', latest:'Latest: Jan 2024 (beat Barcelona 4–1)', years:'1988 · 1989 · 1990 · 1993 · 1997 · 2001 · 2003 · 2008 · 2012 · 2017 · 2020 · 2022 · 2024' },
]

function AchCard({ item }) {
  return (
    <div className="ach-card">
      <div className="ach-count">{item.count}</div>
      <div className="ach-title">{item.title}</div>
      <div className="ach-latest">{item.latest}</div>
      <div className="ach-years">{item.years}</div>
    </div>
  )
}

export default function Achievements() {
  return (
    <main>
      <div className="page-hero">
        <div><div className="page-hero-sub">Honours & Records</div><h1>ACHIEVE<span className="gold">MENTS</span></h1></div>
      </div>
      <div className="section" style={{ background: 'var(--dark)' }}>
        <FadeIn>
          <p className="section-intro">Real Madrid is the most decorated football club in history. As of 2025, the club has won over 100 official trophies, including a record <strong style={{color:'var(--gold)'}}>15 UEFA Champions League titles</strong> and a record <strong style={{color:'var(--gold)'}}>36 La Liga championships</strong>.</p>
          <div className="highlight-stat">
            {[['15','Champions League'],['36','La Liga'],['20','Copa del Rey'],['13','Super Cup Spain'],['100+','Total Trophies']].map(([n,l],i)=>(
              <div key={i}><div className="hs-num">{n}</div><div className="hs-lbl">{l}</div></div>
            ))}
          </div>
        </FadeIn>

        <FadeIn><div className="section-header"><div className="section-label">European Honours</div><h2 className="section-title">CONTINENTAL <span className="text-gold">GLORY</span></h2><div className="section-divider"/></div></FadeIn>
        <div className="ach-grid" style={{marginBottom:60}}>{european.map((a,i)=><FadeIn key={i}><AchCard item={a}/></FadeIn>)}</div>

        <FadeIn><div className="section-header"><div className="section-label">World Honours</div><h2 className="section-title">WORLD <span className="text-gold">TITLES</span></h2><div className="section-divider"/></div></FadeIn>
        <div className="ach-grid" style={{marginBottom:60}}>{world.map((a,i)=><FadeIn key={i}><AchCard item={a}/></FadeIn>)}</div>

        <FadeIn><div className="section-header"><div className="section-label">Domestic Honours</div><h2 className="section-title">SPANISH <span className="text-gold">DOMINANCE</span></h2><div className="section-divider"/></div></FadeIn>
        <div className="ach-grid">{domestic.map((a,i)=><FadeIn key={i}><AchCard item={a}/></FadeIn>)}</div>
      </div>
    </main>
  )
}
