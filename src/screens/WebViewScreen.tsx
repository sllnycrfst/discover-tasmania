import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { TabScreenProps } from '../types';
import { webViewServices } from '../data';

export default function WebViewScreen({ navigation }: TabScreenProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [webViewUrl, setWebViewUrl] = useState<string>('');

  const openWebView = (service: typeof webViewServices[0]) => {
    setSelectedService(service.name);
    setWebViewUrl(service.url);
  };

  const closeWebView = () => {
    setSelectedService(null);
    setWebViewUrl('');
  };

  if (selectedService && webViewUrl) {
    return (
      <View style={styles.webViewContainer}>
        <View style={styles.webViewHeader}>
          <TouchableOpacity onPress={closeWebView} style={styles.backButton}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.webViewTitle}>{selectedService}</Text>
        </View>
        <WebView
          source={{ uri: webViewUrl }}
          style={styles.webView}
          startInLoadingState={true}
          renderLoading={() => (
            <View style={styles.loading}>
              <Text>Loading {selectedService}...</Text>
            </View>
          )}
        />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Web Services</Text>
        <Text style={styles.subtitle}>Access external booking and planning services</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.description}>
          Tap on any service below to open it in a web view for booking flights, 
          accommodations, or researching attractions and activities.
        </Text>
        
        {webViewServices.map((service, index) => (
          <TouchableOpacity
            key={index}
            style={styles.serviceCard}
            onPress={() => openWebView(service)}
          >
            <Text style={styles.serviceName}>{service.name}</Text>
            <Text style={styles.serviceDescription}>{service.description}</Text>
            <Text style={styles.serviceUrl}>{service.url}</Text>
          </TouchableOpacity>
        ))}
        
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>📱 How to use Web Services</Text>
          <Text style={styles.infoText}>
            • Tap any service to open it in the integrated browser{'\n'}
            • Use the "Back" button to return to this screen{'\n'}
            • Services will load in their mobile-optimized versions{'\n'}
            • You can complete bookings directly within the app
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
    padding: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 20,
  },
  serviceCard: {
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
  serviceName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginBottom: 8,
  },
  serviceDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  serviceUrl: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  infoBox: {
    backgroundColor: '#E8F5E8',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  webViewContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  webViewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2E8B57',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 15,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  webViewTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  webView: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});