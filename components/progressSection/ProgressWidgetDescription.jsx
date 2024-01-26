import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export const ProgressWidgetDescription = (props) => {
  return (
    <Text style={[
      styles.text, 
      {color: props.color}
    ]}>{props.text}</Text>    
  )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
    },    
})