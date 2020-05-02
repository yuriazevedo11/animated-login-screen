import React, { useRef } from 'react';
import { Dimensions, TextInput } from 'react-native';
import Animated, {
  useCode,
  cond,
  eq,
  set,
  interpolate,
  Extrapolate,
  concat,
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
  CloseButton,
} from './styles';

const { Value } = Animated;
const { height } = Dimensions.get('window');

const Login: React.FC = () => {
  const baseValue = new Value(1);
  const gestureEvent = new Value(State.UNDETERMINED);
  const closeGestureEvent = new Value(State.UNDETERMINED);
  const buttonOpacity = withTimingTransition(baseValue);
  const passwordRef = useRef<TextInput>(null);

  const gestureHandler = onGestureEvent({ state: gestureEvent });
  const closeGestureHandler = onGestureEvent({ state: closeGestureEvent });

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

  const rotateCross = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [180, 360],
    extrapolate: Extrapolate.CLAMP,
  });

  useCode(() => cond(eq(gestureEvent, State.END), set(baseValue, 0)), []);
  useCode(() => cond(eq(closeGestureEvent, State.END), set(baseValue, 1)), []);

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
        <TapGestureHandler {...gestureHandler}>
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
        <TapGestureHandler {...closeGestureHandler}>
          <CloseButton>
            <ButtonText
              style={{
                fontSize: 16,
                transform: [{ rotate: concat(rotateCross, 'deg') }],
              }}
            >
              X
            </ButtonText>
          </CloseButton>
        </TapGestureHandler>

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
