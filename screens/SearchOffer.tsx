import React, {useState} from 'react';
import {
  StyleSheet,
  Linking,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity
} from "react-native";
//import Config from "react-native-config";

import { Ionicons } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default class SearchOffer extends React.Component {

    constructor(navigation) {
        super();
        this.state = {
            query: '',
            data: [
                {
                  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                  title: 'First Item',
                },
                {
                  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                  title: 'Second Item',
                },
                {
                  id: '58694a0f-3da1-471f-bd96-145571e29d72',
                  title: 'Third Item',
                },
            ],
        }
        this.state.fullData = this.state.data;

    }
  onPressSearchOffer = () => {
    navigation.navigate('SearchOffer')
  };

  onPressGenerateOffer = () => {
    navigation.navigate('GenerateOffer')
  };

  renderSeparator()
  {
    return (
        <View
          style={{
            height: 3,
            width: '86%',
            backgroundColor: '#CED0CE',
            marginLeft: '5%'
          }}
        />
    );
  }

  renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => alert('Item pressed!')}>
      <View
        style={{
          flexDirection: 'row',
          padding: 16,
          alignItems: 'center',
          borderRadius: 10

        }}>
        <Text 
          category='s1'
          style={{ fontSize: 22 }}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  handleSearch = text => {    
    const newData = this.state.data.filter(item => {      
      const itemData = `${item.title.toUpperCase()}`;
       const textData = text.toUpperCase();
       return itemData.indexOf(textData) > -1;    
    });
    
    this.setState({ fullData: newData });  
  };
  componentDidMount()
  {
  }

  render () {
    return (
      <View style={styles.container}>
          <Ionicons style={styles.back} onPress={() => { navigation.goBack(null); }} name="ios-arrow-back-outline"/>
          <Text style={styles.title}>¿En qué te sentís más fuerte?</Text>
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={this.handleSearch}
            status='info'
            placeholder='Buscar'
            style={styles.searchInput}
            textStyle={{ color: '#000' }}
          />

          <FlatList
              style={styles.flatList}
              data={this.state.fullData}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={this.renderSeparator}
          />

          <Button style={styles.button} title="Continuar >"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d0e5c3',//'#FF983E'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginHorizontal: 30,
    marginBottom: 30,
  },
  back: {
    display:'flex',
    position: 'absolute',
    fontSize: 40,
    color: 'gray',
    top: 30,
    left: 15,
  },
  searchInput: {
    borderRadius: 25,
    fontSize: 18,
    borderColor: '#333',
    backgroundColor: '#fff',
    paddingLeft: 15,
    marginBottom: 30,
    width: 200,
  },
  flatList: {
      flexGrow: 0,
      marginBottom:30,
      marginHorizontal: 0,
      width:'86%',
  },
  button: {
    fontSize: 20,
    marginTop:30,

  }

});
