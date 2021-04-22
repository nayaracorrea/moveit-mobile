import React, { useContext } from 'react'
import { Text, View } from 'react-native'

import LevelIcon from '../../../assets/svg/level'
import { ChallengeContext } from '../../contexts/challenges'
import { RegisterContext } from '../../contexts/register'

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
  const { avatar, name, lastName } = useContext(RegisterContext)

  return (
    <>
      <Container>
        <SubContainer>
          <AvatarContainer>
          {avatar === '' ? (
            <Avatar source={require('../../../assets/png/not-found.png')} />
          ): (
            <Avatar source={{ uri: avatar }}  />
          )}
          </AvatarContainer>
          <NameContainer>
            <Name color={color}>{name + ' ' + lastName}</Name>
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