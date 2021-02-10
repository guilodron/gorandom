import styled from 'styled-components';
import {View, Text, Image, ScrollView} from 'react-native';

export const Container = styled(ScrollView)`
  flex: 1;
  background-color: white;
  padding: 32px 38px;

`;

export const NewRestaurantImage = styled(Image)`

`;

export const NewRestaurantText = styled(Text)`
  color: #FB6E3B;
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const Label = styled(Text)`
  align-self: flex-start;
  color: #Fb6e3b;
  font-size: 16px;
`;