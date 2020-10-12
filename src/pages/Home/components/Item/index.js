import React, { memo } from 'react';

import {
  Container,
  TextContainer,
  StoreLogo,
  StoreCategory,
  StoreName,
} from './styles';

const Item = memo(() => (
  <Container>
    <StoreLogo src="https://lojanasantaifigenia.com.br/sites/default/files/styles/logotipo_empresas/public/playtech-logo.fw_.png?itok=tiW6fFmF" />

    <TextContainer>
      <StoreName>Playtech Instrumentos Musicais</StoreName>

      <StoreCategory>Música</StoreCategory>
    </TextContainer>
  </Container>
));

export default Item;
