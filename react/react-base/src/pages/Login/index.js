import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import * as exmapleActions from '../../store/modules/example/actions';

import { Paragrafo, Title } from './styled';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(exmapleActions.clicarBotao());
  }

  return (
    <Container>
      <Title>
        Login
        <br />
        <small>Olá</small>
      </Title>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
      <Paragrafo>Lorem...</Paragrafo>
    </Container>
  );
}
