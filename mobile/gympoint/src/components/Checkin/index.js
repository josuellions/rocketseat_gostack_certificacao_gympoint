import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { Container, Left, Info, TTitle, Time } from './styles';

export default function Checkin({ data, onSubscription }) {
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
          <TTitle>Check-in#{data.id}</TTitle>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>
    </Container>
  );
}
