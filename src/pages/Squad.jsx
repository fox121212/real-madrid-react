import { useState } from 'react';
import { motion } from 'framer-motion';
import PlayerCard from '../components/PlayerCard';
import PlayerModal from '../components/PlayerModal';
import SectionHeader from '../components/SectionHeader';
import { players, coach } from '../data/players';

const groups = [
  { label: 'Goalkeepers', positions: ['Goalkeeper'] },
  { label: 'Defenders', positions: ['Right Back', 'Centre Back', 'Left Back', 'Right Back / Midfielder'] },
  { label: 'Midfielders', positions: ['Midfielder', 'Defensive Midfielder', 'Attacking Midfielder'] },
  { label: 'Forwards', positions: ['Left Winger', 'Centre Forward', 'Forward', 'Attacking Midfielder / Winger'] },
];

export default function Squad() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? players : players.filter(p =>
    groups.find(g => g.label === filter)?.positions.some(pos => p.position.includes(pos.split('/')[0].trim()))
  );

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Page hero */}
      <div className="page-hero">
        <div className="max-w-screen-xl mx-auto">
          <div className="font-oswald text-xs tracking-[4px] uppercase text-gold/70 mb-2">2025–26 Season</div>
          <h1 className="font-bebas text-7xl md:text-9xl text-white leading-none">
            THE <span className="text-gold">SQUAD</span>
          </h1>
          <div className="font-oswald text-sm tracking-widest uppercase text-white/40 mt-3">
            Manager: <span className="text-gold">Xabi Alonso</span>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-16">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {['All', 'Goalkeepers', 'Defenders', 'Midfielders', 'Forwards'].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`font-oswald text-xs tracking-widest uppercase px-5 py-2 border transition-all duration-200
                ${filter === f ? 'bg-gold text-black border-gold' : 'border-white/10 text-white/50 hover:border-gold/50 hover:text-gold'}`}>
              {f}
            </button>
          ))}
        </div>

        {filter === 'All' ? (
          <>
            {groups.map(group => {
              const groupPlayers = players.filter(p =>
                group.positions.some(pos => p.position.includes(pos.split('/')[0].trim()))
              );
              return (
                <div key={group.label} className="mb-16">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="font-bebas text-3xl text-gold tracking-wider">{group.label}</div>
                    <div className="flex-1 h-px bg-gold/10" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-gold/5">
                    {groupPlayers.map((p, i) => (
                      <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                        <PlayerCard player={p} onClick={setSelected} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Coach */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="font-bebas text-3xl text-gold tracking-wider">Coaching Staff</div>
                <div className="flex-1 h-px bg-gold/10" />
              </div>
              <div className="max-w-xs">
                <motion.div
                  whileHover={{ y: -4 }}
                  onClick={() => setSelected(coach)}
                  className="cursor-pointer group relative overflow-hidden bg-[#111] border border-white/5 hover:border-gold/30 transition-colors">
                  <div className="relative h-64 overflow-hidden">
                    <img src={coach.image} alt={coach.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                  </div>
                  <div className="p-4">
                    <div className="font-oswald text-xs tracking-widest uppercase text-gold/70 mb-0.5">Head Coach · from June 2025</div>
                    <div className="font-bebas text-2xl text-white">{coach.name}</div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gold transition-all duration-500" />
                </motion.div>
              </div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-gold/5">
            {filtered.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <PlayerCard player={p} onClick={setSelected} />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <PlayerModal
        player={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
