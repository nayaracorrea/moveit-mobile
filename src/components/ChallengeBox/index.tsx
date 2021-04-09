import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Countdown from './Countdown'
import InitialBox from './InitialBox'
import Challenge from './Challenges'

import LevelUp from '../../../assets/svg/level_up'
import { CountdownContext } from '../../contexts/countdown'

import {
  Container,
} from './styles'

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
      shadowOffset: {
    	width: 0,
    	height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
   elevation: 8,
  }
})


export default function ChallengeBox () {
  const { isActive, challenge, startCountdown, resetCountdown } = useContext(CountdownContext)

  return (
    <Container style={styles.shadow}>
      {challenge ? (
        <Challenge />
      ) : (
        <>
          {isActive === false ? (
            <InitialBox click={startCountdown} />
          ) : (
            <Countdown click={resetCountdown} />
          )}
        </>
      )}



    </Container>
  )
}