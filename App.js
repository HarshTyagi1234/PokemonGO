import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView,StyleSheet,StatusBar } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerNavigator from "./Navigation/DrawerNavigator";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor:'#000'
  },
})

