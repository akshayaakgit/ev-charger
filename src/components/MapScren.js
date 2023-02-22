import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions,TextInput } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { PermissionsAndroid } from "react-native";
import Geolocation from "react-native-geolocation-service";

class MapScren extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 12.9121,
      longitude: 77.6446,
      coordinates: []
    };
  }

  async componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coordinates: this.state.coordinates.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        });
      },
      error => {
        Alert.alert(error.message.toString());
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0
      }
    );
  }

  render() {
    const { region, userLocation } = this.state;

    return (
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: this.state.latitude,
            longitude: this.state.longitude
          }}
          title="My Marker"
          description="This is a custom marker"
        >
          <Image
            source={require("../assets/images/user-location.png")}
            style={{
              height: 20,
              width: 20,
              resizeMode: "contain",
              backgroundColor: "red",
              borderRadius: 30
            }}
          />
        </Marker>
      </MapView>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default MapScren;
