import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Checkin from '~/components/Checkin';

import HeaderCustom from '~/components/Header';
import { Container, List, SubmitButton } from './styles';

import api from '~/services/api';

import { checkinsUpSuccess } from '~/store/modules/checkins/actions';

export default function Checkins() {
  const dispath = useDispatch();
  const [checkins, setCheckins] = useState();
  const { id, loading } = useSelector(state => state.auth);

  useEffect(() => {
    async function loadCheckins(studentId) {
      const response = await api.get(`students/${studentId}/checkins`);

      setCheckins(response.data);
    }
    loadCheckins(id);
  }, [id]);

  function handleSubmit() {
    dispath(checkinsUpSuccess(id));
  }

  return (
    <>
      <HeaderCustom />
      <Container>
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Novo checkin-in
        </SubmitButton>
        <List
          data={checkins}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Checkin data={item} />}
        />
      </Container>
    </>
  );
}

Checkins.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};
