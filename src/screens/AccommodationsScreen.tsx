import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TabScreenProps } from '../types';

export default function AccommodationsScreen({ navigation }: TabScreenProps) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Accommodations</Text>
        <Text style={styles.subtitle}>Find your perfect stay in Tasmania</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.comingSoon}>🏠 Coming Soon</Text>
        <Text style={styles.description}>
          This section will help you find and book accommodations throughout Tasmania. 
          Features will include:
        </Text>
        
        <View style={styles.featuresList}>
          <Text style={styles.feature}>• Hotels, motels, and B&Bs</Text>
          <Text style={styles.feature}>• Vacation rentals and cabins</Text>
          <Text style={styles.feature}>• Camping and caravan parks</Text>
          <Text style={styles.feature}>• Reviews and ratings</Text>
          <Text style={styles.feature}>• Location-based search</Text>
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
    padding: 20,
  },
  comingSoon: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 20,
  },
  featuresList: {
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
  feature: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 5,
  },
});