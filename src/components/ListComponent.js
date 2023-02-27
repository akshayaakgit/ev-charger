import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import SearchBar from 'react-native-search-bar';

export default class ListComponent extends Component {

  render() {
    return (
        // <View style={styles.tiles}>
        
        // <View style={styles.data}></View>
        // </View>
        <View style={{flexDirection:'row'}}>
        <View style={styles.exa}></View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    tiles: {
        borderRadius: 30,
        margin: 10,
        color: "#000",
        borderColor: "#666",
        borderWidth: 1,
        height: 210,
        paddingVertical: 50,
        paddingLeft:20, 
        bottom: "1%",
        top:"90%",
        left:"-10%",
        width: "113%",
  },
  data:{
    //flexDirection: 'row',
    color: "#000",
    backgroundColor:"black",
    width: "50%",
    borderRadius: 30,
    top:"-50%",
    left:"-10%",
    bottom:"1%",
    height:"220%",
  },
  exa:{
    //flexDirection: 'row',
    color: "#000",
    backgroundColor:"black",
    width: "50%",
    borderRadius: 30,
    height: 210,
    paddingVertical: 50,
    paddingLeft:20,
    top:"90%",
    left:"-10%",  
    margin: 10,
  }
});