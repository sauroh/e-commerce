import React from "react";
import { View, StyleSheet, FlatList, useWindowDimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import products from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";
import { useBreakpointValue } from '@/components/ui/utils/use-break-point-value';



export default function HomeScreen() {

  // const { width } = useWindowDimensions();
  // const numColumns = width > 700 ? 3 : 2;

  const numColumns = useBreakpointValue({
    default: 2,
    lg: 4,
    sm: 2,
    xl: 5,
    md: 3,
  }) as number;
  return (
   
      <FlatList
        key={numColumns}
        data={products}
        numColumns={numColumns}
        contentContainerClassName="gap-2 max-w-[960px] w-full mx-auto"
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