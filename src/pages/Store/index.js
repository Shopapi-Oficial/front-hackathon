import React from 'react';

import Grid from '@material-ui/core/Grid';
import { IconSearch } from 'tabler-icons';
import { Link } from 'react-router-dom';

import logo from 'assets/whiteLogo.svg';
import {
  Content,
  Header,
  SalleButtom,
  SalleButtomText,
  StoreLogo,
  ShopapiLogo,
  SearchContainer,
  SearchButton,
  Categories,
  CategoryButton,
} from './styles';

import ProductCard from './components/ProductCard';

function Store() {
  return (
    <Content>
      <Header>
        <div>
          <StoreLogo
            src="https://lojanasantaifigenia.com.br/sites/default/files/styles/logotipo_empresas/public/playtech-logo.fw_.png?itok=tiW6fFmF"
            alt="store-logo"
          />
          <p>Playtech Instrumentos Musicais</p>
        </div>

        <SalleButtom to="/sell">
          <SalleButtomText>Vender</SalleButtomText>
          <ShopapiLogo src={logo} alt="shopapi-logo" />
        </SalleButtom>
      </Header>

      <SearchContainer>
        <p>O que você quer comprar hoje?</p>
        <SearchButton>
          <IconSearch size={24} color="#3D9426" />
        </SearchButton>
      </SearchContainer>

      <Categories>
        <CategoryButton>Guitarras</CategoryButton>
        <CategoryButton>Baixos</CategoryButton>
        <CategoryButton>Cordas</CategoryButton>
        <CategoryButton>Amps</CategoryButton>
        <CategoryButton>Efeitos</CategoryButton>
        <CategoryButton>Áudio</CategoryButton>
        <CategoryButton>Teclas</CategoryButton>
      </Categories>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(value => (
            <Grid key={value} xs={6} item>
              <Link to="/product">
                <ProductCard />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Content>
  );
}

export default Store;
