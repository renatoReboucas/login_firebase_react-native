import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import {
  Container,
  ImageContainer,
  InputContainer,
  KeyboardAvoidingView,
  TextInput,
  BtnLogin,
} from '../Login/styles';

import firebase from '../../services/Firebase';

function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const createUser = () => {
    setLoading(true);

    // console.log('entrou firebase', `${email} ${senha}`);
    if (email == 0 && senha == 0) {
      alert('Entre com email e senha');
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha)
        .then(() => {
          setLoading(false);
          navigation.navigate('Login');
        })
        .catch((error) => {
          setLoading(false);
          if (error.code === 'auth/email-already-in-use') {
            alert('O E-mail informado está em uso');
          }

          if (error.code === 'auth/invalid-email') {
            alert('E-mail invalido');
          }
          console.log('DEU RUIM', error);
        });
    }
  };

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
            autoCapitalize="none"
            onChangeText={(text) => {
              setEmail(text);
            }}
          />

          <TextInput
            placeholder="Senha"
            autoCorrect={false}
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(text) => {
              setSenha(text);
            }}
          />
          <BtnLogin onPress={createUser}>
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

export default Register;
