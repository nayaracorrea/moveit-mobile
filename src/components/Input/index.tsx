import React from 'react'
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { StyleSheet, TextInput } from 'react-native'

import {
  Form,
  InputArea,
  IconArea,
  Input
} from './styles'


export default ({
  icon, placeholder, color, ...rest
}) => (
  <Form>
      <InputArea>
        <Input 
          placeholder={placeholder}
          {...rest}
        />
      </InputArea>
      <IconArea>
        <Icon name={icon} size={20} color={color} />
      </IconArea>
    
  </Form>
)