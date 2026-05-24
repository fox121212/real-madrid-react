import FadeIn from '../components/FadeIn'
export default function Rivalries() {
  return (
    <main>
      <div className="page-hero"><div><div className="page-hero-sub">Historic Rivalries</div><h1>THE <span className="gold">DERBIES</span></h1></div></div>
      <div className="section" style={{background:'var(--dark)'}}>
        <FadeIn><div className="section-header"><div className="section-label">Spain's Greatest Fixture</div><h2 className="section-title">EL <span className="text-gold">CLÁSICO</span></h2><div className="section-divider"/></div></FadeIn>
        <div className="rivals-grid" style={{marginBottom:80}}>
          <FadeIn>
            <div className="rival-card">
              <div className="rival-subtitle">vs FC Barcelona</div>
              <div className="rival-name">EL CLÁSICO</div>
              <div className="rival-stats-row">
                {[['104','Real Madrid wins'],['99','Barcelona wins'],['55','Draws'],['258','Total matches']].map(([n,l],i)=>(
                  <div key={i} style={{flex:1,background:'var(--dark-4)',padding:'14px 12px'}}><div className="rival-stat-num">{n}</div><div className="rival-stat-lbl">{l}</div></div>
                ))}
              </div>
              <p className="rival-text">El Clásico — between Real Madrid and FC Barcelona — is the most watched club football match on the planet. It transcends sport, carrying cultural, political, and regional significance between the capital and Catalonia. First played in 1902.</p>
              <p className="rival-text" style={{marginTop:12}}>The match regularly draws over 400 million global viewers, making it the most-watched sporting event outside of the Olympics and World Cup.</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="rival-card" style={{background:'rgba(200,169,81,0.04)'}}>
              <div className="rival-subtitle">History & Context</div>
              <div className="rival-name" style={{fontSize:38}}>THE RIVALRY EXPLAINED</div>
              <p className="rival-text" style={{marginTop:20}}>The rivalry deepened during the Franco dictatorship, when Barcelona represented Catalan identity and resistance. This political dimension has faded over decades, but the intensity has not.</p>
              <p className="rival-text" style={{marginTop:12}}>Legendary transfers — most notably Alfredo Di Stéfano (1953), Luís Figo (2000) — have fuelled the rivalry. The 21st century duel between Cristiano Ronaldo and Lionel Messi brought El Clásico to unprecedented global attention.</p>
              <p className="rival-text" style={{marginTop:12}}>First official match: <strong style={{color:'var(--white)'}}>February 17, 1929</strong> — Real Madrid 2–1 Barcelona.</p>
            </div>
          </FadeIn>
        </div>
        <FadeIn><div className="section-header"><div className="section-label">The Capital Derby</div><h2 className="section-title">EL DERBI <span className="text-gold">MADRILEÑO</span></h2><div className="section-divider"/></div></FadeIn>
        <div className="rivals-grid">
          <FadeIn>
            <div className="rival-card">
              <div className="rival-subtitle">vs Atlético de Madrid</div>
              <div className="rival-name">MADRID DERBY</div>
              <div className="rival-stats-row">
                {[['120+','Real wins'],['60+','Atlético wins'],['50+','Draws']].map(([n,l],i)=>(
                  <div key={i} style={{flex:1,background:'var(--dark-4)',padding:'14px 12px'}}><div className="rival-stat-num">{n}</div><div className="rival-stat-lbl">{l}</div></div>
                ))}
              </div>
              <p className="rival-text">The Madrid Derby pits the two clubs of the Spanish capital against each other. The rivalry intensified in the 2010s when Atlético became regular Champions League contenders under Diego Simeone.</p>
              <p className="rival-text" style={{marginTop:12}}>Real Madrid and Atlético met in the 2014 and 2016 UCL Finals — with Real Madrid winning both. Sergio Ramos's 93rd-minute header in Lisbon 2014 is among the most celebrated moments in club history.</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="rival-card">
              <div className="rival-subtitle">Notable Moments</div>
              <div className="rival-name" style={{fontSize:38}}>UNFORGETTABLE DERBIES</div>
              <div style={{marginTop:20,fontSize:13,color:'var(--gray)',lineHeight:2.5}}>
                {[['🔴','2014 UCL Final — Ramos 93\' equaliser, Real win 4–1 AET'],['⚪','2016 UCL Final — Real win on penalties in Milan'],['🔴','2019–20 La Liga — Atlético beaten 0–2 at Metropolitano'],['⚪','2024 Super Cup QF — Real win 5–3 AET'],['🔴','First Liga Derby — Feb 21, 1929 — Real 2–1 Atlético']].map(([icon,text],i)=>(
                  <div key={i}>{icon} <strong style={{color:'var(--white)'}}>{text.split('—')[0]}</strong>— {text.split('—').slice(1).join('—')}</div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  )
}
