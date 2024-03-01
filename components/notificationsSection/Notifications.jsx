import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export const Notifications = () => {
  let notifications = [
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

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.notificationBox}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
              <Text style={styles.sender}>From: {item.sender.name}</Text>
              {/* Additional content or actions can be added here */}
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
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
