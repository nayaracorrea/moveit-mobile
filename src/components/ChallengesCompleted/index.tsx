import React, { useContext, useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { ChallengeContext } from '../../contexts/challenges'

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
  const { currentExperience, challengesCompleted } = useContext(ChallengeContext)

  return (
    <>
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
    </>
  )
}
