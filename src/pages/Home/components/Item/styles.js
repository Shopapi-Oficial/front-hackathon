import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  margin: 25px 0;
`;

export const StoreLogo = styled.img`
  height: 56px;
  border-radius: 12px;
  margin-right: 20px;
`;

export const TextContainer = styled.div``;

export const StoreName = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.gray2};
`;

export const StoreCategory = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray6};
`;
