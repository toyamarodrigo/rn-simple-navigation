import React from "react";
import { View, Text, Button } from "react-native";

export const Home = ({ navigation }) => {
  return (
    <View>
      <Text>HOME SCREEN</Text>
      <Button title="go to screen1" onPress={() => navigation.navigate("screen1")} />
      <Button title="go to screen2" onPress={() => navigation.navigate("screen2")} />
    </View>
  );
};
