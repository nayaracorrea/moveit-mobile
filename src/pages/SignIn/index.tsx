import React, { useContext, useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
import Spinner from 'react-native-loading-spinner-overlay';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import { FontAwesome as Icon } from '@expo/vector-icons'

import Input from '../../components/Input'
import GithubButton from '../../components/CircleButton'

import { initialFields, Schema } from './Schema'

import {
  Container,
  Body,
  Footer,
  Logo,
  Title,
  Button,
  Login,
  OptionText,
  SignOut,
  SignOutText,
  Error
} from './styles'
import { AuthContext } from '../../contexts/auth'

export default function SignIn ({ navigation }) {
  const {spinner, notification, alert, signIn, hideAlert } = useContext(AuthContext)

  return (
    <Container>
      <StatusBar translucent={true} style='light' />
      <Body>
        <Formik
          initialValues={initialFields}
          validationSchema={Schema}
          onSubmit={(values) => signIn(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
            <>
              <Logo source={require('../../../assets/png/adaptive-icon.png')} />
              <Title>Login</Title>
              <Input 
                placeholder='E-mail'
                icon='person'
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
                password
              />
              <Error>{touched.password && errors.password}</Error>
              <Button onPress={() => {handleSubmit()}}>
                <Login>Login</Login>
              </Button>
              {/* <OptionText>Ou</OptionText>
              <GithubButton click={() => console.log('Github')} icon='github' color='#000' sizeIcon={35} /> */}
            </>
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
              backgroundColor: '#af242b',
              borderRadius: 50,
              width: '100%',
            }}><Icon name='times' size={25} color='#fff' /></View>}
            style={{ backgroundColor: '#fff' }}
          >
            <View style={styles.content}>
              <Text style={styles.contentText}>{notification}</Text>

              <TouchableOpacity style={styles.btn} onPress={hideAlert}>
                <Text style={styles.btnText}>OK</Text>
              </TouchableOpacity>
            </View>
          </FancyAlert>
      </Body> 
      <Footer>
        <SignOut>
          <SignOutText onPress={() => navigation.navigate('Register')}>Não tem uma conta? <SignOutText style={{ fontWeight: 'bold' }}>Registre-se!</SignOutText> </SignOutText>
        </SignOut>
      </Footer> 

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
    fontSize: 14,
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
    backgroundColor: '#af242b',
    marginTop: 16,
    minWidth: '50%'
  },
  btnText: {
    color: '#fff'
  }
})