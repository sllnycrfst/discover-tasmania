# Discover Tasmania Holiday Planner

A personal web app for planning your Tasmania holiday, with an editable itinerary and an ideas board. Built with [Vite](https://vitejs.dev/) + React.

## Features

- Editable, persistent itinerary (add/remove/edit days and notes)
- Ideas board for jotting down and organizing attractions or activities
- Data saved to your browser (localStorage) — no backend needed
- Simple navigation and clean UI

## Getting Started

1. **Clone the repo:**

   ```
   git clone https://github.com/sllnycrfst/discover-tasmania.git
   cd discover-tasmania
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Run the app locally:**

   ```
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
  components/
    Itinerary.jsx
    IdeasBoard.jsx
  data/
    sampleItinerary.json
  App.jsx
  main.jsx
public/
  index.html
```

## Customizing

- Edit `src/data/sampleItinerary.json` to change the initial trip data.
- The itinerary and ideas board persist your edits in your browser automatically.

---

Enjoy planning your Tasmania trip! 🦘