import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import {
  Container,
  LinkAnchor,
  Left,
  Info,
  THead,
  TTitle,
  TText,
  Time,
} from './styles';

export default function Helporders({ data, onAnswers }) {
  const { id, created_at, answer_at, question } = data;

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(created_at), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [created_at]);

  return (
    <Container>
      <Left>
        <Info>
          {answer_at != null ? (
            <THead>
              <LinkAnchor
                key={id}
                onPress={onAnswers}
                icon="check-circle"
                color="#41cb58"
              >
                Respondido
              </LinkAnchor>
              <Time>{dateParsed}</Time>
            </THead>
          ) : (
            <THead>
              <LinkAnchor icon="check-circle" color="#eee">
                <TTitle>sem resposta</TTitle>
              </LinkAnchor>
              <Time>{dateParsed}</Time>
            </THead>
          )}
          <TText>{question}</TText>
        </Info>
      </Left>
    </Container>
  );
}
