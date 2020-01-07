import { Platform } from 'react-native';
import styled from 'styled-components/native';

import TInput from '~/components/Input';
import Button from '~/components/Button';

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

export const Form = styled.View`
  align-self: stretch;
  margin-top: 0px;
  height: 320px;
  min-height: 320px;
`;

export const FormInput = styled(TInput)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  height: 320px;
  min-height: 320px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
