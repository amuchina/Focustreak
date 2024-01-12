import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const HeaderTitle = () => {
    return (
        <Text style={styles.text}>Welcome</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
    },
})