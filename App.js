import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { HeaderTitle } from './components/header/HeaderTitle';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { HomePage } from './components/HomePage';

export default function App() {
  const [text, setText] = useState('');
  const [fontsLoaded, fontError] = useFonts({
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <HomePage></HomePage>
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
});
