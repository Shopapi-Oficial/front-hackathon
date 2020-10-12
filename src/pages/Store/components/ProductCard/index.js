import React from 'react';

import {
  Container,
  ProductImage,
  ProductInfo,
  Title,
  Price,
  PriceDescription,
} from './styles';

function ProductCard() {
  return (
    <Container>
      <ProductImage
        src="https://64.media.tumblr.com/cae5b8322d00fb94857a21c4358014d0/tumblr_o09ino1MJF1v3c36to1_1280.jpg"
        alt="procuct-image"
      />
      <ProductInfo>
        <Title>Guitarra Fender Stratocaster HSS</Title>
        <div>
          <Price>R$ 6.700,00</Price>
          <PriceDescription>12x de R$ 558,33</PriceDescription>
        </div>
      </ProductInfo>
    </Container>
  );
}

export default ProductCard;
