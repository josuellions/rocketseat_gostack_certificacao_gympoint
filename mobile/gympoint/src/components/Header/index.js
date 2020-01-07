import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles';

import logo from '~/assets/logo_gympoint.png';

export default function HeaderCustom() {
  return (
    <Container>
      <Image source={logo} />
    </Container>
  );
}
