import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native'
import { Formik } from 'formik'
import { FontAwesome5 as Icon } from '@expo/vector-icons'
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import Spinner from 'react-native-loading-spinner-overlay';
import * as ImagePicker from 'expo-image-picker';

import Input from '../../components/InputUpdate'
import UpdateNameModal from '../../components/UpdateModal'

import {
  Container,
  Header,
  Body,
  AvatarContainer,
  Avatar,
  UpdateAvatar,
  Button,
  UpdateText
} from './styles'
import { RegisterContext } from '../../contexts/register'
export default function PersonalInfo () {
  const { name, lastName, email, password, avatar, update, userAvatar } = useContext(RegisterContext)

  const [editableName, setEditableName] = useState(false)
  const [editableLastName, setEditableLastName] = useState(false)

  const [spinner, setSpinner] = useState(false)
  const [alert, setAlert] = useState(false)
  const [image, setImage] = useState(null)

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })
  })

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: false
    });

    console.log(result)

    if (!result.cancelled) {
      // setImage(result.uri);
      userAvatar(result.uri)
    }
  };


  function EditableName(){
    if (editableName === false) {
      setEditableName(true)
    } else {
      setEditableName(false)
    }
  }

  const Alerts = () => {
    setSpinner(true)
    setTimeout(() => {
      setSpinner(false)
      setAlert(true)
    }, 3000)
  }

  const UpdateFinished = () => {
    setAlert(false)
  }

  function EditableLastName(){
    if (editableLastName === false) {
      setEditableLastName(true)
    } else {
      setEditableLastName(false)
    }
  }

  // source={{ uri: avatar }}
  console.log(image)

  return (
    <Container>
      <Header>
        <AvatarContainer style={styles.shadow}>
          {image === null ? (
            <Avatar source={require('../../../assets/png/not-found.png')} />
          ): (
            <Avatar source={{ uri: avatar }}  />
          )}
          {/* <Avatar source={image == null ? {uri: '../../../assets/jpg/woman.jpg'} : { uri: avatar }}  /> */}
          <UpdateAvatar style={styles.shadow} onPress={pickImage}>
            <Icon name='camera' size={25} color='#b9b9b9' />
          </UpdateAvatar>
        </AvatarContainer>
        
      </Header>
      <Body>
        <Formik
          initialValues={{email: email, password: password, name: name, lastName: lastName }}
          onSubmit={(values) => update(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <>
            <Input 
              click={EditableName} 
              placeholder='Nome' 
              colorIconArea={editableName ? '#E83F5B' : '#5965E0'} 
              icon='mode-edit' 
              color='#fff' 
              value={values.name}
              editable={editableName}
              onBlur={handleBlur('name')}
              onChangeText={handleChange('name')}
              
            />
            <Input 
              click={EditableLastName} 
              placeholder='Sobrenome' 
              colorIconArea={editableLastName ? '#E83F5B' : '#5965E0'} 
              icon='mode-edit' 
              color='#fff' 
              editable={editableLastName}
              onBlur={handleBlur('lastName')}
              onChangeText={handleChange('lastName')}
              value={values.lastName}
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
            <Text style={styles.contentText}>Perfil atualizado com sucesso!</Text>
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