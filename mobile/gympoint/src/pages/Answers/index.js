import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import HeaderCustom from '~/components/Header';
import {
  Container,
  // LinkAnchor,
  Left,
  Info,
  THead,
  TTitle,
  TText,
  Time,
  LinkAnchor,
} from './styles';

export default function Answers({ navigation }) {
  const { created_at, question, answer } = navigation.state.params.data;

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(created_at), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [created_at]);

  function handlerBack() {
    navigation.navigate('HelpOrders');
  }

  return (
    <>
      <HeaderCustom />
      <Container>
        <Left>
          <Info>
            <THead>
              <TTitle>Pergunta</TTitle>
              <Time>{dateParsed}</Time>
            </THead>
            <TText>{question}</TText>
            <THead>
              <TTitle>Resposta</TTitle>
            </THead>
            <TText>{answer}</TText>
          </Info>
        </Left>
        <LinkAnchor onPress={() => handlerBack()}>Voltar</LinkAnchor>
      </Container>
    </>
  );
}
