import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const Options = () => {
  const [userChoice, setUserChoice] = useState('');

  const renderIcon = (itemName) => {
    switch(itemName){
        case 'Home':
            return 'home';
        case 'Statistiche':
            return 'bar-chart';
        case 'Notifiche':
            return 'bell';
        case 'Profilo':
            return 'user';
        default:
    }
  }

  return (
    <View>
        <FlatList
        data={[
          {key: 'Home'},
          {key: 'Statistiche'},
          {key: 'Notifiche'},
          {key: 'Profilo'},
        ]}
        renderItem={({item}) =>
        <TouchableOpacity onPress={() => setUserChoice(item.key)}>
            <View style={styles.itemContainer}>
               <FontAwesome name={renderIcon(item.key)} style={styles.icon} size={28}/>
               <Text style={styles.item}>{ item.key == 'Profilo' ? ' ' : ''}{item.key}</Text>    
            </View>
        </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
    item: {
        fontSize: 20,
        marginBottom: 15,
        textAlign: "center",
        fontFamily: "Poppins_600SemiBold",
        opacity: 0.3,
        marginBottom: 12,
        margin: 'auto',
        
    },
    itemContainer: {
        flexDirection: 'row',
        gap: 20,
    },
    icon: {
        opacity: 0.3
    }
});