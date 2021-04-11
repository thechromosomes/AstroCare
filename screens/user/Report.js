import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Block } from "galio-framework";
import { AreaChart, Grid } from "react-native-svg-charts";
import * as shape from "d3-shape";

export default class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData: [1, 2, 3, 4, 5, 6, 7]
    };
  }
  render() {
    const data = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      85,
      91,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80
    ];
    return (
      <SafeAreaProvider>
        <Block style={styles.container}>
          <ScrollView>
            {this.state.rawData.map((item, index) => (
              <View style={styles.container} key={index}>
                <AreaChart
                  style={{ height: 200 }}
                  data={data}
                  contentInset={{ top: 30, bottom: 30 }}
                  curve={shape.curveNatural}
                  svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
                >
                  <Text>User performance</Text>
                  <Grid />
                </AreaChart>
              </View>
            ))}
          </ScrollView>
        </Block>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    padding: 15,
    elevation: 10
  }
});
