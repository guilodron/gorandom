import React, {useEffect} from 'react'
import { SafeAreaView, Text, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

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

  const schema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatória'),
  })

  const {register, setValue, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled style={{flex:1}}>

      <ScrollView style={{flex: 1, backgroundColor: '#ffff'}}>
        <WaveBG source={loginbg} />
        <Container>
          <Logo source={logo} />
          <Title>Login</Title>
          <Input 
            icon="user" 
            style={{marginBottom: 10}} 
            placeholder="Email"
            onChangeText={text => {setValue('email', text)}}
            error={errors.email?.message}
          ></Input>
          <Input 
            secureTextEntry={true} 
            icon="lock" 
            placeholder="Senha"
            onChangeText={text => {setValue('password', text)}}
            error={errors.password?.message}
          ></Input>
          <Button onPress={handleSubmit(onSubmit)}>Entrar</Button>
          <ForgotPassword>
            <ForgotPasswordText>
              Esqueceu a senha?
            </ForgotPasswordText>
          </ForgotPassword>
          <RegisterContainer onPress={() => navigation.navigate('SignUp')}>
            <RegisterText>Cadastrar</RegisterText>
            <Entypo name="log-out" size={16} color="#FB6E3B" />
          </RegisterContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LoginPage;