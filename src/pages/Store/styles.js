import styled from 'styled-components';

import { Search } from 'tabler-icons';

export const Container = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 24px 20px 0 20px;
`;

export const Header = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  > div {
    display: flex;
    p {
      margin-left: 14px;
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.gray1};
    }
  }
`;

export const StoreLogo = styled.img`
  object-fit: cover;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.danger1};
`;

export const ShopapiLogo = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-left: 24px;
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

export const SearchButton = styled.button`
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

/* export const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;

  fill: ${props => props.theme.colors.primary};
`; */

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
  margin-right: 12px;
`;
