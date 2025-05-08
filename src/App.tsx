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
    <div className="app-container">
      <div className="leaderboard-container">
        <h2 className="leaderboard-title">Leaderboard</h2>
        <ol className="leaderboard-list">
          {sortedLeaderboard.map((entry) => (
            <li
              key={entry.name}
              className={`leaderboard-list-item${entry.name === 'You' ? ' leaderboard-list-item-you' : ''}`}
            >
              <span className="leaderboard-name">{entry.name}</span>
              <span className="leaderboard-score">{entry.score}</span>
            </li>
          ))}
        </ol>
      </div>
      <h1 className="counter-value">{count}</h1>
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
