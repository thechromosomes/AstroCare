import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Block, Text, Input, Button } from "galio-framework";
import StepIndicator from "react-native-step-indicator";
import WizardOne from "./wizardOne";
import WizardTwo from "./WizardTwo";
import WizardThree from "./WizardThree";
import WizardFour from "./WizardFour";
import WizardFive from "./WizardFive";

export default class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 1,
      formValues: {},
      read: false
    };
  }
  nextPage = () => {
    this.setState(prevState => ({
      currentPosition: prevState.currentPosition + 1
    }));
  };
  finalSubmit = () => {
    this.props.navigation.navigate("Astro Call")
  };
  render() {
    return (
      <SafeAreaProvider>
        <Block style={styles.container}>
          <Block>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={this.state.currentPosition - 1}
              labels={labels}
            />
          </Block>
          <Block>
            {this.state.currentPosition === 1 && (
              <WizardOne onSubmit={this.nextPage} />
            )}
            {this.state.currentPosition === 2 && (
              <WizardTwo onSubmit={this.nextPage} />
            )}
            {this.state.currentPosition === 3 && (
              <WizardThree onSubmit={this.nextPage} />
            )}
            {this.state.currentPosition === 4 && (
              <WizardFour onSubmit={this.nextPage} />
            )}
            {this.state.currentPosition === 5 && (
              <WizardFive finalSubmit={this.finalSubmit} />
            )}
          </Block>
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
    width: "100%"
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
