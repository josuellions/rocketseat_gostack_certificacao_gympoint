import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';
/* import Notifications from '~/components/Notifications'; */

import logo from '~/assets/logo_gympoint.png';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.admin);

  function handleSubmit() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Logo Gympoint" />
          <Link to="/student/list">ALUNOS</Link>
          <Link to="/plan/list">PLANOS</Link>
          <Link to="/registration/list">MATRÍCULAS</Link>
          <Link to="/helporder/list">PEDIDO DE AUXÍLIO</Link>
        </nav>

        <aside>
          {/* <Notifications />  */}
          <Profile>
            <div>
              <strong>{user.name}</strong>
              <Link to="/profile"> Meu perfil</Link>
            </div>
            <button type="button" onClick={handleSubmit}>
              Sair
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
