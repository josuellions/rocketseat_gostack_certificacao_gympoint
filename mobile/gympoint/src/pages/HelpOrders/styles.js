import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  z-index: 0;
`;
export const HeaderCustom = styled.View`
  flex: 1;
  align-self: center;
  align-items: center;
  background-color: #18161f;
  height: 64px;
  max-height: 64px;
  margin-top: 0;
  padding: 4px;
`;

export const SelectDate = styled.View`
  margin-top: 15px;
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  font-size: 24px;
`;

export const Time = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  padding-left: 5px;
  padding-right: 5px;
`;

export const SelectPage = styled.View`
  margin-top: 15px;
  padding-left: 150px;
  padding-right: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  font-size: 24px;
`;

export const TPage = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  padding-left: 5px;
  padding-right: 5px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const SubmitButton = styled(Button)`
  margin: 25px 25px 0 25px;
`;
