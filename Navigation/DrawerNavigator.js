import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardStackNavigator from "./DashboardStackNavigator";
import EnemyStackNavigator from "./EnemyStackNavigator";
import FriendsStackNavigator from "./FriendsStackNavigator";
import { Image } from "react-native";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#EDEDED",
          color: "#fff",
        },
        drawerActiveBackgroundColor: "green",
        drawerActiveTintColor: "#FFF",
        drawerInactiveTintColor: "#000",
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#000" },
        headerTitleStyle: { color: "#fff", fontSize: 16, fontWeight: "bold" },
      }}
    >
      <Drawer.Screen
        options={{
          title: "Product",
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require("../assets/product.png")}
              style={[{ height: size, width: size }]}
            />
          ),
        }}
        name="Cartoons"
        component={DashboardStackNavigator}
      />
      <Drawer.Screen
        options={{
          title: "Enemy",
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require("../assets/enemy.png")}
              style={[{ height: size, width: size }]}
            />
          ),
        }}
        name="Enemy"
        component={EnemyStackNavigator}
      />
      <Drawer.Screen
        options={{
          title: "Friends",
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require("../assets/friends.png")}
              style={[{ height: size, width: size }]}
            />
          ),
        }}
        name="Friends"
        component={FriendsStackNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
