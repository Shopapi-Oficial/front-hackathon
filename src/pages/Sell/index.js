import React from 'react';

import sale from 'assets/sale.svg';
import {
  Content,
  Header,
  StoreLogo,
  TitleView,
  Title,
  StoreName,
  InfoText,
  SaleImg,
  Buttom,
} from './styles';

function Store() {
  return (
    <Content>
      <Header>
        <StoreLogo
          src="https://lojanasantaifigenia.com.br/sites/default/files/styles/logotipo_empresas/public/playtech-logo.fw_.png?itok=tiW6fFmF"
          alt="store-logo"
        />
      </Header>

      <TitleView>
        <Title>
          Torne-se um vendedor da
          <StoreName> Playtech Instrumentos Musicais</StoreName>
        </Title>
      </TitleView>

      <InfoText>
        Você ajuda o negócio a alavancar suas vendas e ainda recebe uma comissão
        por cada compra feita usando o seu link.
      </InfoText>

      <SaleImg src={sale} />

      <Buttom to="/code">Quero Vender</Buttom>
    </Content>
  );
}

export default Store;
