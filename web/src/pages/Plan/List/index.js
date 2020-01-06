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

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans', {
        params: { page: 1 },
      });
      setloadPlan(response.data);
    }
    loadPlans();
  }, []);

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
          <MdChevronLeft size={24} color="#fff" />
        </button>
        Back | <strong> 1 </strong> | Next
        <button type="submit">
          <MdChevronRight size={24} color="#fff" />
        </button>
      </Footer>
    </Container>
  );
}
