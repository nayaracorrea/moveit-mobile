import React from 'react'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'

import { createStackNavigator } from '@react-navigation/stack'
import { color } from 'react-native-reanimated'

const AuthStack = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen 
      name="SignIn" 
      component={SignIn} 
      options={{
        headerTransparent: true,
        headerTitle: ''
      }} />
    <AuthStack.Screen 
      name="Register" 
      component={Register} 
      options={{
        headerTransparent: false,
        headerTitle: 'Voltar',
        headerTitleStyle: {
          color: '#fff'
        },
        headerStyle: {
          backgroundColor: '#5965E0'
        }
      }} />
  </AuthStack.Navigator>
)

export default AuthRoutes
