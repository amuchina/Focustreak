import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NotificationBox } from './NotificationBox';

export const Notifications = () => {
  let notifications = [
    {
      "date": "2024-01-01",
      "previewText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "date": "2024-01-15",
      "previewText": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "date": "2024-01-20",
      "previewText": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      "date": "2023-12-05",
      "previewText": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      "date": "2023-12-10",
      "previewText": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "date": "2023-12-20",
      "previewText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      "date": "2023-12-25",
      "previewText": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      "date": "2023-11-05",
      "previewText": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      "date": "2023-12-15",
      "previewText": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "date": "2023-12-30",
      "previewText": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  // Group notifications by month
  const notificationsByMonth = notifications.reduce((acc, notification) => {
    const month = notification.date.substring(0, 7); // Extract YYYY-MM
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(notification);
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      {Object.keys(notificationsByMonth).map((month, index) => (
        <NotificationBox key={index} month={month} index={index} />
      ))}
    </View>
  );
}

const formatMonth = (month) => {
  const [year, monthNumber] = month.split('-');
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${monthNames[parseInt(monthNumber) - 1]} ${year}`;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
});