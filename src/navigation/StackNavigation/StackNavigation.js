import React from "react";
import { IconButton } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../../screens/Home";
import { Popular } from "../../screens/Popular";
import { Screen1 } from "../../screens/Screen1";
import { Screen2 } from "../../screens/Screen2";

const Stack = createStackNavigator();

export const StackNavigation = ({ navigation }) => {
  const buttonLeft = (screen) => {
    switch (screen) {
      case "popular":
      case "screen1":
      case "screen2":
        return <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />;
      default:
        return <IconButton icon="menu" onPress={() => navigation.openDrawer()} />;
    }
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="home"
        options={{
          title: "Home Screen",
          headerLeft: () => buttonLeft("home"),
        }}
      />
      <Stack.Screen
        component={Popular}
        name="popular"
        options={{
          title: "Popular Screen",
          headerLeft: () => buttonLeft("popular"),
        }}
      />
      <Stack.Screen
        component={Screen1}
        name="screen1"
        options={{
          title: "Screen1",
          headerLeft: () => buttonLeft("screen1"),
        }}
      />
      <Stack.Screen
        component={Screen2}
        name="screen2"
        options={{
          title: "Screen2",
          headerLeft: () => buttonLeft("screen2"),
        }}
      />
    </Stack.Navigator>
  );
};
