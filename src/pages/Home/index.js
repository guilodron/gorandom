import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import {useAuth} from '../../hooks/auth';
import { Entypo } from '@expo/vector-icons';
import {firebase} from '../../services/api';
import { 
  Container, 
  RandomizeContainer, 
  RandomizeButton, 
  RandomizeButtonText, 
  MyRestaurantListContainer,
  MyRestaurantTitle,
  RestaurantCard,
  RestaurantName,
  AllRestaurants,
  AllRestaurantsText
} from './styles';

import dice from '../../../assets/Dice.png';
import Button from '../../components/Button';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

const Home = ({navigation}) => {

  const {SignOut, user} = useAuth();
  const [restaurants, setRestaurants] = useState([]);

  const loadRestaurants = async () => {
    const res = await firebase.firestore().collection('restaurantes').where('user_id', '==', user.uid).get()
    const restaurantes = res.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    }).slice(0, 3);
    console.log('fffffffffffffffffffffff')
    console.log(restaurantes);
    setRestaurants(restaurantes);
  }

  useEffect(() => {
    loadRestaurants();
  }, [])

  return (
    <Container>
      <RandomizeContainer>
        <Image source={dice} />
        <RandomizeButton>
          <RandomizeButtonText>
            Sortear Restaurante
          </RandomizeButtonText>
        </RandomizeButton>
      </RandomizeContainer>
      <MyRestaurantListContainer>
        <MyRestaurantTitle>Meus Restaurantes</MyRestaurantTitle>
        {restaurants && restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id}>
            <Entypo name="location-pin" size={21} color="#1C5D99" />
            <RestaurantName>{restaurant.name}</RestaurantName>
            <Entypo name="plus" size={21} color="#1C5D99" />
          </RestaurantCard>
        ))}
        <AllRestaurants>
          <AllRestaurantsText>
            Ver todos
          </AllRestaurantsText>
        </AllRestaurants>
        <Button onPress={() => navigation.navigate('NewRestaurant')}>Novo Restaurante</Button>
      </MyRestaurantListContainer>
    </Container>
  )
}

export default Home;
