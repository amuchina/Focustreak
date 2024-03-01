import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Notifications} from './notificationsSection/Notifications';

export const NotificationsPage = () => {
  return (
    <View style={styles.container}>
      <Notifications></Notifications>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
