import React from 'react';
// import { parseISO, formatRelative } from 'date-fns';
// import pt from 'date-fns/locale/pt-BR';

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
} from './styles';

export default function Answers() {
  const question =
    'Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste ';
  const dateParsed = 'Hoje às 3h ';

  const answer =
    'resposta teste resposta teste  resposta teste resposta teste resposta teste resposta teste resposta teste resposta teste ';

  /*
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.created_at), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.created_at]);
*/
  // function handleSubmit() {
  // dispath(signInRequest(id));
  // }

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
      </Container>
    </>
  );
}
