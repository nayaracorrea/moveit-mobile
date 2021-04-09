import React from 'react';
import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar'

import {
  Container,
  Logo,
  LoaderContainer
} from './styles'

export default function Splash() {

  return (
    <Container>
      <StatusBar translucent={true} style='light' />

      <Logo source={require('../../../assets/png/logo.png')} />
      {/* <LoaderContainer>
        <LottieView 
          style={{ height: 100, width: 100 }}
          source={require('../../../assets/animations/loader.json')}
          autoPlay
        />
      </LoaderContainer> */}
    </Container>
  );
}