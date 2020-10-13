import React, { memo } from 'react';

import {
  Container,
  TextContainer,
  StoreLogo,
  StoreCategory,
  StoreName,
} from './styles';

const Item = memo(({ data }) => (
  <Container to="/store">
    <StoreLogo src="https://lojanasantaifigenia.com.br/sites/default/files/styles/logotipo_empresas/public/playtech-logo.fw_.png?itok=tiW6fFmF" />

    <TextContainer>
      <StoreName>{data.name}</StoreName>

      <StoreCategory>{data.merchant_category.name}</StoreCategory>
    </TextContainer>
  </Container>
));

export default Item;
