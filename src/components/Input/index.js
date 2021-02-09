import React from 'react'
import { useState } from 'react'
import { Container, InputText, Icon, Error } from './styles'

const Input = ({placeholder, style, icon, error,...props}) => {

  const [isFocus, setIsFocus] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  return (
    <Container isFocus={isFocus} isFilled={isFilled} hasError={!!error} style={style}>
      {error && !isFocus && <Error>{error}</Error>}
      <Icon hasError={!!error} isFocus={isFocus} isFilled={isFilled} name={icon} size={18} style={{marginRight: 10}} />
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