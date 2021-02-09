import { TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

import styled from 'styled-components'

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: #F0F0F0;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 0 10px;
  border: 1px solid transparent;
  border-color: ${props => props.isFocus ? '#FB6E3B' : 'transparent'};
`;

export const InputText = styled(TextInput) `
  height: 100%;
  width: 100%;
`;

export const Icon = styled(Feather)`
  font-size: 18px;
  color: white;
  color: ${props => props.isFocus ? '#FB6E3B' : '#A9A6A6'};
`;