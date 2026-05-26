import { useState, useEffect } from 'react';
import FadeIn from '../components/FadeIn';

const REAL_MADRID_ID = 86;

export default function Matches() {
  const [live, setLive] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await fetch(`/api/matches`);
        const data = await res.json();

        if (!res.ok || !data.matches) {
          throw new Error('Failed to load matches');
        }

        const allMatches = data.matches;

        const liveMatches = allMatches.filter(m => 
          m.status === 'IN_PLAY' || m.status === 'PAUSED'
        );

        const upcomingMatches = allMatches.filter(m => 
          m.status === 'SCHEDULED' || m.status === 'TIMED'
        );

        const recentMatches = allMatches
          .filter(m => m.status === 'FINISHED')
          .sort((a, b) => new Date(b.utcDate) - new Date(a.utcDate))
          .slice(0, 6);

        setLive(liveMatches);
        setUpcoming(upcomingMatches);
        setRecent(recentMatches);
      } catch (err) {
        setError('Failed to load match data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      weekday: 'short', day: 'numeric', month: 'short' 
    });
  };

  return (
    <main>
      <div className="page-hero">
        <div>
          <div className="page-hero-sub">2025–26 Season</div>
          <h1>REAL MADRID <span className="gold">MATCHES</span></h1>
        </div>
      </div>

      <div className="section">

        {/* LIVE MATCHES */}
        {live.length > 0 && (
          <>
            <FadeIn>
              <div className="section-header">
                <div className="section-label">Now Playing</div>
                <h2 className="section-title">LIVE <span className="text-gold">MATCHES</span></h2>
                <div className="section-divider" />
              </div>
            </FadeIn>
            <div className="space-y-2 mb-12">
              {live.map((match) => (
                <div key={match.id} className="match-card border-l-4 border-green-500">
                  <div className="match-teams">
                    <div className="match-team home">{match.homeTeam.name}</div>
                    <div className="match-score">{match.score.fullTime.home} – {match.score.fullTime.away}</div>
                    <div className="match-team">{match.awayTeam.name}</div>
                  </div>
                  <div className="match-meta">
                    <span>{match.competition.name}</span>
                    <span className="match-result result-live">● LIVE</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* UPCOMING FIXTURES */}
        <FadeIn>
          <div className="section-header">
            <div className="section-label">Live from football-data.org</div>
            <h2 className="section-title">UPCOMING <span className="text-gold">FIXTURES</span></h2>
            <div className="section-divider" />
          </div>
        </FadeIn>

        {loading && <div className="loading-box"><div className="loading-spinner" /><p>Loading match data...</p></div>}
        {error && <div className="error-box">⚠️ {error}</div>}

        {!loading && !error && upcoming.length > 0 && (
          <div className="space-y-2 mb-12">
            {upcoming.map((match) => (
              <div key={match.id} className="match-card">
                <div className="match-teams">
                  <div className="match-team home">{match.homeTeam.name}</div>
                  <div className="match-score">vs</div>
                  <div className="match-team">{match.awayTeam.name}</div>
                </div>
                <div className="match-meta">
                  <span>{match.competition.name}</span>
                  <span>{formatDate(match.utcDate)}</span>
                  <span className="match-result result-upcoming">UPCOMING</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && upcoming.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            No upcoming matches at the moment.
          </div>
        )}

        {/* RECENT RESULTS */}
        <FadeIn>
          <div className="section-header" style={{ marginTop: 30 }}>
            <div className="section-label">Recent Form</div>
            <h2 className="section-title">LATEST <span className="text-gold">RESULTS</span></h2>
            <div className="section-divider" />
          </div>
        </FadeIn>

        {!loading && !error && recent.length > 0 && (
          <div className="space-y-2">
            {recent.map((match) => {
              const isHome = match.homeTeam.id === REAL_MADRID_ID;
              const rmScore = isHome ? match.score.fullTime.home : match.score.fullTime.away;
              const oppScore = isHome ? match.score.fullTime.away : match.score.fullTime.home;

              let result = 'DRAW', resultClass = 'result-d';
              if (rmScore > oppScore) { result = 'WIN'; resultClass = 'result-w'; }
              else if (rmScore < oppScore) { result = 'LOSS'; resultClass = 'result-l'; }

              return (
                <div key={match.id} className="match-card">
                  <div className="match-teams">
                    <div className="match-team home">{match.homeTeam.name}</div>
                    <div className="match-score">{match.score.fullTime.home} – {match.score.fullTime.away}</div>
                    <div className="match-team">{match.awayTeam.name}</div>
                  </div>
                  <div className="match-meta">
                    <span>{match.competition.name}</span>
                    <span>{formatDate(match.utcDate)}</span>
                    <span className={`match-result ${resultClass}`}>{result}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}