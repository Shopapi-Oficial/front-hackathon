import React, { memo, useState } from 'react';
import firebase from 'firebase';
import { IconArrowLeft } from 'tabler-icons';

import logo from 'assets/logo.svg';

import {
  Content,
  ContentView,
  Logo,
  Form,
  Input,
  Button,
  Loader,
  BackButtom,
} from './styles';

const Register = memo(({ history }) => {
  const [data, setData] = useState({});
  const [loading, setLoding] = useState(false);

  const handleChange = ({ target }) =>
    setData(d => ({ ...d, [target.name]: target.value }));

  const register = e => {
    e.preventDefault();
    setLoding(true);

    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(res => {
        res.user
          .updateProfile({ displayName: data.name })
          .then(() => history.push('/'));
      })
      .catch(error => {
        setLoding(false);
        console.log(error);
        alert('Erro ao cadastrar tente novamente');
      });
  };

  return (
    <Content>
      <ContentView>
        <BackButtom to="/login">
          <IconArrowLeft size={30} />
        </BackButtom>

        <Logo src={logo} />

        <Form onSubmit={register}>
          <Input
            name="name"
            type="text"
            required
            placeholder="Nome"
            value={data.name || ''}
            onChange={handleChange}
          />
          <Input
            name="email"
            type="email"
            required
            placeholder="Email"
            value={data.email || ''}
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            required
            placeholder="Senha"
            value={data.password || ''}
            onChange={handleChange}
          />

          <Button>{loading ? <Loader /> : 'Cadastrar'}</Button>
        </Form>
      </ContentView>
    </Content>
  );
});

export default Register;
