import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import FlightsScreen from './src/screens/FlightsScreen';
import AccommodationsScreen from './src/screens/AccommodationsScreen';
import ItineraryScreen from './src/screens/ItineraryScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import WebViewScreen from './src/screens/WebViewScreen';
import PlaceholderScreen from './src/components/PlaceholderScreen';

const Tab = createBottomTabNavigator();

// Placeholder screen configurations
const TransportationScreen = () => (
  <PlaceholderScreen
    title="Transportation"
    subtitle="Car rentals and transport options"
    icon="🚗"
    features={[
      "Car rental booking",
      "Public transport schedules",
      "Route planning",
      "Fuel station locations"
    ]}
  />
);

const DiningScreen = () => (
  <PlaceholderScreen
    title="Dining"
    subtitle="Restaurant recommendations and reviews"
    icon="🍽️"
    features={[
      "Restaurant search and reviews",
      "Cuisine type filters",
      "Reservation booking",
      "Local food recommendations"
    ]}
  />
);

const BudgetScreen = () => (
  <PlaceholderScreen
    title="Budget Tracker"
    subtitle="Track your travel expenses"
    icon="💰"
    features={[
      "Expense tracking",
      "Budget planning",
      "Spending categories",
      "Currency conversion"
    ]}
  />
);

const WeatherScreen = () => (
  <PlaceholderScreen
    title="Weather"
    subtitle="Real-time weather updates"
    icon="🌤️"
    features={[
      "Current weather conditions",
      "7-day forecast",
      "Location-based updates",
      "Weather alerts"
    ]}
  />
);

const EmergencyScreen = () => (
  <PlaceholderScreen
    title="Emergency"
    subtitle="Important contacts and information"
    icon="🚨"
    features={[
      "Emergency contact numbers",
      "Hospital locations",
      "Police stations",
      "Offline access"
    ]}
  />
);

const ProfileScreen = () => (
  <PlaceholderScreen
    title="Profile"
    subtitle="Manage your preferences"
    icon="👤"
    features={[
      "User preferences",
      "Sync settings",
      "Travel history",
      "Account management"
    ]}
  />
);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#2E8B57',
            borderTopWidth: 0,
            height: 60,
            paddingBottom: 5,
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#90EE90',
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600',
          },
          headerShown: false,
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen 
          name="Flights" 
          component={FlightsScreen}
          options={{
            tabBarLabel: 'Flights',
          }}
        />
        <Tab.Screen 
          name="Hotels" 
          component={AccommodationsScreen}
          options={{
            tabBarLabel: 'Hotels',
          }}
        />
        <Tab.Screen 
          name="Itinerary" 
          component={ItineraryScreen}
          options={{
            tabBarLabel: 'Itinerary',
          }}
        />
        <Tab.Screen 
          name="Explore" 
          component={ExploreScreen}
          options={{
            tabBarLabel: 'Explore',
          }}
        />
        <Tab.Screen 
          name="Transport" 
          component={TransportationScreen}
          options={{
            tabBarLabel: 'Transport',
          }}
        />
        <Tab.Screen 
          name="Dining" 
          component={DiningScreen}
          options={{
            tabBarLabel: 'Dining',
          }}
        />
        <Tab.Screen 
          name="Budget" 
          component={BudgetScreen}
          options={{
            tabBarLabel: 'Budget',
          }}
        />
        <Tab.Screen 
          name="Weather" 
          component={WeatherScreen}
          options={{
            tabBarLabel: 'Weather',
          }}
        />
        <Tab.Screen 
          name="Emergency" 
          component={EmergencyScreen}
          options={{
            tabBarLabel: 'Emergency',
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
          }}
        />
        <Tab.Screen 
          name="WebView" 
          component={WebViewScreen}
          options={{
            tabBarLabel: 'Services',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
