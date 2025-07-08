import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TabScreenProps } from '../types';

export default function FlightsScreen({ navigation }: TabScreenProps) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Flight Search</Text>
        <Text style={styles.subtitle}>Find and book flights to Tasmania</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.comingSoon}>🛫 Coming Soon</Text>
        <Text style={styles.description}>
          This section will integrate with flight search APIs to help you find and book 
          the best flights to Tasmania. Features will include:
        </Text>
        
        <View style={styles.featuresList}>
          <Text style={styles.feature}>• Search flights from your location</Text>
          <Text style={styles.feature}>• Compare prices across airlines</Text>
          <Text style={styles.feature}>• Direct booking integration</Text>
          <Text style={styles.feature}>• Flight status tracking</Text>
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