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
    <StoreLogo src={data.img} />

    <TextContainer>
      <StoreName>{data.name}</StoreName>

      <StoreCategory>{data.merchant_category.name}</StoreCategory>
    </TextContainer>
  </Container>
));

export default Item;
