import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import { ChallengeContext } from '../../contexts/challenges'
import { CountdownContext } from '../../contexts/countdown'
// import { Text, Divider } from 'react-native-elements'
// import { ChallengesContext } from '../../contexts/ChallengesContext'

import {
 Container,
 InitialValueExpBar,
 FinalValueExpBar,
 LineExternalContainer,
 LineInternalContainer
} from './styles'


const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext)

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

 return (
  <Container>
    <View style={{ width: '60%', height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#5965E0' }}>XP: {currentExperience}</Text>
      <Text style={{ fontSize: 15, color: '#5965E0' }}>XP Próximo Level: {experienceToNextLevel}</Text>

    </View>
    <View style={{  width: '40%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
    <ProgressCircle
      percent={percentToNextLevel}
      radius={45}
      borderWidth={8}
      color='#4cd62b'
      shadowColor='#dcdde0'
      bgColor='#fff'
    >
      <Text style={{ fontSize: 18, color: '#5965E0' }} >{percentToNextLevel.toFixed(2) + '%'}</Text>
    </ProgressCircle>
    </View>
  </Container>
 )
}

export default ExperienceBar
