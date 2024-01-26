import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header } from './header/Header';
import { ProgressContainer } from './progressSection/ProgressContainer';

export const HomePage = () => {
    return (
        <View style={styles.container}>
            <Header></Header>
            <ProgressContainer></ProgressContainer>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 20,
  },
});
