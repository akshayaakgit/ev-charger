import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput
} from "react-native";
import MapScren from "./src/components/MapScren";
import Geolocation from "react-native-geolocation-service";
import Map, { Marker } from "react-native-maps";
import SearchBar from "react-native-search-bar";
import SearchComponent from "./src/components/SearchComponent";
import ListComponent from "./src/components/ListComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <MapScren View style={styles.map} />
      <View
        style={{ position: "absolute", top: "15%", left: "10%", width: "80%" }}
      >
        <TextInput
          style={{
            borderRadius: 10,
            margin: 10,
            color: "#000",
            borderColor: "#666",
            backgroundColor: "black",
            borderWidth: 1,
            height: 45,
            paddingHorizontal: 10,
            fontSize: 18
          }}
          placeholder={"Search for the compatible chargers"}
          placeholderTextColor={"#666"}
        />
        <ListComponent />
      </View>
      {/* <SearchComponent/>  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: "100%",
    height: "100%"
  }
});
