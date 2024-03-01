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
        <View style={styles.profilePicture}></View>
        <Text style={styles.username}>{'{username}'}</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.infoText}>{'Nome: -------------'}</Text>
        <Text style={styles.infoText}>{'Cognome: ------------------'}</Text>
        <Text style={styles.infoText}>{'Email: ---------------'}</Text>
        <Text style={styles.infoText}>{'Telefono: ----------'}</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.infoText}>{'Tempo salvato: ------------'}</Text>
        <Text style={styles.infoText}>{'Traguardi raggiunti: ---------'}</Text>
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
    marginBottom: 20,
  },
  profilePicture: {
    width: 180,
    height: 180,
    borderRadius: 999, // Half of the width and height to create a circle
    backgroundColor: 'lightgrey', // Placeholder color for the profile picture
    marginBottom: 10,
  },
  infoSection: {
    flex: 1,
    alignItems: 'left',
    width: 320, // Fix this ugly thing dude, it's painful to see. Make it extend (+ 20 margin)
    backgroundColor: 'lightgrey',
    margin: 20,
    padding: 20,
    borderRadius: 30,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 18,
    marginTop: 5,
    marginHorizontal: 10,
  }
});
