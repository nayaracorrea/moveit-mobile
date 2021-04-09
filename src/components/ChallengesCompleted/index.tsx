import React, { useContext, useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { CountdownContext } from '../../contexts/countdown'

import {
  Container,
  Body,
  BoxLeft,
  Title,
  SubTitle,
  SeparatorContainer,
  Separator,
  BoxRight
} from './styles'


export const ChallengesCompleted = () => {
  const { currentExperience, challengesCompleted } = useContext(CountdownContext)

  return (
    <Container>
      <Body>
        <BoxLeft>
          <Title>Desafios Completos</Title>
          <SubTitle>{challengesCompleted}</SubTitle>
        </BoxLeft>
        <SeparatorContainer>
          <Separator />
        </SeparatorContainer>
        <BoxRight>
          <Title>Seu XP</Title>
          <SubTitle>{currentExperience}</SubTitle>
        </BoxRight>
      </Body>
    </Container>
  )
}
