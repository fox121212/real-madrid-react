import { motion } from 'framer-motion';

export default function PlayerCard({ player, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      onClick={() => onClick(player)}
      className="cursor-pointer group relative overflow-hidden bg-[#111] border border-white/5 hover:border-gold/30 transition-colors duration-300">

      {/* Number BG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-bebas text-[100px] text-gold/5 select-none transition-all duration-300 group-hover:text-gold/10">
          {player.number}
        </span>
      </div>

      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />

        {/* Flag */}
        <div className="absolute top-3 right-3 text-lg">{player.flag}</div>

        {/* Jersey number badge */}
        <div className="absolute top-3 left-3 font-oswald text-xs tracking-widest text-gold border border-gold/30 bg-black/50 px-2 py-0.5 backdrop-blur-sm">
          #{player.number}
        </div>

        {/* Click to view hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gold/10 flex items-center justify-center">
          <span className="font-oswald text-sm tracking-widest uppercase text-white bg-gold/80 px-4 py-2">
            View Profile
          </span>
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-4 relative">
        <div className="font-oswald text-xs tracking-widest uppercase text-gold/70 mb-0.5">{player.position}</div>
        <div className="font-bebas text-xl text-white leading-tight tracking-wide">{player.name}</div>
      </div>

      {/* Gold bottom line on hover */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-gold to-gold-light transition-all duration-500" />
    </motion.div>
  );
}
