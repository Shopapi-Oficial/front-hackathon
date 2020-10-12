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
  RegisterButton,
  Loader,
} from './styles';

const Login = memo(({ history }) => {
  const [data, setData] = useState({});
  const [loading, setLoding] = useState(false);
  const isLogged = localStorage.getItem('token');

  useEffect(() => {
    if (isLogged) history.push('/');
  }, [history, isLogged]);

  const handleChange = ({ target }) =>
    setData(d => ({ ...d, [target.name]: target.value }));

  const login = e => {
    e.preventDefault();
    setLoding(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(({ user }) => {
        user.getIdToken(true).then(t => {
          localStorage.setItem('token', t);
          history.push('/');
        });
      })
      .catch(() => {
        setLoding(false);
        alert(`Usuário não cadastrado`);
      });
  };

  return (
    <Content>
      <ContentView>
        <Logo src={logo} />

        <Form onSubmit={login}>
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

          <Button>{loading ? <Loader /> : 'Entrar'}</Button>

          <RegisterButton to="/register">Registre-se</RegisterButton>
        </Form>
      </ContentView>
    </Content>
  );
});

export default Login;
