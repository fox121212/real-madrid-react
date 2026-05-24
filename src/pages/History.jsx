import FadeIn from '../components/FadeIn'

const timeline = [
  { year:'1897–1902', title:'The Birth of a Giant', text:'Football was introduced to Madrid through teachers and students at the Institución Libre de Enseñanza. They founded "Football Club Sky" in 1897. On March 6, 1902, Madrid Football Club was officially founded — the club that would become Real Madrid. Their first major trophy came three years later with the Copa de España in 1905.' },
  { year:'1902–1920', title:'Early Dominance & Royal Status', text:'The club quickly established itself as Spain\'s most powerful side, winning four Copa del Rey titles in the first six editions. In 1920, King Alfonso XIII granted the club the title "Real" (Royal), adding a crown to the badge. The club was renamed Real Madrid Club de Fútbol.' },
  { year:'1929–1945', title:'La Liga Begins', text:'When La Liga was founded in 1929, Real Madrid were among the founding clubs. They won their first league title in 1931–32, then again in 1932–33 — becoming the first club to win back-to-back Liga titles. The club survived the Spanish Civil War (1936–39) and rebuilt in the post-war era under new president Santiago Bernabéu.' },
  { year:'1943–1978', title:'The Bernabéu Era & European Dominance', text:'Santiago Bernabéu became president in 1943 and transformed the club. He built the great stadium, signed Alfredo Di Stéfano, and created the blueprint for a global superclub. Real Madrid won the first five UEFA Champions League titles in a row (1956–1960) — a feat never matched. He died in 1978, and FIFA ordered three days of mourning.' },
  { year:'1980–2000', title:'La Quinta del Buitre & the 7th European Cup', text:'The 1980s saw La Quinta del Buitre — a famous five-man core led by Emilio Butragueño — win five consecutive La Liga titles (1985–1990) and two UEFA Cups. After a 32-year European drought, Real Madrid claimed their 7th European Cup in 1998 under Jupp Heynckes, beating Juventus 1–0 in the final.' },
  { year:'2000–2009', title:'The Galácticos Era', text:'President Florentino Pérez built the famous Galácticos — signing Figo, Zidane, Ronaldo, Beckham, and Roberto Carlos. Zidane\'s stunning volley in the 2002 UCL final in Glasgow is considered one of football\'s greatest moments. The club won the UCL in 2002 and La Liga in 2003.' },
  { year:'2009–2015', title:'Pérez Returns: Mourinho & Ancelotti', text:'Pérez returned and signed Cristiano Ronaldo for a then world-record €94 million. Mourinho guided the club to a historic La Liga title with 100 points in 2011–12. Then Ancelotti delivered La Décima — the 10th European title — in Lisbon 2014, ending a 12-year continental wait. Gareth Bale\'s overhead kick became iconic.' },
  { year:'2016–2021', title:'The Zidane Dynasty', text:'Zinedine Zidane took charge in January 2016 and led Real Madrid to an unprecedented three consecutive Champions League titles (2016, 2017, 2018). No club had ever retained the European Cup in the modern era. Luka Modrić won the Ballon d\'Or in 2018 — ending the Ronaldo/Messi duopoly.' },
  { year:'2022–2024', title:'Ancelotti\'s Return & La Decimoquinta', text:'Ancelotti returned and led the club to La Liga in 2022 and a stunning Champions League victory in Paris. In 2024, the club won their 15th Champions League (La Decimoquinta) at Wembley, defeating Borussia Dortmund 2–0. In 2024 alone, Real Madrid lifted five trophies.' },
  { year:'2025–', title:'The Xabi Alonso Era Begins', text:'After a difficult 2024–25 season, Ancelotti departed as the most successful manager in club history with 15 trophies. Spanish legend Xabi Alonso was appointed as the new head coach, beginning a new chapter. New signings Trent Alexander-Arnold and Dean Huijsen joined alongside wunderkind Franco Mastantuono.' },
]

export default function History() {
  return (
    <main>
      <div className="page-hero">
        <div>
          <div className="page-hero-sub">122 Years of Football</div>
          <h1>CLUB <span className="gold">HISTORY</span></h1>
        </div>
      </div>
      <div className="section" style={{ background: 'var(--dark)' }}>
        <div className="timeline">
          {timeline.map((t, i) => (
            <FadeIn key={i}>
              <div className="timeline-item">
                <div className="timeline-year">{t.year}</div>
                <div className="timeline-dot" />
                <div>
                  <div className="timeline-title">{t.title}</div>
                  <p className="timeline-text">{t.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  )
}
