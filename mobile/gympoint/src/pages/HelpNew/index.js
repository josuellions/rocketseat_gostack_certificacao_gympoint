import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderCustom from '~/components/Header';
import { Container, Form, FormInput, SubmitButton } from './styles';

export default function HelpNew() {
  const dispath = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const [id, setId] = useState('');

  function handleSubmit() {
    // dispath(signInRequest(id));
  }

  return (
    <>
      <HeaderCustom />
      <Container>
        <Form>
          <FormInput
            autoCorrect
            autoCapitalize
            placeholder="Inclua seu pedído de auxílio"
            value={id}
            onChangeText={setId}
            returnKeyType="send"
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Enviar pedido
          </SubmitButton>
        </Form>
      </Container>
    </>
  );
}
