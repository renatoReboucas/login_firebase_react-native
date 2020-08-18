import React from 'react';
import {View, Text, Button} from 'react-native';

import firebase from '../../services/Firebase';
export default function Home({route, navigation}) {
  const logOut = async () => {
    navigation.navigate('Login');
  };
  return (
    <View>
      <Text>Você está logado {route.params.email}</Text>
      <Button title="LogOut" onPress={logOut} />
    </View>
  );
}
