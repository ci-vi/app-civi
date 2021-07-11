import React, {useState} from 'react';
import {
  StyleSheet,
  Linking,
  Button,
  Pressable,
  Image
} from "react-native";
//import Config from "react-native-config";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default function Welcome({navigation}) {
  const onPressContinue = () => {
      console.log('Button pressed, to home')
      navigation.navigate('Home')
  };

  return (
    <View style={styles.container}>
        <Text style={styles.welcome}>Bienvenido!</Text>
        <Text style={styles.civi}>ci-vi</Text>
        <Text style={styles.description}>Estás a pasos de ofrecer o encontrar tu oportunidad laboral</Text>
        <Pressable style={styles.button} onPress={onPressContinue}>
            <Text style={styles.buttonText}> Conectate con aidi </Text>
        </Pressable>
        <Image source={require('../assets/images/bg-welcome.png')} resizeMode="stretch" style={styles.image}> 
        </Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF983E'
  },
  welcome: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  civi: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 30,
  },
  description: {
    fontSize: 15,
    marginVertical: 30,
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center',
    zIndex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    borderRadius: 50,
    padding: 30,
    backgroundColor: '#1522C2',
    zIndex:1,
  },
  buttonText: {
      color: 'white',
  },
  image:{
      justifyContent: 'center',
      bottom:0,
      position: 'absolute',
      zIndex: 0,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
