import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const legends = [
  { era: '1953–1964', name: 'ALFREDO DI STÉFANO', nat: '🇦🇷🇪🇸 Argentina / Spain · Forward', stats: [['418','Goals'],['396','Apps'],['5','European Cups']], desc: 'The greatest player in the club\'s history. Di Stéfano orchestrated five consecutive European Cup wins. He scored in every European Cup final he played in and was the engine of the greatest club side the world had seen.' },
  { era: '2009–2018', name: 'CRISTIANO RONALDO', nat: '🇵🇹 Portugal · Forward', stats: [['450','Goals'],['438','Apps'],['4','Ballon d\'Or']], desc: 'The club\'s all-time top scorer. Won four Champions League titles and four Ballon d\'Or awards while at Real Madrid. His overhead kick vs Juventus in the 2018 UCL QF was voted goal of the tournament.' },
  { era: '1991–2010', name: 'RAÚL GONZÁLEZ', nat: '🇪🇸 Spain · Forward', stats: [['323','Goals'],['741','Apps'],['3','UCL Titles']], desc: 'The iconic Spanish captain who spent nearly two decades at the club. Long-time Champions League all-time top scorer, Raúl was the face of Real Madrid for an entire generation.' },
  { era: '1998–2007', name: 'ZINEDINE ZIDANE', nat: '🇫🇷 France · Midfielder', stats: [['155','Goals'],['227','Apps'],['1','Ballon d\'Or']], desc: 'Perhaps the most technically gifted player to ever wear white. His stunning left-foot volley in the 2002 UCL final in Glasgow is considered the greatest goal in Champions League history.' },
  { era: '2002–2021', name: 'IKER CASILLAS', nat: '🇪🇸 Spain · Goalkeeper', stats: [['725','Apps'],['5','UCL Titles'],['1','World Cup']], desc: '"San Iker" — one of the greatest goalkeepers of all time. Made 725 appearances and won the Champions League five times. His reflexes and leadership were legendary.' },
  { era: '2012–2022', name: 'LUKA MODRIĆ', nat: '🇭🇷 Croatia · Midfielder', stats: [['128','Goals'],['531','Apps'],['28','Trophies']], desc: 'The club\'s most decorated player ever. Won the Ballon d\'Or in 2018, ending the Ronaldo-Messi duopoly that had lasted over a decade. One of the most complete midfielders in history.' },
  { era: '2009–2023', name: 'KARIM BENZEMA', nat: '🇫🇷 France · Forward', stats: [['354','Goals'],['648','Apps'],['1','Ballon d\'Or']], desc: 'Won the Ballon d\'Or in 2022. His hat-trick in the UCL semi-final against Man City was one of the greatest individual performances in Champions League history. The perfect modern striker.' },
  { era: '2003–2012', name: 'SERGIO RAMOS', nat: '🇪🇸 Spain · Defender', stats: [['101','Goals'],['671','Apps'],['4','UCL Titles']], desc: 'The talismanic captain. His headed equaliser in the 90th minute of the 2014 UCL final against Atlético Madrid is one of the most iconic moments in the competition\'s history.' },
  { era: '1992–2001', name: 'ROBERTO CARLOS', nat: '🇧🇷 Brazil · Defender', stats: [['69','Goals'],['527','Apps'],['3','UCL Titles']], desc: 'The most attacking left-back in football history. His incredible free-kick against France in 1997 is still spoken about in reverence. Won the Champions League three times with Los Blancos.' },
  { era: '2000–2006', name: 'LUÍS FIGO', nat: '🇵🇹 Portugal · Midfielder', stats: [['59','Goals'],['245','Apps'],['1','Ballon d\'Or']], desc: 'Ballon d\'Or winner who joined from rivals Barcelona in one of football\'s most controversial transfers. An electrifying winger who lit up the Bernabéu with his pace and technique.' },
];

export default function Legends() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <div className="page-hero">
        <div className="max-w-screen-xl mx-auto">
          <div className="font-oswald text-xs tracking-[4px] uppercase text-gold/70 mb-2">All-Time Greats</div>
          <h1 className="font-bebas text-7xl md:text-9xl text-white leading-none">
            CLUB <span className="text-gold">LEGENDS</span>
          </h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <SectionHeader label="The Greatest Ever" title="IMMORTAL" goldPart="MADRIDISTAS" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/5">
          {legends.map((l, i) => (
            <motion.div key={l.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.1 }}
              className="bg-[#111] p-8 border-t border-t-gold/20 hover:bg-[#161616] transition-colors">
              <div className="font-oswald text-xs tracking-widest uppercase text-gold/60 mb-1">{l.era}</div>
              <h3 className="font-bebas text-3xl text-white mb-1">{l.name}</h3>
              <div className="font-oswald text-xs text-rmgray-lighter mb-4">{l.nat}</div>

              <div className="grid grid-cols-3 gap-px bg-gold/10 mb-5">
                {l.stats.map(([val, lab]) => (
                  <div key={lab} className="bg-[#0f0f0f] py-3 text-center">
                    <div className="font-bebas text-2xl text-gold">{val}</div>
                    <div className="font-oswald text-[10px] tracking-widest uppercase text-rmgray">{lab}</div>
                  </div>
                ))}
              </div>

              <p className="text-rmgray text-sm leading-relaxed">{l.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
