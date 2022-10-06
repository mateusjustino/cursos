import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/card.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Primeiro APP</Text>
      <Card/>
      <Card/>
      <Card/>      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  }
});
