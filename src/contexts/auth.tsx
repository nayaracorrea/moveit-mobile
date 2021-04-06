import React, { createContext, useContext, useEffect, useState } from 'react'
import { RegisterContext } from './register'
import AsyncStorage from '@react-native-community/async-storage'

interface AuthContextData {
  // signed: boolean;
  user: object | null;
  spinner: boolean;
  notification: string;
  alert: boolean;
  signed: boolean;
  // loading: boolean;
  signIn(teste: object): Promise<void>;
  hideAlert(): void;
  signOut(): void;
  // signOut(): void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null)
  const [clicked, isClicked] = useState(false)
  const [spinner, setSpinner] = useState(false)
  const [notification, setNotification] = useState('')
  const [alert, setAlert] = useState(false)
  const [signed, isSigned] = useState(false)

  async function signIn(teste: any) {
    try {
      await AsyncStorage.setItem('@RN:login', JSON.stringify(teste))

      let registerEmail = ''
      let registerPassword = ''
      
      let loginEmail = ''
      let loginPassword = ''

      const storageUserRegister = await AsyncStorage.getItem('@RN:user')
        .then((value) => {
          const data = JSON.parse(value)
          registerEmail = data.email
          registerPassword = data.password
        })      
      const storageUser = await AsyncStorage.getItem('@RN:login')
        .then((value) => {
          const data = JSON.parse(value)
          loginEmail = data.email
          loginPassword = data.password
        })

      console.log(storageUserRegister)
      console.log(storageUser)

      if (storageUserRegister === null) {
        console.log('Você não tem uma conta. Registre-se!')
        setAlert(true)
        setNotification('Você não tem uma conta. Registre-se!')
      } else {
        console.log('Ok')
      }

      if(loginEmail !== registerEmail && loginPassword === registerPassword) {
          console.log('Usuário inválido')
          console.log(loginEmail)
          setAlert(true)
          setNotification('Usuário inválido')
      } else if (loginEmail === registerEmail && loginPassword !== registerPassword) {
          console.log('Senha inválida')
          setAlert(true)
          setNotification('Senha inválida')
      } else if (loginEmail !== registerEmail && loginPassword !== registerPassword) {
          console.log('Usuário e senha inválidos')
          setAlert(true)
          setNotification('Usuário e senha inválidos')
      } 

      if (loginEmail === registerEmail && loginPassword === registerPassword) {
        setSpinner(true)
        setTimeout(() => {
          console.log('Acesso válido')
          isSigned(true)
          setSpinner(false)
        }, 3000)
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  function hideAlert () {
    setAlert(false)
    setNotification('')
  }

  function signOut() {
    isSigned(false)
  }
  
  return (
    <AuthContext.Provider value={{ user, spinner, notification, alert, signed, signIn, hideAlert, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}