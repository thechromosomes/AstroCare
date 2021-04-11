import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from "galio-framework";
import { Avatar } from "react-native-paper";

export default class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      astrologer: [
        {
          name: "Loura",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "Loura",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "Loura",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "Loura",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "Loura",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "Loura",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "Loura",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "Loura",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "Loura",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "Loura",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "Loura",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "Loura",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "Loura",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "Loura",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "Loura",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "Loura",
          imagePath: require("../../assets/icons/account.png")
        }
      ]
    };
  }
  render() {
    return (
      <SafeAreaProvider style={styles.container}>
        <ScrollView>
          <View style={styles.card}>
            <Text h5 center>
              Choose our awesome communities
            </Text>
            {this.state.astrologer.map((data, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => console.log("hello")}
                style={styles.cardContainer}
              >
                <View>
                  <Avatar.Image size={100} source={data.imagePath} />
                  <Text style={styles.cardText}>{data.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    flex: 1
  },
  cardContainer: {
    padding: 20
  },
  card: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    elevation: 10
  },
  cardText: {
    textAlign: "center"
  }
});
