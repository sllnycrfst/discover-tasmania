# Discover Tasmania

A React Native app for discovering and planning travel to Tasmania, Australia.

## Features

- **Flights**: Search and book flights to Tasmania
- **Accommodation**: Find and book hotels and accommodations  
- **Activities**: Explore tours and activities
- **Itinerary**: Plan and customize your trip
- **Budget Tracker**: Manage travel expenses

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. For iOS (requires macOS and Xcode):
   ```bash
   cd ios && pod install && cd ..
   npm run ios
   ```

4. For Android (requires Android Studio and SDK):
   ```bash
   npm run android
   ```

## Development

- Start Metro bundler: `npm start`
- Run on iOS: `npm run ios`
- Run on Android: `npm run android`
- Run linter: `npm run lint`
- Run tests: `npm test`

## Project Structure

```
src/
  screens/          # Screen components
    FlightsScreen.jsx
    AccommodationScreen.jsx
    ActivitiesScreen.jsx
    ItineraryScreen.jsx
    BudgetTrackerScreen.jsx
  components/       # Reusable components
  utils/           # Utility functions
```

## Navigation

The app uses React Navigation with bottom tabs for the main navigation structure.

## Dependencies

- React Native 0.73.2
- React Navigation 6.x
- React Native Vector Icons
- React Native Screens
- React Native Safe Area Context