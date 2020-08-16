import React from 'react';
import {View, Text, Button} from 'react-native';

import {SafeAreaView, Container} from './styles';

export default function Login({navigation}) {
  return (
    <SafeAreaView>
      <Container>
        <Text>Login</Text>
        <Button
          title="Registrar"
          onPress={() => navigation.navigate('Register')}
        />
      </Container>
    </SafeAreaView>
  );
}
