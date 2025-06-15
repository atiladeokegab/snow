import React, { useState } from 'react';

function App() {
  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState("");

  async function getPlan() {
    const response = await fetch("http://localhost:8000/api/generate-plan/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ goal })
    });
    const data = await response.json();
    setPlan(data.plan);
  }

  return (
    <div>
      <input value={goal} onChange={(e) => setGoal(e.target.value)} />
      <button onClick={getPlan}>Generate Plan</button>
      <p>{plan}</p>
    </div>
  );
}

export default App;