import React, { memo, useEffect, useState } from 'react';
import firebase from 'firebase';

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
  const [userName, setUserName] = useState('');

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => setUserName(user.displayName));
  }, []);

  const renderHeaderText = () =>
    userName ? (
      <HeaderText>
        Bem vindo,
        <br />
        {userName}
      </HeaderText>
    ) : null;

  return (
    <>
      <Header>
        <HeaderContent>
          <ItemsRow>
            <Logo src={logo} />

            {renderHeaderText()}
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
