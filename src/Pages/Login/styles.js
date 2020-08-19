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
  flex: 1;
  padding-left: 10px;
  margin-top: ${(props) => props.margin};
  color: #05375a;
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
export const TxtLogin = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18;
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
export const TxtFooter = styled.Text`
  font-size: 18px;
  color: #05375a;
`;

export const IconView = styled.View`
  flex-direction: row;
  margin-top: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

export const BtnRegister = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border-color: #c70039;
  border-width: 1px;
  margin-top: 15px;
`;

export const TxtRegister = styled.Text`
  font-size: 18px;
  color: #c70039;
  font-weight: bold;
`;
