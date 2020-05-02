import React, { useRef } from 'react';
import { Dimensions, TextInput } from 'react-native';
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
  Form,
  TextField,
} from './styles';

const { Value } = Animated;
const { height } = Dimensions.get('window');

const Login: React.FC = () => {
  const baseValue = new Value(1);
  const gestureEvent = new Value(State.UNDETERMINED);
  const passwordRef = useRef<TextInput>(null);

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

  const formIndex = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [1, -1],
    extrapolate: Extrapolate.CLAMP,
  });

  const formOpacity = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const formY = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [0, 100],
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

      <Form
        style={{
          zIndex: formIndex,
          opacity: formOpacity,
          transform: [{ translateY: formY }],
        }}
      >
        <TextField
          keyboardType="email-address"
          placeholder="E-MAIL"
          placeholderTextColor="#999"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
          blurOnSubmit={false}
        />

        <TextField
          secureTextEntry
          placeholder="PASSWORD"
          placeholderTextColor="#999"
          returnKeyType="send"
          ref={passwordRef}
        />

        <SignInButton>
          <ButtonText>SIGN IN</ButtonText>
        </SignInButton>
      </Form>
    </Container>
  );
};

export default Login;
