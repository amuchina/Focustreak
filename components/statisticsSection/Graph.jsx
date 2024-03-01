import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

export const Graph = (props) => {

  // INSERT GRAPH HERE IN THE FUTURE (with params)
  let text = '';
  switch (props.type) {
    case '1':
      break;
    case '2':
      break;
    case '3':
      break;
    default:
      text = 'ransom text';
  }

  text = 'ransom text'; // to delete

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <LinearGradient
        colors={['greenyellow', 'green']}
        style={styles.widget}>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // here
  },
  text: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    opacity: 0.2,
  },
  widget: {
    height: 140,
    borderRadius: 25
  }
});
