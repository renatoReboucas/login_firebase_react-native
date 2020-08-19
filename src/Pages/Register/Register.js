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
} from '../Login/styles';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

Icons.loadFont();
Feather.loadFont();
import firebase from '../../services/Firebase';
export default function Register({navigation}) {
  const [email, setEmail] = useState([]);
  const [senha, setSenha] = useState([]);
  const [confSenha, setConfSenha] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [data, setData] = React.useState({
    email: '',
    senha: '',
    confSenha: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    isValidConfPassword: true,
  });

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
  const confSenhaIsValid = (text) => {
    if (text.trim().length == data.senha.length) {
      setData({
        ...data,
        confSenha: text,
        isValidConfPassword: true,
      });
    } else {
      setData({
        ...data,
        confSenha: text,
        isValidConfPassword: false,
      });
    }
  };

  const updateSecure = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const Register = async () => {
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
      .createUserWithEmailAndPassword(data.email, data.senha)
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
  };

  return (
    <KeyboardAvoidingView>
      <Container>
        <Header>
          <Animatable.Text
            style={styles.txtHeader}
            animation="fadeInLeft"
            duration={2000}>
            Informe seus dados para criar um usuario.
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
                O e-mail deve conter mais de 4 caracteres
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
                A senha deve conter mais de 6 caracteres
              </Text>
            </Animatable.View>
          )}
          <TxtFooter>Confirmar Senha </TxtFooter>
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
                confSenhaIsValid(text);
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
          {data.isValidConfPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>As senhas devem ser iguais!</Text>
            </Animatable.View>
          )}
          <View>
            <TouchableOpacity onPress={Register}>
              <LinearGradient
                colors={['#C70039', '#D35478']}
                style={styles.btnLogin}>
                <TxtLogin>{loading ? 'Carregando...' : 'Cadastrar'}</TxtLogin>
              </LinearGradient>
            </TouchableOpacity>

            <BtnRegister onPress={() => navigation.goBack()}>
              <TxtRegister>Já possuo cadastro</TxtRegister>
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
