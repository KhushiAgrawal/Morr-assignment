import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import CreditCardForm from './components/creditCardForm';
const App: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.title}>Credit Card Input Exercise</Text>
      <CreditCardForm />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  content: {
    // paddingTop: 96,
    paddingHorizontal: 36,
  },
  title: {
    backgroundColor:'blue',
    marginTop:0,
    color: 'white',
    fontSize: 25,
    marginBottom: 32,
  },
});
export default App;