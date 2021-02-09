import React, { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import {Container, SignupImage, SignupText} from './styles';

import SignupBanner from '../../../assets/SignupImage.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { KeyboardAvoidingView, Platform, StatusBar, Text } from 'react-native';

const SignupPage = () => {

  const schema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatória'),
    passwordConfirm: yup.string().required('Confirmação de senha é obrigatória')
  })

  const {register, setValue, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    register('name');
    register('email');
    register('password');
    register('passwordConfirm');
  }, [register])

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled style={{flex:1}}>
        <Container style={{flex: 1}} contentContainerStyle={{alignItems: 'center'}}>
          <SignupImage source={SignupBanner} />
          <SignupText>Criar Conta</SignupText>
          <Input 
            icon="user" 
            style={{marginBottom: 10}} 
            placeholder="Nome"
            onChangeText={text => {setValue('name', text)}}
            error={errors.name?.message}
          ></Input>
          <Input 
            icon="mail" 
            style={{marginBottom: 10}} 
            placeholder="Email"
            error={errors.email?.message}
            onChangeText={text => {setValue('email', text)}}
          ></Input>
          <Input 
            icon="lock" 
            style={{marginBottom: 10}} 
            placeholder="Senha"
            secureTextEntry={true}
            error={errors.password?.message}
            onChangeText={text => {setValue('password', text)}}

          ></Input>
          <Input 
            icon="lock" 
            style={{marginBottom: 10}} 
            placeholder="Confirmar Senha"
            secureTextEntry={true}
            error={errors.passwordConfirm?.message}
            onChangeText={text => {setValue('passwordConfirm', text)}}

          ></Input>
          <Button onPress={handleSubmit(onSubmit)}>Cadastrar</Button>

        </Container>

    </KeyboardAvoidingView>
  );
}

export default SignupPage;