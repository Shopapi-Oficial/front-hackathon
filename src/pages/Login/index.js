import React, { memo, useState, useEffect } from 'react';
import firebase from 'firebase';
import { useToasts } from 'react-toast-notifications';

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

const Login = memo(({ history, content }) => {
  const [data, setData] = useState({});
  const [loading, setLoding] = useState(false);
  const isLogged = localStorage.getItem('token');

  const { addToast } = useToasts();

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
      .catch(({ code }) => {
        let msg = 'Error ao logar';

        switch (code) {
          case 'auth/invalid-email':
            msg = 'Email inválido.';
            break;
          case 'auth/user-not-found':
            msg = 'Endereço de email não cadastrado.';
            break;
          case 'auth/wrong-password':
            msg = 'Senha incorreta.';
            break;
          case 'auth/network-request-failed':
            msg = 'Erro de conexão com o servidor.';
            break;
          default:
            break;
        }

        addToast(msg, {
          appearance: 'error',
          autoDismiss: true,
        });
        setLoding(false);
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
            placeholder="E-mail"
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

          <RegisterButton to="/register">Ou crie uma conta</RegisterButton>
        </Form>
      </ContentView>
    </Content>
  );
});

export default Login;
