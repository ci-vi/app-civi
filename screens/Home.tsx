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


export default function Home({ navigation }) {
  const openApp = async ({ dynamicLink, deepLink }) => {
    const canOpenURL = await Linking.canOpenURL(deepLink);
    if (canOpenURL){
      const link = await Linking.openURL(deepLink);
      console.log('y?', link);
    } else {
      Linking.openURL(dynamicLink);
      console.log('No pudo abrirllo');
    }
  };
  const links = {
    login: {
      deepLink: "aidi://login",
      dynamicLink: `http://127.0.0.1`,
    },
    credentials: {
      deepLink: `aidi://credentials/ronda`,
      dynamicLink: ``,
    },
    playstore: "https://play.google.com/apps/internaltest/4699395559909911910",
    urlPlaystore: "https://play.google.com/store/apps/details?id=com.aidi",
  };
  const onLoginWithAidi = async () => {
     console.log(links.login)
     openApp(links.login).then((e) => {
         console.log(e)
     })
  };

  // text click
  const [searchOffer, setSearchOffer] = useState("Busco una oportunidad de trabajo");
  const [generateOffer, setGenerateOffer] = useState("Ofrezco una oportunidad de trabajo");
  const onPressSearchOffer = () => {
    navigation.navigate('SearchOffer')
  };

  const onPressGenerateOffer = () => {
    navigation.navigate('GenerateOffer')
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>¿Cómo te podemos ayudar?</Text>

        <Pressable style={styles.button} onPress={onPressSearchOffer}>
            <Ionicons style={styles.icon} name="ios-search"/>
            <Text style={styles.buttonText}>{searchOffer} </Text>
        </Pressable>

        <Pressable style={styles.button} onPress={onPressGenerateOffer}>
            <Ionicons style={styles.icon} name="ios-megaphone-outline"/>
            <Text style={styles.buttonText}>{generateOffer}</Text>
        </Pressable>
    {/*<Text style={styles.title}>Tab One</Text>
        <Button
            onPress={onLoginWithAidi} title="qweqwe">
            Conectar
        </Button>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      */}
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
  button: {
      alignItems: 'center',
      textAlign: 'center',
      marginVertical: 40,
  },
  buttonText: {
      fontSize: 18,
      textAlign: 'center',
      color: 'black',
      marginTop: 5,
      marginLeft: 15,
      marginRight: 15,
  },
  icon: {
      width: 70,
      height: 70,
      padding:20,
      borderRadius: 0.5 * 70,
      display: 'flex',
      fontSize: 30,
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'white',
      borderWidth: 2,
      backgroundColor: '#FF983E', // blue '#1378bb',
      marginVertical: 7,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
