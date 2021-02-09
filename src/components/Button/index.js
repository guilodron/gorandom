import React from 'react'
import {Container, ButtonText} from './styles'

const Button = ({children, ...props}) => {
  return (
    <Container {...props} >
      <ButtonText>
        {children}
      </ButtonText>
    </Container>
  );
}

export default Button;