import React from "react";
import { View, Text } from "react-native";

export const Screen1 = ({ route }) => {
  const { pedito } = route.params;

  return (
    <View>
      <Text>Screen1 {pedito}</Text>
    </View>
  );
};
