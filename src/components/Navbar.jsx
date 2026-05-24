import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const isActive = (path) => pathname === path ? 'active' : ''
  const isFootball = ['/squad','/achievements','/legends','/history'].includes(pathname)
  const isClub = ['/stadium','/matches','/club'].includes(pathname)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo">REAL <span>MADRID</span></Link>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li><Link to="/" className={isActive('/')}>Home</Link></li>
        <li>
          <Link to="/squad" className={isFootball ? 'active' : ''}>Football ▾</Link>
          <div className="dropdown">
            <Link to="/squad">The Squad</Link>
            <Link to="/achievements">Achievements</Link>
            <Link to="/legends">Club Legends</Link>
            <Link to="/history">Club History</Link>
          </div>
        </li>
        <li>
          <Link to="/club" className={isClub ? 'active' : ''}>The Club ▾</Link>
          <div className="dropdown">
            <Link to="/stadium">Stadium</Link>
            <Link to="/matches">Matches</Link>
            <Link to="/club">About the Club</Link>
          </div>
        </li>
        <li><Link to="/rivalries" className={isActive('/rivalries')}>Rivalries</Link></li>
        <li><Link to="/news" className={isActive('/news')}>News</Link></li>
        <li><a href="mailto:contact@realmadrid.com">Contact</a></li>
      </ul>
      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}
