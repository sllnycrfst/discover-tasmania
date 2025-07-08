import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Import screens
import FlightsScreen from './src/screens/FlightsScreen';
import AccommodationScreen from './src/screens/AccommodationScreen';
import ActivitiesScreen from './src/screens/ActivitiesScreen';
import ItineraryScreen from './src/screens/ItineraryScreen';
import BudgetTrackerScreen from './src/screens/BudgetTrackerScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            switch (route.name) {
              case 'Flights':
                iconName = 'flight';
                break;
              case 'Accommodation':
                iconName = 'hotel';
                break;
              case 'Activities':
                iconName = 'local-activity';
                break;
              case 'Itinerary':
                iconName = 'map';
                break;
              case 'Budget Tracker':
                iconName = 'account-balance-wallet';
                break;
              default:
                iconName = 'help';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2E8B57',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingBottom: 5,
            paddingTop: 5,
            height: 60,
          },
          headerStyle: {
            backgroundColor: '#2E8B57',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}>
        <Tab.Screen 
          name="Flights" 
          component={FlightsScreen}
          options={{
            title: 'Flights',
          }}
        />
        <Tab.Screen 
          name="Accommodation" 
          component={AccommodationScreen}
          options={{
            title: 'Hotels',
          }}
        />
        <Tab.Screen 
          name="Activities" 
          component={ActivitiesScreen}
          options={{
            title: 'Activities',
          }}
        />
        <Tab.Screen 
          name="Itinerary" 
          component={ItineraryScreen}
          options={{
            title: 'Itinerary',
          }}
        />
        <Tab.Screen 
          name="Budget Tracker" 
          component={BudgetTrackerScreen}
          options={{
            title: 'Budget',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;