import React, { useState, useEffect } from "react";

const STORAGE_KEY = "tasmania-ideas";

const getInitialIdeas = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return [];
    }
  }
  return [];
};

export default function IdeasBoard() {
  const [ideas, setIdeas] = useState(() => getInitialIdeas());
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ideas));
  }, [ideas]);

  const addIdea = () => {
    if (input.trim()) {
      setIdeas([...ideas, input]);
      setInput("");
    }
  };

  const removeIdea = (idx) => {
    setIdeas(ideas.filter((_, i) => i !== idx));
  };

  return (
    <div>
      <h2>Ideas Board</h2>
      <div style={{ marginBottom: 8 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add new idea or attraction"
          style={{ width: 220, marginRight: 8 }}
        />
        <button onClick={addIdea}>Add</button>
      </div>
      <ul>
        {ideas.map((idea, idx) => (
          <li key={idx} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span>{idea}</span>
            <button onClick={() => removeIdea(idx)} title="Remove idea">✖️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}