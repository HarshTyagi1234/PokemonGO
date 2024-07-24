import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardStackNavigator from "./DashboardStackNavigator";
import EnemyStackNavigator from "./EnemyStackNavigator";
import FriendsStackNavigator from "./FriendsStackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#000",
          color: "#fff",
        },
        drawerActiveBackgroundColor:'#EEEDEB',
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: '#EEEDEB',
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#000" },
        headerTitleStyle: { color: "#fff", fontSize: 16, fontWeight: "bold" },
      }}
    >
      <Drawer.Screen  name="Cartoons" component={DashboardStackNavigator} />
      <Drawer.Screen name="Enemy" component={EnemyStackNavigator} />
      <Drawer.Screen name="Friends" component={FriendsStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
