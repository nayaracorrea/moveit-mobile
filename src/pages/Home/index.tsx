import React, { useContext, useLayoutEffect } from 'react'
import { View, Text, Button, TouchableOpacity, Image, StatusBar } from 'react-native'
import { AuthContext } from '../../contexts/auth'
import { MaterialIcons as Icon } from '@expo/vector-icons'

import InfoUserHome from '../../components/InfoUserHome/index'
import ChallengeBox from '../../components/ChallengeBox/index'

import {
  Container,
  InfoUserContainer,
  ChallengeBoxContainer
} from './styles'

export default function Home ({ navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View
        style={{ alignItems: 'center', justifyContent: 'center', height: '100%', width: 50 }}
      >
        <Image source={require('../../../assets/png/adaptive-icon.png')} style={{ height: 120, width: 120 }}/>
      </View>
      )
    })
  })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
        style={{ alignItems: 'center', justifyContent: 'center', height: '100%', width: 50 }}
        onPress={() => navigation.navigate('Profile')}
      >
        <Icon name='settings' size={30} color="#fff" />
      </TouchableOpacity>
      )
    })
  })

  return (
    <Container>
      <StatusBar barStyle='light-content' backgroundColor='#5965E0' />
    <InfoUserContainer>
      <InfoUserHome color='#000' />
    </InfoUserContainer>
    
    
    <ChallengeBoxContainer>
      <ChallengeBox />
    </ChallengeBoxContainer>
  </Container>

  )
}