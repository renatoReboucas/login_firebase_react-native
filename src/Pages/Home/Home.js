import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  BackHandler,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import {
  SafeAreaView,
  TxtHeader,
  Header,
  Footer,
  TxtLogin,
} from '../Login/styles';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
export default function Home({route, navigation}) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log('email', route.params.email);
    BackHandler.addEventListener('hardwareBackPress', () => true);
    const saveEmail = async () => {
      await AsyncStorage.setItem(
        'userEmail',
        JSON.stringify(route.params.email),
      );
      AsyncStorage.getItem('userEmail').then((item) => setEmail(item));
    };
    saveEmail();
    console.log(email);
  }, []);
  const logOut = async () => {
    setLoading(true);
    await AsyncStorage.setItem('token', '');
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView>
      <Header>
        <Animatable.Text
          style={styles.txtHeader}
          animation="fadeInLeft"
          duration={2000}>
          Você está logado {route.params.email}
        </Animatable.Text>
      </Header>
      <Animatable.View
        animation="fadeInUpBig"
        duration={2000}
        style={[styles.footer]}>
        <TouchableOpacity onPress={logOut}>
          <LinearGradient
            colors={['#C70039', '#D35478']}
            style={styles.btnLogout}>
            <TxtLogin>{loading ? 'Carregando...' : 'Sair'}</TxtLogin>
          </LinearGradient>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  txtHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  footer: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  btnLogout: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 40,
  },
});
