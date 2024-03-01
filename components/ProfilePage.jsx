import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header } from './header/Header';

export const ProfilePage = () => {

  /* Delete this

      Profile page:

      PFP
      User data

      User goals
   */

  return (
    <View style={styles.container}>
      <View style={styles.profilePictureContainer}>
        {/* Profile picture circle */}
        <View style={styles.profilePicture}></View>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.username}>Username: JohnDoe</Text>
        <Text style={styles.email}>Email: johndoe@example.com</Text>
        {/* Add more profile information here */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePictureContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60, // Half of the width and height to create a circle
    backgroundColor: 'lightgrey', // Placeholder color for the profile picture
    marginBottom: 10,
  },
  profileInfo: {
    flex: 1, // Take up all available space
    alignItems: 'center',
    justifyContent: 'flex-start', // Align content at the top
    marginTop: 20, // Add some margin from the top
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
  },
});
