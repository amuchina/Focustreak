import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const GoalContainer = (props) => {
  return (
    <View style={styles(props).container}>
      <View style={styles(props).card}>
        <Text style={styles(props).cardText}>Your Card Content Here</Text>
      </View>
    </View>
  );
};

// TODO: (amuchina) Flexa i cosi in modo che stiano in una griglia 2x2
const styles = (props) => StyleSheet.create({
  container: {
    width: "50%",
    padding: 10,
  },
  card: {
    backgroundColor: props.color,
    borderRadius: 8,
    padding: 16,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },
});
