import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';

import rocket from '../../assets/animate/rocket.json';

import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/MaterialIcons';

import {SafeAreaView, Header, Footer, Title, Text} from './style';

export default function Splash({navigation}) {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('Login');
  //   }, 4000);
  // }, []);

  return (
    <SafeAreaView>
      {/* <Lottie source={rocket} resizeMode="contain" autoPlay loop /> */}
      <Header>
        <Text>HEADER</Text>
      </Header>
      <Footer>
        <Title>Escolha uma opção á baixo.</Title>
        <Text>Já tem uma conta? Faça login.</Text>
        <Text>Cadastrar.</Text>
      </Footer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
});
