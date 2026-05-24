import { useState } from 'react'
import { players, coach } from '../data/players'
import PlayerModal from '../components/PlayerModal'
import FadeIn from '../components/FadeIn'

const groups = [
  { title: 'Goalkeepers', filter: p => p.position === 'Goalkeeper' },
  { title: 'Defenders', filter: p => ['Right Back','Centre Back','Left Back','Right Back / Midfielder'].includes(p.position) },
  { title: 'Midfielders', filter: p => p.position.includes('Midfielder') },
  { title: 'Forwards', filter: p => p.position === 'Forward' },
]

function PlayerCard({ player, onClick }) {
  return (
    <div className="player-card" onClick={() => onClick(player)}>
      <div className="player-photo">
        <div className="player-number-bg">{player.number}</div>
        <img src={player.image} alt={player.name} />
        <div className="player-flag">{player.nationality.split(' ')[0]}</div>
        <div className="player-info">
          <div className="player-jersey">#{player.number}</div>
          <div className="player-name">{player.name}</div>
          <div className="player-pos">{player.position}</div>
        </div>
        <div className="player-overlay"><span>View Profile</span></div>
      </div>
    </div>
  )
}

export default function Squad() {
  const [selected, setSelected] = useState(null)
  return (
    <main>
      <div className="page-hero">
        <div>
          <div className="page-hero-sub">2025–26 Season</div>
          <h1>THE <span className="gold">SQUAD</span></h1>
        </div>
      </div>
      <div style={{ background: 'var(--dark-2)', padding: '14px 60px', borderBottom: '1px solid rgba(200,169,81,0.1)' }}>
        <p style={{ fontFamily: 'Oswald,sans-serif', fontSize: 11, letterSpacing: 2, color: 'var(--gray)', textTransform: 'uppercase' }}>
          Manager: <span style={{ color: 'var(--gold)' }}>Xabi Alonso</span> &nbsp;|&nbsp; Season: 2025–26 &nbsp;|&nbsp; Click any player for full profile
        </p>
      </div>
      <div className="section" style={{ background: 'var(--dark-2)' }}>
        {groups.map(({ title, filter }) => {
          const group = players.filter(filter)
          if (!group.length) return null
          return (
            <FadeIn key={title}>
              <div className="position-group">
                <div className="position-title">{title}</div>
                <div className="players-grid">
                  {group.map(p => <PlayerCard key={p.id} player={p} onClick={setSelected} />)}
                </div>
              </div>
            </FadeIn>
          )
        })}

        {/* Coach */}
        <FadeIn>
          <div className="position-group">
            <div className="position-title">Coaching Staff</div>
            <div className="players-grid" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))' }}>
              <div className="player-card" style={{ cursor: 'default' }}>
                <div className="player-photo" style={{ aspectRatio: '3/4' }}>
                  <img src={coach.image} alt={coach.name} />
                  <div className="player-info">
                    <div className="player-jersey" style={{ fontSize: 9, letterSpacing: 2 }}>HEAD COACH</div>
                    <div className="player-name">{coach.name}</div>
                    <div className="player-pos">{coach.nationality} · From 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
      {selected && <PlayerModal player={selected} onClose={() => setSelected(null)} />}
    </main>
  )
}
