import React, { useState } from 'react';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';

import { StatusBar } from 'react-native';
import LoginScreen from './src';

const App: React.FC = () => {
  const [ready, setReady] = useState(false);

  const cacheResourcesAsync = async () => {
    const images = [require('./assets/login-background.jpg')];

    const cacheImages = images.map((image) =>
      Asset.fromModule(image).downloadAsync()
    );

    await Promise.all(cacheImages);
  };

  if (!ready) {
    return (
      <AppLoading
        startAsync={cacheResourcesAsync}
        onFinish={() => setReady(true)}
      />
    );
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <LoginScreen />
    </>
  );
};

export default App;
