import React from 'react';
import { Link } from 'react-router-dom';
import { MdDone, MdChevronLeft } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { planUpRequest } from '~/store/modules/plan/actions';
import {
  Container,
  FieldsetForm,
  FieldsetInputs,
  FieldsetInput,
} from './styles';

/* Schemas Validation dados entrada */
const schema = Yup.object().shape({
  title: Yup.string().required('Título, é campo obrigatório'),
  duration: Yup.string().required('Duração, é campo obrigatório'),
  price: Yup.string().required('Preço Mensal, é campo obrigatório'),
});

export default function PlanRegister() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.student.loading);

  function handleSubmit({ title, duration, price }) {
    dispatch(planUpRequest(title, duration, price));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema}>
        <header>
          <h1>Cadastro de plano</h1>
          <Link to="/plan/list">
            <MdChevronLeft size={20} color="#fff" /> VOLTAR
          </Link>
          <button type="submit">
            <MdDone size={20} color="#fff" />
            {loading ? 'Carregando...' : 'SALVAR'}
          </button>
        </header>
        <FieldsetForm>
          <strong htmlFor="title">TÍTULO</strong>
          <Input
            type="text"
            name="title"
            placeholder="Digite um título para plano"
            // value="Novo Plano Web"
          />
          <FieldsetInputs>
            <FieldsetInput>
              <strong htmlFor="duration">DURAÇÃO(em meses)</strong>
              <Input type="text" name="duration" placeholder="0" />
            </FieldsetInput>
            <FieldsetInput>
              <strong htmlFor="price">PREÇO MENSAL</strong>
              <Input
                type="text"
                name="price"
                placeholder="R$ 0,00"
                // value="72.0"
              />
            </FieldsetInput>
            <FieldsetInput>
              <strong>PREÇO TOTAL</strong>
              <Input
                type="text"
                name="pricetotal"
                placeholder="R$ 0,00"
                value=""
                disabled="disabled"
              />
            </FieldsetInput>
          </FieldsetInputs>
        </FieldsetForm>
      </Form>
    </Container>
  );
}
