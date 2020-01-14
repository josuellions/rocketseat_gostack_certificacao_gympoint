import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdDone, MdChevronLeft } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { formatPrice } from '~/util/format';

import api from '~/services/api';

import { planUpRequest, planUpdateRequest } from '~/store/modules/plan/actions';
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

export default function PlanRegister(params) {
  const dispatch = useDispatch();

  const { id } = params.match.params;

  const [plan, setPlan] = useState('');
  const [totalPrice, settotalPrice] = useState([]);
  const [totalMonth, setTotalMonth] = useState(0);
  const [durationMonth, setDurationMonth] = useState(0);

  function handleSubmit({ title, duration, price }) {
    // eslint-disable-next-line no-unused-expressions
    parseInt(id, 10) > 0
      ? dispatch(planUpdateRequest(id, title, duration, price))
      : dispatch(planUpRequest(title, duration, price));
  }

  useEffect(() => {
    async function loadPlan() {
      const response = await api.get('plans');

      setPlan(
        response.data.find(data =>
          parseInt(data.id, 10) === parseInt(id, 10) ? data : ''
        )
      );
    }
    loadPlan();
  }, [id]);

  function sunTotalPrice(price, duration) {
    settotalPrice(formatPrice(price * duration));
    setTotalMonth(price);
  }

  function handleDuration(event) {
    setDurationMonth(event.target.value);
    sunTotalPrice(totalMonth, event.target.value);
  }

  function handleTotalMonth(event) {
    sunTotalPrice(event.target.value, durationMonth);
  }

  return (
    <Container>
      <Form initialData={plan} onSubmit={handleSubmit} schema={schema}>
        <header>
          <h1>Cadastro de plano</h1>
          <Link to="/plan/list">
            <MdChevronLeft size={20} color="#fff" /> VOLTAR
          </Link>
          <button type="submit">
            <MdDone size={20} color="#fff" />
            {id > 0 ? 'AUTUALIZAR' : 'SALVAR'}
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
              <Input
                type="text"
                name="duration"
                placeholder="0"
                onChange={handleDuration}
              />
            </FieldsetInput>
            <FieldsetInput>
              <strong htmlFor="price">PREÇO MENSAL</strong>
              <Input
                type="text"
                name="price"
                placeholder="R$ 0,00"
                onChange={handleTotalMonth}
              />
            </FieldsetInput>
            <FieldsetInput>
              <strong>PREÇO TOTAL</strong>
              <Input
                type="text"
                name="pricetotal"
                placeholder="R$ 0,00"
                value={totalPrice || ''}
                disabled="disabled"
              />
            </FieldsetInput>
          </FieldsetInputs>
        </FieldsetForm>
      </Form>
    </Container>
  );
}
