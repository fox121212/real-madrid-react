import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', to: '/' },
  {
    label: 'Football',
    children: [
      { label: 'The Squad', to: '/squad' },
      { label: 'Achievements', to: '/achievements' },
      { label: 'Club Legends', to: '/legends' },
      { label: 'Club History', to: '/history' },
    ]
  },
  {
    label: 'The Club',
    children: [
      { label: 'Stadium', to: '/stadium' },
      { label: 'About the Club', to: '/club' },
      { label: 'Rivalries', to: '/rivalries' },
    ]
  },
  { label: 'Matches', to: '/matches' },
  { label: 'News', to: '/news' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-gold/10' : 'bg-transparent'}`}>
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="font-bebas text-2xl tracking-widest text-white">
          REAL <span className="text-gold">MADRID</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.label} className="relative group"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}>
              {item.to ? (
                <NavLink to={item.to}
                  className={({ isActive }) =>
                    `font-oswald text-sm tracking-widest uppercase transition-colors duration-200 ${isActive ? 'text-gold' : 'text-white/80 hover:text-gold'}`}>
                  {item.label}
                </NavLink>
              ) : (
                <button className="font-oswald text-sm tracking-widest uppercase text-white/80 hover:text-gold transition-colors duration-200">
                  {item.label} ▾
                </button>
              )}
              {item.children && openDropdown === item.label && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="absolute top-full left-0 mt-2 bg-dark-3 border border-gold/10 min-w-[180px] shadow-2xl">
                  {item.children.map(child => (
                    <NavLink key={child.to} to={child.to}
                      className="block px-5 py-3 font-oswald text-xs tracking-widest uppercase text-white/70 hover:text-gold hover:bg-gold/5 transition-colors border-b border-white/4">
                      {child.label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          <div className={`w-6 h-0.5 bg-gold mb-1.5 transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}/>
          <div className={`w-6 h-0.5 bg-gold mb-1.5 transition-all ${mobileOpen ? 'opacity-0' : ''}`}/>
          <div className={`w-6 h-0.5 bg-gold transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
            className="lg:hidden bg-black/98 border-t border-gold/10 overflow-hidden">
            <div className="px-6 py-4 flex flex-col gap-2">
              {navItems.map(item => (
                <div key={item.label}>
                  {item.to ? (
                    <NavLink to={item.to} onClick={() => setMobileOpen(false)}
                      className="block py-2 font-oswald text-sm tracking-widest uppercase text-white/80 hover:text-gold">
                      {item.label}
                    </NavLink>
                  ) : (
                    <>
                      <div className="py-2 font-oswald text-xs tracking-widest uppercase text-gold/60">{item.label}</div>
                      {item.children.map(child => (
                        <NavLink key={child.to} to={child.to} onClick={() => setMobileOpen(false)}
                          className="block py-1.5 pl-4 font-oswald text-xs tracking-widest uppercase text-white/60 hover:text-gold">
                          — {child.label}
                        </NavLink>
                      ))}
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
