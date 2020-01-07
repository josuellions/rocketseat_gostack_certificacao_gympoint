import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-bottom: 14px;
  padding: 0px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Info = styled.View`
  flex: 1;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const TTitle = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

export const Time = styled.Text`
  font-size: 11px;
  margin-top: 4px;
  color: #999;
`;
