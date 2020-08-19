import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  BackHandler,
  AsyncStorage,
  Platform,
  View,
} from 'react-native';
// import * as Animatable from 'react-native-animatable';
import {
  Container,
  KeyboardAvoidingView,
  TextInput,
  Header,
  TxtLogin,
  TxtFooter,
  IconView,
  BtnRegister,
  TxtRegister,
} from './styles';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

Icons.loadFont();
Feather.loadFont();
import firebase from '../../services/Firebase';
export default function Login({navigation}) {
  const [email, setEmail] = useState([]);
  const [senha, setSenha] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [data, setData] = React.useState({
    username: '',
    senha: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    email: '',
  });

  useEffect(() => {
    // BackHandler.addEventListener('hardwareBackPress', () => true);
    AsyncStorage.getItem('user').then((data) => {
      const dado = JSON.parse(data);

      setUser(dado);
      setEmail(user.email.toString());
      setSenha(user.senha.toString());
    });
    AsyncStorage.getItem('token').then((item) => {
      if (item.length !== null) {
        navigation.navigate('Home', {email: email});
      }
    });
  }, []);

  const setEmailVal = (text) => {
    // console.warn(data);
    if (text.trim().length >= 4) {
      setData({
        ...data,
        email: text,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: text,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const setSenhaVal = (text) => {
    if (text.trim().length >= 6) {
      setData({
        ...data,
        senha: text,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        senha: text,
        isValidPassword: false,
      });
    }
  };

  const updateSecure = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const login = async () => {
    setLoading(true);

    let dado = {
      email: data.email,
      senha: data.senha,
    };
    dado = dado.toString();
    await AsyncStorage.setItem('user', JSON.stringify(dado));

    // console.log(user);
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.senha)
      .then((res) => {
        setLoading(false);
        const response = JSON.stringify(res);
        const obj = JSON.parse(response);
        // console.log('obj', obj.user.apiKey);
        const token = obj.user.apiKey;
        AsyncStorage.setItem('token', JSON.stringify(token));
        navigation.navigate('Home', {email: email});
      })
      .catch((error) => {
        setLoading(false);
        setEmail('');
        setSenha('');
        alert('Erro ao realizar o login, Verifique E-mail e Senha!');
        console.log('DEU RUIM', error);
      });
  };

  return (
    <KeyboardAvoidingView>
      <Container>
        <Header>
          <Animatable.Text
            style={styles.txtHeader}
            animation="fadeInLeft"
            duration={2000}>
            Bem vindo!
          </Animatable.Text>
        </Header>
        <Animatable.View
          animation="fadeInUpBig"
          duration={2000}
          style={[styles.footer]}>
          <TxtFooter>Email </TxtFooter>
          <IconView>
            <Icons name="user-o" color="#05375a" size={20} />
            <TextInput
              margin={Platform.OS === 'ios' ? 0 : -12}
              placeholder="E-mail"
              placeholderTextColor="#666666"
              autoCorrect={false}
              keyBoardType="email-address"
              autoCapitalize="none"
              onChangeText={(text) => {
                setEmailVal(text);
              }}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </IconView>
          {data.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                O e-mail deve conter mais de 6 caracteres
              </Text>
            </Animatable.View>
          )}
          <TxtFooter>Senha </TxtFooter>
          <IconView>
            <Icons name="lock" color="#05375a" size={20} />
            <TextInput
              margin={Platform.OS === 'ios' ? 0 : -12}
              placeholder="Senha"
              placeholderTextColor="#666666"
              autoCorrect={false}
              secureTextEntry={data.secureTextEntry ? true : false}
              autoCapitalize="none"
              onChangeText={(text) => {
                setSenhaVal(text);
              }}
            />
            <TouchableOpacity onPress={updateSecure}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="#cecece" size={20} />
              ) : (
                <Feather name="eye" color="#cecece" size={20} />
              )}
            </TouchableOpacity>
          </IconView>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                A senha deve conter mais de 4 caracteres
              </Text>
            </Animatable.View>
          )}
          <View>
            <TouchableOpacity onPress={login}>
              <LinearGradient
                colors={['#C70039', '#D35478']}
                style={styles.btnLogin}>
                <TxtLogin>{loading ? 'Carregando...' : 'Entrar'}</TxtLogin>
              </LinearGradient>
            </TouchableOpacity>

            <BtnRegister onPress={() => navigation.navigate('Register')}>
              <TxtRegister>Cadaste-se</TxtRegister>
            </BtnRegister>
          </View>
        </Animatable.View>
      </Container>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  btnLogin: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 40,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  txtHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
