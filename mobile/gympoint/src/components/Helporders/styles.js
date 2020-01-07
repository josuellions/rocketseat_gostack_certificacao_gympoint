import styled from 'styled-components/native';
import Link from '~/components/Link';

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

export const LinkAnchor = styled(Link)`
  margin: 0px 0 0px 0;
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

export const THead = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const TTitle = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #999;
`;
export const TText = styled.Text`
  font-size: 12px;
  color: #333;
`;

export const Time = styled.Text`
  margin: 0 15px 0 0;
  font-size: 11px;
  margin-top: 4px;
  margin-bottom: 4px;
  color: #999;
`;
