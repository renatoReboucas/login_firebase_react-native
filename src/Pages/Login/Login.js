import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  BackHandler,
} from 'react-native';
// import * as Animatable from 'react-native-animatable';
import {
  SafeAreaView,
  Container,
  ImageContainer,
  InputContainer,
  KeyboardAvoidingView,
  TextInput,
  BtnLogin,
} from './styles';

// import firebase from '@react-native-firebase/app';
// import auth from '@react-native-firebase/auth';
import firebase from '../../services/Firebase';
export default function Login({navigation}) {
  const [email, setEmail] = useState([]);
  const [senha, setSenha] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }, []);

  const login = async () => {
    setLoading(true);
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
            onChange={(text) => {
              setEmail(text);
            }}
          />
          <TextInput
            placeholder="Senha"
            autoCorrect={false}
            secureTextEntry
            autoCapitalize="none"
            onChange={(text) => {
              setSenha(text);
            }}
          />
          <BtnLogin onPress={login}>
            <Text style={styles.TextInputLogin}>
              {loading ? 'Carregando...' : 'Entrar'}
            </Text>
          </BtnLogin>
          <TouchableOpacity
            style={styles.btnRegister}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.TextInputRegister}>Criar uma conta</Text>
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
