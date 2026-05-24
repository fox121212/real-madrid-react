import FadeIn from '../components/FadeIn'

const legends = [
  { era:'1953–1964', name:'ALFREDO DI STÉFANO', nat:'🇦🇷🇪🇸 Argentina / Spain · Forward', desc:'The greatest player in the club\'s history. Di Stéfano orchestrated five consecutive European Cup wins. He scored in every single European Cup final he played in.', stats:[{n:418,l:'Goals'},{n:396,l:'Apps'},{n:5,l:'European Cups'}] },
  { era:'2009–2018', name:'CRISTIANO RONALDO', nat:'🇵🇹 Portugal · Forward', desc:'The club\'s all-time top scorer with 450 goals in 438 appearances. Won four Champions League titles and four Ballon d\'Or awards while at Real Madrid.', stats:[{n:450,l:'Goals'},{n:438,l:'Apps'},{n:4,l:"Ballon d'Or"}] },
  { era:'1991–2010', name:'RAÚL GONZÁLEZ', nat:'🇪🇸 Spain · Forward', desc:'The iconic Spanish captain who spent nearly two decades at the club. Long-time UCL all-time top scorer, Raúl was the face of Real Madrid for a generation.', stats:[{n:323,l:'Goals'},{n:741,l:'Apps'},{n:3,l:'UCL Titles'}] },
  { era:'1998–2007', name:'ZINEDINE ZIDANE', nat:'🇫🇷 France · Midfielder', desc:'Perhaps the most technically gifted player to ever wear white. His stunning left-foot volley in the 2002 UCL final is considered the greatest goal in Champions League history.', stats:[{n:155,l:'Goals'},{n:227,l:'Apps'},{n:1,l:"Ballon d'Or"}] },
  { era:'2002–2021', name:'IKER CASILLAS', nat:'🇪🇸 Spain · Goalkeeper', desc:'"San Iker" made 725 appearances for the club and won the Champions League five times. One of the greatest goalkeepers of all time.', stats:[{n:725,l:'Apps'},{n:5,l:'UCL Titles'},{n:1,l:'World Cup'}] },
  { era:'2000–2006', name:'LUÍS FIGO', nat:'🇵🇹 Portugal · Midfielder', desc:'Won the Ballon d\'Or in 2000 then joined in one of football\'s most controversial transfers from rivals Barcelona. An electrifying winger.', stats:[{n:59,l:'Goals'},{n:245,l:'Apps'},{n:1,l:"Ballon d'Or"}] },
  { era:'2012–2022', name:'LUKA MODRIĆ', nat:'🇭🇷 Croatia · Midfielder', desc:'The club\'s most decorated player ever with 28 trophies. Won the Ballon d\'Or in 2018, ending the Ronaldo-Messi duopoly. One of the most complete midfielders in history.', stats:[{n:128,l:'Goals'},{n:531,l:'Apps'},{n:28,l:'Trophies'}] },
  { era:'1992–2001', name:'ROBERTO CARLOS', nat:'🇧🇷 Brazil · Defender', desc:'The most attacking left-back in football history. His incredible free-kick against France in 1997 is still spoken about in reverence. Won the UCL three times.', stats:[{n:69,l:'Goals'},{n:527,l:'Apps'},{n:3,l:'UCL Titles'}] },
  { era:'2009–2023', name:'KARIM BENZEMA', nat:'🇫🇷 France · Forward', desc:'Won the Ballon d\'Or in 2022. His hat-trick in the UCL semi-final against Man City was one of the greatest individual performances in Champions League history.', stats:[{n:354,l:'Goals'},{n:648,l:'Apps'},{n:1,l:"Ballon d'Or"}] },
  { era:'2003–2012', name:'SERGIO RAMOS', nat:'🇪🇸 Spain · Defender', desc:'The talismanic captain who led Madrid to four Champions League titles. His headed equaliser in the 90th minute of the 2014 UCL Final is one of the most iconic moments in history.', stats:[{n:101,l:'Goals'},{n:671,l:'Apps'},{n:4,l:'UCL Titles'}] },
]

export default function Legends() {
  return (
    <main>
      <div className="page-hero"><div><div className="page-hero-sub">All-Time Greats</div><h1>CLUB <span className="gold">LEGENDS</span></h1></div></div>
      <div className="section" style={{ background: 'var(--dark)' }}>
        <FadeIn><div className="section-header"><div className="section-label">The Greatest Ever</div><h2 className="section-title">IMMORTAL <span className="text-gold">MADRIDISTAS</span></h2><div className="section-divider"/></div></FadeIn>
        <div className="legends-grid">
          {legends.map((l, i) => (
            <FadeIn key={i}>
              <div className="legend-card">
                <div className="legend-era">{l.era}</div>
                <div className="legend-name">{l.name}</div>
                <div className="legend-nat">{l.nat}</div>
                <p className="legend-desc">{l.desc}</p>
                <div className="legend-stat-row">
                  {l.stats.map((s,j)=>(<div key={j} style={{flex:1,background:'var(--dark-4)',padding:'12px 14px'}}><div className="legend-stat-n">{s.n}</div><div className="legend-stat-l">{s.l}</div></div>))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  )
}
