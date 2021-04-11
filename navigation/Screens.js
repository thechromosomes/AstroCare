import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserDrawerNavigation from "./UserDrawerNavigation";

// screens
import LandingPageComponent from "../screens/LandingPage";
import LoginComponent from "../screens/Login";
import AstrologerDashboard from "../screens/astrologer/AstrologerDashboard";

// define variables
const Stack = createStackNavigator();

// stack navigation
export default function LandingPage() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="LandingPage" component={LandingPageComponent} />

      <Stack.Screen name="logIn" component={LoginComponent} />

      <Stack.Screen
        name="AstrologerDashboard"
        component={AstrologerDashboard}
      />

      <Stack.Screen
        name="UserDrawerNavigation"
        component={UserDrawerNavigation}
      />
    </Stack.Navigator>
  );
}
