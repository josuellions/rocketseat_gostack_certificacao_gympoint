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
  // const [date, setDate] = useState(new Date());

  // const selectDateFormatted = useMemo();
  // () => format(date, "d 'de' MMMM", { locale: pt }),
  // [date]

  // function dateFormatted(dt) {
  // const dateFormat = format(parseISO(dt), "d 'de' MMMM, ', às 'HH:mm", {
  //   locale: pt,
  // });
  // return dateFormat;
  // }

  // function handlePrevDay() {
  // setDate(subDays(date, 1));
  // }

  // function handleNextDay() {
  // setDate(addDays(date, 1));
  // }

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('students', {
        params: { page: 2 },
      });
      setSchedule(response.data);
    }
    loadSchedule();
  }, []);

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
