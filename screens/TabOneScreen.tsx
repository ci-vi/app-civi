import React, {useState} from 'react';
import {
  StyleSheet,
  Linking,
  Button
} from "react-native";
//import Config from "react-native-config";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default function TabOneScreen() {
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
  const [searchOffer, setSearchOffer] = useState("Busco una oportunidad laboral");
  const [generateOffer, setGenerateOffer] = useState("Ofrezco una oportunidad laboral");
  const onPressSearchOffer = () => {
    //setTitleText("[pressed]");
  };

  const onPressGenerateOffer = () => {
    //setGenerateOffer("[pressed]");
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Por qué estás acá?</Text>

        <Button style={styles.option} onPress={onPressSearchOffer} title={searchOffer}> </Button>

        <Button style={styles.option} onPress={onPressGenerateOffer} title={generateOffer}> </Button>
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
    backgroundColor: '#FF983E'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  option: {
    fontSize: 20,
    marginVertical: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
