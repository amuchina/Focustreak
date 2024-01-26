import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { HeaderTitle } from './HeaderTitle';
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
    marginTop: -380,
  },
});
