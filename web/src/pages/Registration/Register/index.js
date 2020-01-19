import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdDone, MdChevronLeft } from 'react-icons/md';

// import * as Yup from 'yup';

import { format, addMonths, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Form, Input } from '@rocketseat/unform';
import { formatPrice } from '~/util/format';

import api from '~/services/api';

import {
  registrationUpRequest,
  registrationUpdateRequest,
} from '~/store/modules/registration/actions';
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

export default function RegistrationRegister(params) {
  const { id } = params.match.params;

  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [dateend, setDateend] = useState('');

  const [totalPrice, settotalPrice] = useState();

  const [students, setStudents] = useState([]);
  const [studentsInit, setStudentsInit] = useState([]);
  const [studentID, setStudentID] = useState(0);

  const [plans, setPlans] = useState([]);
  const [planID, setPlanID] = useState(0);
  const [planduration, setPlanduration] = useState(0);

  const [registrations, setRegistrations] = useState([]);
  const [registrationsInit, setRegistrationsInit] = useState([]);

  function handleSubmit({ start_date }) {
    // eslint-disable-next-line no-unused-expressions
    parseInt(id, 10) > 0
      ? dispatch(registrationUpdateRequest(id, studentID, planID, start_date))
      : dispatch(registrationUpRequest(studentID, planID, start_date));
  }

  function dateFormatted(duration, setdate) {
    const dtFormatted = format(addMonths(setdate, duration), "dd'/'MM'/'yyyy", {
      locale: pt,
    });

    setDateend(dtFormatted);
  }

  useEffect(() => {
    async function loadRegistration() {
      const response = await api.get('registrations');

      const responseSearch = await response.data.find(data =>
        parseInt(data.id, 10) === parseInt(id, 10) ? data : ''
      );

      if (responseSearch) {
        setStudentsInit(responseSearch.students);
        setStudentID(responseSearch.students.id);
      }

      setRegistrationsInit(responseSearch);
      // console.tron.log(responseSearch.id);
    }
    loadRegistration();
  }, [id]);

  useEffect(() => {
    async function loadRegistrations() {
      const response = await api.get('registrations');

      const rep = await response.data.map(data => {
        return data;
      });

      setRegistrations(rep);
    }
    loadRegistrations();
  }, [setRegistrations]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');

      const rep = await response.data.map(data => {
        // eslint-disable-next-line no-return-assign
        registrations.map(registration =>
          registration.students.id === data.id ? (data.id = null) : ''
        );
        return data;
      });

      setStudents(rep);
    }
    loadStudents();
  }, [registrations]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');
      const rep = await response.data.map(data => {
        return data;
      });
      setPlans(rep);
    }
    loadPlans();
  }, []);

  function sunTotalPrice(price, duration) {
    settotalPrice(formatPrice(price * duration));
  }

  function handleChangeStudent(event) {
    setStudentID(event.target.value);
    setPlanID(planID);
  }

  function handleChangePlan(event) {
    setPlanID(event.target.value);

    plans.map(plan =>
      parseInt(plan.id, 10) === parseInt(event.target.value, 10)
        ? (sunTotalPrice(plan.price, plan.duration),
          dateFormatted(plan.duration, date),
          setPlanduration(plan.duration))
        : ''
    );
  }

  function handleChangeDate(event) {
    const loadDate = parseISO(event.target.value);
    dateFormatted(planduration, loadDate);
    setDate(loadDate);
  }

  return (
    <Container>
      <Form initialData={registrationsInit} onSubmit={handleSubmit}>
        <header>
          <h1>Cadastro de matrícula</h1>
          <Link to="/registration/list">
            <MdChevronLeft size={20} color="#fff" /> VOLTAR
          </Link>
          <button type="submit">
            <MdDone size={20} color="#fff" />
            {id > 0 ? 'ATUALIZAR' : 'SALVAR'}
          </button>
        </header>
        <FieldsetForm>
          <strong>ALUNO</strong>
          <ContainerSelect>
            <select name="student_id" onChange={handleChangeStudent}>
              <option>SELECT...</option>
              {id !== null && id > 0 ? (
                <option
                  key={studentsInit.id}
                  id={studentsInit.id}
                  value={studentsInit.id}
                >
                  {studentsInit.name}
                </option>
              ) : (
                students.map(student =>
                  student.id > 0 ? (
                    <option key={student.id} id={student.id} value={student.id}>
                      {student.name}
                    </option>
                  ) : (
                    ''
                  )
                )
              )}
            </select>
          </ContainerSelect>

          <strong>PLANO</strong>
          <ContainerSelectPlan>
            <select name="plan_id" onChange={handleChangePlan}>
              <option> SELECT... </option>
              {plans.map(plan => (
                <option key={plan.id} id={plan.id} value={plan.id}>
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
                placeholder="dd/mm/aaaa"
                onChange={handleChangeDate}
              />
            </FieldsetInput>
            <FieldsetInput>
              <strong>DATA TÉRMINO</strong>
              <Input
                type="text"
                name="end_date"
                placeholder="dd/mm/aaaa"
                value={dateend || ''}
                disabled="disabled"
              />
            </FieldsetInput>
            <FieldsetInput>
              <strong>VALOR FINAL</strong>
              {plans.map(plan =>
                plan.id === 1 ? (
                  <Input
                    key={plan.id}
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
