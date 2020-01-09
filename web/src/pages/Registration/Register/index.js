import React, { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdDone, MdChevronLeft } from 'react-icons/md';

import * as Yup from 'yup';

import { format, addMonths } from 'date-fns';
// import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import { Form, Input } from '@rocketseat/unform';
import { formatPrice } from '~/util/format';

import api from '~/services/api';

import { registrationUpRequest } from '~/store/modules/registration/actions';
import {
  Container,
  FieldsetForm,
  FieldsetInputs,
  FieldsetInput,
  ContainerSelect,
  ContainerSelectPlan,
} from './styles';

/* Schemas Validation dados entrada */
/*
const schema = Yup.object().shape({
  student_id: Yup.string().required('Selecione um aluno'),
  plan_id: Yup.string().required('Selecione um plano'),
  end_date: Yup.date().required('Data de início é obrigatório'),
});
*/

export default function RegistrationRegister() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.student.loading);
  const [date] = useState(new Date());

  const [totalPrice, settotalPrice] = useState();

  const [students, setStudent] = useState([]);
  const [studentID, setStudentID] = useState();

  const [plans, setPlans] = useState([]);
  const [planID, setPlanID] = useState();

  const [registrations, setRegistrations] = useState([]);

  async function handleSubmit({ start_date }) {
    await dispatch(registrationUpRequest(studentID, planID, start_date));
  }

  // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const dateFormatted = useMemo(
    () => format(addMonths(date, 3), "dd'/'MM'/'yyyy", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadRegistrations() {
      const response = await api.get('registrations');

      const rep = response.data.map(data => {
        return data;
      });

      setRegistrations(rep);
    }
    loadRegistrations();
  }, []);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');

      const rep = response.data.map(data => {
        return data;
      });

      setStudent(rep);
    }
    loadStudents();
  }, []);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');
      const rep = response.data.map(data => {
        return data;
      });
      setPlans(rep);
    }
    loadPlans();
  }, []);

  function mapStateToProps(price, duration) {
    settotalPrice(formatPrice(price * duration));
  }

  async function selectDate() {
    // await console.tron.log(start_date);
  }

  function handleChangeStudent(event) {
    setStudentID(event.target.value);
  }

  async function handleChangePlan(event) {
    setPlanID(event.target.value);

    await plans.map(plan =>
      plan.id == event.target.value
        ? mapStateToProps(plan.price, plan.duration)
        : ''
    );
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <header>
          <h1>Cadastro de matrícula</h1>
          <Link to="/registration/list">
            <MdChevronLeft size={20} color="#fff" /> VOLTAR
          </Link>
          <button type="submit">
            <MdDone size={20} color="#fff" />
            {loading ? 'Carregando...' : 'SALVAR'}
          </button>
        </header>
        <FieldsetForm>
          <strong>ALUNO</strong>
          <ContainerSelect>
            <select
              name="student_id"
              value={studentID}
              onChange={handleChangeStudent}
            >
              <option> Select... </option>
              {students.map(student =>
                student.id > 0 ? (
                  <option id={student.id} value={student.id}>
                    {student.name}
                  </option>
                ) : (
                  ''
                )
              )}
            </select>
          </ContainerSelect>

          <strong>PLANO</strong>
          <ContainerSelectPlan>
            <select
              name="plan_id"
              value={studentID}
              onChange={handleChangePlan}
            >
              <option> Select... </option>
              {plans.map(plan => (
                <option id={plan.id} value={plan.id}>
                  {plan.title}
                </option>
              ))}
            </select>
          </ContainerSelectPlan>
          <FieldsetInputs>
            <FieldsetInput>
              <strong htmlFor="start_date">DATA INÍCIO</strong>
              <Input
                type="date"
                name="start_date"
                placeholder="dd/mm/yyyy"
                onChange={() => selectDate()}
              />
            </FieldsetInput>
            <FieldsetInput>
              <strong>DATA TÉRMINO</strong>
              <Input
                type="text"
                name="end_date"
                placeholder="dd/mm/yyyy"
                value={dateFormatted}
                disabled="disabled"
              />
            </FieldsetInput>
            <FieldsetInput>
              <strong>VALOR FINAL</strong>
              {plans.map(plan =>
                plan.id === 1 ? (
                  <Input
                    type="text"
                    name="end_price"
                    placeholder="R$ 0,00"
                    value={totalPrice}
                    disabled="disabled"
                  />
                ) : (
                  ''
                )
              )}
            </FieldsetInput>
          </FieldsetInputs>
        </FieldsetForm>
      </Form>
    </Container>
  );
}
