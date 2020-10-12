import React, { memo, useState, useEffect } from 'react';
import firebase from 'firebase';

import logo from 'assets/logo.svg';

import {
  Content,
  ContentView,
  Logo,
  Form,
  Input,
  Button,
  Loader,
} from './styles';

const Register = memo(({ history }) => {
  const [data, setData] = useState({});
  const [loading, setLoding] = useState(false);
  const isLogged = localStorage.getItem('token');

  useEffect(() => {
    if (isLogged) history.push('/');
  }, [history, isLogged]);

  const handleChange = ({ target }) =>
    setData(d => ({ ...d, [target.name]: target.value }));

  const register = e => {
    e.preventDefault();
    setLoding(true);

    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(async ({ user }) => {
        const token = await user.getIdToken(true);

        user.updateProfile({ displayName: data.name }).then(() => {
          localStorage.setItem('token', token);
          history.push('/');
        });
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
