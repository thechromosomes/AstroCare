import * as React from "react";
import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DrawerActions } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";
import { Avatar, Card, Title } from "react-native-paper";

// screens
import UserDashboard from "../screens/user/UserDashboard";
import AstroCall from "../screens/user/AstroCall";
import Horoscope from "../screens/user/Horoscope";
import Report from "../screens/user/Report";
import Community from "../screens/user/Community";
import FormWizard from "../screens/user/formWizrad/FormWizard";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";

function CustomDrawerContent(props) {
  // console.log("props.state",props.state);
  const filteredProps = {
    ...props,
    state: {
      ...props.state,
      routeNames: props.state.routeNames.filter(routeName => {
        routeName !== "Astro Call";
      }),
      routes: props.state.routes.filter(route => {
        route.name !== "Astro Call";
      })
    }
  };

  console.log("filteredProps", filteredProps);

  return (
    <DrawerContentScrollView {...filteredProps}>
      <View style={styles.container}>
        <View>
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.cardImage}>
                <Avatar.Image
                  size={60}
                  source={require("../assets/icons/account.png")}
                />
                <Title>scarlet</Title>
              </View>
            </Card.Content>
          </Card>
        </View>
        <View>
          <DrawerItemList {...filteredProps} />
        </View>
      </View>
      <View style={styles.Footer}>
        <Avatar.Image size={50} source={require("../assets/icons/fb.png")} />
        <Avatar.Image
          size={50}
          source={require("../assets/icons/instagram.png")}
        />
        <Avatar.Image
          size={50}
          source={require("../assets/icons/youtube.png")}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="UserDashboard"
      drawerStyle={{
        width: 250
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="User Dashboard" component={UserDashboard} />
      <Drawer.Screen name="Astro Call" component={AstroCall} />
      <Drawer.Screen name="Horoscope" component={Horoscope} />
      <Drawer.Screen name="Report" component={Report} />
      <Drawer.Screen name="Community" component={Community} />
      <Drawer.Screen name="FormWizard" component={FormWizard} />
    </Drawer.Navigator>
  );
}

export default function App(props) {
  return (
    <SafeAreaProvider>
      <Header
        backgroundColor="pink"
        leftComponent={{
          icon: "menu",
          color: "#000",
          onPress: () => props.navigation.dispatch(DrawerActions.toggleDrawer())
        }}
        centerComponent={{ text: "ASTRO CARE", style: { color: "#000" } }}
        rightComponent={{
          icon: "home",
          color: "#000",
          onPress: () => props.navigation.navigate("User Dashboard")
        }}
      />
      <MyDrawer />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 9
  },
  cardContainer: {
    padding: 50,
    width: "100%"
  },
  card: {
    backgroundColor: "white",
    justifyContent: "center",
    marginBottom: 10,
    alignItems: "center"
  },
  cardImage: {
    alignItems: "center",
    justifyContent: "center"
  },
  Footer: {
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
    flexDirection: "row",
    padding: 10,
    marginTop: "80%"
  }
});
