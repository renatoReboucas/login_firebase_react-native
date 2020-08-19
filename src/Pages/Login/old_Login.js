import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  BackHandler,
  AsyncStorage,
} from 'react-native';
// import * as Animatable from 'react-native-animatable';
import {
  Container,
  ImageContainer,
  InputContainer,
  KeyboardAvoidingView,
  TextInput,
  BtnLogin,
  Header,
} from './styles';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
// import firebase from '@react-native-firebase/app';
// import auth from '@react-native-firebase/auth';
import firebase from '../../services/Firebase';
export default function Login({navigation}) {
  const [email, setEmail] = useState([]);
  const [senha, setSenha] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    // BackHandler.addEventListener('hardwareBackPress', () => true);
    AsyncStorage.getItem('user').then((data) => {
      const dado = JSON.parse(data);
      setUser(dado);
      setEmail(user.email.toString());
      setSenha(user.senha.toString());
    });
  }, []);

  const login = async () => {
    setLoading(true);
    if (email == 0 && senha == 0) {
      alert('Entre com email e senha');
    } else {
      let data = {
        email,
        senha,
      };
      await AsyncStorage.setItem('user', JSON.stringify(data));

      // console.log(user);
      firebase
        .auth()
        .signInWithEmailAndPassword(email, senha)
        .then(() => {
          setLoading(false);
          navigation.navigate('Home', {email: email});
        })
        .catch((error) => {
          setLoading(false);
          setEmail('');
          setSenha('');
          alert('Erro ao realizar o login, Verifique E-mail e Senha!');
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
        <Header />
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
