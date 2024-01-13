import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
  Text,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Options } from "./dropdownoptions/Options";

export const DropdownMenu = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Options></Options>
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.closeButtonTextStyle}>Chiudi</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <FontAwesome name="bars" size={32} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    opacity: 0.2,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    height: 260,
    width: 200,
    alignItems: "center",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 15,
    gap: -32,
  },
  closeButton: {
    borderRadius: 15,
    height: 32,
    padding: 6,
    elevation: 0,
    backgroundColor: 'white',
  },
  closeButtonTextStyle: {
    color: "#7acf30",
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
    opacity: 0.3,
    fontSize: 20,
  },
});
