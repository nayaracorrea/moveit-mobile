import React, { useContext } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import Modal from 'react-native-modal'
import { Form, Formik } from 'formik'
import { MaterialIcons as Icon } from '@expo/vector-icons'

import Congrats from '../../../assets/svg/congrats'
import { ChallengeContext } from '../../contexts/challenges'
import Input from '../Input'
import { RegisterContext } from '../../contexts/register'

export default function UpdateModal({ visible, cancel }) {
  const {isLevelUpModalOpen, closeLevelUpModal, level } = useContext(ChallengeContext)
  const { name, lastName, email, password, UpdateName, register } = useContext(RegisterContext)

  return (
      <Modal  isVisible={visible} style={styles.modal} swipeDirection={['up', 'left', 'right', 'down']}>
        <SafeAreaView style={styles.view}>
        <Formik
          initialValues={{ name: '' }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <>
              <Input 
                placeholder='Name'
                icon='person'
                color='#666'
                value={values.name}
                onBlur={handleBlur('name')}
                onChangeText={handleChange('name')}
              />
              <TouchableOpacity onPress={() => handleSubmit}>
                <Text>ok</Text>
              </TouchableOpacity>
            </>
          )}

        </Formik>


        </SafeAreaView>
      </Modal>

  )
}

const styles = StyleSheet.create({
  view: {
    height: 180,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    backgroundColor: 'rgba(255,255,255,0.5)',
    height: '15%',
    // width: '100%'
  },
  centeredView: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  
    backgroundColor: 'rgba(255,255,255,0.6)'
  },
  modalView: {
    height: 200,
    width: '85%',

    backgroundColor: '#f4f4f4',
    
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    width: '100%',
    height: '20%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    width: '100%',
    height: '75%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    width: '100%',
    height: '35%',
    backgroundColor: '#000',
    flexDirection: 'row'
  },
  footerLeft: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9c9c9c',
    borderEndWidth: 1,
    borderEndColor: '#fff'
  },
  footerRight: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#156900',
    borderStartWidth: 1,
    borderStartColor: '#fff'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666'
  },
  btn: {
    width: '100%',
    height: '100%',

    alignItems: 'center',
    justifyContent: 'center'
  },
  titleBtn: {
    fontSize: 14,
    color: '#fff'
  }

});