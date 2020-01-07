import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Text } from './styles';

export default function Link({ style, children, icon, color, ...rest }) {
  return (
    <Container style={style} {...rest}>
      {icon && <Icon name={icon} size={20} color={color} />}
      <Text>{children}</Text>
    </Container>
  );
}

Link.propTypes = {
  children: PropTypes.string.isRequired,
};
