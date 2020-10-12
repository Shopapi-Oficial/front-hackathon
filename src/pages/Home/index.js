import React, { memo, useState } from 'react';

import logo from 'assets/lightLogo.svg';
import Categories from './components/Categories';
import Item from './components/Item';

import {
  Content,
  Header,
  HeaderContent,
  ItemsRow,
  Logo,
  HeaderText,
  Search,
  SearchInput,
  SearchIcon,
  StoreText,
} from './styles';

const Home = memo(() => {
  const [search, setSearch] = useState('');

  return (
    <>
      <Header>
        <HeaderContent>
          <ItemsRow>
            <Logo src={logo} />

            <HeaderText>
              Bem vindo,
              <br />
              Lucas
            </HeaderText>
          </ItemsRow>
        </HeaderContent>
      </Header>

      <Content>
        <Search>
          <SearchInput
            type="text"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
            placeholder="O que você está procurando?"
          />

          <SearchIcon />
        </Search>

        <Categories />

        <StoreText>Lojas</StoreText>

        <Item />
        <Item />
        <Item />
      </Content>
    </>
  );
});

export default Home;
