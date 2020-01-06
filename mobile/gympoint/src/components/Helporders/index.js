import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { Container, Left, Info, TTitle, TText, Time } from './styles';

export default function Helporders({ data, onSubscription }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.created_at), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.created_at]);

  return (
    <Container>
      <Left>
        <Info>
          {data.answer_at != null ? (
            <TTitle>respondido</TTitle>
          ) : (
            <TTitle>sem resposta</TTitle>
          )}
          <TTitle>Pergunta</TTitle>
          <TText>{data.question}</TText>
          <Time>{dateParsed}</Time>

          <TTitle>Resposta</TTitle>
          <TText>{data.answer}</TText>
        </Info>
      </Left>
    </Container>
  );
}
