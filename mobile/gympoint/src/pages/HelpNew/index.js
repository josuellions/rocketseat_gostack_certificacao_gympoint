import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import HeaderCustom from '~/components/Header';
import { Container, Form, FormInput, SubmitButton } from './styles';

import { helpnewUpRequest } from '~/store/modules/helpnew/actions';

export default function HelpNew() {
  const dispath = useDispatch();
  const studentId = useSelector(state => state.auth.id);
  const loading = useSelector(state => state.auth.loading);

  const [question, setQuestion] = useState('');

  function handleSubmit() {
    dispath(helpnewUpRequest(studentId, question));
    setQuestion('');
  }

  return (
    <>
      <HeaderCustom />
      <Container>
        <Form>
          <FormInput
            underlineColorAndroid="transparent"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline
            autoCorrect
            autoCapitalize
            placeholder="Inclua seu pedído de auxílio"
            value={question}
            onChangeText={setQuestion}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Enviar pedido
          </SubmitButton>
        </Form>
      </Container>
    </>
  );
}
