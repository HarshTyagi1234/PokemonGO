import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from '../Screens/Dashboard'

const Stack = createStackNavigator()

const DashboardStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="CartoonScreen" component={Dashboard} />
    </Stack.Navigator>
  )
}

export default DashboardStackNavigator