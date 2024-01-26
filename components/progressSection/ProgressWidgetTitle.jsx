import React from 'react'
import { StyleSheet, Text } from 'react-native'

export const ProgressWidgetTitle = (props) => {
  return (
    
    <Text style={styles.text}>{props.title}</Text>
  )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 32,
        color: 'white',
        paddingTop: 14,
    },    
})
