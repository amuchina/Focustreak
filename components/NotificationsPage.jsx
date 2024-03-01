import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from './header/Header';
import {Notifications} from './notificationsSection/Notifications';

export const NotificationsPage = () => {
  return (
    <View style={styles.container}>
      <Header page={'notifications'}></Header>
      <Notifications></Notifications>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
