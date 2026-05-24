import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-brand">REAL <span>MADRID</span></div>
          <p className="footer-tagline">The most successful football club in history. Founded 1902, Madrid, Spain. 15-time UEFA Champions League winners.</p>
        </div>
        <div>
          <div className="footer-col-title">Football</div>
          <ul className="footer-links">
            <li><Link to="/squad">The Squad</Link></li>
            <li><Link to="/achievements">Achievements</Link></li>
            <li><Link to="/legends">Club Legends</Link></li>
            <li><Link to="/history">Club History</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">The Club</div>
          <ul className="footer-links">
            <li><Link to="/stadium">Stadium</Link></li>
            <li><Link to="/matches">Matches</Link></li>
            <li><Link to="/club">About the Club</Link></li>
            <li><Link to="/rivalries">Rivalries</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Follow</div>
          <ul className="footer-links">
            <li><Link to="/news">Club News</Link></li>
            <li><a href="https://www.realmadrid.com" target="_blank" rel="noreferrer">realmadrid.com</a></li>
            <li><a href="#">Twitter / X</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">Mohammad Al Ajouz · CSCI390 Project Phase 2</div>
        <div style={{fontFamily:'Oswald,sans-serif',fontSize:'10px',letterSpacing:'2px',color:'var(--gray)'}}>© 2025 Real Madrid Fan Site</div>
      </div>
    </footer>
  )
}
