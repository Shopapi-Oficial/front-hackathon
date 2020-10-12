import styled from 'styled-components';

import { Container } from '@material-ui/core';

export const Content = styled(Container).attrs({
  maxWidth: 'md',
  component: 'main',
})``;

export const Title = styled.h1`
  margin-top: 24px;
  margin-bottom: 32px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray1};
`;

export const ProductsContainer = styled.div`
  margin-bottom: 32px;
`;

export const Product = styled.div`
  display: flex;
  align-items: center;

  > img {
    object-fit: cover;
    width: 80px;
    height: 64px;
    border-radius: 14px;
    margin-right: 16px;
  }
`;

export const ProductInfo = styled.div`
  > h1 {
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray3};
  }
  > p {
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray6};
  }
`;

export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;

  > h1 {
    font-size: 14px;
    line-height: 17px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 16px;
  }

  > p {
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray5};
    margin: 0 16px;
  }
`;

export const AddressContainer = styled.div`
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray9};
  padding: 24px;
  margin-bottom: 32px;

  > h1 {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray3};
    margin-bottom: 16px;
  }
`;

export const AddressInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  > p {
    margin-left: 8px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray4};
  }
`;

export const AddressActions = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

export const FlatButton = styled.button`
  flex-grow: 1;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  line-height: 17px;
  font-weight: 600;
  height: 40px;
  border-radius: 10px;
`;

export const RaisedButton = styled.button`
  flex-grow: 1;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  line-height: 17px;
  font-weight: 600;
  height: 40px;
  margin-left: 16px;
  border-radius: 10px;
`;

export const Delivery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray6};

    > span {
      font-size: 14px;
      line-height: 17px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.gray4};
    }
  }
`;

export const DeliveryPrice = styled.h6`
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.warning1};
`;

export const Resume = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;

  > h1 {
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray1};
    margin-bottom: 16px;
  }
`;

export const ResumeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  > p {
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray6};
  }

  > h1 {
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray3};
  }

  > h2 {
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray5};
  }
`;

export const BackToStore = styled.button`
  height: 48px;
  width: 100%;
  background-color: transparent;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const FinishButton = styled.button`
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
