import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native'
import { AuthContext } from '../../contexts/auth'
import ExperienceBar from '../../components/ExperienceBar'
// import {ChallengesCompleted} from '../../components/ChallengesCompleted'
import { FontAwesome as Icon } from '@expo/vector-icons'
import Spinner from 'react-native-loading-spinner-overlay'
import { FancyAlert } from 'react-native-expo-fancy-alerts'

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
  const [alertReset, setAlertReset] = useState(false)
  const [alertDelete, setAlertDelete] = useState(false)

  const ResetInfo = () => {
    setSpinner(true)
    setTimeout(() => {
      setSpinner(false)
      resetInfoChallenges()
      setAlertReset(true)
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
      setAlertDelete(true)
    }, 3000)
  }

  const ResetProcessFinished = () => {
    setAlertReset(false)
  }

  const DeleteProcessFinished = () => {
    setAlertDelete(false)
    signOut()
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

      <FancyAlert
          visible={alertReset}
          onRequestClose={() => console.log('Teste')}
          icon={<View style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#4CD62B',
            borderRadius: 50,
            width: '100%',
          }}><Icon name='check' size={25} color='#fff' /></View>}
          style={{ backgroundColor: '#fff' }}
        >
          <View style={styles.content}>
            <Text style={styles.contentText}>Dados restaurados com sucesso!</Text>
            <TouchableOpacity style={styles.btn} onPress={ResetProcessFinished}>
              <Text style={styles.btnText}>OK</Text>
            </TouchableOpacity>
          </View>
        </FancyAlert>

        <FancyAlert
          visible={alertDelete}
          onRequestClose={() => console.log('Teste')}
          icon={<View style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#4CD62B',
            borderRadius: 50,
            width: '100%',
          }}><Icon name='check' size={25} color='#fff' /></View>}
          style={{ backgroundColor: '#fff' }}
        >
          <View style={styles.content}>
            <Text style={styles.contentText}>Dados deletados com sucesso!</Text>
            <TouchableOpacity style={styles.btn} onPress={DeleteProcessFinished}>
              <Text style={styles.btnText}>OK</Text>
            </TouchableOpacity>
          </View>
        </FancyAlert>
    </Container>

  )
}


const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -16,
    marginBottom: 16,
  },
  contentText: {
    textAlign: 'center',
  },
  btn: {
    borderRadius: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    alignSelf: 'stretch',
    backgroundColor: '#4CD62B',
    marginTop: 16,
    minWidth: '50%'
  },
  btnText: {
    color: '#fff'
  }
})