import { motion } from 'framer-motion';

const timeline = [
  { year: '1897–1902', title: 'The Birth of a Giant', text: 'Football was introduced to Madrid through graduates of Oxford and Cambridge. They founded "Football Club Sky" in 1897. After internal splits, Madrid Football Club was officially founded on March 6, 1902 — winning the Copa de España just three years later in 1905.' },
  { year: '1902–1920', title: 'Early Dominance & Royal Status', text: 'The club quickly established itself as Spain\'s most powerful side, winning four Copa del Rey titles in the first six editions. In 1920, King Alfonso XIII granted the club the title "Real" (Royal), adding a crown to the badge and renaming them Real Madrid Club de Fútbol.' },
  { year: '1929–1945', title: 'La Liga Begins', text: 'When La Liga was founded in 1929, Real Madrid were founding members. They won their first league title in 1931–32, then again in 1932–33 — the first back-to-back La Liga champions in history. The club survived the Spanish Civil War (1936–39) and rebuilt under new president Santiago Bernabéu.' },
  { year: '1943–1978', title: 'The Bernabéu Era & European Dominance', text: 'Santiago Bernabéu became president in 1943 and transformed the club. He built the great stadium and signed Alfredo Di Stéfano. Real Madrid won the first five UEFA Champions League titles in a row (1956–1960) — a feat never matched. When Bernabéu died in 1978, FIFA ordered three days of mourning worldwide.' },
  { year: '1980–2000', title: 'La Quinta del Buitre & the 7th European Cup', text: 'The 1980s saw La Quinta del Buitre — led by Emilio Butragueño — win five consecutive La Liga titles and two UEFA Cups. After a 32-year European drought, Real Madrid claimed their 7th European Cup in 1998 under Jupp Heynckes, beating Juventus 1–0 in the final.' },
  { year: '2000–2009', title: 'The Galácticos Era', text: 'President Florentino Pérez signed Luís Figo, Zinedine Zidane, Ronaldo (R9), David Beckham and Roberto Carlos. Zidane\'s stunning volley in the 2002 UCL final in Glasgow is considered football\'s greatest ever goal. The club won the UCL in 2002 and La Liga in 2001, 2003, 2007, 2008.' },
  { year: '2009–2015', title: 'Pérez Returns: Mourinho & Ancelotti', text: 'Pérez returned and signed Cristiano Ronaldo for €94m. Mourinho guided the club to a historic La Liga title with 100 points in 2011–12. Carlo Ancelotti then delivered La Décima — the 10th European title — in Lisbon 2014, ending a 12-year continental wait.' },
  { year: '2016–2021', title: 'The Zidane Dynasty', text: 'Zinedine Zidane took charge in January 2016 and led Real Madrid to an unprecedented three consecutive Champions League titles (2016, 2017, 2018). No club had ever retained the European Cup in the modern era. Luka Modrić won the Ballon d\'Or in 2018 — ending the Ronaldo/Messi duopoly.' },
  { year: '2022–2024', title: 'Ancelotti\'s Return & La Decimoquinta', text: 'Ancelotti returned for La Liga 2022 and a stunning Champions League victory in Paris. In 2024, the club won their 15th Champions League at Wembley, defeating Borussia Dortmund 2–0. Vinícius Jr. scored and Carvajal also got on the scoresheet. In 2024 alone, Real Madrid lifted five trophies.' },
  { year: '2025–', title: 'The Xabi Alonso Era Begins', text: 'After a difficult 2024–25 season as runners-up to Barcelona in all domestic competitions and UCL exit to Arsenal at QF stage, Ancelotti departed as the most successful manager in club history. Spanish legend Xabi Alonso was appointed head coach from June 2025, with new signings Trent Alexander-Arnold, Dean Huijsen and Franco Mastantuono joining.' },
];

export default function History() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <div className="page-hero">
        <div className="max-w-screen-xl mx-auto">
          <div className="font-oswald text-xs tracking-[4px] uppercase text-gold/70 mb-2">122 Years of Football</div>
          <h1 className="font-bebas text-7xl md:text-9xl text-white leading-none">
            CLUB <span className="text-gold">HISTORY</span>
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/30 to-transparent" />

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <motion.div key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative pl-20 pb-14">

                {/* Dot */}
                <div className="absolute left-[29px] top-2 w-3 h-3 rounded-full bg-gold border-2 border-black" />

                <div className="font-oswald text-xs tracking-widest uppercase text-gold/70 mb-1">{item.year}</div>
                <h3 className="font-bebas text-2xl text-white mb-3">{item.title}</h3>
                <p className="text-rmgray-lighter text-sm leading-relaxed">{item.text}</p>

                {i < timeline.length - 1 && (
                  <div className="absolute left-8 bottom-0 w-px h-4 bg-gold/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
