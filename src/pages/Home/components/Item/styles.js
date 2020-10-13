import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  margin: 20px 0;
  text-decoration: none;
`;

export const StoreLogo = styled.img`
  height: 56px;
  width: 72px;
  border-radius: 12px;
  margin-right: 10px;
  object-fit: cover;
`;

export const TextContainer = styled.div``;

export const StoreName = styled.p`
  font-size: 1em;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.gray2};
`;

export const StoreCategory = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray6};
`;
