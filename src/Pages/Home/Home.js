import React from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView} from 'react-native';

import firebase from '../../services/Firebase';
export default function Home({route, navigation}) {
  const logOut = async () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView>
      <Text>Você está logado {route.params.email}</Text>
      <Button title="LogOut" onPress={logOut} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
