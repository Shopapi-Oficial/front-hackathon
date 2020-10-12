import styled from 'styled-components';
import { Container, CircularProgress } from '@material-ui/core';
import { IconSearch } from 'tabler-icons';

export const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  width: 100%;
  height: 108px;
  background: ${({ theme }) => theme.colors.primary};
`;

export const HeaderContent = styled(Container).attrs({
  component: 'div',
  maxWidth: 'md',
})``;

export const Logo = styled.img`
  height: 31px;
`;

export const HeaderView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const HeaderText = styled.p`
  color: white;
  font-weight: 600;
  font-size: 1.1em;
`;

export const ItemsRow = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled(Container).attrs({
  component: 'main',
  maxWidth: 'md',
})``;

export const Search = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-top: -25px;
  background: white;
  border-radius: 12px;
  border: solid 1px ${({ theme }) => theme.colors.gray9};
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 95%;
  padding: 12px 0;
  font-size: 1em;
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
  font-size: 1.4em;
  color: ${({ theme }) => theme.colors.gray1};
`;

export const LoaderContent = styled.div`
  width: 100%;
  margin-top: 50%;
  display: flex;
  justify-content: center;
`;

export const Loader = styled(CircularProgress).attrs({})``;
