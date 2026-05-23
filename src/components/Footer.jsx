import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/10 pt-16 pb-6">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        <div>
          <div className="font-bebas text-2xl tracking-widest mb-3">REAL <span className="text-gold">MADRID</span></div>
          <p className="text-rmgray text-sm leading-relaxed">The most successful football club in history. Founded 1902, Madrid, Spain.</p>
        </div>
        <div>
          <div className="font-oswald text-xs tracking-widest uppercase text-gold mb-4">Football</div>
          <ul className="space-y-2">
            {[['The Squad','/squad'],['Achievements','/achievements'],['Club Legends','/legends'],['Club History','/history']].map(([l,h])=>(
              <li key={h}><Link to={h} className="text-rmgray text-sm hover:text-gold transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-oswald text-xs tracking-widest uppercase text-gold mb-4">The Club</div>
          <ul className="space-y-2">
            {[['Stadium','/stadium'],['Matches','/matches'],['About the Club','/club'],['Rivalries','/rivalries']].map(([l,h])=>(
              <li key={h}><Link to={h} className="text-rmgray text-sm hover:text-gold transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-oswald text-xs tracking-widest uppercase text-gold mb-4">Live</div>
          <ul className="space-y-2">
            {[['Live Matches','/matches'],['Club News','/news']].map(([l,h])=>(
              <li key={h}><Link to={h} className="text-rmgray text-sm hover:text-gold transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 pt-6 border-t border-white/5 flex justify-between items-center">
        <div className="text-rmgray text-xs font-oswald tracking-widest uppercase">Mohammad Al Ajouz · CSCI390 Phase 2</div>
        <div className="text-rmgray text-xs">© {new Date().getFullYear()} Real Madrid CF Fan Site</div>
      </div>
    </footer>
  );
}
