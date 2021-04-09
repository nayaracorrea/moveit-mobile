import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../../contexts/auth'


export default function Profile () {
  const { signOut } = useContext(AuthContext)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile</Text>
      <Button title='SignOut' onPress={signOut}></Button>
    </View>

  )
}