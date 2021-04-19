import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native'
import { Formik } from 'formik'
import { FontAwesome5 as Icon } from '@expo/vector-icons'
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import Spinner from 'react-native-loading-spinner-overlay';
import * as ImagePicker from 'expo-image-picker';

import Input from '../../components/InputUpdate'

import {
  Container,
  Header,
  Body,
  Button,
  UpdateText
} from './styles'
import { RegisterContext } from '../../contexts/register';

export default function AccessInfo () {
  const { name, lastName, email, password, update } = useContext(RegisterContext)

  const [editableEmail, setEditableEmail] = useState(false)
  const [editablePassword, setEditablePassword] = useState(false)

  const [spinner, setSpinner] = useState(false)
  const [alert, setAlert] = useState(false)

  const Alerts = () => {
    setSpinner(true)
    setTimeout(() => {
      setSpinner(false)
      setAlert(true)
    }, 3000)
  }

  function EditableEmail(){
    if (editableEmail === false) {
      setEditableEmail(true)
    } else {
      setEditableEmail(false)
    }
  }
  
  function EditablePassword(){
    if (editablePassword === false) {
      setEditablePassword(true)
    } else {
      setEditablePassword(false)
    }
  }

  const UpdateFinished = () => {
    setAlert(false)
  }

  return (
    <Container>

      <Body>
        <Formik
          initialValues={{email: email, password: password, name: name, lastName: lastName }}
          onSubmit={(values) => update(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 50, color: '#666' }}>Editar Dados de Acesso</Text>
            <Input 
              click={EditableEmail} 
              placeholder='E-mail' 
              colorIconArea={editableEmail ? '#E83F5B' : '#5965E0'} 
              icon='mode-edit' 
              color='#fff' 
              value={values.email}
              editable={editableEmail}
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
              
            />
            <Input 
              click={EditablePassword} 
              placeholder='Senha' 
              colorIconArea={editablePassword ? '#E83F5B' : '#5965E0'} 
              icon='mode-edit' 
              color='#fff' 
              editable={editablePassword}
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
              value={values.password}
              password
            />
            <Button onPress={() => {handleSubmit(), Alerts()}}>
              <UpdateText>Atualizar</UpdateText>
            </Button>
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
            backgroundColor: '#4CD62B',
            borderRadius: 50,
            width: '100%',
          }}><Icon name='check' size={25} color='#fff' /></View>}
          style={{ backgroundColor: '#fff' }}
        >
          <View style={styles.content}>
            <Text style={styles.contentText}>Dados atualizados com sucesso!</Text>
            <TouchableOpacity style={styles.btn} onPress={UpdateFinished}>
              <Text style={styles.btnText}>OK</Text>
            </TouchableOpacity>
          </View>
        </FancyAlert>
      </Body>
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