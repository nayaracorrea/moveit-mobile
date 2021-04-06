import React, { createContext, useContext, useEffect, useState } from 'react'
import { RegisterContext } from './register'
import AsyncStorage from '@react-native-community/async-storage'

interface AuthContextData {
  spinner: boolean;
  notification: string;
  alert: boolean;
  signed: boolean;
  signIn(teste: object): Promise<void>;
  checkSignIn(): void;
  hideAlert(): void;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [spinner, setSpinner] = useState(false)
  const [notification, setNotification] = useState('')
  const [alert, setAlert] = useState(false)
  const [signed, isSigned] = useState(false)

  const [click, isClicked] = useState(false)

  async function signIn(teste: any) {
    try {
      await AsyncStorage.setItem('@RN:login', JSON.stringify(teste))

      isClicked(true)

    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    async function loadAsync() {
      const storageUserRegister = await AsyncStorage.getItem('@RN:user')     
      const storageUser = await AsyncStorage.getItem('@RN:login')

      if (storageUserRegister === null && storageUser !== null) {
          console.log('Você não possui conta')
          setAlert(true)
          isClicked(false)
          setNotification('Você não tem uma conta. Registre-se!')
      } else 
          if (storageUserRegister !== null && storageUser !== null) {
            let register = JSON.parse(storageUserRegister)
            let login = JSON.parse(storageUser)
            if (register.email !== login.email && register.password !== login.password) {
              console.log('E-mail e senha inválidos')
              setAlert(true)
              isClicked(false)
              setNotification('E-mail e senha inválidos')
            } else if (register.email !== login.email && register.password === login.password) {
              console.log('E-mail inválido')
              setAlert(true)
              isClicked(false)
              setNotification('E-mail inválido')
            } else if (register.email === login.email && register.password !== login.password) {
              console.log('Senha inválida')
              setAlert(true)
              isClicked(false)
              setNotification('Senha inválida')
            } else {
              setSpinner(true)
              setTimeout(() => {
                console.log('Acesso válido')
                isSigned(true)
                setSpinner(false)
              }, 3000)
          }
      } 
    }
    loadAsync()
  }, [click === true])

  async function checkSignIn() {
    try {
      const storageUserRegister = await AsyncStorage.getItem('@RN:user')     
      const storageUser = await AsyncStorage.getItem('@RN:login')

      if (storageUserRegister === null && storageUser !== null) {
          console.log('Você não possui conta')
          setAlert(true)
          setNotification('Você não tem uma conta. Registre-se!')
      } else 
          if (storageUserRegister !== null && storageUser !== null) {
            let register = JSON.parse(storageUserRegister)
            let login = JSON.parse(storageUser)
            if (register.email !== login.email && register.password !== login.password) {
              console.log('E-mail e senha inválidos')
              setAlert(true)
              setNotification('E-mail e senha inválidos')
            } else if (register.email !== login.email && register.password === login.password) {
              console.log('E-mail inválido')
              setAlert(true)
              setNotification('E-mail inválido')
            } else if (register.email === login.email && register.password !== login.password) {
              console.log('Senha inválida')
              setAlert(true)
              setNotification('Senha inválida')
            } else {
              setSpinner(true)
              isSigned(true)
              setTimeout(() => {
                console.log('Acesso válido')
                setSpinner(false)
              }, 3000)
          }
      } 
    } catch (e) {
      console.log(e.message)
    }
  }

  console.log(signed)

  function hideAlert () {
    setAlert(false)
    setNotification('')
  }

  function signOut() {
    AsyncStorage.removeItem('@RN:login')
    isSigned(false)
  }
  
  return (
    <AuthContext.Provider value={{ spinner, notification, alert, signed, signIn, checkSignIn, hideAlert, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}