import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Header
        backgroundColor="#fcba03"
        leftComponent={{
          icon: "menu",
          color: "#000",
          onPress: () => this.props.navigation.toggleDrawer()
        }}
        centerComponent={{ text: "ASTRO CARE", style: { color: "#000" } }}
        rightComponent={{ icon: "home", color: "#000" }}
      />
    );
  }
}
