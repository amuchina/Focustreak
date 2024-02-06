import React from 'react';
import { StyleSheet, View } from 'react-native';

export const NotificationsPage = (props) => {
  return (
    <View key={props.index}>
      <View style={styles.monthBox}>
        <Text style={styles.monthText}>{formatMonth(props.month)}</Text>
      </View>
      {notificationsByMonth[props.month].map((notification, subIndex) => (
        <Text key={subIndex} style={styles.notificationText}>{notification.previewText}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  monthBox: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  monthText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  notificationText: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
});

