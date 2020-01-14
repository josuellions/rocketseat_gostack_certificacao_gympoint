import { Platform, TextInput } from 'react-native';

import styled from 'styled-components/native';

import Button from '~/components/Button';
import Link from '~/components/Link';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0px;
  width: 320px;
  max-height: 480px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 4px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 5 },
})`
  align-self: stretch;
`;

export const FormInput = styled(TextInput)`
  flex: 1;
  width: 100%;
  flex-direction: row;
  padding: 10px;
  align-items: flex-start;
  align-self: flex-start;
  height: 320px;
  min-height: 320px;
  margin-bottom: 10px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const LinkAnchor = styled(Link)`
  margin: 0 0 0 0;
`;
