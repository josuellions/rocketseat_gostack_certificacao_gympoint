import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '~/store/modules/auth/actions';
// import { Link } from 'react-router-dom';
// import { Container } from './styles';

import logo from '~/assets/logo_gympoint_157x90.png';

/* Schemas Validation dados entrada */
const schema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um email válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve conter no mínimo 6 caracteres')
    .required('Digite senha correta'),
});

export default function SingIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Logo Gympoint" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <strong htmlFor="email">SEU E-MAIL</strong>
        <Input
          type="email"
          name="email"
          placeholder="seuemail@dominio.com.br"
          value="admin@gympoint.com"
        />
        <strong htmlFor="password">SUA SENHA</strong>
        <Input
          type="password"
          name="password"
          placeholder="Digite sua senha"
          value="123456"
        />
        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no Sistema'}
        </button>
      </Form>
    </>
  );
}
