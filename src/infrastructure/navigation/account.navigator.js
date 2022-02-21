import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AccountNavigator = (second) => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="main" component={AccountScreen} />
  </Stack.Navigator>
);
