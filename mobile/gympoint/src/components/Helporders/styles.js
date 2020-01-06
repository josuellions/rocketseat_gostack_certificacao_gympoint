import styled from 'styled-components/native';

export const Container = styled.View`
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
  flex-direction: column;
  align-items: center;
`;
export const Info = styled.View`
  margin-top: 10px;
  margin-left: 15px;
`;

export const TTitle = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;
export const TText = styled.Text`
  font-size: 12px;
  color: #333;
`;

export const Time = styled.Text`
  font-size: 13px;
  margin-top: 4px;
  margin-bottom: 4px;
  color: #999;
`;
