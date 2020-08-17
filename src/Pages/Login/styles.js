import styled from 'styled-components';
// import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: #353f49;
`;
export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #353f49;
`;

export const ImageContainer = styled.View`
  margin-top: 100px;
  justify-content: center;
`;

export const Container = styled.View`
  flex: 1;
  width: 90%;
  align-items: center;
  justify-content: center;
  padding-bottom: 50%;
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
