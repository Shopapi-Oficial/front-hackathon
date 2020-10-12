import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Content = styled(Container).attrs({
  maxWidth: 'md',
  component: 'main',
})``;

export const Header = styled.div`
  height: 40px;
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  > div {
    display: flex;
    align-items: center;
    margin-right: 10px;
    p {
      margin-left: 14px;
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.gray1};
    }
  }
`;

export const SalleButtom = styled(Link)`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const SalleButtomText = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin-right: 6px;
`;

export const ShopapiLogo = styled.img`
  height: 13px;
`;

export const StoreLogo = styled.img`
  object-fit: cover;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.danger1};
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  > p {
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray1};
  }
`;

export const SearchButton = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex-shrink: 0;
  margin-left: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

export const CategoryButton = styled.button`
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.gray10};
  color: ${({ theme }) => theme.colors.gray5};
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  border-radius: 12px;
  margin: 6px;
`;
