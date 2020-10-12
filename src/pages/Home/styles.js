import styled from 'styled-components';
import { Container, CircularProgress } from '@material-ui/core';
import { IconSearch } from 'tabler-icons';

export const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  width: 100%;
  height: 120px;
  background: ${({ theme }) => theme.colors.primary};
`;

export const HeaderContent = styled(Container).attrs({
  component: 'div',
  maxWidth: 'md',
})``;

export const Logo = styled.img`
  height: 31px;
`;

export const HeaderText = styled.p`
  color: white;
  font-weight: 600;
  font-size: 22px;
`;

export const ItemsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled(Container).attrs({
  component: 'main',
  maxWidth: 'md',
})``;

export const Search = styled.div`
  height: 66px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-top: -40px;
  background: white;
  border-radius: 12px;
  border: solid 1px ${({ theme }) => theme.colors.gray9};
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 90%;
  font-size: 24px;
  outline: none;
  color: ${({ theme }) => theme.colors.gray6};
  ::-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.gray6};
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray6};
  }
`;

export const SearchIcon = styled(IconSearch).attrs({
  size: 24,
  color: '#546061',
})``;

export const StoreText = styled.p`
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray1};
`;
