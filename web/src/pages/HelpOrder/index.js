import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { answerUpRequest } from '~/store/modules/answer/actions';
import api from '~/services/api';

import {
  Container,
  ListStudents,
  ListStudentHeader,
  ListStudent,
  Footer,
  ButtonResp,
  FieldsetForm,
  FieldsetText,
} from './styles';

export default function HelpOrder() {
  const [helpOrders, sethelpOrders] = useState([]);

  const [questionID, setQuestionID] = useState();
  const [question, setQuestion] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector(state => state.answer.loading);

  const [postPage, setPostPage] = useState(1);

  function nextSetPage() {
    setPostPage(postPage + 1);
  }

  function previousSetPage() {
    // eslint-disable-next-line no-unused-expressions
    postPage >= 2 ? setPostPage(postPage - 1) : postPage;
  }

  useEffect(() => {
    async function loadHelporders() {
      const response = await api.get('help-orders/answer', {
        params: { page: postPage },
      });
      sethelpOrders(response.data);
    }
    loadHelporders();
  }, [postPage]);

  async function handleModal(id, answer) {
    setQuestionID(id);
    setQuestion(answer);
  }

  async function handleSubmit({ id, answer }) {
    dispatch(answerUpRequest(id, answer));
    setQuestionID(null);
  }

  return (
    <Container>
      {/* Alerta exibe quando modal de resposta */}
      {questionID && (
        <div className="match-container">
          <Container>
            <Form onSubmit={handleSubmit}>
              <Input type="hidden" name="id" value={questionID} />
              <FieldsetForm>
                <FieldsetText>
                  <strong htmlFor="question">PERGUNTA DO ALUNO</strong>
                  <Textarea
                    type="text"
                    name="question"
                    disabled="disabled"
                    placeholder={question}
                  />
                </FieldsetText>
                <strong htmlFor="answer">SUA RESPOSTA</strong>
                <Textarea
                  type="text"
                  name="answer"
                  placeholder="exemplo@email.com"
                />

                <ButtonResp>
                  <button type="submit">
                    {loading ? 'Carregando...' : 'RESPONDER ALUNO'}
                  </button>
                </ButtonResp>
              </FieldsetForm>
            </Form>
          </Container>
          <button type="button" onClick={() => setQuestionID(null)}>
            FECHAR
          </button>
        </div>
      )}
      <header>
        <h1>Pedído de auxílio</h1>
      </header>
      <ListStudents>
        <ul>
          <ListStudentHeader>
            <strong>ALUNO</strong>
          </ListStudentHeader>
        </ul>
        <ul>
          {helpOrders.map(item => (
            <ListStudent key={item.id}>
              <p>{item.students.name}</p>
              <button
                type="button"
                onClick={() => handleModal(item.id, item.question)}
              >
                responder
              </button>
            </ListStudent>
          ))}
        </ul>
      </ListStudents>
      <Footer noEvent>
        <button type="submit">
          <MdChevronLeft size={24} color="#fff" onClick={previousSetPage} />
        </button>
        Back | <strong> {postPage} </strong> | Next
        <button type="submit">
          <MdChevronRight size={24} color="#fff" onClick={nextSetPage} />
        </button>
      </Footer>
    </Container>
  );
}
