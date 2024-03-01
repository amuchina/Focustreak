import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons, you can change to the icon library of your choice

export const BottomBar = () => {
  const navigation = useNavigation();

  const goToHomePage = () => {
    navigation.navigate('HomePage');
  };

  const goToStatisticsPage = () => {
    navigation.navigate('StatisticsPage');
  };

  const goToNotificationsPage = () => {
    navigation.navigate('NotificationsPage');
  };

  const goToProfilePage = () => {
    navigation.navigate('ProfilePage');
  };

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.button} onPress={goToHomePage}>
        <Icon name="home" size={30} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToStatisticsPage}>
        <Icon name="stats-chart" size={30} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToNotificationsPage}>
        <Icon name="notifications" size={30} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToProfilePage}>
        <Icon name="person" size={30} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust as needed
    height: 60, // Adjust as needed
    borderTopWidth: 1, // Border top to separate from content
    borderTopColor: '#ccc', // Adjust as needed
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});