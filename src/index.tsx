import React from 'react';

import {
  Container,
  ImageContainer,
  LoginImage,
  ButtonArea,
  SignInButton,
  ButtonText,
} from './styles';

const Login: React.FC = () => (
  <Container>
    <ImageContainer>
      <LoginImage />
    </ImageContainer>

    <ButtonArea>
      <SignInButton onPress={() => {}}>
        <ButtonText>SIGN IN</ButtonText>
      </SignInButton>
      <SignInButton onPress={() => {}} color="#2e71dc">
        <ButtonText color="#fff">SIGN IN WITH FACEBOOK</ButtonText>
      </SignInButton>
    </ButtonArea>
  </Container>
);

export default Login;
