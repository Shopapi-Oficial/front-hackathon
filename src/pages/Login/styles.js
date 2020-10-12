import styled from 'styled-components';
import { Container, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
  margin-bottom: 64px;
`;

export const Form = styled.form`
  max-width: 350px;
  min-width: 300px;
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.gray3};
  background: transparent;
  border: solid 1px ${({ theme }) => theme.colors.gray9};
  border-radius: 12px;
  padding: 16px 20px;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border: solid 1px ${({ theme }) => theme.colors.primary};
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  margin-top: 12px;
  color: white;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  border: 0;
  outline: none;
`;

export const RegisterButton = styled(Link)`
  width: 100%;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  display: flex;
  font-size: 16px;
  line-height: 20px;
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.gray1};
  border-radius: 10px;
  border: 0;
`;

export const Loader = styled(CircularProgress).attrs({
  size: 24,
  color: 'inherit',
})``;
