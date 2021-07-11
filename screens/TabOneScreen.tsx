import * as React from 'react';
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
  return (
    <View style={styles.container}>
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
