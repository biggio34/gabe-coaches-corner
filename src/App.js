import React, { useState } from 'react';
import './App.css';

function App() {
  const [drills, setDrills] = useState([]);
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setDrills([...drills, { name, duration }]);
    setName('');
    setDuration('');
  };

  return (
    <div className="App">
      <h1>Welcome to Gabe's Coaches Corner</h1>
      <nav>
        <ul>
          <li><a href="/drills">Drills</a></li>
          <li><a href="/practice-plan">Create Practice Plan</a></li>
        </ul>
      </nav>
      <h2>Add Drill</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Drill Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <button type="submit">Add Drill</button>
      </form>
      <h2>Drills</h2>
      <ul>
        {drills.map((drill, index) => (
          <li key={index}>{drill.name} - {drill.duration} minutes</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
