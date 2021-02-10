import React from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LoggedRoutes from './loggedRoutes';
import AuthRoutes from './authRoutes';
import { useAuth } from '../hooks/auth';

const Stack = createStackNavigator();

const Routes = () => {

  const {user} = useAuth()

  return user ? <LoggedRoutes /> : <AuthRoutes />
  
}

export default Routes;