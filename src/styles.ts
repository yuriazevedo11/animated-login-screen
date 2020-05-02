import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background: #fff;
  justify-content: flex-end;
`;

export const ImageContainer = styled.View`
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

export const SignInButton = styled(RectButton)<ButtonProps>`
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
