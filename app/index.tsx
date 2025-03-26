import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}   // This is the HomeScreen component that will be rendered when the app starts. It is a simple component that displays a text "Hello World!" in the center of the screen.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center" as const,
    justifyContent: "center" as const,
  },
});   // This is the style object that defines the styles for the container View. It sets the background color to white, aligns the content in the center horizontally and vertically, and justifies the content in the center horizontally and vertically.