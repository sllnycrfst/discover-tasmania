# Discover Tasmania - Mobile App

A comprehensive React Native mobile application to help users plan an unforgettable holiday to Tasmania, Australia's beautiful island state.

## Features

### 🏠 Home Tab
Welcome screen with quick links to essential sections and overview of app functionality.

### 📋 Itinerary Planner (Core Feature)
- **Pre-loaded Tasmania Itinerary**: Complete 10-day adventure covering:
  - **Day 1**: Hobart arrival & Mt Wellington
  - **Day 2**: Bicheno via Coles Bay & Penguin Walk
  - **Day 3-4**: Launceston - Ben Lomond National Park, Zoo, Penny Royal Adventures
  - **Day 5**: Cradle Mountain & Dove Lake
  - **Day 6**: Queenstown & Iron Blow Lookout
  - **Day 7**: Lake St. Clair & Rail Experience
  - **Day 8-9**: Return to Hobart - MONA, Opossum Bay
  - **Day 10**: Salamanca Markets & Departure

### 🌐 Web View Integration (Core Feature)
Integrated web views for external booking services:
- **Flight Scanner**: Search and book flights via Skyscanner
- **Airbnb**: Find and book accommodations
- **TripAdvisor**: Research attractions and read reviews

### 🗺️ Additional Features
- **Flights Tab**: Flight search and booking integration
- **Accommodations Tab**: Hotel and accommodation search
- **Explore Tasmania**: Categorized activities (Nature, Food, Adventure, Culture, Beaches)
- **Transportation Tab**: Car rentals and transport options
- **Dining Tab**: Restaurant recommendations and reviews
- **Budget Tracker Tab**: Expense tracking and planning
- **Weather Tab**: Real-time weather updates
- **Emergency Tab**: Important contacts and offline information
- **Profile Tab**: User preferences and account management

## Technology Stack

- **React Native** with Expo for cross-platform development
- **TypeScript** for type safety
- **React Navigation** for tab-based navigation
- **React Native WebView** for external service integration
- **Responsive design** optimized for mobile devices

## Getting Started

### Prerequisites
- Node.js (v20+)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sllnycrfst/discover-tasmania.git
cd discover-tasmania
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on different platforms:
```bash
# Web browser
npm run web

# iOS (requires macOS)
npm run ios

# Android
npm run android
```

## Project Structure

```
src/
├── components/          # Reusable components
├── screens/            # Main screen components
├── data/              # Static data (itinerary, services)
├── types/             # TypeScript type definitions
└── ...
```

## Key Files

- `App.tsx`: Main app component with navigation setup
- `src/data/index.ts`: Tasmania itinerary and web services data
- `src/screens/ItineraryScreen.tsx`: Core itinerary feature
- `src/screens/WebViewScreen.tsx`: Web view integration

## Development Notes

- Web View functionality requires mobile device for full testing
- All 12 feature tabs are implemented with modular architecture
- Consistent UI design with Tasmania-themed green color scheme
- Built for cross-platform deployment (iOS, Android, Web)

## Future Enhancements

- API integration for real-time flight and accommodation data
- Map integration for route planning
- Offline mode for emergency information
- User authentication and cloud sync
- Push notifications for travel reminders
- Currency conversion for budget tracking

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.