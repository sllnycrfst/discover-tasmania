import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BudgetTrackerScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Icon name="account-balance-wallet" size={40} color="#2E8B57" />
          <Text style={styles.title}>Budget Tracker</Text>
          <Text style={styles.subtitle}>
            Manage and visualize your travel expenses
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current Budget</Text>
          <View style={styles.placeholder}>
            <Icon name="pie-chart" size={24} color="#666" />
            <Text style={styles.placeholderText}>
              Budget overview and spending breakdown
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Expense Categories</Text>
          <View style={styles.placeholder}>
            <Icon name="category" size={24} color="#666" />
            <Text style={styles.placeholderText}>
              Track spending by category: Flights, Hotels, Food, Activities
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <View style={styles.placeholder}>
            <Icon name="receipt" size={24} color="#666" />
            <Text style={styles.placeholderText}>
              Recent expenses and income entries
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Expense</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  placeholder: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#ddd',
  },
  placeholderText: {
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#2E8B57',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BudgetTrackerScreen;