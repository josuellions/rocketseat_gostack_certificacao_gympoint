import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 980px;
  margin: 50px auto;

  form {
    margin-top: 30px;

    header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h1{
      width: 680px;
    }

    > a {
      border: 0;
      height: 44px;
      padding: 0 15px;
      font-size: 16px;
      margin: 5px 0 0;
      border-radius: 4px;
      background: #999;
      color: rgba(255, 255, 255, 0.7);
      transition: : background 0.2s;

      width: 120px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:hover {
        background: ${darken(0.04, '#999')};
      }
    }

    button {
      border: 0;
      height: 44px;
      padding: 0 15px;
      font-size: 16px;
      margin: 5px 0 0;
      border-radius: 4px;
      background: #f94d6a;
      color: rgba(255, 255, 255, 0.7);
      transition: : background 0.2s;

      width: 120px;
      display: flex;
      justify-content: space-between;
      align-self: flex-end;

      &:hover {
        background: ${darken(0.04, '#f94d6a')};
      }
    }
  }
`;

export const FieldsetForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #fff;
  padding: 20px;
  margin: 15px auto;
  border-radius: 4px;

  strong {
    padding: 15px 0 5px 0;
    align-self: flex-start;
  }

  input {
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #000;
    margin: 0 0 10px;
  }
`;

export const FieldsetInputs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  justify-content: center;
`;

export const FieldsetInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > input {
    margin: 0 15px 0 15px;
    width: 295px;

    &:disabled {
      background: ${darken(0.09, '#fff')};
    }
  }

  > strong {
    margin: 0 15px 0 15px;
  }
`;
