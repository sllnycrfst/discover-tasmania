import React, { useEffect, useState } from "react";
import Itinerary from "./components/Itinerary";
import IdeasBoard from "./components/IdeasBoard";
import sampleItinerary from "./data/sampleItinerary.json";

function App() {
  const [view, setView] = useState("itinerary");

  return (
    <div style={{ maxWidth: 650, margin: "0 auto", padding: 24, fontFamily: "sans-serif" }}>
      <h1>Discover Tasmania Holiday Planner 🦘</h1>
      <nav style={{ marginBottom: 20 }}>
        <button onClick={() => setView("itinerary")} style={{ marginRight: 8 }}>
          Itinerary
        </button>
        <button onClick={() => setView("ideas")}>
          Ideas Board
        </button>
      </nav>
      {view === "itinerary" && <Itinerary sampleData={sampleItinerary} />}
      {view === "ideas" && <IdeasBoard />}
    </div>
  );
}

export default App;