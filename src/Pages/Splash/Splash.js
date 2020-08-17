import React, {useState, useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from './style';
import Lottie from 'lottie-react-native';

import rocket from '../../assets/animate/rocket.json';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 5000);
  }, []);

  return (
    <SafeAreaView>
      <Lottie source={rocket} resizeMode="contain" autoSize autoPlay loop />
    </SafeAreaView>
  );
}
