import {TouchableOpacity, Text} from 'react-native'
import styled from 'styled-components'

export const Container = styled(TouchableOpacity)`
  height: 45px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #FB6E3B;
  border-radius: 5px;
  margin-top: 10px;
`;

export const ButtonText = styled(Text)`
  font-size: 21px;
  font-weight: bold;
  color: white;
`;