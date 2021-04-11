import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, ScrollView} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Block } from "galio-framework";
import { Avatar, Card, Title } from "react-native-paper";

export default class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      astrologer: [
        {
          name:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          routeName: "AstroCall",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          routeName: "AstroCall",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          routeName: "AstroCall",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          routeName: "AstroCall",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          routeName: "AstroCall",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          routeName: "AstroCall",
          imagePath: require("../../assets/icons/account.png")
        },
        {
          name:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
                      <View style={styles.cardDetail}>
                        <Title>{data.name}</Title>
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
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    marginBottom: 10
  }
});
