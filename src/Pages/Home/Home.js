import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  BackHandler,
  AsyncStorage,
} from 'react-native';
import {} from '../Login/styles';
export default function Home({route, navigation}) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }, []);
  const logOut = async () => {
    await AsyncStorage.setItem('token', '');
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
