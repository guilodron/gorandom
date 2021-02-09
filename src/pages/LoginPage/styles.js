import styled from 'styled-components'
import {Image, View, Text, TouchableOpacity} from 'react-native'

export const Container = styled(View) `
  flex: 1;
  position: relative;
  align-items: center;
  padding: 58px 38px;
`;

export const WaveBG = styled(Image) `
  width: 100%;
  position: absolute;
`;

export const Logo = styled(Image) `
`;

export const Title = styled(Text) `
  color: white;
  font-weight: bold;
  font-size: 24px;
  margin-top: 26px;
  margin-bottom: 14px;
`;

export const ForgotPassword = styled(TouchableOpacity)`
  margin-top: 20px;
`;

export const ForgotPasswordText = styled(Text)`
  color: #FB6E3B;
  font-size: 16px;
`;

export const RegisterContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const RegisterText = styled(Text)`
  color: #FB6E3B;
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
`;
