import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import SearchBar from 'react-native-search-bar';

export default class SearchComponent extends Component {
 

  onRegionChange = (region) => {
    this.setState({ region });
  };

  render() {
    return (
        // {/* <MapView
        //   style={styles.map}
        //   region={this.state.region}
        //   onRegionChange={this.onRegionChange}
        // /> */}
        <SearchBar
          placeholder="Search"
          onChangeText={(text) => console.log(text)}
          onSearchButtonPress={() => console.log('Search button pressed')}
          onCancelButtonPress={() => console.log('Cancel button pressed')}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
