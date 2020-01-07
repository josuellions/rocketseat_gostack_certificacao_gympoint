import styled from 'styled-components/native';
import Link from '~/components/Link';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0px;
  width: 320px;
  max-height: 480px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 4px;

  border: 1px solid #eee;
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
  padding: 10px 0 10px 0;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const TTitle = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;
export const TText = styled.Text`
  font-size: 12px;
  color: #999;
  margin: 0 0 25px 0;
`;

export const Time = styled.Text`
  margin: 0 15px 0 0;
  font-size: 11px;
  margin-top: 4px;
  margin-bottom: 4px;
  color: #999;
`;
