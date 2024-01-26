import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ProgressWidgetTitle } from './ProgressWidgetTitle'
import { ProgressWidgetDescription } from './ProgressWidgetDescription'

export const ProgressWidget = (props) => {
  return (
    <View>
      <LinearGradient 
      start={{x: 0, y: 1}} 
      end={{x: 0, y: 2}}
      colors={
        props.type == 'valid' ? 
        ['#81E6A4', '#499FB2'] :
        ['#f5425d', '#ed5858']}
      style={styles.widgetContainer}>
        <View style={styles.container}>
          <ProgressWidgetTitle 
          title={
            props.type == 'valid' ?
            'Stai andando bene!' :
            'Puoi fare di meglio'
          }/>
          <ProgressWidgetDescription 
          text={
            props.type == 'valid' ?
            'Continua cosi! I tuoi traguardi sono invidiabili!' :
            'Non darti per sconfitto...puoi migliorare!'
          }
          color={
            props.type == 'valid' ?
            '#D0F4DC' :
            '#f0b4b4'
          }
          />  
        </View>
        
      </LinearGradient>  
    </View>
    
  )
}

const styles = StyleSheet.create({
  widgetContainer: {
    height: 140,
    borderRadius: 25,
    elevation: 10,
  },
  container: {
    width: 350,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 4
  }
});