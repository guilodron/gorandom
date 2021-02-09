import React from 'react'
import { useState } from 'react'
import { Text } from 'react-native'
import { Container, InputText, Icon } from './styles'

const Input = ({placeholder, style, icon, ...props}) => {

  const [isFocus, setIsFocus] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  return (
    <Container isFocus={isFocus} isFilled={isFilled} style={style}>
      <Icon isFocus={isFocus} isFilled={isFilled} name={icon} size={18} style={{marginRight: 10}} />
      <InputText 
        placeholder={placeholder} 
        {...props}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      ></InputText>
    </Container>
  )

}

export default Input;