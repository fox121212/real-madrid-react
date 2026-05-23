import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import PlayerCard from '../components/PlayerCard';
import PlayerModal from '../components/PlayerModal';
import { players } from '../data/players';

const trophies = [
  { num: 15, name: 'Champions League', latest: '2023–24' },
  { num: 36, name: 'La Liga Titles', latest: '2023–24' },
  { num: 20, name: 'Copa del Rey', latest: '2022–23' },
  { num: '100+', name: 'Total Trophies', latest: 'All time' },
];

const featured = players.filter(p => [20, 19, 12, 14, 21].includes(p.id));

export default function Home() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'linear-gradient(rgba(200,169,81,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,81,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        {/* Radial glow */}
        <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent" style={{ background: 'radial-gradient(ellipse at center, rgba(200,169,81,0.08) 0%, transparent 70%)' }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-block font-oswald text-xs tracking-[5px] uppercase text-gold/80 border border-gold/20 px-4 py-2 mb-8">
            Founded 1902 · Madrid, Spain
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-bebas text-[100px] md:text-[160px] leading-none tracking-wide text-white">
            REAL<br/><span className="text-gold">MADRID</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="font-oswald text-lg tracking-widest uppercase text-white/40 mb-12">
            Hala Madrid · The Most Successful Club in History
          </motion.p>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/10 mb-12 max-w-3xl mx-auto">
            {trophies.map(t => (
              <div key={t.name} className="bg-black py-6 px-4">
                <div className="font-bebas text-5xl text-gold">{t.num}</div>
                <div className="font-oswald text-xs tracking-widest uppercase text-white/50 mt-1">{t.name}</div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center">
            <Link to="/squad" className="font-oswald text-sm tracking-widest uppercase bg-gold text-black px-8 py-3 hover:bg-gold-light transition-colors duration-200">
              View the Squad
            </Link>
            <Link to="/matches" className="font-oswald text-sm tracking-widest uppercase border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-black transition-all duration-200">
              Live Matches
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-oswald text-xs tracking-widest uppercase text-white/30">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="bg-[#111] border-y border-gold/10 py-20 px-6">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader label="About the Club" title="A CENTURY OF" goldPart="GREATNESS" />
            <p className="text-rmgray-lighter leading-relaxed mb-4 text-sm">
              Real Madrid Club de Fútbol — founded on March 6, 1902 — is the most decorated football club in history.
              Based in the Spanish capital, Los Blancos have built an unrivalled legacy of domestic and European dominance.
            </p>
            <p className="text-rmgray-lighter leading-relaxed mb-6 text-sm">
              Chosen by FIFA as the <strong className="text-gold">Best Club of the 20th Century</strong>, Real Madrid holds records for Champions League titles (15) and La Liga titles (36). Under Xabi Alonso from 2025–26, a new era begins.
            </p>
            <Link to="/club" className="font-oswald text-sm tracking-widest uppercase border border-gold text-gold px-6 py-2.5 hover:bg-gold hover:text-black transition-all duration-200 inline-block">
              Read More
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-px bg-gold/10">
            {[['36','La Liga Titles'],['15','Champions League'],['20','Copa del Rey'],['100+','Total Honours']].map(([n,l])=>(
              <div key={l} className="bg-[#0f0f0f] p-8 text-center">
                <div className="font-bebas text-6xl text-gold">{n}</div>
                <div className="font-oswald text-xs tracking-widest uppercase text-white/40 mt-2">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SQUAD */}
      <section className="bg-[#0f0f0f] py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeader label="2025–26 Season" title="THE" goldPart="SQUAD" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-gold/5">
            {featured.map(p => (
              <PlayerCard key={p.id} player={p} onClick={setSelectedPlayer} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/squad" className="font-oswald text-sm tracking-widest uppercase bg-gold text-black px-8 py-3 hover:bg-gold-light transition-colors duration-200 inline-block">
              Full Squad →
            </Link>
          </div>
        </div>
      </section>

      {/* STADIUM TEASER */}
      <section className="bg-[#111] border-t border-gold/10 py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <SectionHeader label="Home Ground" title="SANTIAGO" goldPart="BERNABÉU" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/10 mb-10">
            {[['81,044','Capacity'],['1947','Opened'],['4×','UCL Finals Hosted'],['€1B+','Renovation Cost']].map(([v,k])=>(
              <div key={k} className="bg-[#0f0f0f] py-8 px-6 text-center">
                <div className="font-bebas text-4xl text-gold">{v}</div>
                <div className="font-oswald text-xs tracking-widest uppercase text-white/40 mt-2">{k}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/stadium" className="font-oswald text-sm tracking-widest uppercase border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-black transition-all duration-200 inline-block">
              Explore the Stadium
            </Link>
          </div>
        </div>
      </section>

      {/* News Teaser */}
      <section className="bg-[#0a0a0a] border-t border-gold/10 py-20 px-6 text-center">
        <SectionHeader label="Latest" title="CLUB" goldPart="NEWS" />
        <p className="text-rmgray text-sm mb-6">Stay up to date with Real Madrid news — transfers, injuries, press conferences and more.</p>
        <Link to="/news" className="font-oswald text-sm tracking-widest uppercase bg-gold text-black px-8 py-3 hover:bg-gold-light transition-colors duration-200 inline-block">
          Read Latest News →
        </Link>
      </section>

      <PlayerModal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
    </div>
  );
}
