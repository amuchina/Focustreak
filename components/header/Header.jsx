import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderTitle } from './HeaderTitle';
import { DropdownMenu } from './DropdownMenu';

export const Header = (props) => {
  return (
    <View style={styles.container}>
      <HeaderTitle text={props.text}></HeaderTitle>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
  },
});
