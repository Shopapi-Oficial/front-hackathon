import React from 'react';

import GridList from '@material-ui/core/GridList';
import {
  Container,
  Header,
  StoreLogo,
  ShopapiLogo,
  SearchContainer,
  SearchButton,
  /* SearchIcon, */
  Categories,
  CategoryButton,
} from './styles';

import ProductCard from './components/ProductCard';
import logo from '../../assets/img/shopapi-logo.png';

function Store() {
  return (
    <Container>
      <Header>
        <div>
          <StoreLogo
            src="https://lojanasantaifigenia.com.br/sites/default/files/styles/logotipo_empresas/public/playtech-logo.fw_.png?itok=tiW6fFmF"
            alt="store-logo"
          />
          <p>Playtech Instrumentos Musicais</p>
        </div>
        <ShopapiLogo src={logo} alt="shopapi-logo" />
      </Header>
      <SearchContainer>
        <p>O que você quer comprar hoje?</p>
        <SearchButton>{/* <SearchIcon /> */}</SearchButton>
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
      <GridList>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </GridList>
    </Container>
  );
}

export default Store;
