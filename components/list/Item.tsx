import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity
} from "react-native";
//import Config from "react-native-config";

//import { Ionicons } from '@expo/vector-icons';
//import EditScreenInfo from '../components/EditScreenInfo';
import moment from 'moment/min/moment-with-locales';
import { Text, View } from '../Themed';


export default class Item extends React.Component {
    getTimeFrom = (date) => {
        moment.locale('es');
        return moment(date).fromNow()
    }
    render() {
      return (
          <TouchableOpacity style={{backgroundColor: 'transparent'}} onPress={() => alert(`${this.props.title}: ${this.props.description}`)}>
          <View
            style={{
              marginBottom: 10,
              padding: 16,
              borderRadius: 10
            }}>
            <Text 
              style={styles.title}>{this.props.title}</Text>
            {
                this.props.description !== null && this.props.description !== undefined ?
                <Text>
                    <Text style={styles.description}>
                        {  
                            this.props.description.length > 25 ? 
                            `${this.props.description.substring(0,25)}...` 
                            : this.props.description
                        }
                    </Text>
                    <Text style={styles.descriptionTime}>
                        { this.props.meta && this.props.meta.date !== undefined ? 
                            ` ${this.getTimeFrom(this.props.meta.date)}` 
                            : ''
                        }
                    </Text>
                </Text>
                : null
            }
          </View>
        </TouchableOpacity>
      );
    }
}
const styles = StyleSheet.create({
    title: {
        fontSize: 22,
    },
    description: {
        fontSize: 15,
    },
    descriptionTime: {
        fontSize: 15,
        fontWeight: 'bold',
    },
});
