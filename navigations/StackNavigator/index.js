import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../../screens/Home/Home";
import Profile from "../../screens/Profile/Profile";
import Settings from "../../screens/Settings/Settings";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
