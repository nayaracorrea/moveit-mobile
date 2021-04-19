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
  icon, placeholder, color, click, colorIconArea, ...rest
}) => (
  <Form>
      <InputArea>
        <Input 
          placeholder={placeholder}
          {...rest}
        />
      </InputArea>
      <IconArea color={colorIconArea} onPress={click}>
        <Icon name={icon} size={20} color={color} />
      </IconArea>
    
  </Form>
)