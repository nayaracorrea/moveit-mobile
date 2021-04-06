import React from 'react'
import { Text, View } from 'react-native'

// import LevelIcon from '../../assets/svg/level'

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

export default function InfoUserHome () {
  return (
    <>
      <Container>
        <SubContainer>
          <AvatarContainer>
            <Avatar source={require('../../assets/jpg/woman.jpg')} />
          </AvatarContainer>
          <NameContainer>
            <Name>Nayara Corrêa</Name>
            <LevelContainer>
              {/* <LevelIcon width={15} height={15} /> */}
              <Level>Level 1</Level>
            </LevelContainer>
          </NameContainer>
        </SubContainer>
      </Container>
    </>
  )
}