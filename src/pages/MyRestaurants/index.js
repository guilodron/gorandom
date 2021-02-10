import React from 'react'

import {Picker} from '@react-native-picker/picker';

import { 
  Container,
  FilterText,
  FilterContainer,
  MyRestaurantsList,
  RestaurantCard,
  TitleAndCategory,
  Title,
  Category,
  Address
} from './styles'
import { useState } from 'react';
import { useRestaurants } from '../../hooks/restaurants';
import { Entypo } from '@expo/vector-icons';

const MyRestaurants = () => {

  const [filter, setFilter] = useState('asc');

  const {restaurants} = useRestaurants();

  const renderItem = (restaurant) => {
    console.log(restaurant)
    return (
      <RestaurantCard  
        animation="fadeInUp"
        duration={500}
        delay={200 * restaurant.index}
      >
        <TitleAndCategory>
          <Entypo name="location-pin" size={21} color="#FB6E3B" />
          <Title>{restaurant.item.name}</Title>
          <Category>{restaurant.item.categoria}</Category>
        </TitleAndCategory>
        <Address>Endereço: {restaurant.item.address}</Address>
      </RestaurantCard>
    );
  }

  return (
    <Container>
      <FilterContainer>
        <FilterText>Filtros:</FilterText>
        <Picker
          selectedValue={filter}      
          style={{height: 30, width: 160}}
          onValueChange={(itemValue) => {
            setFilter(itemValue)
            console.log(itemValue)
          }}
        >
          <Picker.Item label="Mais recente" value="asc" />
          <Picker.Item label="Mais antigo" value="desc" />
        </Picker>
      </FilterContainer>
      <MyRestaurantsList 
        data={restaurants}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </Container>
  )
}

export default MyRestaurants
