import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import * as ImagePicker from 'expo-image-picker';

import { initialFields } from '../services/UserRegister'
import { Platform } from 'react-native';

interface RegisterContextData {
  user: object | null;
  name: string;
  lastName: string;
  email: string;
  password: string;
  avatar: string;
  // image: string | null;
  register(teste: object): Promise<void>;
  exibir(): void;
  update(nameUser: object): Promise<void>;
  userAvatar(avatar: string): Promise<void>;
  // pickImage(): void;
}

export const RegisterContext = createContext<RegisterContextData>({} as RegisterContextData);

export const RegisterProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<object | null>(null)
  const [data, setData] = useState<object | null>(null)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [click, isClicked] = useState(false)
  const [avatar, setAvatar] = useState('')
  const [updateAvatar, isUpdateAvatar] = useState(false)
  
  const register = async (user) => {
    try {
      await AsyncStorage.setItem('@RN:user', JSON.stringify(user))

    } catch (e) {
      console.log(e.message)
    }
  }

  const userAvatar = async (avatar) => {
    try {
      await AsyncStorage.setItem('@RN:avatar', JSON.stringify(avatar))
      isUpdateAvatar(true)
    } catch (e) {
      console.log(e.message)
    }
  }

  const getUserAvatar = async () => {
    try {
      const getAvatar = await AsyncStorage.getItem('@RN:avatar')

      if (getAvatar !== null) {
        setAvatar(JSON.parse(getAvatar))
        console.log('Avatar: ' + avatar)
      }
    } catch (e) {
      console.log(e.message)
    }
  }


  getUserAvatar()


  const exibir = async () => {
    try {
      const value = await AsyncStorage.getItem('@RN:user')

      if (value !== null) {
        setUser(JSON.parse(value))
        console.log(user)
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  const Info = async () => {
    try {
      const info = await AsyncStorage.getItem('@RN:user')

      if (info !== null) {
        let data = JSON.parse(info)
        setEmail(data.email)
        setPassword(data.password)
        setName(data.name)
        setLastName(data.lastName)
        // setImage(data.image)
      }

      console.log(info)
    } catch (e) {
      console.log(e.message)
    }
  }

  Info()

  // console.log(data)

  useEffect(() => {
    Info()
    isClicked(false)
  }, [click === true])

  useEffect(() => {
    getUserAvatar()
    isUpdateAvatar(false)
  }, [updateAvatar === true])

  console.log(updateAvatar)

  const update = async (newData) => {
    try {
      await AsyncStorage.setItem('@RN:user', JSON.stringify(newData))
      isClicked(true)
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <RegisterContext.Provider value={{ 
      user, 
      name,
      lastName,
      email,
      password,
      avatar,
      // image,
      register, 
      exibir,
      update,
      userAvatar
      // pickImage 
    }}>
      {children}
    </RegisterContext.Provider>
  )
}