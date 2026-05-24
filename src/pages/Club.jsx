import FadeIn from '../components/FadeIn'
export default function Club() {
  return (
    <main>
      <div className="page-hero"><div><div className="page-hero-sub">Founded 1902</div><h1>ABOUT <span className="gold">THE CLUB</span></h1></div></div>
      <div className="section" style={{background:'var(--dark)'}}>
        <div style={{maxWidth:900}}>
          <FadeIn>
            <div className="section-header"><div className="section-label">Real Madrid Club de Fútbol</div><h2 className="section-title">THE <span className="text-gold">WORLD'S CLUB</span></h2><div className="section-divider"/></div>
            <p style={{color:'var(--gray-light)',fontSize:15,lineHeight:1.9,marginBottom:20}}>Real Madrid Club de Fútbol is a professional football club based in Madrid, Spain. Founded on March 6, 1902, the club competes in La Liga, the top tier of Spanish football.</p>
            <p style={{color:'var(--gray-light)',fontSize:15,lineHeight:1.9,marginBottom:20}}>Real Madrid has won a record <strong style={{color:'var(--gold)'}}>36 La Liga titles</strong> and a record <strong style={{color:'var(--gold)'}}>15 UEFA Champions League titles</strong>. The club was chosen by FIFA as the <strong style={{color:'var(--gold)'}}>Best Club of the 20th Century</strong> in 2000.</p>
            <p style={{color:'var(--gray-light)',fontSize:15,lineHeight:1.9,marginBottom:20}}>Unlike most clubs worldwide, Real Madrid is owned by its members (<em>socios</em>), who elect a president to govern the club. The current president is <strong style={{color:'var(--white)'}}>Florentino Pérez</strong>. The club had over 90,000 registered members as of 2024.</p>
            <div className="highlight-box"><p><strong style={{color:'var(--gold)'}}>"Real Madrid is an idea, a way of understanding football, a symbol of what this sport can be."</strong><br/>— Santiago Bernabéu, Club President 1943–1978</p></div>
            <p style={{color:'var(--gray-light)',fontSize:15,lineHeight:1.9,marginTop:20,marginBottom:20}}>In 2024, Real Madrid was valued at over <strong style={{color:'var(--white)'}}>$6.6 billion</strong> by Forbes, making it one of the most valuable sports franchises in the world.</p>
          </FadeIn>
          <FadeIn>
            <div className="section-header" style={{marginTop:50}}><div className="section-label">Club Identity</div><h2 className="section-title">BADGE <span className="text-gold">& KIT</span></h2><div className="section-divider"/></div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:30,marginBottom:40}}>
              <div>
                <div className="section-label" style={{marginBottom:10}}>The Badge</div>
                <p style={{color:'var(--gray-light)',fontSize:14,lineHeight:1.8}}>The original badge showed the initials "MCF" in dark blue. After King Alfonso XIII granted royal patronage in 1920, the royal crown was added. The purple stripe — representing Castile — was incorporated in 1931.</p>
              </div>
              <div>
                <div className="section-label" style={{marginBottom:10}}>The All-White Kit</div>
                <p style={{color:'var(--gray-light)',fontSize:14,lineHeight:1.8}}>The traditional all-white kit has been Real Madrid's identity since 1902, inspired by the English club Corinthians. Manufactured by Adidas (since 1998) and sponsored by Emirates (since 2013).</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="section-header" style={{marginTop:50}}><div className="section-label">Club Records</div><h2 className="section-title">BY THE <span className="text-gold">NUMBERS</span></h2><div className="section-divider"/></div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:2}}>
              {[['450','Ronaldo goals (all-time top)'],['741','Raúl appearances (record)'],['15','UCL titles (world record)'],['1902','Year founded'],['90,000+','Club members (socios)'],['$6.6B','Forbes valuation (2024)']].map(([v,k],i)=>(
                <div key={i} className="stadium-stat"><div className="stadium-stat-val" style={{fontSize:28}}>{v}</div><div className="stadium-stat-key">{k}</div></div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  )
}
