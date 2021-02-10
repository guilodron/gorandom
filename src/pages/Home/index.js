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
import { useRestaurants } from '../../hooks/restaurants';

const Home = ({navigation}) => {

  const {SignOut, user} = useAuth();
  const [restaurantes, setRestaurantes] = useState([]);

  const {restaurants} = useRestaurants();

  useEffect(() => {
    setRestaurantes(restaurants.slice(0, 3));
  }, [restaurants])

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
        {restaurantes && restaurantes.map((restaurant, index) => (
          <RestaurantCard key={restaurant.id} animation='fadeInUp' delay={300 * index} duration={500} >
            <Entypo name="location-pin" size={21} color="#1C5D99" />
            <RestaurantName>{restaurant.name}</RestaurantName>
            <Entypo name="plus" size={21} color="#1C5D99" />
          </RestaurantCard>
        ))}
        <AllRestaurants onPress={() => navigation.navigate('MyRestaurants')}>
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
