import React from 'react';
import {View, Text, Button} from 'react-native';

import firebase from '../../services/Firebase';
export default function Home({route, navigation}) {
  const logOut = () => {
    firebase
      .signOut()
      .then(() => navigation.navigate('Login'))
      .cath((error) => {
        console.log('DEU RUIM!', error);
      });
  };
  return (
    <View>
      <Text>Você está logado {route.params.email}</Text>
      <Button title="LogOut" onPress={logOut} />
    </View>
  );
}
