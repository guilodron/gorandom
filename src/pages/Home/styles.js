import { TouchableOpacity, View, Text } from 'react-native'
import styled from 'styled-components'
import * as Animatable from 'react-native-animatable';

export const Container = styled(View)`
  flex: 1;
  background-color: white;
`;

export const RandomizeContainer = styled(View)`
  width: 100%;
  height: 225px;
  background-color: #FB6E3B;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  align-items: center;
  padding: 0 80px;
`;

export const RandomizeButton = styled(TouchableOpacity)`
  border-radius: 5px;
  width: 100%;
  border: solid 1px white;
  height: 48px;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

export const RandomizeButtonText = styled(Text)`
  color: white;
  font-size: 18px;
`

export const MyRestaurantListContainer = styled(View)`
  padding: 0 12px;
  margin-top: 24px;
`;

export const MyRestaurantTitle = styled(Text)`
  color: #FB6E3B;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const RestaurantCard = styled(Animatable.View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: #F6F6F6;
  height: 30px;
  padding: 0 10px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const RestaurantName = styled(Text)`
  font-size: 16px;
  color: #868686;
  margin-left: 10px;
  margin-right: auto;
`;

export const AllRestaurants = styled(TouchableOpacity)`
  align-self: flex-end;
`;

export const AllRestaurantsText = styled(Text)`
  color: #1C5D99;
  font-size: 16px;
  margin-bottom: 22px;
`;