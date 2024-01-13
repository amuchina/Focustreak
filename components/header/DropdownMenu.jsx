import React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { HeaderTitle } from "./HeaderTitle";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const DropdownMenu = () => {

  const toggleMenu = () => {

  };
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu}>
        <FontAwesome name="bars" size={32} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
});
