import React from 'react';
import { Dimensions } from 'react-native';
import Animated, {
  useCode,
  cond,
  eq,
  set,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { State, TapGestureHandler } from 'react-native-gesture-handler';
import { onGestureEvent, withTimingTransition } from 'react-native-redash';

import {
  Container,
  ImageContainer,
  LoginImage,
  ButtonArea,
  SignInButton,
  ButtonText,
} from './styles';

const { Value } = Animated;
const { height } = Dimensions.get('window');

const Login: React.FC = () => {
  const baseValue = new Value(1);
  const gestureEvent = new Value(State.UNDETERMINED);

  const buttonOpacity = withTimingTransition(baseValue);
  const gestureHanlder = onGestureEvent({ state: gestureEvent });

  const buttonTranslateY = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [100, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const bgTranslateY = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [-height / 3, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  useCode(() => cond(eq(gestureEvent, State.END), set(baseValue, 0)), []);

  return (
    <Container>
      <ImageContainer
        style={{
          transform: [{ translateY: bgTranslateY }],
        }}
      >
        <LoginImage />
      </ImageContainer>

      <ButtonArea>
        <TapGestureHandler {...gestureHanlder}>
          <SignInButton
            style={{
              opacity: buttonOpacity,
              transform: [{ translateY: buttonTranslateY }],
            }}
          >
            <ButtonText>SIGN IN</ButtonText>
          </SignInButton>
        </TapGestureHandler>

        <SignInButton
          style={{
            opacity: buttonOpacity,
            transform: [{ translateY: buttonTranslateY }],
          }}
          color="#2e71dc"
        >
          <ButtonText color="#fff">SIGN IN WITH FACEBOOK</ButtonText>
        </SignInButton>
      </ButtonArea>
    </Container>
  );
};

export default Login;
