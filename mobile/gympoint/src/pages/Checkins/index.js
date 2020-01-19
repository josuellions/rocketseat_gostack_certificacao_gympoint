import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Checkin from '~/components/Checkin';

import HeaderCustom from '~/components/Header';
import { Container, List, SubmitButton } from './styles';

import api from '~/services/api';

import { checkinsUpRequest } from '~/store/modules/checkins/actions';

export default function Checkins() {
  const dispath = useDispatch();
  const [checkins, setCheckins] = useState();
  const [checkinsID, setcheckinID] = useState();
  const studentId = useSelector(state => state.auth.id);
  const loading = useSelector(state => state.auth.loading);

  useEffect(() => {
    async function loadCheckins() {
      const response = await api.get(`students/${studentId}/checkins`);

      setCheckins(response.data);
      setcheckinID(false);
    }

    loadCheckins();
  }, [checkinsID, studentId]);

  function handleSubmit() {
    dispath(checkinsUpRequest(studentId));
    setcheckinID(true);
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
