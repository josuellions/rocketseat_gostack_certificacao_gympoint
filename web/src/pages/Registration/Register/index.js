import React, { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdDone, MdChevronLeft, MdKeyboardArrowDown } from 'react-icons/md';

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
  Badge,
  SelectList,
  Scroll,
  SelectOption,
  BadgePlan,
  SelectListPlan,
  ScrollPlan,
  SelectOptionPlan,
} from './styles';

/* Schemas Validation dados entrada */
const schema = Yup.object().shape({
  student_id: Yup.string().required('Selecione um aluno'),
  plan_id: Yup.string().required('Selecione um plano'),
  end_date: Yup.date().required('Data de início é obrigatório'),
});

export default function RegistrationRegister() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.student.loading);
  const [date] = useState(new Date());
  const [visible, setVisible] = useState(false);
  const [visiblePlan, setVisiblePlan] = useState(false);

  const [selectStudent, setSelectStudent] = useState();
  const [selectPlan, setSelectPlan] = useState();
  const [totalPrice, settotalPrice] = useState();

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleToggleVisiblePlan() {
    setVisiblePlan(!visiblePlan);
  }

  async function handleSubmit({ start_date }) {
    await dispatch(
      registrationUpRequest(selectStudent, selectPlan, start_date)
    );
    // console.tron.log(selectStudent, selectPlan, start_date);
  }

  // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const dateFormatted = useMemo(
    () => format(addMonths(date, 3), "dd'/'MM'/'yyyy", { locale: pt }),
    [date]
  );

  const [students, setStudent] = useState([]);

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

  const [plans, setPlans] = useState([]);
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

  async function mapStateToProps(price, duration) {
    await settotalPrice(formatPrice(price * duration));
  }

  async function selectStudentList(id) {
    setSelectStudent(id);
    setVisible(false);
  }

  async function selectPlanList(id, price, duration) {
    mapStateToProps(price, duration);
    setVisiblePlan(false);
    setSelectPlan(id);
  }

  async function selectDate() {
    // await console.tron.log(start_date);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema}>
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
          <strong htmlFor="student_id">ALUNO</strong>
          {/* <select name="student_id">
            {students.map(student => (
              <option id={student.id}>{student.name}</option>
            ))}
          </select> */}

          <ContainerSelect>
            <Badge onClick={handleToggleVisible}>
              <MdKeyboardArrowDown color="#eee" size={20} />
            </Badge>

            <SelectList visible={visible}>
              <Scroll>
                {students.map(student => (
                  <SelectOption
                    key={student.id}
                    onClick={() => selectStudentList(student.id)}
                  >
                    <p>{student.name}</p>
                  </SelectOption>
                ))}
              </Scroll>
            </SelectList>
          </ContainerSelect>

          <strong htmlFor="plan_id">PLANO</strong>
          <ContainerSelectPlan>
            <BadgePlan onClick={handleToggleVisiblePlan}>
              <MdKeyboardArrowDown color="#eee" size={20} />
            </BadgePlan>

            <SelectListPlan visiblePlan={visiblePlan}>
              <ScrollPlan>
                {plans.map(plan => (
                  <SelectOptionPlan
                    key={plan.id}
                    onClick={() =>
                      selectPlanList(plan.id, plan.price, plan.duration)
                    }
                  >
                    <p>{plan.title}</p>
                  </SelectOptionPlan>
                ))}
              </ScrollPlan>
            </SelectListPlan>
          </ContainerSelectPlan>
          <FieldsetInputs>
            {/*
            <FieldsetInput>

              <strong htmlFor="plan_id">PLANO</strong>
             <select name="plan_id">
                {plans.map(plan => (
                  <option id={plan.id}>{plan.title}</option>
                ))}
              </select>
            </FieldsetInput>
            */}
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
