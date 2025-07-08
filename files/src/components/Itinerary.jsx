import React, { useState, useEffect } from "react";

// Util to get and set localStorage
const STORAGE_KEY = "tasmania-itinerary";

const getInitialItinerary = () => {
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

export default function Itinerary({ sampleData }) {
  const [itinerary, setItinerary] = useState(() => getInitialItinerary().length ? getInitialItinerary() : sampleData);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(itinerary));
  }, [itinerary]);

  // Add new day
  const addDay = () => {
    setItinerary([
      ...itinerary,
      { date: "", location: "", notes: [""] }
    ]);
  };

  // Remove day
  const removeDay = (idx) => {
    setItinerary(itinerary.filter((_, i) => i !== idx));
  };

  // Edit field
  const updateDay = (idx, field, value) => {
    const updated = itinerary.map((d, i) =>
      i === idx ? { ...d, [field]: value } : d
    );
    setItinerary(updated);
  };

  // Edit notes
  const updateNote = (dayIdx, noteIdx, value) => {
    const updated = itinerary.map((d, i) =>
      i === dayIdx
        ? { ...d, notes: d.notes.map((n, j) => (j === noteIdx ? value : n)) }
        : d
    );
    setItinerary(updated);
  };

  // Add note
  const addNote = (dayIdx) => {
    const updated = itinerary.map((d, i) =>
      i === dayIdx ? { ...d, notes: [...d.notes, ""] } : d
    );
    setItinerary(updated);
  };

  // Remove note
  const removeNote = (dayIdx, noteIdx) => {
    const updated = itinerary.map((d, i) =>
      i === dayIdx
        ? { ...d, notes: d.notes.filter((_, j) => j !== noteIdx) }
        : d
    );
    setItinerary(updated);
  };

  return (
    <div>
      <h2>Itinerary</h2>
      {itinerary.map((day, idx) => (
        <div key={idx} style={{ border: "1px solid #ddd", padding: 12, marginBottom: 16, borderRadius: 8 }}>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              value={day.date}
              onChange={e => updateDay(idx, "date", e.target.value)}
              placeholder="Date"
              style={{ fontWeight: "bold", width: 120 }}
            />
            <input
              value={day.location}
              onChange={e => updateDay(idx, "location", e.target.value)}
              placeholder="Location"
              style={{ width: 160 }}
            />
            <button onClick={() => removeDay(idx)} title="Remove day">🗑️</button>
          </div>
          <ul>
            {day.notes.map((note, noteIdx) => (
              <li key={noteIdx} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <input
                  value={note}
                  onChange={e => updateNote(idx, noteIdx, e.target.value)}
                  placeholder="Note/Activity"
                  style={{ flex: 1 }}
                />
                <button onClick={() => removeNote(idx, noteIdx)} title="Remove note">✖️</button>
              </li>
            ))}
          </ul>
          <button onClick={() => addNote(idx)}>+ Add note</button>
        </div>
      ))}
      <button onClick={addDay} style={{ fontWeight: "bold", fontSize: 18, marginTop: 8 }}>+ Add Day</button>
    </div>
  );
}