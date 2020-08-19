import styled from 'styled-components';
// import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const SafeAreaView = styled.View`
  flex: 1;
  background: #353f49;
`;
export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;

  background: #353f49;
`;

export const ImageContainer = styled.View`
  margin-top: 100px;
  justify-content: center;
  margin-bottom: 110px;
`;

export const Container = styled.View`
  flex: 1;
`;

export const InputContainer = styled.View`
  width: 90%;
  align-items: center
  justify-content: center;
  
`;
export const TextInput = styled.TextInput`
  background: #fff;
  width: 90%;
  margin-bottom: 15px;
  color: #222;
  font-size: 17px;
  border-radius: 7px;
  border-width: 1px;
  border-color: #000;
  height: 50px;
  padding-left: 13px;
`;

export const BtnLogin = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  color: #FFF;
  margin-top: 10px;
  background: #35aaff;
  border-radius: 7px;
  align-items: center
  justify-content: center;
`;
export const txtLogin = styled.Text`
  color: #fff;
`;

export const Header = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-horizontal: 20px;
  padding-bottom: 50px;
`;

export const Footer = styled.View`
  flex: 3;
  background: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 50px 30px;
`;
export const TxtHeader = styled.Text`
  font-size: 30px;
  color: #fff;
  font-weight: bold;
`;
