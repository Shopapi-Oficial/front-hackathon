import styled from 'styled-components';

export const CategoriesConteiner = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
`;

export const Category = styled.button`
  height: 35px;
  margin: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 0 10px;
  outline: none;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const CategoryTitle = styled.p`
  font-size: 1.1em;
  font-weight: 500;
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.gray3};
`;

export const CategoryIcon = styled.div``;
