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
import Item from '../components/list/Item';


export default class GenerateOffer extends React.Component {

    constructor() {
        super();
        this.state = {
            query: '',
            data: [
                {
                    id: '1',
                    title: 'Pintura y mantenimiento',
                },
                {
                    id: '2',
                    title: 'Albañilería',
                },
                {
                    id: '3',
                    title: 'Carpintería',
                },
            ],
            //data: [
            //    {
            //      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            //      title: 'Pintor',
            //      description: 'Busco empleadx con experiencia para pintar casas. Pago por hora',
            //      created_at: '2021-07-11 12:00:00',
            //    },
            //    {
            //      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b6',
            //      description: 'Pintor',
            //      created_at: '2021-06-12 12:00:00',
            //      title: 'Algo',
            //    },
            //    {
            //      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b3',
            //      title: 'Soldadura',
            //      description: 'Pintor',
            //      created_at: '2021-06-12 12:00:00',
            //    },
            //    {
            //      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            //      title: 'Pintura',
            //      description: 'Pintor',
            //      created_at: '2021-06-12 12:00:00',
            //    },
            //    {
            //      id: '58694a0f-3da1-471f-bd96-145571e29d72',
            //      title: 'Carpintería',
            //      description: 'Pintor',
            //      created_at: '2021-06-12 12:00:00',
            //    },
            //],
        }
        this.state.fullData = this.state.data;

    }

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
      <Item title={item.title} description={item.description} meta={{date: item.created_at}} />
  );

  handleSearch = text => {    
    this.state.query = text;
    const newData = this.state.data.filter(item => {      
      const itemData = `${item.title.toUpperCase()}`;
       const textData = text.toUpperCase();
       return itemData.indexOf(textData) > -1;    
    });
    
    this.setState({ fullData: newData });  
  };

  emptyList = () => {
      return (<Text style={styles.resultNotFound}> {`No se encuentran resultados para: ${this.state.query}`}</Text>);
  }

  render () {
    return (
      <View style={styles.container}>
          <Ionicons style={styles.back} onPress={() => { this.props.navigation.goBack(null); }} name="ios-arrow-back-outline"/>
          <Text style={styles.title}>¿Qué trabajo estás necesitando?</Text>
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
              ListEmptyComponent={this.emptyList()}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDD835',//'#FF983E'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginHorizontal: 30,
    marginBottom: 30,
  },
  resultNotFound: {
      fontSize: 18,
      textAlign: 'center',
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
    padding: 15,
    marginBottom: 30,
    width: '70%',
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
