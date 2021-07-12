import React, {useState} from 'react';
import {
  StyleSheet,
  Linking,
  Button,
  Pressable
} from "react-native";
//import Config from "react-native-config";

import { Ionicons } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default function Profile({ navigation }) {

  return (
    <View style={styles.container}>
        <Ionicons style={{fontSize:150}} color="black" name="ios-person-circle-outline" />
        <Text style={{fontSize: 20}}> 
            <Text style={{fontWeight: 'bold'}}>Nombre: </Text> 
            <Text>Prueba</Text> 
        </Text>
        <Text style={{fontSize: 20}}> 
            <Text style={{fontWeight: 'bold'}}>Email: </Text> 
            <Text>miemail@prueba.ar</Text> 
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d0e5c3',//'#FF983E'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginVertical: 30,
  },
});
