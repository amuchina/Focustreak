import React from 'react'
import { View, StyleSheet } from 'react-native'
import { RecentGoalsTitle } from './RecentGoalsTitle';

export const RecentGoalsWidget = () => {
    return(
        <View style={styles.container}>
            <RecentGoalsTitle title={'I tuoi traguardi recenti'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 100,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 4
    }
    
});