import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { HeaderTitle } from './HeaderTitle';
import { DropdownMenu } from './DropdownMenu';

export const Header = (props) => {
  let text = "";
  switch (props.page) {
    case 'home':
      text = "Welcome, Giovi";
      break;
    case 'notifications':
      text = "Notifications center";
      break;
    default:
      text = "Nothing to show";
  }
  return (
    <View style={styles.container}>
      <DropdownMenu></DropdownMenu>
      <HeaderTitle text={text}></HeaderTitle>
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
