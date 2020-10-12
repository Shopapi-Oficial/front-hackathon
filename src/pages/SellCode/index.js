import React from 'react';

import share from 'assets/share.svg';
import {
  Content,
  Title,
  InfoText,
  StoreName,
  SaleImg,
  Buttom,
  LinkView,
  LinkTitle,
  LinkText,
  CopyLinkButtom,
  CopyLinkIcon,
} from './styles';

function Store() {
  return (
    <Content>
      <Title>Agora é com você!</Title>

      <InfoText>
        Compartilhe seu link e, assim que alguém usar a Shopapi para comprar na
        <StoreName> Playtech Instrumentos Musicais </StoreName>
        por ele, você receberá uma comissão pela venda.
      </InfoText>

      <SaleImg src={share} />

      <LinkView>
        <LinkTitle>Seu Link</LinkTitle>
        <LinkText>
          https://www.shopapi.com.br/salecode=24689?store_id=15
        </LinkText>

        <CopyLinkButtom>
          Copiar link
          <CopyLinkIcon />
        </CopyLinkButtom>
      </LinkView>

      <Buttom>Compartilhar</Buttom>
    </Content>
  );
}

export default Store;
