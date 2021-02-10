import React, {createContext, useContext, useEffect, useState} from 'react';
import {useAuth} from '../hooks/auth';
import {firebase} from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';

const RestaurantContext = createContext({});

const RestaurantProvider = ({children}) => {

  const {user} = useAuth();

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function load(){
      if(user) {
        const res = await firebase.firestore().collection('restaurantes').where('user_id', '==', user.uid).orderBy('created_at', 'desc').get()
        const restaurantes = res.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        });
        setRestaurants(restaurantes);
        console.log('kjkj')
      } else {
        setRestaurants([]);
      }
    }
    load()
  }, [user])

  const addRestaurant = async (data) => {
    try{
      const res = await firebase.firestore().collection('restaurantes')
        .add({
          ...data, 
        });
      const restaurante = await (await res.get()).data()
      setRestaurants([{...restaurante, id: res.id}, ...restaurants]);
    }catch(e){
      console.log(e)
    }
  }

  return (
    <RestaurantContext.Provider value={{restaurants, addRestaurant}}>
      {children}
    </RestaurantContext.Provider>
  );
}

const useRestaurants = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error('useAuth must be used within an RestaurantProvider');
  }
  return context;
}

export {RestaurantProvider, useRestaurants}
