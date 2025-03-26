import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
      <StatusBar style="auto" />
    </View>
  );
}  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center" as const,
    justifyContent: "center" as const,
  },
});   // This is the CartScreen component that will be rendered when the user navigates to the Cart screen. It is a simple component that displays a text "Cart" in the center of the screen.