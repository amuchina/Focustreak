import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { HeaderTitle } from './HeaderTitle';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DropdownMenu } from './DropdownMenu';

export const Header = () => {
  return (
    <View style={styles.container}>
      <DropdownMenu></DropdownMenu>
      <HeaderTitle userName={'giovi'}></HeaderTitle>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    /* flex: 1,
    marginTop: 40,
    marginBottom: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center', */
  },
});
