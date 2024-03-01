import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

function coloredBox(type) {
  let customStyle = {};
  switch (type) {
    case 'app_usage_chart':
      customStyle = {
        backgroundColor: 'blue',
      };
      break;
    case 'average_time_chart':
      customStyle = {
        backgroundColor: 'red',
      };
      break;
    case 'saved_time_chart':
      customStyle = {
        backgroundColor: 'green',
      };
      break;
  }

  return (
    <View style={[styles.widget, customStyle, {justifyContent: 'center'}]}>
      <Text style={styles.text}>{'{'+type+'}'}</Text>
    </View>
  );
}

export const Graph = (props) => {
  // INSERT GRAPH HERE IN THE FUTURE (with params)

  return (
    <View style={styles.container}>
      {coloredBox(props.type)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    opacity: 0.2,

    textAlign: 'center', // JUST TEMP, REMOVE THIS
  },
  widget: {
    height: 170,
    borderRadius: 25
  },
});
