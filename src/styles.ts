import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background: #fff;
  justify-content: flex-end;
`;

export const ImageContainer = styled(Animated.View)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const LoginImage = styled.Image.attrs({
  source: require('../assets/login-background.jpg'),
})`
  flex: 1;
  height: null;
  width: null;
`;

export const ButtonArea = styled.View`
  height: ${height / 3}px;
`;

interface ButtonProps {
  color?: string;
}

export const SignInButton = styled(Animated.View).attrs({
  elevation: 2,
  shadowOpacity: 0.2,
  shadowColor: '#333',
  shadowOffset: {
    width: 2,
    height: 2,
  },
})<ButtonProps>`
  background: ${({ color }) => color || '#fff'};
  height: 70px;
  margin: 5px 20px;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-size: 20px;
  font-weight: bold;
  color: ${({ color }) => color || '#333'};
`;

export const Form = styled(Animated.View)`
  height: ${height / 3}px;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
`;

export const TextField = styled.TextInput`
  height: 44px;
  border-radius: 22px;
  border-width: ${StyleSheet.hairlineWidth}px;
  margin: 5px 20px;
  padding: 0 15px;
  border-color: rgba(0, 0, 0, 0.2);
`;
