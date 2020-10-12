import React, { useState } from 'react';

import { IconBarcode, IconChevronDown } from 'tabler-icons';
import {
  Content,
  Title,
  Description,
  PaymentCard,
  PaymentHeader,
  PaymentBody,
  FlatButton,
  Resume,
  ProductsContainer,
  Product,
  ProductInfo,
  ResumeRow,
  DeliveryPrice,
  FinishButton,
} from './styles';

import pixIcon from '../../assets/img/pix.png';
import visaIcon from '../../assets/img/visa.png';

function Payment() {
  const [activePayment, setActivePayment] = useState(0);

  return (
    <Content>
      <Title>Como você vai pagar?</Title>
      <Description>Escolha uma forma de pagamento</Description>
      <PaymentCard
        active={activePayment === 1}
        onClick={() => {
          setActivePayment(1);
        }}
      >
        <PaymentHeader active={activePayment === 1}>
          <div>
            <img src={visaIcon} alt="payment-option" />
          </div>
          <p>Cartão Visa ****2222</p>
        </PaymentHeader>
        <PaymentBody>
          <div>
            <p>
              Parcelas
              <span> 12x de R$ 474,17</span>
            </p>
            <IconChevronDown size={24} color="#3D9426" />
          </div>
          <FlatButton>Novo cartão de crédito</FlatButton>
        </PaymentBody>
      </PaymentCard>
      <PaymentCard
        active={activePayment === 2}
        onClick={() => {
          setActivePayment(2);
        }}
      >
        <PaymentHeader active={activePayment === 2}>
          <div>
            <img src={pixIcon} alt="payment-option" />
          </div>
          <p>Pix (Débito)</p>
        </PaymentHeader>
      </PaymentCard>
      <PaymentCard
        active={activePayment === 3}
        onClick={() => {
          setActivePayment(3);
        }}
      >
        <PaymentHeader active={activePayment === 3}>
          <div>
            <IconBarcode size={20} color="#212829" />
          </div>
          <p>Boleto</p>
        </PaymentHeader>
      </PaymentCard>
      <Resume>
        <h1>Resumo</h1>
        <ProductsContainer>
          <Product>
            <img
              src="https://64.media.tumblr.com/cae5b8322d00fb94857a21c4358014d0/tumblr_o09ino1MJF1v3c36to1_1280.jpg"
              alt="product-thumb"
            />
            <ProductInfo>
              <h1>Piano Digital Roland F-120</h1>
              <p>Vendido por Playtech Instrumentos Musicais</p>
            </ProductInfo>
          </Product>
        </ProductsContainer>
        <ResumeRow>
          <p>1 item</p>
          <h2>R$ 5.690,00</h2>
        </ResumeRow>
        <ResumeRow>
          <p>Entrega</p>
          <DeliveryPrice>R$ 125,50</DeliveryPrice>
        </ResumeRow>
        <ResumeRow>
          <p>Total</p>
          <h1>R$ 5.815,50</h1>
        </ResumeRow>
      </Resume>
      <FinishButton disabled={activePayment === 0}>Fazer pedido</FinishButton>
    </Content>
  );
}

export default Payment;
