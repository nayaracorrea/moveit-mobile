import React, { useContext } from 'react'
import { Modal, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons as Icon } from '@expo/vector-icons'

import Congrats from '../../../assets/svg/congrats'
import { ChallengeContext } from '../../contexts/challenges'

export default function LevelUpModal() {
  const {isLevelUpModalOpen, closeLevelUpModal, level } = useContext(ChallengeContext)
  
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isLevelUpModalOpen}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.close} onPress={closeLevelUpModal}>
                <Icon name='close' size={30} color='#666' />
              </TouchableOpacity>
            </View>
            <View style={styles.body}>
              <Congrats width={150} height={150} />
              <Text style={styles.level}>{level}</Text>
              <Text style={styles.congratsText}>Parabéns</Text>
              <Text style={styles.description}>Você alcançou um novo level</Text>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  
    backgroundColor: 'rgba(255,255,255,0.6)'
  },
  modalView: {
    height: '45%',
    width: '70%',

    backgroundColor: '#fff',

    borderRadius: 20,
    
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

    alignItems: 'flex-end'
  },
  body: {
    width: '100%',
    height: '80%',

    alignItems: 'center',
    justifyContent: 'center',

    padding: 20
  },
  close: {
    width: 65,
    height: '100%',

    alignItems: 'center',
    justifyContent: 'center'
  },

  level: {
    color: '#5965E0',

    fontSize: 150,
    fontWeight: 'bold',

    bottom: 35,
    marginTop: -150
  },
  congratsText: {
    color: '#2E384D',

    fontSize: 32,
    fontWeight: 'bold',

    top: -45
  },
  description: {
    color: '#666',

    fontSize: 16,
    fontWeight: '100',

    top: -40
  }
});