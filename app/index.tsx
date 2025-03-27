import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import products from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";


export default function HomeScreen() {
  return (
   
      <FlatList
        data={products}
        numColumns={2}
        contentContainerClassName="gap-2"
        columnWrapperClassName="gap-2"
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    
  );
}   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center" as const,
    justifyContent: "center" as const,
  },
});   