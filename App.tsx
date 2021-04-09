import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { RegisterProvider } from './src/contexts/register'

import Routes from './src/routes/index'
import { AuthProvider } from './src/contexts/auth';
import { CountdownProvider } from './src/contexts/countdown';

export default function App() {
  return (
    <NavigationContainer>
      <RegisterProvider>
        <AuthProvider>
          <CountdownProvider>
            <Routes />
          </CountdownProvider>
        </AuthProvider>
      </RegisterProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
