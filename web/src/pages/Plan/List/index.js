import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MdAddCircleOutline,
  MdChevronLeft,
  MdChevronRight,
} from 'react-icons/md';

import api from '~/services/api';
import { formatPrice } from '~/util/format';

import {
  Container,
  ListStudents,
  ListStudentHeader,
  ListStudent,
  Footer,
} from './styles';

export default function Plan() {
  const [loadPlan, setloadPlan] = useState([]);
  const [postPage, setPostPage] = useState(1);

  function nextSetPage() {
    setPostPage(postPage + 1);
  }

  function previousSetPage() {
    // eslint-disable-next-line no-unused-expressions
    postPage >= 2 ? setPostPage(postPage - 1) : postPage;
  }

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans', {
        params: { page: postPage },
      });
      setloadPlan(response.data);
    }
    loadPlans();
  }, [postPage]);

  return (
    <Container>
      <header>
        <h1>Gerenciando planos</h1>
        <Link to="/plan/register">
          <MdAddCircleOutline size={20} color="#fff" /> CADASTRAR
        </Link>
      </header>

      <ListStudents>
        <ul>
          <ListStudentHeader>
            <strong>TÍTULO</strong>
            <strong>DURAÇÃO</strong>
            <span>
              <strong>VALOR P/MÊS</strong>
            </span>
          </ListStudentHeader>
        </ul>
        <ul>
          {loadPlan.map(item => (
            <ListStudent key={item.id}>
              <p>{item.title}</p>
              <p>{item.duration} mês</p>
              <span>
                <strong>{formatPrice(item.price)}</strong>
              </span>
              <Link to="/plan/register">editar</Link>
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
