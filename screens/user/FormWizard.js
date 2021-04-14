import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Block, Text, Input, Button } from "galio-framework";
import StepIndicator from "react-native-step-indicator";

export default class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0
    };
  }
  render() {
    return (
      <SafeAreaProvider>
        <Block style={styles.container}>
          <Block>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={this.state.currentPosition}
              labels={labels}
            />
          </Block>
          <Block style={styles.input}>
            <Text center h5 muted>
              Please fill the inputs
            </Text>
            <Input
              placeholder="Your name"
              placeholderTextColor="red"
              right
              icon="profile"
              family="antdesign"
              iconSize={14}
              iconColor="red"
              rounded
            />
            <Input
              placeholder="Height"
              placeholderTextColor="red"
              right
              icon="user"
              family="antdesign"
              iconSize={14}
              iconColor="red"
              rounded
            />
            <Input
              placeholder="Mother tongue"
              placeholderTextColor="red"
              right
              icon="phone"
              family="antdesign"
              iconSize={14}
              iconColor="red"
              rounded
            />
             <Input
              placeholder="Cast"
              placeholderTextColor="red"
              right
              icon="team"
              family="antdesign"
              iconSize={14}
              iconColor="red"
              rounded
            />
             <Input
              placeholder="Religion"
              placeholderTextColor="red"
              right
              icon="home"
              family="antdesign"
              iconSize={14}
              iconColor="red"
              rounded
            />
            <Input placeholder="password" placeholderTextColor="red"password viewPass rounded />
          </Block>
        </Block>
        <Block style={styles.button}>
          <Button
            shadowless
            round
            uppercase
            onPress={() => this.props.navigation.navigate("Astro Call")}
          >
            Continue
          </Button>
        </Block>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    padding: 10
  },
  input: {
    marginTop: 100
  },
  button: {
    alignItems: "center",
    width: "100%",
  }
});

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#fe7013",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#fe7013",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#fe7013",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#fe7013",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#fe7013",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "#fe7013"
};

const labels = ["Name", "User name", "Phone", "Payment Method", "Track"];
