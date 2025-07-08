import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TabScreenProps } from '../types';

export default function HomeScreen({ navigation }: TabScreenProps) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Discover Tasmania</Text>
        <Text style={styles.subtitle}>Plan your perfect Tasmanian adventure</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.description}>
          Explore the natural beauty, rich history, and unique experiences that Tasmania has to offer. 
          Use this app to plan your itinerary, book flights and accommodations, and discover amazing 
          attractions across the island.
        </Text>
        
        <View style={styles.quickLinks}>
          <Text style={styles.sectionTitle}>Quick Links</Text>
          <Text style={styles.linkItem}>✈️  Search Flights</Text>
          <Text style={styles.linkItem}>🏠  Find Accommodations</Text>
          <Text style={styles.linkItem}>📋  View Your Itinerary</Text>
          <Text style={styles.linkItem}>🗺️  Explore Tasmania</Text>
          <Text style={styles.linkItem}>🌤️  Check Weather</Text>
        </View>
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
    padding: 30,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 30,
  },
  quickLinks: {
    backgroundColor: 'white',
    padding: 20,
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginBottom: 15,
  },
  linkItem: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 8,
  },
});