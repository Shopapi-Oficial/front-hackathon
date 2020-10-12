import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  min-width: 160px;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray9};
`;

export const ProductImage = styled.img`
  height: 112px;
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 12px 16px 16px 16px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.gray3};
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
`;

export const PriceDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray6};
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
`;
