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
    gap: 10
  },
  headerContainer: {
    
    gap: 0,
  },
  goalsContainer: {
    // here
  },
  goals: {
    // here
  }
});
