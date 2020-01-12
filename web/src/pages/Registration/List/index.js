import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';
import {
  MdAddCircleOutline,
  MdChevronLeft,
  MdChevronRight,
  MdCheckCircle,
} from 'react-icons/md';

import api from '~/services/api';

import {
  Container,
  ListStudents,
  ListStudentHeader,
  ListStudent,
  Footer,
} from './styles';

export default function Registration() {
  const [registrations, setRegistrations] = useState([]);
  const [postPage, setPostPage] = useState(1);

  function dateFormatted(dt) {
    const dateFormat = format(parseISO(dt), "d 'de' MMMM, 'de' yyyy", {
      locale: pt,
    });
    return dateFormat;
  }

  function nextSetPage() {
    setPostPage(postPage + 1);
  }

  function previousSetPage() {
    // eslint-disable-next-line no-unused-expressions
    postPage >= 2 ? setPostPage(postPage - 1) : postPage;
  }

  useEffect(() => {
    async function loadRegistrations() {
      const response = await api.get('registrations', {
        params: { page: postPage },
      });
      setRegistrations(response.data);
    }
    loadRegistrations();
  }, [postPage, registrations]);

  return (
    <Container>
      <header>
        <h1>Gerenciando matrículas</h1>
        <Link to="/registration/register">
          <MdAddCircleOutline size={20} color="#fff" /> CADASTRAR
        </Link>
      </header>

      <ListStudents>
        <ul>
          <ListStudentHeader>
            <strong>ALUNO</strong>
            <strong>PLANO</strong>
            <strong>INÍCIO</strong>
            <strong>TÉRMINO</strong>
            <span>
              <strong>ATIVA</strong>
            </span>
          </ListStudentHeader>
        </ul>
        <ul>
          {registrations.map(item => (
            <ListStudent key={item.id}>
              <p>{item.students.name}</p>
              <p>{item.plans.title}</p>
              <p>{dateFormatted(item.start_date)}</p>
              <p>{dateFormatted(item.end_date)}</p>
              <span>
                <strong>
                  {item.active ? (
                    <MdCheckCircle size={20} color="#41cb58" />
                  ) : (
                    <MdCheckCircle size={20} color="#dddddd" />
                  )}
                </strong>
              </span>
              <Link to="/registration/register">editar</Link>
              <button type="button">excluir</button>
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
