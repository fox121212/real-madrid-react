import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function PlayerModal({ player, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handler); };
  }, [onClose]);

  if (!player) return null;

  const totalTrophies = player.trophies?.reduce((sum, t) => sum + t.count, 0) || 0;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={e => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#111] border border-gold/20 shadow-2xl">

          {/* Gold top bar */}
          <div className="h-0.5 w-full bg-gradient-to-r from-gold via-gold-light to-transparent" />

          {/* Close */}
          <button onClick={onClose}
            className="absolute top-4 right-4 text-rmgray hover:text-gold font-oswald text-sm tracking-widest transition-colors z-10">
            ESC ✕
          </button>

          <div className="flex flex-col md:flex-row">
            {/* Player image */}
            <div className="relative md:w-64 h-64 md:h-auto bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] flex-shrink-0 overflow-hidden">
              <div className="absolute inset-0 flex items-end justify-center">
                <span className="font-bebas text-[120px] text-gold/5 leading-none select-none">
                  {player.number}
                </span>
              </div>
              <img src={player.image} alt={player.name}
                className="absolute inset-0 w-full h-full object-cover object-top" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#111] to-transparent" />
              <div className="absolute top-4 left-4 font-oswald text-xs tracking-widest text-gold border border-gold/30 px-2 py-1">
                #{player.number}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 p-6 md:p-8">
              <div className="mb-1">
                <span className="font-oswald text-xs tracking-widest uppercase text-gold/70">{player.position}</span>
              </div>
              <h2 className="font-bebas text-4xl text-white leading-none mb-1">{player.name}</h2>
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl">{player.flag}</span>
                <span className="font-oswald text-sm text-rmgray-lighter tracking-wide">{player.nationality}</span>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-px bg-white/5 mb-6">
                {[
                  ['Age', player.age],
                  ['Height', player.height || '—'],
                  ['Joined', player.joined],
                  ['Apps', player.appearances || '—'],
                  ['Goals', player.goals ?? (player.cleanSheets !== undefined ? `${player.cleanSheets} CS` : '—')],
                  ['Assists', player.assists ?? (player.number <= 13 ? '—' : '—')],
                ].map(([label, val]) => (
                  <div key={label} className="bg-[#161616] p-3 text-center">
                    <div className="font-bebas text-2xl text-gold">{val}</div>
                    <div className="font-oswald text-[10px] tracking-widest uppercase text-rmgray">{label}</div>
                  </div>
                ))}
              </div>

              {/* Bio */}
              <p className="text-rmgray-lighter text-sm leading-relaxed mb-6">{player.bio}</p>

              {/* Trophies */}
              {player.trophies?.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="font-oswald text-xs tracking-widest uppercase text-gold">Trophy Cabinet</div>
                    <div className="text-xs text-rmgray">({totalTrophies} total)</div>
                  </div>
                  <div className="space-y-2">
                    {player.trophies.map((t, i) => (
                      <div key={i} className="flex items-center justify-between bg-[#1a1a1a] px-4 py-2.5 border-l-2 border-gold/40">
                        <span className="font-oswald text-sm text-white/80 tracking-wide">{t.name}</span>
                        <span className="font-bebas text-lg text-gold">×{t.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {(!player.trophies || player.trophies.length === 0) && (
                <div className="text-rmgray text-sm italic">New signing — trophy cabinet to be filled at the Bernabéu.</div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
