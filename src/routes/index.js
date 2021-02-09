import React from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

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
      <Stack.Screen 
        name='SignUp'
        component={SignupPage}
        options={{
          title: "Cadastrar",
          headerStyle: {
            backgroundColor: '#FB6E3B',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 20
          }
        }}
      />

    </Stack.Navigator>
  )
}

export default Routes;