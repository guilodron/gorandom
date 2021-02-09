import React from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from '../pages/LoginPage';

const Stack = createStackNavigator();

const Routes = () => {
  

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Login' 
        component={LoginPage}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  )
}

export default Routes;