import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const trophyData = [
  {
    category: 'European Honours',
    items: [
      { count: 15, name: 'UEFA Champions League', latest: '2023–24 · Wembley', years: '1956·1957·1958·1959·1960·1966·1998·2000·2002·2014·2016·2017·2018·2022·2024' },
      { count: 6, name: 'UEFA Super Cup', latest: 'Latest: August 2024 vs Atalanta', years: '2002·2014·2016·2017·2022·2024' },
      { count: 2, name: 'UEFA Cup (Europa League)', latest: '1984–85 · 1985–86', years: '1985·1986' },
    ]
  },
  {
    category: 'World Honours',
    items: [
      { count: 8, name: 'FIFA Club World Cup', latest: '2022 — beat Al Hilal 5–3', years: '1960·1998·2002·2014·2016·2017·2018·2022' },
      { count: 1, name: 'FIFA Intercontinental Cup', latest: '2024 — beat Pachuca 3–0', years: '2024' },
      { count: 1, name: 'FIFA Best Club of the 20th Century', latest: 'Year 2000', years: 'Voted by FIFA as the greatest football club of the twentieth century.' },
    ]
  },
  {
    category: 'Domestic Honours',
    items: [
      { count: 36, name: 'La Liga', latest: 'Latest: 2023–24', years: '1932·1933·1954·1955·1957·1958·1961·1962·1963·1964·1965·1967·1968·1969·1972·1975·1976·1978·1979·1980·1986·1987·1988·1989·1990·1995·1997·2001·2003·2007·2008·2012·2017·2020·2022·2024' },
      { count: 20, name: 'Copa del Rey', latest: 'Latest: 2022–23', years: '1905·1906·1907·1908·1917·1934·1936·1946·1947·1962·1970·1974·1975·1980·1982·1989·1993·2011·2014·2023' },
      { count: 13, name: 'Supercopa de España', latest: 'Latest: January 2024 (beat Barça 4–1)', years: '1988·1989·1990·1993·1997·2001·2003·2008·2012·2017·2020·2022·2024' },
    ]
  }
];

function TrophyCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="bg-[#111] border border-white/5 p-8 relative overflow-hidden group hover:bg-[#161616] transition-colors">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-transparent" />
      <div className="font-bebas text-8xl text-gold/80 leading-none mb-2">{item.count}</div>
      <div className="font-oswald text-lg uppercase tracking-wider text-white mb-2">{item.name}</div>
      <div className="inline-block font-oswald text-[10px] tracking-widest uppercase text-gold border border-gold/30 px-3 py-1 mb-4">{item.latest}</div>
      <div className="font-oswald text-xs text-rmgray leading-relaxed">{item.years}</div>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <div className="page-hero">
        <div className="max-w-screen-xl mx-auto">
          <div className="font-oswald text-xs tracking-[4px] uppercase text-gold/70 mb-2">Honours & Records</div>
          <h1 className="font-bebas text-7xl md:text-9xl text-white leading-none">
            ACHIEVE<span className="text-gold">MENTS</span>
          </h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-16">
        {/* Top stats */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-px bg-gold/10 mb-16">
          {[['15','Champions League'],['36','La Liga'],['20','Copa del Rey'],['13','Super Cup Spain'],['100+','Total Trophies']].map(([n,l])=>(
            <div key={l} className="bg-[#0f0f0f] py-8 text-center">
              <div className="font-bebas text-6xl text-gold">{n}</div>
              <div className="font-oswald text-xs tracking-widest uppercase text-white/40 mt-2">{l}</div>
            </div>
          ))}
        </motion.div>

        {trophyData.map(cat => (
          <div key={cat.category} className="mb-16">
            <SectionHeader
              label={cat.category}
              title={cat.category.split(' ')[0].toUpperCase()}
              goldPart={cat.category.split(' ').slice(1).join(' ').toUpperCase()}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/5">
              {cat.items.map((item, i) => <TrophyCard key={i} item={item} index={i} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
