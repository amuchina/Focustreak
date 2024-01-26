import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './header/Header';
import { ProgressContainer } from './progressSection/ProgressContainer';
import { RecentGoalsContainer } from './recentGoalsSection/RecentGoalsContainer';

export const HomePage = () => {
    return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Header/>  
          </View>
          <View style={styles.innerContainer}>
            <ProgressContainer/>
            <RecentGoalsContainer/>  
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 20,
  },
  innerContainer: {
    flexDirection: 'column',
    height: 300,
    backgroundColor: 'red'
  }
});
