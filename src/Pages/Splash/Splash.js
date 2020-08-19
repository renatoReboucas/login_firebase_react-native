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
import Icons from 'react-native-vector-icons/MaterialIcons';
Icons.loadFont();
import {SafeAreaView, Header, Title, TextLogin, BtnLogin} from './style';

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
          animation="fadeInDownBig"
          duration="2000"
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
              <TextLogin style={styles.icon}>Faça login</TextLogin>
              <Icons
                style={styles.icon}
                name="navigate-next"
                color="#fff"
                size={20}
              />
            </LinearGradient>
          </TouchableOpacity>
        </BtnLogin>
      </Animatable.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
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
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
