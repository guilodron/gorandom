import React from 'react'
import { SafeAreaView, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';

import Input from '../../components/Input';

import loginbg from '../../../assets/loginbg.png';
import logo from '../../../assets/logo.png';
import { 
  WaveBG, 
  Container, 
  Logo, 
  Title, 
  ForgotPassword, 
  ForgotPasswordText, 
  RegisterContainer, 
  RegisterText 
} from './styles';
import Button from '../../components/Button';

const LoginPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <WaveBG source={loginbg} />
      <Container>
        <Logo source={logo} />
        <Title>Login</Title>
        <Input icon="user" style={{marginBottom: 10}} placeholder="Email"></Input>
        <Input secureTextEntry={true} icon="lock" placeholder="Senha"></Input>
        <Button>Entrar</Button>
        <ForgotPassword>
          <ForgotPasswordText>
            Esqueceu a senha?
          </ForgotPasswordText>
        </ForgotPassword>
        <RegisterContainer>
          <RegisterText>Cadastrar</RegisterText>
          <Entypo name="log-out" size={16} color="#FB6E3B" />
        </RegisterContainer>
      </Container>
    </SafeAreaView>
  )
}

export default LoginPage;