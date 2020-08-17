import React, {useState, useEffect} from 'react';
import {
  Text,
  AsyncStorage,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
  SafeAreaView,
  Container,
  ImageContainer,
  InputContainer,
  KeyboardAvoidingView,
  TextInput,
  BtnLogin,
} from './styles';

export default function Login({navigation}) {
  const [email, setEmail] = useState([]);
  const [senha, setSenha] = useState([]);

  return (
    <KeyboardAvoidingView>
      <ImageContainer>
        <Image source={require('../../assets/images/space-ship.png')} />
      </ImageContainer>
      <Container>
        <InputContainer>
          <TextInput
            placeholder="E-mail"
            autoCorrect={false}
            onChange={(text) => {
              setEmail(text);
            }}
          />
          <TextInput
            placeholder="Senha"
            autoCorrect={false}
            onChange={(text) => {
              setSenha(text);
            }}
          />
          <BtnLogin onPress={() => navigation.navigate('Register')}>
            <Text style={styles.TextInput}>Logar</Text>
          </BtnLogin>
          <TouchableOpacity
            style={styles.btnRegister}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.TextInput}>Criar conta</Text>
          </TouchableOpacity>
        </InputContainer>
      </Container>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  btnRegister: {
    marginTop: 10,
  },
  TextInput: {
    color: '#FFF',
  },
  input: {
    width: '90%',
  },
});
