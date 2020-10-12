import React from 'react';

import { IconMapPin, IconChevronRight, IconBarcode } from 'tabler-icons';
import amexIcon from '../../assets/img/amex.png';
import dinersClubIcon from '../../assets/img/dinersclub.png';
import eloIcon from '../../assets/img/elo.png';
import hipercardIcon from '../../assets/img/hipercard.png';
import mastercardIcon from '../../assets/img/mastercard.png';
import pixIcon from '../../assets/img/pix.png';
import visaIcon from '../../assets/img/visa.png';

import {
  Content,
  Carousel,
  Title,
  Description,
  Price,
  PriceDescription,
  AddressContainer,
  AddressHeader,
  AddressInfo,
  PaymentsContainer,
  PaymentOption,
  PaymentOptionImages,
  AddButton,
} from './styles';

function Product({ history }) {
  return (
    <Content>
      <Carousel>
        <img
          src="https://64.media.tumblr.com/cae5b8322d00fb94857a21c4358014d0/tumblr_o09ino1MJF1v3c36to1_1280.jpg"
          alt="product-thumb"
        />
        <img
          src="https://64.media.tumblr.com/cae5b8322d00fb94857a21c4358014d0/tumblr_o09ino1MJF1v3c36to1_1280.jpg"
          alt="product-thumb"
        />
        <img
          src="https://64.media.tumblr.com/cae5b8322d00fb94857a21c4358014d0/tumblr_o09ino1MJF1v3c36to1_1280.jpg"
          alt="product-thumb"
        />
        <img
          src="https://64.media.tumblr.com/cae5b8322d00fb94857a21c4358014d0/tumblr_o09ino1MJF1v3c36to1_1280.jpg"
          alt="product-thumb"
        />
      </Carousel>
      <Title>Piano Digital Roland F-120</Title>
      <Description>
        O F-120 é a escolha ideal para amantes de piano que procuram
        autenticidade de som e toque ocupando pouco espaço, com um gabinete
        contemporâneo...
      </Description>
      <Price>R$ 10.200,00</Price>
      <PriceDescription>12x de R$ 850,00</PriceDescription>
      <AddressContainer>
        <AddressHeader>
          <p>Endereço de entrega</p>
          <IconChevronRight size={24} color="#687475" />
        </AddressHeader>
        <AddressInfo>
          <IconMapPin size={24} color="#3D9426" />
          <p>Avenida Filadélfia 1312, Araguaína, 77816540</p>
        </AddressInfo>
      </AddressContainer>
      <PaymentsContainer>
        <h1>Formas de pagamento</h1>
        <PaymentOption>Cartão de crédito</PaymentOption>
        <PaymentOptionImages>
          <img src={visaIcon} alt="payment-option" />
          <img src={mastercardIcon} alt="payment-option" />
          <img src={eloIcon} alt="payment-option" />
          <img src={dinersClubIcon} alt="payment-option" />
          <img src={amexIcon} alt="payment-option" />
          <img src={hipercardIcon} alt="payment-option" />
        </PaymentOptionImages>
        <PaymentOption>Pix (Débito)</PaymentOption>
        <PaymentOptionImages>
          <img src={pixIcon} alt="payment-option" />
        </PaymentOptionImages>
        <PaymentOption>Boleto</PaymentOption>
        <PaymentOptionImages>
          <IconBarcode size={24} color="#212829" />
        </PaymentOptionImages>
      </PaymentsContainer>
      <AddButton onClick={() => history.push('/cart')}>
        Adicionar à sacola
      </AddButton>
    </Content>
  );
}

export default Product;
