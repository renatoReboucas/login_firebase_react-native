import React from 'react';
import {View, Text} from 'react-native';

export default function Home({route}) {
  return (
    <View>
      <Text>Você está logado {route.params.name}</Text>
    </View>
  );
}
