import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const RecentGoalsTitle = (props) => {
    return(
        <Text style={styles.text}>{props.title}</Text>    
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        opacity: 0.2,
        color: 'black'
    }
})