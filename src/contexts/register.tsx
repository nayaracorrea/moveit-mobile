import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import { initialFields } from '../services/UserRegister'

interface RegisterContextData {
  user: object | null;
  register(teste: object): Promise<void>;
  exibir(): void;
}

export const RegisterContext = createContext<RegisterContextData>({} as RegisterContextData);

export const RegisterProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<object | null>(null)

  const register = async (user) => {
    try {
      await AsyncStorage.setItem('@RN:user', JSON.stringify(user))

    } catch (e) {
      console.log(e.message)
    }
  }

  const exibir = async () => {
    try {
      const value = await AsyncStorage.getItem('@RN:user')

      if (value !== null) {
        setUser(JSON.parse(value))
      }
    } catch (e) {
      console.log(e.message)
    }
  }


  return (
    <RegisterContext.Provider value={{ user, register, exibir }}>
      {children}
    </RegisterContext.Provider>
  )
}