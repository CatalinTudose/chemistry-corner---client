import React from "react";
import { View, Text, Button } from "react-native";

const SettingsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

export default SettingsScreen;
