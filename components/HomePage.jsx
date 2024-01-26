import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './header/Header';
import { ProgressContainer } from './progressSection/ProgressContainer';
import { GoalContainer } from './goalSection/GoalContainer';

export const HomePage = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
          <Header></Header>
          <ProgressContainer></ProgressContainer>
      </View>
      <View style={styles.goalsContainer}>
        <Text>example text for heading</Text>
        <View style={styles.goals}>
          <GoalContainer color="#ffaa00"></GoalContainer>
          <GoalContainer color="#aaff00"></GoalContainer>
          <GoalContainer color="#00aaff"></GoalContainer>
          <GoalContainer color="#ffff00"></GoalContainer>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // here
  },
  headerContainer: {
    flexDirection: 'column',
    gap: 20,
  },
  goalsContainer: {
    // here
  },
  goals: {
    // here
  }
});
