import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #f5f5f5;
  padding: 0 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  height: 64px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    width: 640px;
    display: flex;
    aling-items: center;
    justify-content: space-between;

    img {
      width: 220px;
      height: 32px;
      margin: 0 0px 0 0px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
      color: #333;
    }
  }
  aside {
    display: flex;
    aling-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  color: #333;

  div {
    text-aling: rigth;
    margin-right: 10px;

    strong {
      display: flex;
      color: black;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      text-align: right;
      color: #999;
    }
  }

  button {
    height: 32px;
    width: 56px;
    border: none;
    border-radius: 4px;
    margin-left: 10px;
    background: #f94d6a;
    color: rgba(255, 255, 255, 0.7);
    transition: : background 0.2s;

    &:hover {
      background: ${darken(0.04, '#f94d6a')};
    }
  }
`;
