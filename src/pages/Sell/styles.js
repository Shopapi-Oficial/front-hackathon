import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Content = styled(Container).attrs({
  maxWidth: 'md',
  component: 'main',
})``;

export const Header = styled.div`
  display: flex;
  margin-top: 6vh;
  margin-bottom: 20px;
`;

export const StoreLogo = styled.img`
  object-fit: cover;
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;

export const TitleView = styled.div`
  width: 80%;
`;

export const Title = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray1};
`;

export const StoreName = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const InfoText = styled.p`
  font-size: 1em;
  margin: 3vh 0;
  color: ${({ theme }) => theme.colors.gray5};
`;

export const SaleImg = styled.img`
  width: 70%;
  max-width: 400px;
`;

export const Buttom = styled(Link)`
  margin-top: 20px;
  width: 100%;
  max-width: 900px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  border-radius: 12px;
  height: 48px;
`;
