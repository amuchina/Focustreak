import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const HeaderTitle = (props) => {
    return (
        <Text style={styles.text}>Welcome, {props.userName}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 40,
        opacity: 0.2,
    },
})

