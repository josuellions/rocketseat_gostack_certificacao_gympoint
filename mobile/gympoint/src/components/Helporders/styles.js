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
  margin: 15px;
`;

export const THead = styled.View`
  display: flex;
  width: 280px;
  min-width: 280px;
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
  margin: 0 0 25px 0;
  color: #333;
`;

export const Time = styled.Text`
  margin: 0 15px 0 0;
  font-size: 11px;
  margin-top: 4px;
  margin-bottom: 4px;
  color: #999;
`;
