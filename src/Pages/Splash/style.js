import styled from 'styled-components';
// import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const SafeAreaView = styled.View`
  flex: 1;
  background: #353f49;
`;

export const Header = styled.View`
  flex: 2;
  justifyContent center;
  alignItems: center;
  margin-top: 50px;
`;

export const Footer = styled.View`
  flex: 1;
  justifyContent center;
  background: #FFF;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 50px 30px;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #222;
  font-weight: bold;
  margin-bottom: 5px;
`;
export const Text = styled.Text`
  margin-top: 5px;
  color: #05375a;
`;
