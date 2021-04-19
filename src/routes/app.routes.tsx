import React from 'react'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import PersonalInfo from '../pages/PersonalInfo'
import AccessInfo from '../pages/AccessInfo'

import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen 
      name="Home" 
      component={Home} 
      options={{
        headerTransparent: false,
        headerTitle: 'Home',
        headerTitleStyle: {
          color: '#fff',
        },
        headerStyle: {
          backgroundColor: '#5965E0'
        },
        headerTitleAlign: 'center'
      }} />
    <AppStack.Screen 
      name="Profile"
      component={Profile}
      options={{
        headerTransparent: false,
        headerTitle: 'Perfil',
        headerTitleStyle: {
          color: '#fff',
        },
        headerStyle: {
          backgroundColor: '#5965E0'
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff'
      }} />
      <AppStack.Screen 
      name="PersonalInfo"
      component={PersonalInfo}
      options={{
        headerTransparent: false,
        headerTitle: 'Dados Pessoais',
        headerTitleStyle: {
          color: '#fff',
        },
        headerStyle: {
          backgroundColor: '#5965E0'
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff'
      }} />
      <AppStack.Screen 
      name="AccessInfo"
      component={AccessInfo}
      options={{
        headerTransparent: false,
        headerTitle: 'Dados de Acesso',
        headerTitleStyle: {
          color: '#fff',
        },
        headerStyle: {
          backgroundColor: '#5965E0'
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff'
      }} />
  </AppStack.Navigator>
)

export default AppRoutes
