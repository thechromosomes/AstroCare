import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Block } from "galio-framework";
import { Avatar, Card, Title } from "react-native-paper";

export default class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboardItem: [
        {
          name: "Talk to astrologer",
          routeName: "Astro Call",
          imagePath: require("../../assets/icons/chat.png")
        },
        {
          name: "Horoscope",
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
          <Block style={styles.cardContainer}>
            {this.state.dashboardItem.map((data, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => this.props.navigation.navigate(data.routeName)}
              >
                <Card style={styles.card}>
                  <Card.Content>
                    <View style={styles.cardImage}>
                      <Avatar.Image size={60} source={data.imagePath} />
                      <Title>{data.name}</Title>
                    </View>
                  </Card.Content>
                </Card>
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
    alignItems: "center",
    flex: 1
  },
  cardContainer: {
    padding: 50,
    width: "100%"
  },
  card: {
    backgroundColor: "#fcba03",
    justifyContent: "center",
    marginBottom: 10,
    alignItems: "center",
    elevation: 10,
    borderRadius: 70
  },
  cardImage: {
    alignItems: "center",
    justifyContent: "center"
  }
});
