import React from 'react';

import { IconPlus, IconMinus, IconMapPin } from 'tabler-icons';
import {
  Content,
  Title,
  ProductsContainer,
  Product,
  ProductInfo,
  ProductQuantity,
  AddressContainer,
  AddressInfo,
  AddressActions,
  FlatButton,
  RaisedButton,
  Delivery,
  DeliveryPrice,
  Resume,
  ResumeRow,
  BackToStore,
  FinishButton,
} from './styles';

function Cart({ history }) {
  return (
    <Content>
      <Title>Sacola de compras</Title>
      <ProductsContainer>
        <Product>
          <img
            src="https://64.media.tumblr.com/cae5b8322d00fb94857a21c4358014d0/tumblr_o09ino1MJF1v3c36to1_1280.jpg"
            alt="product-thumb"
          />
          <ProductInfo>
            <h1>Piano Digital Roland F-120</h1>
            <p>Vendido por Playtech Instrumentos Musicais</p>
            <ProductQuantity>
              <h1>R$ 5.690,00</h1>
              <IconMinus size={20} color="#FC4C4C" />
              <p>1</p>
              <IconPlus size={20} color="#3D9426" />
            </ProductQuantity>
          </ProductInfo>
        </Product>
      </ProductsContainer>
      <AddressContainer>
        <h1>Endereço de entrega</h1>
        <AddressInfo>
          <IconMapPin size={24} color="#3D9426" />
          <p>Avenida Filadélfia 1312, Araguaína, 77816540</p>
        </AddressInfo>
        <AddressActions>
          <FlatButton>Editar</FlatButton>
          <RaisedButton>Novo endereço</RaisedButton>
        </AddressActions>
        <Delivery>
          <p>
            Seu pedido chegará entre
            <br />
            <span>20 e 22 de outubro</span>
          </p>
          <DeliveryPrice>R$ 125,50</DeliveryPrice>
        </Delivery>
      </AddressContainer>
      <Resume>
        <h1>Resumo</h1>
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
      <BackToStore onClick={() => history.push('/store')}>
        Adicionar mais itens
      </BackToStore>
      <FinishButton onClick={() => history.push('/payment')}>
        Continuar para pagamento
      </FinishButton>
    </Content>
  );
}

export default Cart;
