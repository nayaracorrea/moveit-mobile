import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

interface AuthContextData {
  spinner: boolean;
  notification: string;
  alert: boolean;
  signed: boolean;
  signIn(teste: object): Promise<void>;
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
      
      setSpinner(true)

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

          setTimeout(() => {
            setAlert(true)
            isClicked(false)
            setSpinner(false)
            setNotification('Você não tem uma conta. Registre-se!')
          })
          
      } else 
          if (storageUserRegister !== null && storageUser !== null) {
            let register = JSON.parse(storageUserRegister)
            let login = JSON.parse(storageUser)
            if (register.email !== login.email && register.password !== login.password) {
              console.log('E-mail e senha inválidos')
              setTimeout(() => {
                setAlert(true)
                isClicked(false)
                setSpinner(false)
                setNotification('E-mail e senha inválidos')
              }, 1000)
              
            } else if (register.email !== login.email && register.password === login.password) {
              console.log('E-mail inválido')
              setTimeout(() => {
                setAlert(true)
                isClicked(false)
                setSpinner(false)
                setNotification('E-mail inválido')
              }, 1000)

            } else if (register.email === login.email && register.password !== login.password) {
              console.log('Senha inválida')
              setTimeout(() => {
                setAlert(true)
                isClicked(false)
                setSpinner(false)
                setNotification('Senha inválida')
              }, 1000)
            } else {
              console.log('Acesso válido')
              isSigned(true)
              setTimeout(() => {
                setSpinner(false)
                isClicked(false)
              }, 1000)
          }
      } 
    }
    loadAsync()
  }, [click === true])

  function hideAlert () {
    setAlert(false)
    setNotification('')
  }

  async function signOut() {
    try {
        await AsyncStorage.removeItem('@RN:login')
        isSigned(false)
    } catch (e) {
      console.log(e.message)
    }
  }
  
  return (
    <AuthContext.Provider value={{ spinner, notification, alert, signed, signIn, hideAlert, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}