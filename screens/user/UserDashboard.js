import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Block, Text } from "galio-framework";
import { Avatar, Card, Title } from "react-native-paper";

export default class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboardItem: [
        {
          name: "Talk to astrologer",
          routeName: "FormWizard",
          imagePath: require("../../assets/icons/chat.png")
        },
        {
          name: "Show horoscope",
          routeName: "Horoscope",
          imagePath: require("../../assets/icons/bionic-eye.png")
        },
        {
          name: "Get detailed report",
          routeName: "Report",
          imagePath: require("../../assets/icons/report.png")
        },
        {
          name: "Join our community",
          routeName: "Community",
          imagePath: require("../../assets/icons/worldwide.png")
        }
      ]
    };
  }
  render() {
    return (
      <SafeAreaProvider>
        <Block style={styles.container}>
          <Text center h3 muted>Please choose one</Text>
          <Block style={styles.cardContainer}>
            {this.state.dashboardItem.map((data, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => this.props.navigation.navigate(data.routeName)}
              >
                <View>
                  <Card style={styles.card}>
                    <Card.Content>
                      <View style={styles.cardImage}>
                        <Avatar.Image size={60} source={data.imagePath} />
                        <Text style={styles.text} h6 center>
                          {data.name}
                        </Text>
                        <Text muted>just for ₹ 300</Text>
                      </View>
                    </Card.Content>
                  </Card>
                </View>
              </TouchableOpacity>
            ))}
          </Block>
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
    padding: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  card: {
    backgroundColor: "#fcba03",
    marginBottom: 12,
    borderRadius: 15,
    width: 160,
    height: 160,
    elevation: 10
  },
  cardImage: {
    alignItems: "center"
  },
  text: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 10
  }
});
