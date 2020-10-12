import styled from 'styled-components';

import { Container } from '@material-ui/core';

export const Content = styled(Container).attrs({
  maxWidth: 'md',
  component: 'main',
})``;

export const Carousel = styled.div`
  overflow: auto;
  white-space: nowrap;
  margin-top: 24px;
  margin-bottom: 32px;

  > img {
    width: 282px;
    height: 184px;
    border-radius: 28px;
    margin-right: 16px;
    object-fit: cover;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray3};
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray5};
  margin-bottom: 16px;
`;

export const Price = styled.p`
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const PriceDescription = styled.p`
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray6};
  margin-bottom: 32px;
`;

export const AddressContainer = styled.div`
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray9};
  padding: 24px;
  margin-bottom: 32px;
`;

export const AddressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  > p {
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray3};
  }
`;

export const AddressInfo = styled.div`
  display: flex;
  align-items: center;

  > p {
    margin-left: 8px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray4};
  }
`;

export const PaymentsContainer = styled.div`
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray9};
  padding: 24px;
  margin-bottom: 40px;

  > h1 {
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray3};
    margin-bottom: 16px;
  }
`;

export const PaymentOption = styled.p`
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray4};
  margin-bottom: 8px;
`;

export const PaymentOptionImages = styled.div`
  display: flex;
  margin-bottom: 16px;

  > img {
    height: 16px;
    object-fit: cover;
    margin-right: 12px;
  }
`;

export const AddButton = styled.button`
  height: 48px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  color: white;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  margin-bottom: 40px;
`;
