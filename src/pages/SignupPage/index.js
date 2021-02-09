import React from 'react';
import {Container, SignupImage, SignupText} from './styles';
import {useHeaderHeight} from '@react-navigation/stack'

import SignupBanner from '../../../assets/SignupImage.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';

const SignupPage = () => {

  const headerHeight = useHeaderHeight()

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled style={{flex:1}}>
        <Container style={{flex: 1}} contentContainerStyle={{alignItems: 'center'}}>
          <SignupImage source={SignupBanner} />
          <SignupText>Criar Conta</SignupText>
          <Input icon="user" style={{marginBottom: 10}} placeholder="Nome"></Input>
          <Input icon="user" style={{marginBottom: 10}} placeholder="Email"></Input>
          <Input icon="user" style={{marginBottom: 10}} placeholder="Senha"></Input>
          <Input icon="user" style={{marginBottom: 10}} placeholder="Confirmar Senha"></Input>
          <Button>Cadastrar</Button>

        </Container>

    </KeyboardAvoidingView>
  );
}

export default SignupPage;