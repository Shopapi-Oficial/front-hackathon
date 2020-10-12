import styled, { css } from 'styled-components';

import { Container } from '@material-ui/core';

export const Content = styled(Container).attrs({
  maxWidth: 'md',
  component: 'main',
})``;

export const Title = styled.div`
  margin-top: 24px;
  margin-bottom: 4px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray1};
`;

export const Description = styled.div`
  margin-bottom: 32px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray6};
`;

export const PaymentCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray9};
  border-radius: 20px;
  margin-bottom: 22px;

  ${props => {
    return props.active ? activeCard : null;
  }}
`;

export const PaymentHeader = styled.div`
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.gray10};
  cursor: pointer;

  > div {
    width: 36px;
    height: 28px;
    background-color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      margin: 4px;
      object-fit: contain;
      width: 36px;
      height: 28px;
      border-radius: 8px;
    }
  }

  > p {
    margin-left: 12px;
    color: ${({ theme }) => theme.colors.gray3};
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
  }

  ${props => (props.active ? activeHeader : null)}
`;

const activeCard = css`
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const activeHeader = css`
  background-color: ${({ theme }) => theme.colors.primary};
  > p {
    color: white;
  }
`;

export const PaymentBody = styled.div`
  padding: 24px;

  > div {
    display: flex;
    align-items: center;
  }

  > p {
    color: ${({ theme }) => theme.colors.gray4};
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    margin-right: 8px;

    > span {
      color: ${({ theme }) => theme.colors.gray3};
      font-size: 14px;
      line-height: 17px;
      font-weight: 500;
    }
  }
`;

export const FlatButton = styled.button`
  padding: 4px 8px;
  margin: 24px 0 0 -8px;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  line-height: 17px;
  font-weight: 600;
  border-radius: 10px;
`;

export const Resume = styled.div`
  margin-top: 18px;
  margin-bottom: 32px;

  > h1 {
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray1};
    margin-bottom: 16px;
  }
`;

export const ProductsContainer = styled.div`
  margin-bottom: 16px;
`;

export const Product = styled.div`
  display: flex;
  align-items: center;

  > img {
    object-fit: cover;
    width: 56px;
    height: 44px;
    border-radius: 10px;
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

export const DeliveryPrice = styled.h6`
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.warning1};
`;

export const FinishButton = styled.button`
  height: 48px;
  width: 100%;
  background-color: ${props =>
    props.disabled ? props.theme.colors.gray7 : props.theme.colors.primary};
  border-radius: 12px;
  color: white;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  margin-bottom: 40px;
`;
