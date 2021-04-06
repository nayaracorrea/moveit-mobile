import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import { showMessage, hideMessage } from 'react-native-flash-message'
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-community/async-storage'
import { FontAwesome as Icon } from '@expo/vector-icons'

import Input from '../../components/Input'
import { RegisterContext } from '../../contexts/register'

import { initialFields, Schema } from './Schema'

import {
  Container,
  Body,
  FormBody,
  Logo,
  Title,
  Button,
  RegisterText,
  Error
} from './styles'


export default function Register({navigation}) {
  const { register, exibir } = useContext(RegisterContext)
  const [spinner, setSpinner] = useState(false)
  const [alert, setAlert] = useState(false)

  // const toggleAlert = () => {
  //   setVisible(true)
  // }

  // const initialFields = {
  //   email: '',
  //   password: '',
  //   name: '',
  //   lastName: ''
  // }

  const Alerts = () => {
    setSpinner(true)
    setTimeout(() => {
      setSpinner(false)
      setAlert(true)
    }, 3000)
  }

  const RegisterFinished = () => {
    setAlert(false)
    navigation.navigate('SignIn')
  }

  return (
    <Container>
      <ScrollView style={{ width: '100%', height: '100%' }}>
        <Body>
          <Formik
            initialValues={initialFields}
            validationSchema={Schema}
            onSubmit={(values) => register(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
              <FormBody>
              <Logo source={require('../../../assets/png/adaptive-icon.png')} />
                <Title>Registrar</Title>
                <Input 
                  placeholder='E-mail'
                  icon='email'
                  color='#5965E0'
                  value={values.email}
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                />
                <Error>{touched.email && errors.email}</Error>
                <Input 
                  placeholder='Senha'
                  icon='lock'
                  color='#5965E0'
                  value={values.password}
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                />
                <Error>{touched.password && errors.password}</Error>
                <Input 
                  placeholder='Nome'
                  icon='person'
                  color='#5965E0'
                  value={values.name}
                  onBlur={handleBlur('name')}
                  onChangeText={handleChange('name')}
                />
                <Error>{touched.name && errors.name}</Error>
                <Input 
                  placeholder='Sobrenome'
                  icon='person'
                  color='#5965E0'
                  value={values.lastName}
                  onBlur={handleBlur('lastName')}
                  onChangeText={handleChange('lastName')}
                />
                <Error>{touched.lastName && errors.lastName}</Error>
                <Button onPress={() => {handleSubmit(), Alerts()}}>
                  <RegisterText>Registrar</RegisterText>
                </Button> 
              </FormBody>

            )}
          </Formik>

          
          <Spinner visible={spinner} />

          <FancyAlert
            visible={alert}
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
              <Text style={styles.contentText}>Registro efetuado com sucesso!</Text>

              <TouchableOpacity style={styles.btn} onPress={RegisterFinished}>
                <Text style={styles.btnText}>OK</Text>
              </TouchableOpacity>
            </View>
          </FancyAlert>

        </Body>

      </ScrollView>
    </Container>
  )
}


const styles = StyleSheet.create({
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