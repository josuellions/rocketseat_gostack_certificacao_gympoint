import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { lighten, darken } from 'polished';

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

  input,
  select {
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #000;
    margin: 0 0 10px;
    min-width: 220px !important;
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
    margin: 0 10px 0 10px;
    width: 210px;

    &:disabled {
      background: ${darken(0.09, '#fff')};
    }
  }

  > strong {
    margin: 0 15px 0 15px;
  }
`;

// Input Select

export const ContainerSelect = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  item-align: left;
  position: relative;
  align-items: stretch;
  flex-direction: collum;
  align-content: space-between;
`;

export const Badge = styled.button`
  position: relative;
  background: none;
  border: 0;
  background: ${lighten(0.3, '#fff')};
  width: 100%;
  padding-left: 905px;
  border: 2px solid #eee;
  border-radius: 4px;
`;

export const SelectList = styled.div`
  position: absolute;
  width: 100%;
  //left: calc(50% - 130px);
  top: calc(100% + 2px);
  background: #eee;
  opacity: 0.9;
  border-radius: 4px;
  padding: 15px 5px;
  color: #fff;
  display: ${props => (props.visible ? 'block' : 'none')};
  z-index: 1000;
  float: left;

  // &::before {
  //   content: '';
  //   position: absolute;
  //   // left: calc(50% - 20px);
  //   // top: -20px;
  //   width: 0;
  //   height: 0;
  //   border-left: 20px solid transparent;
  //   border-right: 20px solid transparent;
  //   border-bottom: 20px solid #18161f;
  // }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const SelectOption = styled.div`
  margin: -203px 0 0 0;
  color: black;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.9);
  }

  p {
    font-size: 13px;
    line-height: 18px;
    cursor: pointer;
  }
`;

export const ContainerSelectPlan = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  item-align: left;
  position: relative;
  align-items: stretch;
  flex-direction: collum;
  align-content: space-between;
`;
export const BadgePlan = styled.button`
  position: relative;
  background: none;
  border: 0;
  background: ${lighten(0.3, '#fff')};
  padding-left: 905px;
  border: 2px solid #eee;
  border-radius: 4px;
`;

export const SelectListPlan = styled.div`
  position: absolute;
  width: 100%;
  //left: calc(50% - 130px);
  top: calc(100% + 2px);
  background: #eee;
  opacity: 0.9;
  border-radius: 4px;
  padding: 15px 5px;
  color: #fff;
  display: ${props => (props.visiblePlan ? 'block' : 'none')};
  z-index: 1000;
  float: left;

  // &::before {
  //   content: '';
  //   position: absolute;
  //   // left: calc(50% - 20px);
  //   // top: -20px;
  //   width: 0;
  //   height: 0;
  //   border-left: 20px solid transparent;
  //   border-right: 20px solid transparent;
  //   border-bottom: 20px solid #18161f;
  // }
`;

export const ScrollPlan = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const SelectOptionPlan = styled.div`
  margin: -38px 0 0 0;
  color: black;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.9);
  }

  p {
    font-size: 13px;
    line-height: 18px;
    cursor: pointer;
  }
`;
