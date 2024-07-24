import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from '../Screens/Dashboard'
import Detail from '../Screens/Detail'

const Stack = createStackNavigator()

const DashboardStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="CartoonScreen" component={Dashboard} />
      <Stack.Screen name="Detail" component={Detail} />

    </Stack.Navigator>
  )
}

export default DashboardStackNavigator