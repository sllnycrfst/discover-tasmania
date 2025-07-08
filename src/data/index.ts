import { ItineraryDay, WebViewService } from '../types';

export const tasmaniaItinerary: ItineraryDay[] = [
  {
    date: "July 18",
    day: "Day 1",
    location: "Hobart",
    activities: ["Fly to Hobart", "Mt Wellington"],
    description: "Arrive in Hobart and explore the iconic Mt Wellington with panoramic views of the city and surroundings."
  },
  {
    date: "July 19",
    day: "Day 2", 
    location: "Bicheno",
    activities: ["Travel to Bicheno", "Coles Bay", "Penguin Walk"],
    description: "Journey to Bicheno via scenic Coles Bay and experience the magical penguin walk at dusk."
  },
  {
    date: "July 20-21",
    day: "Day 3-4",
    location: "Launceston",
    activities: ["Travel to Launceston", "Ben Lomond National Park", "Zoo", "Penny Royal Adventures"],
    description: "Explore Launceston with outdoor adventures at Ben Lomond, visit the zoo, and enjoy Penny Royal Adventures."
  },
  {
    date: "July 22",
    day: "Day 5",
    location: "Cradle Mountain",
    activities: ["Travel to Cradle Mountain", "Dove Lake"],
    description: "Visit the stunning Cradle Mountain-Lake St Clair National Park and walk around the pristine Dove Lake."
  },
  {
    date: "July 23",
    day: "Day 6",
    location: "Queenstown", 
    activities: ["Travel to Queenstown", "Iron Blow Lookout"],
    description: "Explore the unique mining heritage of Queenstown and visit the dramatic Iron Blow Lookout."
  },
  {
    date: "July 24",
    day: "Day 7",
    location: "Lake St. Clair",
    activities: ["Travel to Lake St. Clair", "Rail Experience"],
    description: "Experience Australia's deepest natural freshwater lake and enjoy the historic rail experience."
  },
  {
    date: "July 25-26",
    day: "Day 8-9",
    location: "Hobart",
    activities: ["Return to Hobart", "Mt Wellington", "MONA", "Opossum Bay"],
    description: "Return to Hobart for final exploration including MONA (Museum of Old and New Art) and beautiful Opossum Bay."
  },
  {
    date: "July 27",
    day: "Day 10",
    location: "Hobart",
    activities: ["Salamanca Markets", "Fly Home"],
    description: "Visit the famous Salamanca Markets for local crafts and produce before departure."
  }
];

export const webViewServices: WebViewService[] = [
  {
    name: "Flight Scanner",
    url: "https://www.skyscanner.com",
    description: "Search and book flights to Tasmania"
  },
  {
    name: "Airbnb",
    url: "https://www.airbnb.com",
    description: "Find and book accommodations in Tasmania"
  },
  {
    name: "TripAdvisor",
    url: "https://www.tripadvisor.com",
    description: "Read reviews and discover attractions"
  }
];