import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
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
  const { currentExperience, experienceToNextLevel } = useContext(CountdownContext)

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

 return (
  <Container>
    <View style={{ width: '60%', height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#fff' }}>% Experiência</Text>
      <Text style={{ fontSize: 18, color: '#fff' }}>XP Próximo Level: {experienceToNextLevel}</Text>

    </View>
    <View style={{  width: '40%', height: '100%', alignItems: 'center' }}>
    <ProgressCircle
      percent={percentToNextLevel}
      radius={60}
      borderWidth={8}
      color='#4cd62b'
      shadowColor='#dcdde0'
      bgColor='#5965E0'
    >
      <Text style={{ fontSize: 24 }} >{percentToNextLevel.toFixed(2) + '%'}</Text>
    </ProgressCircle>
    </View>
  </Container>
 )
}

export default ExperienceBar
