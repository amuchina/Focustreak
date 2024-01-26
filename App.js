import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
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
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <HomePage/>
        <StatusBar style="auto" />
      </View>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safearea: {
    flex: 1
  }
});
