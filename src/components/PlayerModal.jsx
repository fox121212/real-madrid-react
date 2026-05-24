import { useEffect } from 'react'

export default function PlayerModal({ player, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handler) }
  }, [onClose])

  const vals = Object.values(player.stats)
  const keys = player.statLabels

  return (
    <div className="modal-overlay" onClick={(e) => e.target.classList.contains('modal-overlay') && onClose()}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-body">
          <div className="modal-photo">
            <img src={player.image} alt={player.name} />
            <div className="modal-photo-num">#{player.number}</div>
          </div>
          <div className="modal-info">
            <div className="modal-position">{player.position}</div>
            <div className="modal-name">{player.name}</div>

            <div className="modal-meta">
              <div className="modal-meta-item"><div className="modal-meta-key">Nationality</div><div className="modal-meta-val">{player.nationality}</div></div>
              <div className="modal-meta-item"><div className="modal-meta-key">Age</div><div className="modal-meta-val">{player.age} years</div></div>
              <div className="modal-meta-item"><div className="modal-meta-key">Height</div><div className="modal-meta-val">{player.meta.height}</div></div>
              <div className="modal-meta-item"><div className="modal-meta-key">Preferred Foot</div><div className="modal-meta-val">{player.meta.foot}</div></div>
              <div className="modal-meta-item"><div className="modal-meta-key">Born</div><div className="modal-meta-val">{player.meta.born}</div></div>
              <div className="modal-meta-item"><div className="modal-meta-key">Joined</div><div className="modal-meta-val">{player.meta.joined}</div></div>
            </div>

            <div className="modal-stats">
              {vals.map((v, i) => (
                <div key={i} className="modal-stat-box">
                  <div className="modal-stat-num">{v}</div>
                  <div className="modal-stat-lbl">{keys[i]}</div>
                </div>
              ))}
            </div>

            <p className="modal-bio">{player.bio}</p>

            <div className="modal-trophies-title">🏆 Trophies Won</div>
            <div>
              {player.trophies.map((t, i) => (
                <span key={i} className="trophy-pill">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
