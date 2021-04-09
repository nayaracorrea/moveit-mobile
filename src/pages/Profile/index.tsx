import React, { useContext } from 'react'
import { View, Text,  } from 'react-native'
import { AuthContext } from '../../contexts/auth'
import ExperienceBar from '../../components/ExperienceBar'
import {ChallengesCompleted} from '../../components/ChallengesCompleted'
import { FontAwesome as Icon } from '@expo/vector-icons'

import {
  Container,
  Header,
  HeaderInternal,
  Body,
  AccessButtonContainer,
  LogoutContainer,
  ButtonContainer,
  Button,
  ButtonText,
  Separator
} from './styles'


export default function Profile () {
  const { signOut } = useContext(AuthContext)

  return (
    <Container>
      <Header>
        <HeaderInternal>
          <ExperienceBar />
        </HeaderInternal>
        <HeaderInternal>
          <ChallengesCompleted />
        </HeaderInternal>
      </Header>
      <Body>
        <AccessButtonContainer>
          <ButtonContainer>
            <Button>
              <Icon name='user' size={25} color='#666' />
              <ButtonText>Dados Pessoais</ButtonText>
            </Button>
          </ButtonContainer>
          <Separator />
          <ButtonContainer>
            <Button>
              <Icon name='lock' size={25} color='#666' />
              <ButtonText>Dados de Acesso</ButtonText>
            </Button>
          </ButtonContainer>
        </AccessButtonContainer>
        <LogoutContainer>
          <ButtonContainer>
            <Button onPress={signOut}>
              <Icon name='sign-out' size={25} color='#666' />
              <ButtonText>Sair</ButtonText>
            </Button>
          </ButtonContainer>
        </LogoutContainer>

      </Body>
    </Container>

  )
}