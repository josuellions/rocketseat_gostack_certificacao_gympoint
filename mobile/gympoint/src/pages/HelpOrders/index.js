import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import HeaderCustom from '~/components/Header';

import Helporder from '~/components/Helporders';

import { Container, List, SubmitButton } from './styles';

import api from '~/services/api';

// import { helpordersUpSuccess } from '~/store/modules/helporders/actions';

export default function HelpOrders({ navigation }) {
  // const dispath = useDispatch();
  const [helporder, setHelporder] = useState();
  const { id, loading } = useSelector(state => state.auth);

  useEffect(() => {
    async function loadCheckins(studentId) {
      const response = await api.get(`students/${studentId}/help-orders`);
      console.tron.log(response);
      setHelporder(response.data);
    }
    loadCheckins(id);
  }, [id]);

  function handleSubmit() {
    // dispath(helpordersUpSuccess());
    navigation.navigate('HelpNew', {});
  }

  return (
    <>
      <HeaderCustom />
      <Container>
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Novo pedido de auxilío
        </SubmitButton>
        <List
          data={helporder}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Helporder data={item} />}
        />
      </Container>
    </>
  );
}

HelpOrders.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};
