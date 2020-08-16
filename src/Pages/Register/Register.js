import React from 'react';
import {View, Text, Platform, StyleSheet, Button} from 'react-native';

export default function Register({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <Button title="Login" onPress={() => navigation.goBack()} />
    </View>
  );
}

const margin = Platform.OS === 'ios' ? 30 : 0;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    marginTop: margin,
  },
});
