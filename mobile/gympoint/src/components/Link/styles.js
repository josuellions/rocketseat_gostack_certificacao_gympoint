import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  display: flex;
  height: 46px;
  align-items: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  color: #41cb58;
  font-weight: bold;
  font-size: 14px;
  padding-left: 5px;
`;
