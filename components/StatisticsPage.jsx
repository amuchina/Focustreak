import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from './header/Header';
import {Graph} from './statisticsSection/Graph';

export const StatisticsPage = () => {
  return (
    <View style={styles.container}>
      <Header page={'statistics'}></Header>
      <Graph type={'1'}></Graph>
      <Graph type={'2'}></Graph>
      <Graph type={'3'}></Graph>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: 350, // fix this ugly code
  }
});
