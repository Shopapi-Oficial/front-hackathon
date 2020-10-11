import styled from 'styled-components';
import { Container, CircularProgress } from '@material-ui/core';

export const Content = styled(Container).attrs({
  component: 'main',
  marWidth: 'md',
})``;

export const ContentView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const Logo = styled.img`
  width: 185px;
  margin-bottom: 40px;
`;

export const Form = styled.form`
  max-width: 350px;
  min-width: 300px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 1.3em;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.gray1};
  background: ${({ theme }) => theme.colors.secundary};
  border: solid 1px ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  margin-top: 15px;
  color: white;
  background: ${({ theme }) => theme.colors.gray1};
  border-radius: 10px;
  border: 0;
`;

export const RegisterButton = styled.button`
  width: 100%;
  height: 40px;
  font-size: 1.3em;
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.gray1};
  border-radius: 10px;
  border: 0;
`;

export const Loader = styled(CircularProgress).attrs({
  size: 26,
  color: 'inherit',
})``;
