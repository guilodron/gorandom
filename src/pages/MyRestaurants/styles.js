import { FlatList, Text, View } from 'react-native'
import styled from 'styled-components'
import * as Animatable from 'react-native-animatable';

export const Container = styled(View)`
  flex: 1;
  background-color: white;
  padding: 0 12px;
`;

export const FilterContainer = styled(View)`
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 10px;
  align-items: center;
`;

export const FilterText = styled(Text)`
  color: #776E6E;
  font-size: 16px;
  font-weight: bold;
`;

export const MyRestaurantsList = styled(FlatList)`
  flex: 1;
`
export const RestaurantCard = styled(Animatable.View)`
  width: 100%;
  background-color: #F6F6F6;
  margin-bottom: 12px;
  padding: 12px 15px;
  border-radius: 5px;
`;

export const TitleAndCategory = styled(View)`
  flex-direction: row;
  align-items: center;
  /* padding: 10px; */
`;

export const Title = styled(Text)`
  font-size: 16px;
  margin-left: 5px;
  margin-right: auto;
`;

export const Category = styled(Text)`
  font-weight: 200;
  color: #776E6E;
  text-transform: capitalize;
`;

export const Address = styled(Text)`
  margin-top: 5px;
  margin-left: 5px;
  font-size: 16px;
  color: #776E6E;

`;