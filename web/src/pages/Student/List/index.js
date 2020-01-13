import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
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
  const [students, setStudents] = useState([]);
  const [postPage, setPostPage] = useState(1);

  function nextSetPage() {
    setPostPage(postPage + 1);
  }

  function previousSetPage() {
    // eslint-disable-next-line no-unused-expressions
    postPage >= 2 ? setPostPage(postPage - 1) : postPage;
  }

  async function searchStudent(event) {
    const search = event.target.value;

    const searchStudents = await api.get('/students/users', {
      params: {
        q: search,
        page: postPage,
      },
    });
    setStudents(searchStudents.data.map(student => student));
  }

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students', {
        params: { page: postPage },
      });
      setStudents(response.data);
    }
    loadStudents();
  }, [postPage]);

  async function handleCancel(id, name) {
    try {
      await api.delete(`students/${id}`);
      setStudents(
        students.map(student =>
          student.id === id
            ? {
                ...student,
                id: null,
              }
            : student
        )
      );

      toast.success(`Success : O Cadastro do aluno: ${name}, foi excluido!`);
    } catch (err) {
      console.tron.log(err);
      toast.error(
        'Error: Falha ao excluir cadastro! Verifique se aluno está matrículado.'
      );
    }
  }

  return (
    <Container>
      <header>
        <h1>Gerenciando alunos</h1>
        <Link to="/student/register">
          <MdAddCircleOutline size={20} color="#fff" /> CADASTRAR
        </Link>
        <Input
          type="text"
          name="search"
          placeholder="Buscar aluno"
          onKeyUp={searchStudent}
        />
      </header>

      <ListStudents>
        <ul>
          <ListStudentHeader>
            <strong>COD</strong>
            <strong>NOME</strong>
            <strong>EMAIL</strong>
            <span>
              <strong>IDADE</strong>
            </span>
          </ListStudentHeader>
        </ul>
        <ul>
          {students.map(item =>
            item.id > 0 ? (
              <ListStudent key={item.id}>
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <span>
                  <strong>{item.idade}</strong>
                </span>
                <Link to={`/student/register/${item.id}`}>editar</Link>
                <button
                  type="button"
                  onClick={() => handleCancel(item.id, item.name)}
                >
                  excluir
                </button>
              </ListStudent>
            ) : (
              ''
            )
          )}
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
