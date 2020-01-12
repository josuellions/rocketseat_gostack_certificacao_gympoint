import React, { useState, useEffect } from 'react';
// import { format, subDays, addDays, parseISO } from 'date-fns';
// import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';
import { Input } from '@rocketseat/unform';
import {
  MdAddCircleOutline,
  MdChevronLeft,
  MdChevronRight,
  // MdSearch,
} from 'react-icons/md';

import api from '~/services/api';

import {
  Container,
  // SelectDate,
  ListStudents,
  ListStudentHeader,
  ListStudent,
  Footer,
} from './styles';

export default function Student() {
  const [schedule, setSchedule] = useState([]);
  const [postPage, setPostPage] = useState(1);

  function nextSetPage() {
    setPostPage(postPage + 1);
  }

  function previousSetPage() {
    // eslint-disable-next-line no-unused-expressions
    postPage >= 2 ? setPostPage(postPage - 1) : postPage;
  }

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('students', {
        params: { page: postPage },
      });
      setSchedule(response.data);
    }
    loadSchedule();
  }, [postPage]);

  return (
    <Container>
      <header>
        <h1>Gerenciando alunos</h1>
        <Link to="/student/register">
          <MdAddCircleOutline size={20} color="#fff" /> CADASTRAR
        </Link>
        <Input type="text" name="search" placeholder="Buscar aluno" />
      </header>

      <ListStudents>
        <ul>
          <ListStudentHeader>
            <strong>NOME</strong>
            <strong>EMAIL</strong>
            <span>
              <strong>IDADE</strong>
            </span>
          </ListStudentHeader>
        </ul>
        <ul>
          {schedule.map(item => (
            <ListStudent key={item.id}>
              <p>{item.name}</p>
              <p>{item.email}</p>
              <span>
                <strong>{item.idade}</strong>
              </span>
              <Link to="/student/register">editar</Link>
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
