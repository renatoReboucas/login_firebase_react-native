import styled from 'styled-components';
// import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const SafeAreaView = styled.View`
  flex: 1;
  background: #353f49;
`;

export const Header = styled.View`
  flex: 2;
  justifyContent center;
  align-items: center;

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
export const TextLogin = styled.Text`
  margin-top: 5px;
  color: #fff;
  font-weight: bold;
  justifyContent center;
  align-items: center;
`;
export const TextRegister = styled.Text`
  margin-top: 5px;
  color: #222;
  font-weight: bold;
  justifyContent center;
  align-items: center;
`;
export const BtnLogin = styled.View`
  align-items: flex-end;
  margin-top: 30px;
`;
