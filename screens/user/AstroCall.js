import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Block } from "galio-framework";
import { Avatar, Card, Title } from "react-native-paper";

export default class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      astrologer: [
        {
          name: "scarlet",
          number: "989783473493",
          other:"Awesome astrologer",
          routeName: "AstroCall",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "scarlet",
          number: "989783473493",
          other:"Awesome astrologer",
          routeName: "AstroCall",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "scarlet",
          number: "989783473493",
          other:"Awesome astrologer",
          routeName: "AstroCall",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "scarlet",
          number: "989783473493",
          other:"Awesome astrologer",
          routeName: "AstroCall",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "scarlet",
          number: "989783473493",
          other:"Awesome astrologer",
          routeName: "AstroCall",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "scarlet",
          number: "989783473493",
          other:"Awesome astrologer",
          routeName: "AstroCall",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "scarlet",
          number: "989783473493",
          other:"Awesome astrologer",
          routeName: "AstroCall",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "scarlet",
          number: "989783473493",
          other:"Awesome astrologer",
          routeName: "AstroCall",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "scarlet",
          number: "989783473493",
          other:"Awesome astrologer",
          routeName: "AstroCall",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name: "scarlet",
          number: "989783473493",
          other:"Awesome astrologer",
          routeName: "AstroCall",
          imagePath: require("../../assets/icons/account.png")
        }
      ]
    };
  }
  render() {
    return (
      <SafeAreaProvider>
        <Block style={styles.container}>
          <ScrollView>
            <Block style={styles.cardContainer}>
              {this.state.astrologer.map((data, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => console.log("hello")}
                >
                  <Card style={styles.card}>
                    <Card.Content>
                      <View style={styles.mainView}>
                        <View style={styles.cardDetail}>
                          <Title>Name: {data.name}</Title>
                          <Title>Number: {data.number}</Title>
                          <Title>Other: {data.other}</Title>
                        </View>
                        <View style={styles.CardIcon}>
                          <Avatar.Image size={60} source={data.imagePath} />
                        </View>
                      </View>
                    </Card.Content>
                  </Card>
                </TouchableOpacity>
              ))}
            </Block>
          </ScrollView>
        </Block>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  cardContainer: {
    width: "100%",
    flex: 1,
    padding: 15
  },
  card: {
    elevation: 10,
    flex: 1,
    marginBottom: 10,
    justifyContent: "flex-end"
  },
  CardIcon: {
    flex: 1,
    alignItems: "flex-end",
    padding: 10
  },
  mainView: {
    flex: 1,
    flexDirection: "row"
  }
});
