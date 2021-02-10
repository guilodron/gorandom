import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, LogBox, StatusBar } from 'react-native';
import { AuthProvider } from './src/hooks/auth';

import Routes from './src/routes'

export default function App() {

  LogBox.ignoreLogs(['Setting a timer'])

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar 
          backgroundColor="#FB6E3B"
        />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
