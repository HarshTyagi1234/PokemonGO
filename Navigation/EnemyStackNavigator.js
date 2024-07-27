import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Enemy from '../Screens/Enemy'
const Stack = createStackNavigator();
const EnemyStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="EnemyScreen" component={Enemy} />
    </Stack.Navigator>
  )
}
export default EnemyStackNavigator



