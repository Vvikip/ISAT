import { useState } from "react";
import "./App.css";
import "./big-red-round-btn.css";

function App() {
  const [count, setCount] = useState(0);

  // Hardcoded leaderboard data for MVP
  const leaderboard = [
    { name: "Alice", score: 12 },
    { name: "Bob", score: 8 },
    { name: "Carol", score: 5 },
    { name: "You", score: count },
  ];

  // Sort leaderboard descending by score
  const sortedLeaderboard = [...leaderboard].sort((a, b) => b.score - a.score);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', paddingTop: '32px' }}>
      <div style={{ width: '100%', maxWidth: 360, marginBottom: '2.5rem', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '1.5rem 1rem' }}>
        <h2 style={{ margin: 0, marginBottom: '1rem', fontSize: '1.4rem', color: '#b00', textAlign: 'center', letterSpacing: 1 }}>Leaderboard</h2>
        <ol style={{ listStyle: 'decimal', padding: 0, margin: 0 }}>
          {sortedLeaderboard.map((entry) => (
            <li key={entry.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', fontWeight: entry.name === 'You' ? 'bold' : 'normal', color: entry.name === 'You' ? '#b00' : '#222', fontSize: '1.1rem' }}>
              <span>{entry.name}</span>
              <span>{entry.score}</span>
            </li>
          ))}
        </ol>
      </div>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>{count}</h1>
      <button
        className="big-red-round-btn"
        onClick={() => setCount((count) => count + 1)}
      >
        ISAT
      </button>
    </div>
  );
}

export default App;
