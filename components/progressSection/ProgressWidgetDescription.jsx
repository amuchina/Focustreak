import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export const ProgressWidgetDescription = () => {
  return (
    <Text style={styles.text}>Continua cosi! I tuoi traguardi sono invidiabili!</Text>    
  )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        color: '#D0F4DC',
    },    
})