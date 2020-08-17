import React, {useState, useEffect} from 'react';
import {
  Text,
  AsyncStorage,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import {
  Container,
  ImageContainer,
  InputContainer,
  KeyboardAvoidingView,
  TextInput,
  BtnLogin,
} from '../Login/styles';

export default function Register({navigation}) {
  const [email, setEmail] = useState([]);
  const [senha, setSenha] = useState([]);
  const [nome, setNome] = useState([]);
  const [loading, setLoading] = useState(false);

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
            keyBoardType="email-address"
            autoCaptaliza="none"
            onChange={(text) => {
              setEmail(text);
            }}
          />
          <TextInput
            placeholder="Nome"
            autoCorrect={false}
            autoCaptaliza="none"
            onChange={(text) => {
              setNome(text);
            }}
          />
          <TextInput
            placeholder="Senha"
            autoCorrect={false}
            secureTextEntry
            autoCaptaliza="none"
            onChange={(text) => {
              setSenha(text);
            }}
          />
          <BtnLogin onPress={() => navigation.navigate('Register')}>
            <Text style={styles.TextInputLogin}>
              {loading ? 'Carregando...' : 'Criar conta'}
            </Text>
          </BtnLogin>
          <TouchableOpacity
            style={styles.btnRegister}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.TextInputRegister}>
              Já tem uma conta? Então faça login
            </Text>
          </TouchableOpacity>
        </InputContainer>
      </Container>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  btnRegister: {
    marginTop: 20,
  },
  TextInputLogin: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  TextInputRegister: {
    color: '#FFF',
  },
  input: {
    width: '90%',
  },
});
