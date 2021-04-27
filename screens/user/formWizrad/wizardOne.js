import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Block, Text, Input, Button } from "galio-framework";

export default class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0
    };
  }
  render() {
    return (
      <Block>
        <Block style={styles.container}>
          <Block style={styles.input}>

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
            <Input
              placeholder="password"
              placeholderTextColor="red"
              password
              viewPass
              rounded
            />
          </Block>
        </Block>
        <Block style={styles.button}>
          <Button
            shadowless
            round
            uppercase
            onPress={() => this.props.onSubmit()}
          >
            Continue...
          </Button>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  input: {
    marginTop: 50
  }

});
