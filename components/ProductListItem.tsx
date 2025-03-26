import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

interface Product {
    id: number;
    name: string;
  }
  
  export default function ProductListItem({ product }: { product: Product }) {
    return <Text>{product.name}</Text>;
  }