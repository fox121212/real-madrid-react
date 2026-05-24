import FadeIn from '../components/FadeIn'
export default function Stadium() {
  return (
    <main>
      <div className="page-hero"><div><div className="page-hero-sub">Home Ground</div><h1>SANTIAGO <span className="gold">BERNABÉU</span></h1></div></div>
      <div className="section" style={{background:'var(--dark)'}}>
        <FadeIn>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:2,marginBottom:60}}>
            {[['81,044','Seating Capacity'],['1947','Year Opened'],['105×68m','Pitch Size'],['€1B+','Renovation Cost']].map(([v,k],i)=>(
              <div key={i} className="stadium-stat"><div className="stadium-stat-val">{v}</div><div className="stadium-stat-key">{k}</div></div>
            ))}
          </div>
        </FadeIn>
        <div className="stadium-layout">
          <FadeIn>
            <div className="section-header"><div className="section-label">Estadio Santiago Bernabéu</div><h2 className="section-title">THE <span className="text-gold">CATHEDRAL</span></h2><div className="section-divider"/></div>
            <p className="stadium-desc">The Santiago Bernabéu Stadium is one of the most iconic football venues in the world, located in the heart of Madrid along the Paseo de la Castellana. Named in honour of the club's legendary president, the stadium opened on December 14, 1947.</p>
            <p className="stadium-desc">The stadium has hosted some of football's most memorable moments, including four UEFA Champions League finals (1957, 1969, 1980, 2010), the 1964 European Championship final, and the 1982 FIFA World Cup final.</p>
            <p className="stadium-desc">A major renovation completed in 2023 — adding a retractable roof and a revolutionary 360° rotating LED façade that illuminates the Madrid skyline.</p>
            <div className="highlight-box"><p><strong style={{color:'var(--gold)'}}>2023 Renovation:</strong> A €1 billion renovation project transformed the stadium, adding a retractable roof capable of covering the entire pitch, a 360° rotating LED façade, and an underground music venue.</p></div>
          </FadeIn>
          <FadeIn>
            <div className="section-header"><div className="section-label">Stadium Facts</div><h2 className="section-title">KEY <span className="text-gold">FACTS</span></h2><div className="section-divider"/></div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:2,marginBottom:30}}>
              {[['Chamartín','District, Madrid'],['4×','UCL Finals Hosted'],['1955','Renamed for Bernabéu'],['2023','Major Renovation'],['€1B+','Renovation Cost'],['35yr','Bernabéu\'s Presidency']].map(([v,k],i)=>(
                <div key={i} className="stadium-stat"><div className="stadium-stat-val" style={{fontSize:24}}>{v}</div><div className="stadium-stat-key">{k}</div></div>
              ))}
            </div>
            <div className="section-label" style={{marginBottom:12}}>Historic Matches at the Bernabéu</div>
            <div style={{fontSize:13,color:'var(--gray)',lineHeight:2.2}}>
              {[['🏆','1957 European Cup Final — Real Madrid 2–0 Fiorentina'],['🏆','1969 European Cup Final — AC Milan 4–1 Ajax'],['🏆','1980 European Cup Final — Nottingham Forest 1–0 Hamburg'],['🏆','2010 UCL Final — Internazionale 2–0 Bayern Munich'],['🇪🇺','1964 Euro Final — Spain 2–1 Soviet Union'],['🌍','1982 World Cup Final — Italy 3–1 West Germany']].map(([icon,text],i)=>(
                <div key={i}>{icon} {text}</div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  )
}
