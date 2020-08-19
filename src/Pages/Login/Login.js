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
  Footer,
  TxtHeader,
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
      <Container>
        <Header>
          <TxtHeader>Bem vindo!</TxtHeader>
        </Header>
        <Footer />
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
