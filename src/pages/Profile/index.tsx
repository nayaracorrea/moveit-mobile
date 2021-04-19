import React, { useContext, useState } from 'react'
import { View, Text,  } from 'react-native'
import { AuthContext } from '../../contexts/auth'
import ExperienceBar from '../../components/ExperienceBar'
// import {ChallengesCompleted} from '../../components/ChallengesCompleted'
import { FontAwesome as Icon } from '@expo/vector-icons'
import Spinner from 'react-native-loading-spinner-overlay'

import InfoUser from '../../components/InfoUserHome/index'
import Experience from '../../components/ExperienceBar/index'


import {
  Container,
  Header,
  HeaderInfoUser,
  Card,
  HeaderCard,
  BodyCard,
  Body,
  AccessButtonContainer,
  LogoutContainer,
  ButtonContainer,
  Button,
  IconContainer,
  ButtonText,
  ChallengesCompleted
} from './styles'
import { ChallengeContext } from '../../contexts/challenges'


export default function Profile ({ navigation }) {
  const { signOut } = useContext(AuthContext)
  const { challengesCompleted, resetInfoChallenges, deleteData } = useContext(ChallengeContext)
  const [spinner, setSpinner] = useState(false)

  const ResetInfo = () => {
    setSpinner(true)
    setTimeout(() => {
      setSpinner(false)
      resetInfoChallenges()
    }, 3000)
  }

  function deleteAllData () {
    deleteData()
  }

  const ClearAll = () => {
    setSpinner(true)
    setTimeout(() => {
      setSpinner(false)
      deleteAllData()
    }, 3000)
  }

  return (
    <Container>
      <Header>
        <HeaderInfoUser>
          <InfoUser color='#fff' />
        </HeaderInfoUser>
        
        <Card>
          <HeaderCard>
            <ChallengesCompleted>Desafios completados: {challengesCompleted}</ChallengesCompleted>
          </HeaderCard>
          <BodyCard>
            <Experience />
          </BodyCard>
        </Card>
      </Header>
      <Body>
        <AccessButtonContainer>
        <ButtonContainer>
          <Button onPress={() => navigation.navigate('PersonalInfo')}>
            <IconContainer>
              <Icon name='user' size={25} color='#5965E0' />
            </IconContainer>
            <ButtonText>Dados Pessoais</ButtonText>
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button onPress={() => navigation.navigate('AccessInfo')}>
            <IconContainer>
              <Icon name='lock' size={25} color='#5965E0' />
            </IconContainer>
            <ButtonText>Dados de Acesso</ButtonText>
          </Button>
        </ButtonContainer>
        </AccessButtonContainer>
        <LogoutContainer>
        <ButtonContainer>
          <Button onPress={ResetInfo}>
            <IconContainer>
              <Icon name='refresh' size={25} color='#5965E0' />
            </IconContainer>
            <ButtonText>Resetar Desafios</ButtonText>
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button onPress={ClearAll}>
            <IconContainer>
              <Icon name='trash' size={25} color='#5965E0' />
            </IconContainer>
            <ButtonText>Apagar conta</ButtonText>
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button onPress={signOut}>
            <IconContainer>
              <Icon name='sign-out' size={25} color='#bb001f' />
            </IconContainer>
            <ButtonText>Sair</ButtonText>
          </Button>
        </ButtonContainer>
        </LogoutContainer>
      </Body>

      <Spinner visible={spinner} />
    </Container>

  )
}