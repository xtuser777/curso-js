import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { AlunoContainer, ProfilePicture } from './styled';
import Loading from '../../components/Loading';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const res = await axios.get('/alunos');
      setAlunos(res.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Alunos</h1>

      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img
                  src={aluno.Fotos[0].url}
                  alt={<FaUserCircle size={36} />}
                />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16} />
            </Link>

            <Link to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
