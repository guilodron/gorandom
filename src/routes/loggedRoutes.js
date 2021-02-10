import React from 'react';
import { View, Text, Image } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import Home from '../pages/Home';
import {useAuth} from '../hooks/auth';
import hatIcon from '../../assets/chefHat.png';
import { FontAwesome } from '@expo/vector-icons';
import NewRestaurantPage from '../pages/NewRestaurantPage';

const Stack = createStackNavigator();

const LoggedRoutes = () => {

  const {user, SignOut} = useAuth();

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Home' 
        component={Home}
        options={{
          title: user.displayName,
          headerStyle: {
            backgroundColor: "#FB6E3B",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerLeft: () => (
            <Image source={hatIcon} style={{marginLeft: 20}} />
          ),
          headerRight: () => (
            <FontAwesome 
              name="sign-out" 
              size={24} 
              color="white" 
              style={{marginRight: 20}} 
              onPress={SignOut}
            />
          )
        }}
      />
      <Stack.Screen
        name="NewRestaurant"
        options={{
          title: "Novo Restaurante",
          headerStyle: {
            backgroundColor: "#FB6E3B"
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 20
          }
        }}
        component={NewRestaurantPage}
      />
    </Stack.Navigator>
  )
}

export default LoggedRoutes;