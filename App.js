import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useFonts, Poppins_600SemiBold} from '@expo-google-fonts/poppins';
import {NavigationContainer} from '@react-navigation/native';
import {HomePage} from './components/HomePage';
import {StatisticsPage} from './components/StatisticsPage';
import {NotificationsPage} from './components/NotificationsPage';
import {ProfilePage} from './components/ProfilePage';
import {BottomBar} from './components/BottomBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safearea}>
      <NavigationContainer>
        <Tab.Navigator tabBar={props => <BottomBar {...props} />}>
          <Tab.Screen name="HomePage" component={HomePage} />
          <Tab.Screen name="StatisticsPage" component={StatisticsPage} />
          <Tab.Screen name="NotificationsPage" component={NotificationsPage} />
          <Tab.Screen name="ProfilePage" component={ProfilePage} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
});
