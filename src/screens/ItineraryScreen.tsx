import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { TabScreenProps } from '../types';
import { tasmaniaItinerary } from '../data';

export default function ItineraryScreen({ navigation }: TabScreenProps) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Tasmania Itinerary</Text>
        <Text style={styles.subtitle}>July 18-27 Adventure</Text>
      </View>
      
      <View style={styles.content}>
        {tasmaniaItinerary.map((day, index) => (
          <View key={index} style={styles.dayCard}>
            <View style={styles.dayHeader}>
              <Text style={styles.dayNumber}>{day.day}</Text>
              <View style={styles.dayInfo}>
                <Text style={styles.date}>{day.date}</Text>
                <Text style={styles.location}>{day.location}</Text>
              </View>
            </View>
            
            <Text style={styles.description}>{day.description}</Text>
            
            <View style={styles.activitiesContainer}>
              <Text style={styles.activitiesTitle}>Activities:</Text>
              {day.activities.map((activity, actIndex) => (
                <Text key={actIndex} style={styles.activity}>
                  • {activity}
                </Text>
              ))}
            </View>
          </View>
        ))}
        
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Customize Itinerary</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2E8B57',
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  content: {
    padding: 15,
  },
  dayCard: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dayNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginRight: 15,
    minWidth: 60,
  },
  dayInfo: {
    flex: 1,
  },
  date: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E8B57',
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 15,
  },
  activitiesContainer: {
    marginTop: 10,
  },
  activitiesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  activity: {
    fontSize: 14,
    color: '#555',
    marginBottom: 3,
    marginLeft: 10,
  },
  editButton: {
    backgroundColor: '#2E8B57',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});