import React, {useState} from 'react';
import {
  StyleSheet,
  Linking,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
//import Config from "react-native-config";

import { Ionicons } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Item from '../components/list/Item';


export default class Dashboard extends React.Component {

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
  componentDidMount()
  {
  }

  emptyList = () => {
      return (<Text style={styles.resultNotFound}> {`No se encuentran resultados para: ${this.state.query}`}</Text>);
  }
  goToNavigation = (navigationView) => {

  }

  renderCard = (title, icon, backgroundColor, iconColor, description, navigationView) => {
    return (
        <TouchableOpacity onPress={() => {navigationView !== null ? this.props.navigation.navigate(navigationView) : Alert.alert("No disponible", "Esta funcionalidad aún no está disponible") }}>
          <View
              style={{
                padding: 20,
                backgroundColor: `${backgroundColor}`,
                borderRadius: 10,
                width: '80%',
                marginTop: 20,
                flexDirection: 'row',
                marginBottom: 20
              }}>
              <Ionicons style={{
                    fontSize: 15,
                    margin: 'auto',
                    alignSelf: 'center'
                }} color={iconColor} name={icon}/>
              <View style={{ backgroundColor: 'transparent'}}>
              <Text>
                  <Text 
                      style={styles.titleCard}> {title} 
                  </Text>
              </Text>
              {
                  description ? 
                      <Text style={{ fontSize: 12 }}> {description}</Text>
                      : null
              }
              </View>
          </View>
        </TouchableOpacity>
    );
  }

  render () {
    return (
      <View style={styles.container}>
          {
            this.renderCard(
                'Publicaciones activas',
                'ios-information-circle-outline',
                '#d6edfc',
                '#0091EA',
                null,
                'ActiveOffers'
            )
          }
          {
            this.renderCard(
                'Credenciales verificadas',
                'ios-information-circle-outline',
                '#e8f2e1',
                '#75b24d',
                null,
                null
            )
          }
          {
            this.renderCard(
                'Credenciales pendientes de validar',
                'ios-information-circle-outline',
                '#fff6cf',
                'black',
                'Recuerda contactar a tu empleador para validar tu credencial',
                null
            )
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'flex-start',
    backgroundColor: '#d0e5c3',//'#FF983E'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginHorizontal: 30,
  },
  titleCard: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    marginHorizontal: 30,
  },
  back: {
    display:'flex',
    position: 'absolute',
    fontSize: 40,
    color: 'gray',
    top: 30,
    left: 15,
  },

});
