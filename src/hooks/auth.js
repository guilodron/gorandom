import React, {createContext, useContext, useEffect, useState} from 'react';
import {firebase} from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';



const AuthContext = createContext({});

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function load() {
      const user = await AsyncStorage.getItem('gorandom:user');

      if(user) {
        setUser(JSON.parse(user));
      }
    }

    load()
  }, [])

  const SignUp = async ({email, password, name}) => {
    try{
      const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
      await res.user.updateProfile({
        displayName: name
      });
      await firebase.firestore().collection('users').doc(res.user.uid).set({email, name})
      console.log('Usuário cadastrado')
    }catch(e){
      console.log(e)
    }
  }

  const SignIn = async ({email, password}) => {
    try {
      const res = await firebase.auth().signInWithEmailAndPassword(email, password);
      await AsyncStorage.setItem('gorandom:user', JSON.stringify(res.user));
      setUser(res.user);
      console.log('Login Realizado');
    }catch(e) {
      console.log(e)
    }
  }

  const SignOut = async() => {
    try{
      await firebase.auth().signOut();
      await AsyncStorage.removeItem('gorandom:user');
      setUser(null);

    }catch(e) {
      console.log(e)
    }
  }

  return (
    <AuthContext.Provider value={{SignUp, SignIn, user: user, SignOut}}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export {AuthProvider, useAuth}