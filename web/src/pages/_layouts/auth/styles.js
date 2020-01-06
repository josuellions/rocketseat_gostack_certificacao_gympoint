import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #ee4d63, #ee4d7a);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
width: 100%;
max-width: 365px;
height: 410px;



text-align: center;

background: #fff;
padding: 35px;
border-radius: 4px;

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;


    strong {
      padding: 15px 0 5px 0;
      align-self: flex-start;
    }


    input {
      background: #fff;
      border: 1px solid rgba(0,0,0, 0.1);
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 10px;
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  span {
    color: #f64c75;
    align-self: flex-start
    margin: 0 0 10px;
  }

  button {
    border: 0;
    height: 44px;
    padding: 0 15px;
    font-size: 16px;
    margin: 5px 0 5px;
    border-radius: 4px;
    background: #f94d6a;
    color: rgba(255, 255, 255, 0.7);
    transition: : background 0.2s;

    &:hover {
      background: ${darken(0.04, '#f94d6a')};
    }
  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
