import { get } from 'lodash';
import React, { useEffect, useState } from 'react';
import { isEmail, isInt, isFloat } from 'validator';
import PropTypes from 'prop-types';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Aluno({ match }) {
  const id = get(match, 'params.id', 0);

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = get(data, 'Fotos[0].uri', '');

        setNome(data.nome);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) errors.map((error) => alert(error));
        history.push('/');
      }
    }

    getData();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formError = false;

    if (nome.length < 3 || nome.length > 255) {
      formError = true;
      alert('Nome deve conter entre 3 e 255 caracteres.');
    }

    if (sobrenome.length < 3 || sobrenome.length > 255) {
      formError = true;
      alert('Sobrenome deve conter entre 3 e 255 caracteres.');
    }

    if (!isEmail(email)) {
      formError = true;
      alert('E-mail inválido.');
    }

    if (!isInt(String(idade))) {
      formError = true;
      alert('Idade inválida.');
    }

    if (!isFloat(String(peso))) {
      formError = true;
      alert('Peso inválido.');
    }

    if (!isFloat(String(altura))) {
      formError = true;
      alert('Altura inválida.');
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>{id ? 'Editar Aluno' : 'Novo Aluno'}</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          placeholder="Sobrenome"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          placeholder="Idade"
        />
        <input
          type="text"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Peso"
        />
        <input
          type="text"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Altura"
        />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
