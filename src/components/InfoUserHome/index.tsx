import React, { useContext } from 'react'
import { Text, View } from 'react-native'

import LevelIcon from '../../../assets/svg/level'
import { ChallengeContext } from '../../contexts/challenges'

import {
  Container,
  SubContainer,
  AvatarContainer,
  Avatar,
  NameContainer,
  Name,
  LevelContainer,
  Level
} from './styles'

export default function InfoUserHome ({ color }) {
  const { level } = useContext(ChallengeContext)

  return (
    <>
      <Container>
        <SubContainer>
          <AvatarContainer>
            <Avatar source={require('../../../assets/jpg/woman.jpg')} />
          </AvatarContainer>
          <NameContainer>
            <Name color={color}>Nayara Corrêa</Name>
            <LevelContainer>
              <LevelIcon width={15} height={15} />
              <Level color={color}>Level {level}</Level>
            </LevelContainer>
          </NameContainer>
        </SubContainer>
      </Container>
    </>
  )
}