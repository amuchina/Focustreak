import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {Header} from './header/Header';
import {Graph} from './statisticsSection/Graph';

export const StatisticsPage = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, selectedButton === 'a' && styles.highlighted]}
          onPress={() => handleButtonPress('a')}>
          <Text style={styles.buttonText}>1 mese</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedButton === 'b' && styles.highlighted]}
          onPress={() => handleButtonPress('b')}>
          <Text style={styles.buttonText}>3 mesi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedButton === 'c' && styles.highlighted]}
          onPress={() => handleButtonPress('c')}>
          <Text style={styles.buttonText}>6 mesi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedButton === 'd' && styles.highlighted]}
          onPress={() => handleButtonPress('d')}>
          <Text style={styles.buttonText}>1 anno</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.graphGroup}>
        <Graph type={'app_usage_chart'}></Graph>
        <Graph type={'average_time_chart'}></Graph>
        <Graph type={'saved_time_chart'}></Graph>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: 'lightgray',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  highlighted: {
    backgroundColor: 'skyblue', // Change to your desired highlighted color
  },
  graphGroup: {
    flex: 1,
    margin: 20,
  }
});
