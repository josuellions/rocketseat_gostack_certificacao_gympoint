import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDone, MdChevronLeft } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import api from '~/services/api';

import {
  studentUpRequest,
  studentUpdateRequest,
} from '~/store/modules/student/actions';
import {
  Container,
  FieldsetForm,
  FieldsetInputs,
  FieldsetInput,
} from './styles';

/* Schemas Validation dados entrada */
const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Digite um email válido')
    .required('O e-mail é obrigatório'),
  idade: Yup.string('Idade deve ser númerico')
    .min(2, 'Idade deve conter no mínimo 2 caracteres numericos')
    .required('A Idade e obrigatória'),
  peso: Yup.string('Peso deve ser númerico')
    .min(2, 'Peso deve conter no mínimo 2 caracteres numericos')
    .required('O Peso e obrigatóro'),
  altura: Yup.string('Altura deve ser númerico')
    .min(3, 'Altura deve conter no mínimo 3 caracteres numericos, ex. 1.77')
    .required('Altura e obrigatória'),
});

export default function SignUpStudent(params) {
  const { id } = params.match.params;

  const dispatch = useDispatch();
  const [student, setStudent] = useState('');

  async function handleSubmit({ name, email, idade, peso, altura }) {
    // eslint-disable-next-line no-unused-expressions
    parseInt(id, 10) > 0
      ? await dispatch(
          studentUpdateRequest(id, name, email, idade, peso, altura)
        )
      : await dispatch(studentUpRequest(name, email, idade, peso, altura));
  }

  useEffect(() => {
    async function loadStudent() {
      const response = await api.get('students');

      setStudent(
        response.data.find(data =>
          parseInt(data.id, 10) === parseInt(id, 10) ? data : ''
        )
      );
    }
    loadStudent();
  }, [id]);

  // console.tron.log(student);
  return (
    <Container>
      <Form initialData={student} onSubmit={handleSubmit} schema={schema}>
        <header>
          <h1>Cadastro de alunos</h1>
          <Link to="/student/dashboard">
            <MdChevronLeft size={20} color="#fff" /> VOLTAR
          </Link>
          <button type="submit">
            <MdDone size={20} color="#fff" />
            {id > 0 ? 'ATUALIZAR' : 'SALVAR'}
          </button>
        </header>
        <FieldsetForm>
          <strong htmlFor="email">NOME COMPLETO</strong>
          <Input
            type="text"
            name="name"
            placeholder="Digite seu nome completo"
            // value="Josuel Alves"
          />
          <strong htmlFor="email"> ENDEREÇO DE E-MAIL</strong>
          <Input
            type="email"
            name="email"
            placeholder="seuemail@dominio.com.br"
            // value="josuel.alves@email.com"
          />
          <FieldsetInputs>
            <FieldsetInput>
              <strong htmlFor="password">IDADE</strong>
              <Input
                type="text"
                name="idade"
                placeholder="Digite sua idade, ex: 33"
                // value="39"
              />
            </FieldsetInput>
            <FieldsetInput>
              <strong htmlFor="password">PESO(em kg)</strong>
              <Input
                type="text"
                name="peso"
                placeholder="Digite seu peso, ex: 72"
                // value="72"
              />
            </FieldsetInput>
            <FieldsetInput>
              <strong htmlFor="password">ALTURA</strong>
              <Input
                type="text"
                name="altura"
                placeholder="Digite sua altura, ex: 1.77"
                // value="1.77"
              />
            </FieldsetInput>
          </FieldsetInputs>
        </FieldsetForm>
      </Form>
    </Container>
  );
}
