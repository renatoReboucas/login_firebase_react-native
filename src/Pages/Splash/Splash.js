import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
// import Lottie from 'lottie-react-native';

// import rocket from '../../assets/animate/rocket-launch.json';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
// import Icons from 'react-native-vector-icons/MaterialIcons';

import {
  SafeAreaView,
  Header,
  Footer,
  Title,
  TextLogin,
  BtnLogin,
  TextRegister,
} from './style';

export default function Splash({navigation}) {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('Login');
  //   }, 4000);
  // }, []);

  return (
    <SafeAreaView>
      <Header>
        {/* <Text>HEADER</Text> */}
        <Animatable.Image
          animation="bounceIn"
          duration="1500"
          style={styles.logo}
          source={require('../../assets/images/space-ship.png')}
        />
      </Header>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Title>Escolha uma opção abaixo.</Title>

        <BtnLogin>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <LinearGradient
              colors={['#C70039', '#D35478']}
              style={styles.login}>
              <TextLogin>Faça login</TextLogin>
            </LinearGradient>
          </TouchableOpacity>
        </BtnLogin>
      </Animatable.View>
    </SafeAreaView>
  );
}
const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;
const styles = StyleSheet.create({
  logo: {
    // width: height_logo,
    // height: height_logo,
    marginTop: '20%',
  },
  login: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
});
