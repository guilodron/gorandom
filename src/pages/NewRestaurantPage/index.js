import React,{useEffect} from 'react'
import { KeyboardAvoidingView } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import NewRestaurantBanner from '../../../assets/NewRestaurantImage.png';

import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {Picker} from '@react-native-picker/picker';

import {firebase} from '../../services/api'

import {
  Container,
  NewRestaurantImage,
  NewRestaurantText,
  Label
} from './styles'
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

const NewRestaurantPage = ({navigation}) => {

  const schema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    address: yup.string().required('Endereço obrigatório'),
  })

  const {register, setValue, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema)
  });

  const [categoria, setCategoria] = useState('pizzaria')
  const [jaVisitou, setJaVisitou] = useState(1)

  useEffect(() => {
    register('name');
    register('address');
  }, [register])

  const {user} = useAuth();


  const onSubmit = async (data) => {
    try{
      await firebase.firestore().collection('restaurantes').add({...data, ja_visitou: jaVisitou, categoria, user_id: user.uid})
      console.log('Restaurante cadastrado!!')
      navigation.goBack();
    }catch(e){
      console.log(e)
    }
    console.log(data)
    console.log(user.uid)
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled style={{flex:1}}>
        <Container style={{flex: 1}} contentContainerStyle={{alignItems: 'center'}}>
          <NewRestaurantImage source={NewRestaurantBanner} />
          <NewRestaurantText>Criar Conta</NewRestaurantText>
          <Input 
            icon="map-pin" 
            style={{marginBottom: 10}} 
            placeholder="Nome"
            onChangeText={text => {setValue('name', text)}}
            error={errors.name?.message}
          ></Input>
          <Input 
            icon="map" 
            style={{marginBottom: 10}} 
            placeholder="Endereço"
            error={errors.email?.message}
            onChangeText={text => {setValue('address', text)}}
          ></Input>
          <Label>Categoria</Label>
          <Picker      
            selectedValue={categoria}      
            style={{height: 50, width: '100%'}}
            onValueChange={(itemValue) => {
              setCategoria(itemValue)
              console.log(itemValue)
            }}
            itemStyle={{backgroundColor: 'black'}}
          >
            <Picker.Item label="Pizzaria" value="pizzaria" />
            <Picker.Item label="Árabe" value="arabe" />
            <Picker.Item label="Japonesa" value="japonesa" />
            <Picker.Item label="Sobremesas" value="sobremesa" />
            <Picker.Item label="Cafeteria" value="cafe" />
          </Picker>
          <Label>Já vistou?</Label>
          <Picker  
            selectedValue={jaVisitou}   
            style={{height: 50, width: '100%'}}
            onValueChange={(itemValue) => {
              setJaVisitou(itemValue)
              console.log(itemValue)
            }}
          >
            <Picker.Item label="Sim" value={1} />
            <Picker.Item label="Não" value={0} />
          </Picker>
          <Button onPress={handleSubmit(onSubmit)}>Cadastrar</Button>

        </Container>

    </KeyboardAvoidingView>
  )
}

export default NewRestaurantPage;