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

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="cartoons"
//         screenOptions={{
//           headerTintColor: "#fff",
//           headerStyle: { backgroundColor: "#000" },
//           headerTitleStyle: { color: "#fff", fontSize: 16, fontWeight: "bold" },
//         }}
//       >
//         <Stack.Screen
//           name="cartoons"
//           component={Dashboard}
//           options={({ navigation }) => ({
//             headerTitle: () => <LogoTitle />,
//             headerRight: () => (
//               <TouchableOpacity
//                 onPress={() => navigation.navigate("NewScreen")}
//               >
//                 <Image
//                   source={require("./assets/add-list.png")}
//                   style={{
//                     width: 25,
//                     height: 25,
//                     tintColor: "#fff",
//                     marginRight: 10,
//                   }}
//                 />
//               </TouchableOpacity>
//             ),
//           })}
//         />

//         <Stack.Screen
//           name="detail"
//           component={Detail}
//           options={{
//             title: "Detail",
//             headerRight: () => (
//               <TouchableOpacity onPress={() => alert("clicked")}>
//                 <View style={{ padding: 10 }}>
//                   <Image source={require("./assets/add-list.png")} />
//                 </View>
//               </TouchableOpacity>
//             ),
//           }}
//         />

//         <Stack.Screen
//           name="NewScreen"
//           component={NewScreen}
//           options={({ navigation }) => ({
//             headerTitle: () => <LogoTitle />,
//             headerRight: () => (
//               <TouchableOpacity onPress={() => navigation.navigate("Enemy")}>
//                 <Image
//                   source={require("./assets/add-list.png")}
//                   style={{
//                     width: 25,
//                     height: 25,
//                     tintColor: "#fff",
//                     marginRight: 10,
//                   }}
//                 />
//               </TouchableOpacity>
//             ),
//           })}
//         />

//         <Stack.Screen name="Enemy" component={Enemy} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
