import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TabScreenProps } from '../types';

export default function ExploreScreen({ navigation }: TabScreenProps) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore Tasmania</Text>
        <Text style={styles.subtitle}>Discover amazing activities and attractions</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.categoryCard}>
          <Text style={styles.categoryIcon}>🌿</Text>
          <Text style={styles.categoryTitle}>Nature & Wildlife</Text>
          <Text style={styles.categoryDescription}>
            National parks, hiking trails, and unique wildlife encounters
          </Text>
        </View>
        
        <View style={styles.categoryCard}>
          <Text style={styles.categoryIcon}>🍽️</Text>
          <Text style={styles.categoryTitle}>Food & Wine</Text>
          <Text style={styles.categoryDescription}>
            Local cuisine, wineries, and culinary experiences
          </Text>
        </View>
        
        <View style={styles.categoryCard}>
          <Text style={styles.categoryIcon}>🏔️</Text>
          <Text style={styles.categoryTitle}>Adventure</Text>
          <Text style={styles.categoryDescription}>
            Outdoor activities, extreme sports, and adventure tours
          </Text>
        </View>
        
        <View style={styles.categoryCard}>
          <Text style={styles.categoryIcon}>🏛️</Text>
          <Text style={styles.categoryTitle}>Culture & History</Text>
          <Text style={styles.categoryDescription}>
            Museums, historic sites, and cultural experiences
          </Text>
        </View>
        
        <View style={styles.categoryCard}>
          <Text style={styles.categoryIcon}>🏖️</Text>
          <Text style={styles.categoryTitle}>Beaches & Coast</Text>
          <Text style={styles.categoryDescription}>
            Beautiful beaches, coastal walks, and water activities
          </Text>
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
    padding: 15,
  },
  categoryCard: {
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
    alignItems: 'center',
  },
  categoryIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginBottom: 10,
    textAlign: 'center',
  },
  categoryDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
});