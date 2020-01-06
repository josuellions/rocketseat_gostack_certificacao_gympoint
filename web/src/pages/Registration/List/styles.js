import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`

  max-width: 980px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    > a {
      border: 0;
      height: 44px;
      padding: 0 15px;
      font-size: 16px;
      margin: 5px 0 0;
      border-radius: 4px;
      background: #f94d6a;
      color: rgba(255, 255, 255, 0.7);
      transition: : background 0.2s;

      width: 160px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:hover {
        background: ${darken(0.04, '#f94d6a')};
      }
    }
  }
`;

export const SelectDate = styled.div`
  display: flex;
  align-self: center;
  align-items: center;

  strong {
    font-size: 24px;
  }

  button {
    border: 0;
    background: none;
    margin: 0 15px;
  }
`;

export const ListStudents = styled.div`
  height: auto;
  color: #999;
  margin-top: 15px;

  display: flex;
  flex-direction: column;

  ul {
    margin-top: 2px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2px;

    strong {
      width: 70px;
      max-width: 70px;
      font-size: 14px;
      color: black;
    }
  }
`;

export const ListStudentHeader = styled.li`
  display: flex;
  width: 980px;
  padding: 17px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 45px;

  background: ${lighten(0.01, '#fff')};

  span {
    strong {
      font-size: 14px !important;
    }
  }
`;

export const ListStudent = styled.li`
  display: flex;
  width: 980px;
  padding: 17px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 2px;
  justify-content: space-between;

  align-items: center;
  background: ${lighten(0.01, '#fff')};

  strong {
    width: 40px;
    max-width: 40px;
    font-size: 20px;
    font-weight: normal;
  }

    > p{
    width-min: 280px;
    width: 180px;
  }


  span {
    width: 40px;
    max-width: 40px;
    font-size: 12px;
    font-weight: normal;
    color: black;
  }

  a {
    color: #2b2caf
    width: 10px;
    max-width: 10px;
    font-weight: normal;

  }

  button {
    background: none;
    border: none;
    color: orangered;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  margin: 15px 0 15px 0;

  strong {
    font-size: 21px;
    padding: 0 5px 0 5px;
  }

  button {
    svg {
      color: black !important;
    }
    border: 0;
    background: none;
    margin: 0 15px;
  }
`;
