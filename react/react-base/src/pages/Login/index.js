import React from 'react';
import { Container } from '../../styles/GlobalStyles';

import { Paragrafo, Title } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <br />
        <small>Olá</small>
      </Title>
      <button type="submit">Enviar</button>
      <Paragrafo>Lorem...</Paragrafo>
    </Container>
  );
}
