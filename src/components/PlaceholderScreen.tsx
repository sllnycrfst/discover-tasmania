import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface PlaceholderScreenProps {
  title: string;
  subtitle: string;
  icon: string;
  features: string[];
}

export default function PlaceholderScreen({ 
  title, 
  subtitle, 
  icon, 
  features 
}: PlaceholderScreenProps) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.comingSoon}>{icon} Coming Soon</Text>
        <Text style={styles.description}>
          This section is under development. Planned features include:
        </Text>
        
        <View style={styles.featuresList}>
          {features.map((feature, index) => (
            <Text key={index} style={styles.feature}>• {feature}</Text>
          ))}
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