import React from 'react';
import { useDispatch } from 'react-redux';
import { Image } from 'react-native';

import { signOut } from '~/store/modules/auth/actions';

import { Container, LinkAnchor } from './styles';

import logo from '~/assets/logo_gympoint.png';

export default function HeaderCustom() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Image source={logo} />
      <LinkAnchor
        icon="lock-outline"
        color="#ee4d7a"
        onPress={() => handleLogout()}
      >
        Sair
      </LinkAnchor>
    </Container>
  );
}
