import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderTitle } from './HeaderTitle';
import { DropdownMenu } from './DropdownMenu';

export const Header = (props) => {
  let text = "";
  switch (props.page) {
    case 'home':
      text = "Welcome, Giovi";
      break;
    case 'notifications':
      text = "Notifications";
      break;
    case 'statistics':
      text = 'Statistics';
      break;
    case 'profile':
      text = 'Profile';
      break;
    default:
      text = "Nothing";
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
    flex: 1,
    flexDirection: "row",
    gap: 20,

    marginTop: 20,      // fix this thing
  },
});
