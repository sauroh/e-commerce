import { Stack } from "expo-router";
import React from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function RootLayout() {
  return (
  <GluestackUIProvider>
    <Stack/>
  </GluestackUIProvider>
  )
}   // This is the Layout component that wraps the Header, Footer, and the children components. It renders the Header, children, and Footer components in the correct order.