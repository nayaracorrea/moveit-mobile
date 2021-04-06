import React from 'react'
import Home from '../pages/Home'

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
  </AppStack.Navigator>
)

export default AppRoutes
