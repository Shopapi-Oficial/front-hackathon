import styled from 'styled-components';

export const CategoriesConteiner = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;
`;

export const Category = styled.button`
  height: 48px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 0 20px;
  outline: none;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const CategoryTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.gray3};
`;

export const CategoryIcon = styled.div``;
