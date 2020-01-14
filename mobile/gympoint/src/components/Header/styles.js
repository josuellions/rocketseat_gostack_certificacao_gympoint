import styled from 'styled-components/native';
import Link from '~/components/Link';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  height: 52px;
  max-height: 52px;
  margin-top: 0;
`;

export const LinkAnchor = styled(Link)`
  margin: 0px 0 0px 0px;
  padding-left: 180px;
`;
