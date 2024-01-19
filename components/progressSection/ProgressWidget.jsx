import React from 'react'
import { StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export const ProgressWidget = () => {
  return (
    <LinearGradient 
    colors={['greenyellow', 'green']}
    style={styles.widgetContainer}>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    widgetContainer: {
        height: 140,
        borderRadius: 25
    }
});