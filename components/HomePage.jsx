import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { HeaderTitle } from './header/HeaderTitle';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DropdownMenu } from './header/DropdownMenu';
import { Header } from './header/Header';

export const HomePage = () => {
    return (
        <View style={styles.container}>
            <Header></Header>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 20,
  },
});
