import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { RegisterProvider } from './src/contexts/register'

import Routes from './src/routes/index'
import { AuthProvider } from './src/contexts/auth';
import CountdownProvider from './src/contexts/countdown';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function App(props: HomeProps) {
  return (
    <NavigationContainer>
      <RegisterProvider>
        <AuthProvider>
          <CountdownProvider
            level={props.level}
            currentExperience={props.currentExperience}
            challengesCompleted={props.challengesCompleted}
          >
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
