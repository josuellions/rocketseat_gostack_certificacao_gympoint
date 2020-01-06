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



div.match-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
}
  div.match-container p {
  margin-top: 10px;
  font-size: 20px;
  line-height: 30px;
  max-width: 400px;
  color: rgba(255, 255, 255, 0.8);
}

div.match-container button {
  border: 0;
  background: none;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  margin-top: 30px;
  cursor: pointer;
`;

export const ButtonResp = styled.div`

 > button {
      border: 0;
      height: 44px;
      padding: 0 15px;
      font-size: 16px;
      margin: 5px 0 0;
      border-radius: 4px;
      background: #f94d6a !important;
      color: rgba(255, 255, 255, 0.7) !important;
      transition: : background 0.2s !important;

      width: 100%;
      display: flex;
      justify-content: center;
      align-self: flex-end;

      &:hover {
        background: ${darken(0.09, '#f94d6a')} !important;
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

  > textarea {
    height: 100px;
    max-height: 140px;
    max-width: 420px;
    min-height: 140px;
    min-width: 420px;
    padding: 15px;
    border: none;
    margin: 0 0 10px;
    border: 1px solid #eee;
    color: black;

    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
  }
`;

export const FieldsetText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > textarea {
    height: 100px;
    max-height: 140px;
    max-width: 420px;
    min-height: 140px;
    min-width: 420px;
    padding: 15px;
    border: none;
    margin: 0 0 10px;
    border: none;
    font-size: 18px;
    text-align: justify;
    background: #fff;
    border: 1px solid #eee;

    &::placeholder {
      color: #999;
    }
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
  justify-content: space-between;

  background: ${lighten(0.01, '#fff')};

  span {
    width: 380px;
    strong {
      font-size: 14px !important;
    }
  }
`;

export const ListStudent = styled.li`
  display: flex;
  width: 980px;
  padding: 17px;
  justify-content: space-between;

  align-items: center;
  background: ${lighten(0.01, '#fff')};

    > p{
    width-min: 180px;
    width: 180px;
  }

  strong {
    width: 40px;
    max-width: 40px;
    font-size: 20px;
    font-weight: normal;
  }

  span {
    width: 40px;
    max-width: 40px;
    font-size: 12px;
    font-weight: normal;
    color: black;
  }

  >button {
    color: #2b2caf
    width: 90px;
    max-width: 90px;
    font-weight: normal;
    background: none;
    border: none;

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
