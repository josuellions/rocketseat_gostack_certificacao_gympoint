import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 20px;
  height: 46px;
  background: rgba(255,255,255,0.7)
  border: 1px solid #eee;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 5px;
  color: rgba(0, 0, 0, 0.9);
`;
