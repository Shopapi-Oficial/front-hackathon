import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { IconCopy } from 'tabler-icons';

export const Content = styled(Container).attrs({
  maxWidth: 'md',
  component: 'main',
})`
  height: auto;
  max-height: 150%;
  overflow: auto;
`;

export const Title = styled.p`
  font-size: 1.5em;
  margin-top: 10vh;
  margin-bottom: 3vh;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray1};
`;

export const StoreName = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const InfoText = styled.p`
  font-size: 1em;
  margin-bottom: 3vh;
  color: ${({ theme }) => theme.colors.gray5};
`;

export const SaleImg = styled.img`
  width: 70%;
  max-width: 400px;
`;

export const Buttom = styled.button`
  width: 90%;
  max-width: 900px;
  height: 48px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 600;
  font-size: 16px;
  border-radius: 12px;
  position: absolute;
  bottom: 6vh;
  transform: translateX(-50%);
  left: 50%;
`;

export const LinkView = styled.div`
  width: 100%;
  padding: 20px;
  margin-top: 9vh;
`;

export const LinkTitle = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 1.5vh;
  color: ${({ theme }) => theme.colors.gray1};
`;

export const LinkText = styled.p`
  font-size: 16px;
  margin-bottom: 1.5vh;
  color: ${({ theme }) => theme.colors.gray4};
`;

export const CopyLinkButtom = styled.button`
  background: white;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CopyLinkIcon = styled(IconCopy).attrs({
  color: '#3D9426',
  size: 24,
})`
  margin-left: 8px;
`;
