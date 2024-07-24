import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Friends from '../Screens/Friends'

const Stack = createStackNavigator();

const FriendsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="FriendScreen" component={Friends} />
    </Stack.Navigator>
  )
}

export default FriendsStackNavigator