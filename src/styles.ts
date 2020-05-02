import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { Image } from 'react-native-svg';

const { height, width } = Dimensions.get('window');

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

interface LoginImageProps {
  increasedHeight: number;
}

export const LoginImage = styled(Image).attrs(
  ({ increasedHeight }: LoginImageProps) => ({
    href: require('../assets/login-background.jpg'),
    preserveAspectRatio: 'xMidyMid slice',
    height: height + increasedHeight,
    width,
  })
)<LoginImageProps>``;

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
  height: 62px;
  margin: 5px 20px;
  border-radius: 31px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled(Animated.Text)<ButtonProps>`
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
  background: #fff;
`;

export const TextField = styled.TextInput`
  height: 44px;
  border-radius: 22px;
  border-width: ${StyleSheet.hairlineWidth}px;
  margin: 5px 20px;
  padding: 0 15px;
  border-color: rgba(0, 0, 0, 0.2);
`;

const BUTTON_SIZE = 36;

export const CloseButton = styled(Animated.View).attrs({
  elevation: 2,
  shadowOpacity: 0.2,
  shadowColor: '#333',
  shadowOffset: {
    width: 2,
    height: 2,
  },
})<ButtonProps>`
  height: ${BUTTON_SIZE}px;
  width: ${BUTTON_SIZE}px;
  background: #fff;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${-BUTTON_SIZE / 2}px;
  left: ${width / 2 - BUTTON_SIZE / 2}px;
`;
