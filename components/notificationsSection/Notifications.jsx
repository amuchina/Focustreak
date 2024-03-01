import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export const Notifications = () => {
  let notifications = [
    {
      "id": 123456789,
      "title": "New Message",
      "body": "You have received a new message from a friend.",
      "timestamp": "2023-03-23T12:30:45Z",
      "sender": {
        "id": 987654321,
        "name": "John Doe"
      },
      "action": {
        "type": "navigate",
        "screen": "MessageScreen",
        "params": {
          "messageId": 789012345
        }
      }
    },
    {
      "id": 123456789,
      "title": "New Message",
      "body": "You have received a new message from a friend.",
      "timestamp": "2023-04-23T12:30:45Z",
      "sender": {
        "id": 987654321,
        "name": "John Doe"
      },
      "action": {
        "type": "navigate",
        "screen": "MessageScreen",
        "params": {
          "messageId": 789012345
        }
      }
    },
    {
      "id": 123456789,
      "title": "New Message",
      "body": "You have received a new message from a friend.",
      "timestamp": "2023-04-28T12:30:45Z",
      "sender": {
        "id": 987654321,
        "name": "John Doe"
      },
      "action": {
        "type": "navigate",
        "screen": "MessageScreen",
        "params": {
          "messageId": 789012345
        }
      }
    },
    {
      "id": 123456789,
      "title": "New Message",
      "body": "You have received a new message from a friend.",
      "timestamp": "2023-10-12T12:30:45Z",
      "sender": {
        "id": 987654321,
        "name": "John Doe"
      },
      "action": {
        "type": "navigate",
        "screen": "MessageScreen",
        "params": {
          "messageId": 789012345
        }
      }
    },
    {
      "id": 123456789,
      "title": "New Message",
      "body": "You have received a new message from a friend.",
      "timestamp": "2024-02-21T12:30:45Z",
      "sender": {
        "id": 987654321,
        "name": "John Doe"
      },
      "action": {
        "type": "navigate",
        "screen": "MessageScreen",
        "params": {
          "messageId": 789012345
        }
      }
    },
    {
      "id": 123456789,
      "title": "New Message",
      "body": "You have received a new message from a friend.",
      "timestamp": "2024-02-22T12:30:45Z",
      "sender": {
        "id": 987654321,
        "name": "John Doe"
      },
      "action": {
        "type": "navigate",
        "screen": "MessageScreen",
        "params": {
          "messageId": 789012345
        }
      }
    },
    {
      "id": 123456789,
      "title": "New Message",
      "body": "You have received a new message from a friend.",
      "timestamp": "2024-02-23T12:30:45Z",
      "sender": {
        "id": 987654321,
        "name": "John Doe"
      },
      "action": {
        "type": "navigate",
        "screen": "MessageScreen",
        "params": {
          "messageId": 789012345
        }
      }
    }
  ];

  // Group notifications by month and year
  const groupedNotifications = notifications.reduce((acc, curr) => {
    const monthYear = curr.timestamp.substr(0, 7); // Extracting month and year
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(curr);
    return acc;
  }, {});

  const renderNotificationGroup = (monthYear, notifications) => {
    return (
      <View key={monthYear}>
        <View style={[styles.monthYearBox, { backgroundColor: getRandomColor() }]}>
          <Text style={styles.monthYearText}>{monthYear}</Text>
        </View>
        {notifications.map((notification, index) => (
          <View key={index} style={styles.notificationBox}>
            <Text style={styles.title}>{notification.title}</Text>
            <Text style={styles.body}>{notification.body}</Text>
            <Text style={styles.timestamp}>{notification.timestamp}</Text>
            <Text style={styles.sender}>From: {notification.sender.name}</Text>
            {/* Additional content or actions can be added here */}
          </View>
        ))}
      </View>
    );
  };

  const getRandomColor = () => {
    const colors = ['#ff6347', '#ff69b4', '#4682b4', '#9370db', '#32cd32', '#ffa500', '#00ced1', '#87ceeb'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.entries(groupedNotifications)}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => renderNotificationGroup(item[0], item[1])}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  monthYearBox: {
    width: 100,
    backgroundColor: 'lightgray',
    padding: 5,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  monthYearText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationBox: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    marginBottom: 8,
  },
  timestamp: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 8,
  },
  sender: {
    fontSize: 14,
    color: 'blue',
  },
});
